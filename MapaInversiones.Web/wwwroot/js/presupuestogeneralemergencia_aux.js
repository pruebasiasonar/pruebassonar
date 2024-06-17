var objPresupuestoGeneralPerAnio = JSON.parse(document.body.getAttribute('data-presupuestoGeneralPerAnio'));
var objPresupuestoEjecutadoPorEmergencias = JSON.parse(document.body.getAttribute('data-presupuestoEjecutadoPorEmergencias'));
/*var objRecursosPorOrganismoFinanciador = JSON.parse(document.body.getAttribute('data-recursosPorOrganismoFinanciador'));*/

var cantXPagina = 10;
var findata = 0;
var inidata = 0;
var paginaActual = 1;
var presupuestoEjecutado = 0;
inicializaDatos();

function anioChanged() {
    //console.log("Evento onChange anio", $("#filtro_anio_pres_general").val());
    obtenerPresupuestoGeneralPerAnio($("#filtro_anio_pres_general").val());
    obtenerPresupuestoEjecutadoPorEmergencia($("#filtro_anio_pres_general").val());
    obtenerPresupuestoAsignadoPorEntidadYAnio($("#filtro_anio_pres_general").val());
}
function inicializaDatos() {
    //configurarSelectTabInstituciones();
    anioChanged();
    //obtenerPresupuestoGeneralPerAnio($("#filtro_anio_pres_general").val());
    //obtenerPresupuestoEjecutadoPorEmergencia($("#filtro_anio_pres_general").val());
    obtenerGraficoSankey();
}
function loadData(cb, datos) {
    cb(datos)
}
function graphSankey(contenedor, datos) {
    var height_aux = 0;
    var width_aux = 1100;
    var units = "millones";
    var cant_elementos = 10;
    let isMobile = window.matchMedia("only screen and (max-width: 765px)").matches;
    if ($(window).innerWidth() <= width_aux || isMobile) {
        width_aux = 1100;
    } else {
        width_aux = $(".container").innerWidth();
    }
    var margin = { top: 10, right: 10, bottom: 10, left: 10 },
        width = width_aux - 20 - margin.left - margin.right,
        height = ((cant_elementos) * 50) - margin.top - margin.bottom;
    var format = function (d) {
        return "RD $ " + (d).formatMoney(0, '.', ',') + " " + units;
    },
        color = d3.scale.category20();

    // append the svg canvas to the page
    var svg = d3.select("#" + contenedor).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
    // Set the sankey diagram properties
    var sankey = d3.sankey()
        .nodeWidth(30)
        .nodePadding(20)
        .size([width, height]);
    var path = sankey.link();
    loadData(function (graph) {

        // contents of the function passed to d3.json
        var nodeMap = {};
        graph.nodes.forEach(function (x) { nodeMap[x.name] = x; });
        graph.links = graph.links.map(function (x) {
            return {
                source: nodeMap[x.source],
                target: nodeMap[x.target],
                value: x.value
            };
        });

        sankey
            .nodes(graph.nodes)
            .links(graph.links)
            .layout(32);

        // add in the links
        var link = svg.append("g").selectAll(".link")
            .data(graph.links)
            .enter().append("path")
            .attr("class", "link")
            .attr("d", path)
            .style("stroke-width", function (d) {
                return Math.max(1, d.dy);
                //return 10;
            })
            .sort(function (a, b) { return b.dy - a.dy; });

        // add the link titles
        link.append("title")
            .text(function (d) {
                var destino_aux = d.target.name;
                var origen_aux = d.source.name;
                var vec_destino = d.target.name.split("_");
                var vec_origen = d.source.name.split("_");
                if (vec_destino.length > 0) {
                    destino_aux = vec_destino[1];
                }
                if (vec_origen.length > 0) {
                    origen_aux = vec_origen[1];
                }

                return origen_aux + " → " +
                    destino_aux + "\n" + format(d.value);
            });

        // add in the nodes
        var node = svg.append("g").selectAll(".node")
            .data(graph.nodes)
            .enter().append("g")
            .attr("class", "node")
            .attr("transform", function (d) {
                return "translate(" + d.x + "," + d.y + ")";
            })
            .call(d3.behavior.drag()
                .origin(function (d) { return d; })
                .on("dragstart", function () {
                    this.parentNode.appendChild(this);
                })
                .on("drag", dragmove));

        // add the rectangles for the nodes
        node.append("rect")
            .attr("height", function (d) { return d.dy; })
            .attr("width", sankey.nodeWidth())
            .style("fill", function (d) {
                return d.color = color(d.name.replace(/ .*/, ""));
            })
            .style("stroke", function (d) {
                return d3.rgb(d.color).darker(2);

            })
            .append("title")
            .text(function (d) {
                var nombre = d.name;
                var vec_aux = nombre.split("_");
                if (vec_aux.length > 0) {
                    nombre = vec_aux[1];
                }
                return nombre + "\n" + format(d.value);
            });

        // add in the title for the nodes
        node.append("text")
            .attr("x", -6)
            .attr("y", function (d) { return d.dy / 2; })
            .attr("dy", ".2em")
            .style("font-size", "10px")
            .attr("text-anchor", "end")
            .attr("transform", null)
            .text(function (d) {
                var nombre = d.name;
                var vec_aux = nombre.split("_");
                if (vec_aux.length > 0) {
                    nombre = vec_aux[1];
                }

                return nombre;
            })
            .filter(function (d) { return d.x < width / 2; })
            .attr("x", 6 + sankey.nodeWidth())
            .attr("text-anchor", "start");

        // the function for moving the nodes
        function dragmove(d) {
            d3.select(this).attr("transform",
                "translate(" + (
                    d.x = Math.max(0, Math.min(width - d.dx, d3.event.x))
                ) + "," + (
                    d.y = Math.max(0, Math.min(height - d.dy, d3.event.y))
                ) + ")");
            sankey.relayout();
            link.attr("d", path);
        }
    }, datos);
}


//function graphSankey(datos) {
//    $("#btnAtras").hide();
//    $(".wrap_sankey").show();
//    var units = "millones";

//    var sizeAux = recalcularSize(datos);
//    var margin = sizeAux.margin;
//    var width = sizeAux.width;
//    var height = sizeAux.height;

//    var format = function (d) {
//        return "RD $ " + formatMoney(d, 2, '.', ',') + " " + units;
//    },
//        color = d3.scale.category20();

//    // append the svg canvas to the page
//    var svg = d3.select("#sankey_basic").append("svg")
//        .attr("width", width + margin.left + margin.right)
//        .attr("height", height + margin.top + margin.bottom)
//        .append("g")
//        .attr("transform",
//            "translate(" + margin.left + "," + margin.top + ")");

//    draw(datos);

//    // Set the sankey diagram properties
//    function draw(obj_info) {
//        var link = svg.append("g");
//        var nodes = svg.append("g");
//        var path;
//        var sizeAux = recalcularSize(obj_info);
//        var margin = sizeAux.margin;
//        var width = sizeAux.width;
//        var height = sizeAux.height;

//        var sankey = d3.sankey()
//            .nodeWidth(30)
//            .nodePadding(25)
//            .size([width, height]);

//        path = sankey.link();
//        var graph = obj_info;
//        var nodeMap = {};
//        graph.nodes.forEach(function (x) {
//            nodeMap[x.name] = x;
//        });
//        graph.links = graph.links.map(function (x) {
//            return {
//                source: nodeMap[x.source],
//                target: nodeMap[x.target],
//                value: x.value
//            }
//        });

//        sankey
//            .nodes(graph.nodes)
//            .links(graph.links)
//            .layout(32);

//        sankey.relayout();

//        // add in the links
//        link.selectAll(".link")
//            .data(graph.links)
//            .enter().append("path")
//            .attr("class", "link")
//            .transition().duration(750)
//            .attr("d", path)
//            .style("stroke-width", function (d) {
//                return Math.max(1, d.dy);
//            })
//        //.sort(function (a, b) { return b.dy - a.dy; });

//        // add the link titles
//        link.selectAll(".link").append("title")
//            .text(function (d) {
//                var vec_origen = d.source.name.split("|");
//                var vec_destino = d.target.name.split("|");
//                var origen = d.source.name;
//                var destino = d.target.name;
//                if (vec_origen.length > 0) {
//                    origen = vec_origen[1];
//                }
//                if (vec_destino.length > 0) {
//                    destino = vec_destino[1];
//                }
//                var cadena_aux = origen + " --> " + destino + "\n" + format(d.value);


//                return cadena_aux;

//            });
//        sankey.relayout();



//        // add in the nodes
//        var node = nodes.selectAll(".node")
//            .data(graph.nodes)
//            .enter().append("g")
//            .attr("class", "node")
//            .attr("transform", function (d) {
//                return "translate(" + d.x + "," + d.y + ")";
//            })
//            .on("click", function (d) {
//                var prueba = d;
//                if (d3.event.defaultPrevented) return;
//                var selection = d.name;
//                var vecSelect = d.name.split("|");
//                var vec_Origen = d.targetLinks;

//                if (vecSelect[0] == "n1") {
//                    var filteredData = $.grep(global_sankey.links, function (element) {
//                        return element.source === selection;
//                    });
//                    if (filteredData.length > 0) {
//                        update(d);
//                    }


//                } else if (vecSelect[0] == "n3") {
//                    if (global_tab == "organismo") {
//                        //proyectos de inversion--navega hacia el perfil de proy
//                        var idProy = d.id;

//                        if (idProy != undefined) {
//                            if (idProy != "") {
//                                var vecProy = idProy.split("*");
//                                if (vecProy.length > 1) {
//                                    var idProyBuscador = idProy.replace(/\*/g, ',');
//                                    var enlace_url = "../../BusquedaResultados?Id=" + idProyBuscador;
//                                    window.open(enlace_url, "_blank");
//                                } else {
//                                    var enlace_url = "../../perfilProyecto/" + idProy;
//                                    window.open(enlace_url, "_blank");
//                                }
//                            }
//                        }
//                    } else {
//                        var filteredData = $.grep(global_sankey.links, function (element) {
//                            return element.source === selection;
//                        });
//                        if (filteredData.length > 0) {
//                            update(d);
//                        }
//                    }


//                } else if (vecSelect[0] == "n4") {
//                    if (global_tab == "sector") {
//                        //proyectos de inversion--navega hacia el perfil
//                        var idProy = d.id;
//                        if (idProy != undefined) {
//                            if (idProy != "") {
//                                var vecProy = idProy.split("*");
//                                if (vecProy.length > 1) {
//                                    var idProyBuscador = idProy.replace(/\*/g, ',');
//                                    var enlace_url = "../../BusquedaResultados?Id=" + idProyBuscador;
//                                    window.open(enlace_url, "_blank");
//                                } else {
//                                    var enlace_url = "../../perfilProyecto/" + idProy;
//                                    window.open(enlace_url, "_blank");
//                                }
//                            }
//                        }
//                    } else {
//                        var idProy = d.id;

//                        var filteredData = $.grep(global_sankey.links, function (element) {
//                            return element.source === selection;
//                        });
//                        if (filteredData.length > 0) {
//                            update(d);
//                        }
//                    }

//                } else {

//                    var filteredData = $.grep(global_sankey.links, function (element) {
//                        return element.source === selection;
//                    });
//                    if (filteredData.length > 0) {
//                        update(d);
//                    }
//                }
//            })
//        //.call(d3.behavior.drag()
//        //    .origin(function (d) { return d; })
//        //    .on("drag", dragmove)
//        //)

//        // add the rectangles for the nodes
//        node.append("rect")
//            .attr("height", function (d) {

//                if (d.dy < 3) {
//                    return 3;
//                } else {
//                    return d.dy;
//                }
//            })
//            .attr("width", function (d) {
//                return sankey.nodeWidth();
//            })
//            .style("fill", function (d) {
//                return d.color = color(d.name.replace(/ .*/, ""));
//            })
//            .style("stroke", function (d) {
//                return d3.rgb(d.color).darker(2);

//            })
//            .append("title")
//            .text(function (d) {
//                vec_nodo = d.name.split("|");
//                var texto_nodo = d.name;
//                if (vec_nodo.length > 0) {
//                    texto_nodo = vec_nodo[1];
//                }
//                return texto_nodo + "\n" + format(d.value);


//            });

//        // add in the title for the nodes
//        node.append("text")
//            .attr("x", -6)
//            .attr("y", function (d) { return d.dy / 2; })
//            .attr("dy", ".2em")
//            .style("font-size", "10px")
//            .attr("text-anchor", "end")
//            .attr("transform", null)
//            .html(function (d) {
//                var x = d3.select(this).attr("x");
//                var y = d3.select(this).attr("dy");
//                var longitud = 60;
//                vec_nodo = d.name.split("|");
//                var texto_nodo = d.name;
//                if (vec_nodo.length > 0) {
//                    var cad_aux = vec_nodo[1];
//                    var tipo = vec_nodo[0];
//                    var new_cad = "";
//                    if (cad_aux.length > longitud) {
//                        new_cad = cad_aux.substring(0, longitud) + "...";
//                        //var regex = new RegExp('.{1,40}', 'g');
//                        //var subStrings = cad_aux.match(regex);
//                        //subStrings.forEach(function (item) {
//                        //    //new_cad += item + "< /br>";
//                        //    new_cad += "<tspan>" + item + "</tspan>"
//                        //});
//                    } else {
//                        new_cad = cad_aux;
//                    }

//                }
//                var t = "<tspan>" + new_cad + "</tspan>";
//                return new_cad;

//            })
//            .filter(function (d) { return d.x < width / 4; })
//            .attr("x", 6 + sankey.nodeWidth())
//            .attr("text-anchor", "start");

//        //node.transition().duration(1750);
//        sankey.relayout();


//    }

//    // the function for moving the nodes
//    function dragmove(d) {
//        d3.select(this).attr("transform",
//            "translate(" + (
//                d.x = Math.max(0, Math.min(width - d.dx, d3.event.x))
//            ) + "," + (
//                d.y = Math.max(0, Math.min(height - d.dy, d3.event.y))
//            ) + ")");
//        sankey.relayout();
//        link.attr("d", path);
//    }

//    function obtenerHijosYnietosConMismaRama(source, data, nivel) {
//        var resultado = [];

//        // Función recursiva para obtener los hijos y nietos del nodo source
//        function obtenerHijosYnietosRecursivo(nodo) {
//            var hijos = data.filter(function (item) {
//                var vecOrigen = item.source.split("|");
//                if (vecOrigen.length > 0) {
//                    if (vecOrigen[0] != "n1") {
//                        return item.source === nodo.target && item.rama === source; // Filtrar por mismo valor de rama
//                    } else {
//                        return item.source === nodo.target
//                    }
//                }


//            });

//            hijos.forEach(function (hijo) {
//                // Agregar el hijo actual al resultado
//                resultado.push(hijo);
//                if (!hijo.target.startsWith(nivel)) {
//                    // Llamar recursivamente para obtener los nietos del hijo actual
//                    obtenerHijosYnietosRecursivo(hijo);
//                }

//            });
//        }

//        // Buscar los hijos y nietos del nodo source
//        obtenerHijosYnietosRecursivo({ target: source, rama: source.rama }); // Pasar el valor de rama del nodo inicial

//        return resultado;
//    }



//    function obtenerHijosYnietos(source, data, nivel) {
//        var filtrados = data.filter(function (item) {
//            return item.source === source;
//        });

//        var resultado = [];
//        filtrados.forEach(function (filtrado) {
//            resultado.push(filtrado);
//            if (!filtrado.target.startsWith(nivel)) {
//                resultado = resultado.concat(obtenerHijosYnietos(filtrado.target, data, nivel));
//            }
//        });

//        return resultado;
//    }




//    function update(d) {
//        //miga_pan = "";
//        var numAgrupador = 5;
//        var cantElemAdd = 0;

//        var flagAgrupador = false;
//        var flagAgrupador_n3 = false;
//        var flagAgrupador_n4 = false;
//        var valAgrupador = 0;
//        var valAgrupador_n3 = 0;
//        var valAgrupador_n4 = 0;

//        var selection = d.name;
//        var vecSelect = selection.split("|");

//        var cant_padres = d.targetLinks.length;
//        var cant_hijos = d.sourceLinks.length;
//        var cant = global_ini.cant_nodos;
//        var cant_aux = 0;
//        var opcion = 3;
//        //------------------------------------------------
//        var obj_otros_n3_aux = { "links": [], "nodes": [] };
//        var obj_otros_n4_aux = { "links": [], "nodes": [] };
//        var porc_agrupamiento = 0;
//        var etiqueta_nivel_agrupado = "OTROS";
//        if (global_tab == "sector") {
//            porc_agrupamiento = porc_agrup_sectores;
//            etiqueta_nivel_agrupado = etiqueta_nivel_3_sectores;
//        } else {
//            porc_agrupamiento = porc_agrup_organismos;
//            etiqueta_nivel_agrupado = etiqueta_nivel3_organismos;
//        }
//        //-----------------------------------------------

//        if (selection != null && selection != "") {
//            var obj_aux = { "links": [], "nodes": [] };
//            var test_miga = miga_pan.includes(selection);
//            if (test_miga == false) {
//                miga_pan += selection + "*";
//            }

//            const regex = /\*+$/g;
//            const result = miga_pan.replace(regex, '');
//            if (opcion == 3) {
//                cant = 0;
//                //if (cant_padres > 0) {

//                if (vecSelect[0] == "n1") {
//                    var filteredData = obtenerHijosYnietosConMismaRama(selection, global_sankey.links, "n4|");
//                    filteredData.forEach(function (row) {
//                        var nivel = row.target.split('|')[0];
//                        var origen = row.source;
//                        var destino = row.target;
//                        var valor = row.value;

//                        var obj_links_aux = { source: origen, target: destino, value: valor }
//                        obj_aux.links.push(obj_links_aux);
//                        var test_origen = obj_aux.nodes.some(item => item.name === origen);
//                        if (test_origen == false) {
//                            var nodo_espejo = $.grep(global_sankey.nodes, function (obj) {
//                                return obj.name === origen;
//                            });
//                            obj_aux.nodes.push({ name: nodo_espejo[0].name, id: nodo_espejo[0].id });
//                            cant_aux += 1;
//                        }
//                        var test_destino = obj_aux.nodes.some(item => item.name === destino);
//                        if (test_destino == false) {
//                            var nodo_espejo = $.grep(global_sankey.nodes, function (obj) {
//                                return obj.name === destino;
//                            });
//                            obj_aux.nodes.push({ name: nodo_espejo[0].name, id: nodo_espejo[0].id });
//                            cant_aux += 1;
//                        }



//                    });

//                } else if (vecSelect[0] == "n3") {
//                    //ultimo nivel
//                    var vecMiga = result.split("*");
//                    if (vecMiga.length > 0) {
//                        vecMiga.forEach(function (item) {
//                            var obj_miga = item;
//                            if (obj_miga.split("|")[0] == "n2") {
//                                var filteredData = $.grep(global_sankey.links, function (element) {
//                                    return element.target === selection && element.source === item;
//                                });
//                                if (global_tab == "organismo") {
//                                    //va a proyectos
//                                    const suma_grupo_n3 = groupAndSum(filteredData, ['source'], ['value']).sort((a, b) => Number(a.target) - Number(b.target));
//                                    //----------------------------------------------------------------------

//                                    filteredData.forEach(function (row) {
//                                        var nivel = row.target.split('|')[0];
//                                        var origen = row.source;
//                                        var destino = row.target;
//                                        var valor = row.value;

//                                        var valor_grupo = $.grep(suma_grupo_n3, function (obj) {
//                                            return obj.source === origen;
//                                        });
//                                        var mayorValor = filteredData.reduce(function (max, elemento) {
//                                            if (elemento.source === origen && elemento.value > max) {
//                                                return elemento.value;
//                                            } else {
//                                                return max;
//                                            }
//                                        }, -Infinity);

//                                        var porc = 0;
//                                        if (mayorValor > 0) {
//                                            //porc = Math.round((valor / valor_grupo[0].value) * 100, 0);
//                                            porc = Math.round((valor / mayorValor) * 100, 0);
//                                        }

//                                        if (porc >= porc_agrup_organismos) {
//                                            var obj_links_aux = { source: origen, target: destino, value: valor }
//                                            obj_aux.links.push(obj_links_aux);
//                                            var test_origen = obj_aux.nodes.some(item => item.name === origen);
//                                            if (test_origen == false) {
//                                                var nodo_espejo = $.grep(global_sankey.nodes, function (obj) {
//                                                    return obj.name === origen;
//                                                });
//                                                obj_aux.nodes.push({ name: nodo_espejo[0].name, id: nodo_espejo[0].id });
//                                                cant_aux += 1;
//                                            }
//                                            var test_destino = obj_aux.nodes.some(item => item.name === destino);
//                                            if (test_destino == false) {
//                                                var nodo_espejo = $.grep(global_sankey.nodes, function (obj) {
//                                                    return obj.name === destino;
//                                                });
//                                                obj_aux.nodes.push({ name: nodo_espejo[0].name, id: nodo_espejo[0].id });
//                                                cant_aux += 1;
//                                            }

//                                        } else {
//                                            ///--------------------------
//                                            flagAgrupador_n3 = true;
//                                            valAgrupador_n3 += row.value;
//                                            var nodo_espejo = $.grep(global_sankey.nodes, function (obj) {
//                                                return obj.name === destino;
//                                            });
//                                            var otros_links_aux = { source: origen, target: destino, value: valor, id: nodo_espejo[0].id }
//                                            obj_otros_n3_aux.links.push(otros_links_aux);
//                                        }

//                                    });
//                                    if (flagAgrupador_n3 == true) {
//                                        const suma_otros_n3 = groupAndSumWithCounts(obj_otros_n3_aux.links, ['source'], ['value']);
//                                        var g1 = 0;
//                                        suma_otros_n3.forEach(function (row) {

//                                            var origen = row.source;
//                                            var destino = row.target;
//                                            var new_destino = "";
//                                            var valor = row.value;
//                                            var conteoGrupo = row.count;


//                                            if (conteoGrupo > 1) {
//                                                var idsConcatenados = concatenarIds(obj_otros_n3_aux.links, origen);

//                                                new_destino = "n3|" + etiqueta_nivel_agrupado + "|" + g1;

//                                                var obj_links_aux = { source: origen, target: new_destino, value: valor }
//                                                obj_aux.links.push(obj_links_aux);

//                                                var test_destino = obj_aux.nodes.some(item => item.name === new_destino);
//                                                if (test_destino == false) {
//                                                    obj_aux.nodes.push({ name: new_destino, id: idsConcatenados });
//                                                    cant_aux += 1;
//                                                }


//                                            } else {
//                                                ///1 solo elemento incumple el criterio
//                                                var link_espejo = $.grep(obj_otros_n3_aux.links, function (obj) {
//                                                    return obj.source === origen;
//                                                });
//                                                if (link_espejo.length > 0) {
//                                                    obj_aux.links.push(link_espejo[0]);
//                                                    var test_origen = obj_aux.nodes.some(item => item.name === origen);
//                                                    if (test_origen == false) {
//                                                        var nodo_espejo = $.grep(global_sankey.nodes, function (obj) {
//                                                            return obj.name === origen;
//                                                        });
//                                                        obj_aux.nodes.push({ name: nodo_espejo[0].name, id: nodo_espejo[0].id });
//                                                        cant_aux += 1;
//                                                    }
//                                                    var test_destino = obj_aux.nodes.some(item => item.name === link_espejo[0].target);
//                                                    if (test_destino == false) {
//                                                        var nodo_espejo = $.grep(global_sankey.nodes, function (obj) {
//                                                            return obj.name === link_espejo[0].target;
//                                                        });
//                                                        obj_aux.nodes.push({ name: nodo_espejo[0].name, id: nodo_espejo[0].id });
//                                                        cant_aux += 1;
//                                                    }
//                                                }

//                                            }

//                                            g1 += 1;
//                                            //-----------------------------



//                                        })

//                                    }

//                                }


//                            } else {

//                                //clic en 3 nivel directamente sin haber pasado antes x nivel 2 --> va a detalle de 4 nivel
//                                var nodeRows = global_sankey.links.filter(a => a.source == selection);
//                                const suma_grupo_n4 = groupAndSum(nodeRows, ['source'], ['value']).sort((a, b) => Number(a.target) - Number(b.target));
//                                //----------------------------------------------------------------------

//                                nodeRows.forEach(function (row) {
//                                    var nivel_destino = row.target.split('|')[0];
//                                    var origen = row.source;
//                                    var destino = row.target;
//                                    var valor = row.value;

//                                    var valor_grupo = $.grep(suma_grupo_n4, function (obj) {
//                                        return obj.source === origen;
//                                    });
//                                    var mayorValor = nodeRows.reduce(function (max, elemento) {
//                                        if (elemento.source === origen && elemento.value > max) {
//                                            return elemento.value;
//                                        } else {
//                                            return max;
//                                        }
//                                    }, -Infinity);

//                                    var porc = 0;
//                                    if (nivel_destino == "n4") {
//                                        //proyectos de inversion
//                                        if (mayorValor > 0) {
//                                            //porc = Math.round((valor / valor_grupo[0].value) * 100, 0);
//                                            porc = Math.round((valor / mayorValor) * 100, 0);
//                                        }

//                                        if (porc >= porc_agrup_sectores) {
//                                            var obj_links_aux = { source: origen, target: destino, value: valor }
//                                            obj_aux.links.push(obj_links_aux);
//                                            var test_origen = obj_aux.nodes.some(item => item.name === origen);
//                                            if (test_origen == false) {
//                                                var nodo_espejo = $.grep(global_sankey.nodes, function (obj) {
//                                                    return obj.name === origen;
//                                                });
//                                                obj_aux.nodes.push({ name: nodo_espejo[0].name, id: nodo_espejo[0].id });
//                                                cant_aux += 1;
//                                            }
//                                            var test_destino = obj_aux.nodes.some(item => item.name === destino);
//                                            if (test_destino == false) {
//                                                var nodo_espejo = $.grep(global_sankey.nodes, function (obj) {
//                                                    return obj.name === destino;
//                                                });
//                                                obj_aux.nodes.push({ name: nodo_espejo[0].name, id: nodo_espejo[0].id });
//                                                cant_aux += 1;
//                                            }

//                                        } else {
//                                            ///--------------------------
//                                            flagAgrupador_n4 = true;
//                                            valAgrupador_n4 += row.value;
//                                            var nodo_espejo = $.grep(global_sankey.nodes, function (obj) {
//                                                return obj.name === destino;
//                                            });
//                                            var otros_links_aux = { source: origen, target: destino, value: valor, id: nodo_espejo[0].id }
//                                            obj_otros_n4_aux.links.push(otros_links_aux);


//                                        }
//                                    }

//                                });
//                                if (flagAgrupador_n4 == true) {
//                                    const suma_otros_n4 = groupAndSumWithCounts(obj_otros_n4_aux.links, ['source'], ['value']);
//                                    var g1 = 0;
//                                    suma_otros_n4.forEach(function (row) {
//                                        var origen = row.source;
//                                        var destino = row.target;
//                                        var new_destino = "";
//                                        var valor = row.value;
//                                        var conteoGrupo = row.count;

//                                        if (conteoGrupo > 1) {
//                                            var idsConcatenados = concatenarIds(obj_otros_n4_aux.links, origen);

//                                            new_destino = "n4|" + etiqueta_nivel_agrupado + "|" + g1;

//                                            var obj_links_aux = { source: origen, target: new_destino, value: valor }
//                                            obj_aux.links.push(obj_links_aux);

//                                            var test_destino = obj_aux.nodes.some(item => item.name === new_destino);
//                                            if (test_destino == false) {
//                                                obj_aux.nodes.push({ name: new_destino, id: idsConcatenados });
//                                                cant_aux += 1;
//                                            }


//                                        } else {
//                                            ///1 solo elemento incumple el criterio
//                                            var link_espejo = $.grep(obj_otros_n4_aux.links, function (obj) {
//                                                return obj.source === origen;
//                                            });
//                                            if (link_espejo.length > 0) {
//                                                obj_aux.links.push(link_espejo[0]);
//                                                var test_origen = obj_aux.nodes.some(item => item.name === origen);
//                                                if (test_origen == false) {
//                                                    var nodo_espejo = $.grep(global_sankey.nodes, function (obj) {
//                                                        return obj.name === origen;
//                                                    });
//                                                    obj_aux.nodes.push({ name: nodo_espejo[0].name, id: nodo_espejo[0].id });
//                                                    cant_aux += 1;
//                                                }
//                                                var test_destino = obj_aux.nodes.some(item => item.name === link_espejo[0].target);
//                                                if (test_destino == false) {
//                                                    var nodo_espejo = $.grep(global_sankey.nodes, function (obj) {
//                                                        return obj.name === link_espejo[0].target;
//                                                    });
//                                                    obj_aux.nodes.push({ name: nodo_espejo[0].name, id: nodo_espejo[0].id });
//                                                    cant_aux += 1;
//                                                }
//                                            }

//                                        }

//                                        g1 += 1;
//                                        //-----------------------------
//                                    })

//                                }

//                            }

//                        })
//                    }

//                } else if (vecSelect[0] != "n4") {

//                    var nodeRows = [];
//                    var vecMiga = result.split("*");
//                    if (vecMiga.length > 1) {
//                        nodeRows = $.grep(global_sankey.links, function (element) {
//                            return element.rama === vecMiga[0] && element.source === selection;
//                        });
//                    } else {
//                        nodeRows = $.grep(global_sankey.links, function (element) {
//                            return element.source === selection;
//                        });
//                    }

//                    if (nodeRows.length > 0) {
//                        nodeRows.forEach(function (row) {
//                            var origen = row.source;
//                            var destino = row.target;
//                            var valor = row.value;

//                            var test_links = obj_aux.links.some(item => item.source === origen && item.target === destino);
//                            if (test_links == false) {
//                                var obj_links_aux = { source: origen, target: destino, value: valor }
//                                obj_aux.links.push(obj_links_aux);
//                            }

//                            var test_origen = obj_aux.nodes.some(item => item.name === origen);
//                            if (test_origen == false) {
//                                var nodo_espejo = $.grep(global_sankey.nodes, function (obj) {
//                                    return obj.name === origen;
//                                });
//                                obj_aux.nodes.push({ name: origen, id: nodo_espejo[0].id });
//                                cant_aux += 1;
//                            }
//                            var test_destino = obj_aux.nodes.some(item => item.name === destino);
//                            var nodo_espejo = $.grep(global_sankey.nodes, function (obj) {
//                                return obj.name === destino;
//                            });
//                            if (test_destino == false) {
//                                obj_aux.nodes.push({ name: destino, id: nodo_espejo[0].id });
//                                cant_aux += 1;
//                            }


//                        });

//                    }

//                } else {
//                    var filteredData = obtenerHijosYnietosConMismaRama(selection, global_sankey.links, "n3|");
//                    filteredData.forEach(function (row) {
//                        var nivel = row.target.split('|')[0];
//                        var origen = row.source;
//                        var destino = row.target;
//                        var valor = row.value;

//                        var obj_links_aux = { source: origen, target: destino, value: valor }
//                        obj_aux.links.push(obj_links_aux);
//                        var test_origen = obj_aux.nodes.some(item => item.name === origen);
//                        if (test_origen == false) {
//                            var nodo_espejo = $.grep(global_sankey.nodes, function (obj) {
//                                return obj.name === origen;
//                            });
//                            obj_aux.nodes.push({ name: nodo_espejo[0].name, id: nodo_espejo[0].id });
//                            cant_aux += 1;
//                        }
//                        var test_destino = obj_aux.nodes.some(item => item.name === destino);
//                        if (test_destino == false) {
//                            var nodo_espejo = $.grep(global_sankey.nodes, function (obj) {
//                                return obj.name === destino;
//                            });
//                            obj_aux.nodes.push({ name: nodo_espejo[0].name, id: nodo_espejo[0].id });
//                            cant_aux += 1;
//                        }



//                    });

//                }


//                if (cant_aux > cant) {
//                    cant = cant_aux;
//                }

//                var dataNew =
//                {
//                    "links": obj_aux.links,
//                    "nodes": obj_aux.nodes,
//                    "cant_nodos": cant

//                };
//                global_ini = dataNew;



//                $("#sankey_basic").empty();
//                graphSankey(dataNew);


//                $("#btnAtras").click(function () {
//                    $("#sankey_basic").empty();
//                    miga_pan = "";
//                    getGraficoPerTipoVista();

//                })
//                $("#btnAtras").show();
//                //}
//                //} else {
//                //    miga_pan = "";
//                //    $("#btnAtras").hide();
//                //    $("#sankey_basic").empty();
//                //    var obj_aux =
//                //    {
//                //        "links": global_sankey.links_nivel,
//                //        "nodes": global_sankey.nodes_nivel,
//                //        "cant_nodos": global_sankey.cant_nodos_nivel
//                //    };
//                //    graphSankey(obj_aux);

//                //}
//                //if (cant_padres <= 0) {
//                //    miga_pan = "";
//                //    $("#btnAtras").hide();
//                //}

//            } else {
//                if (cant_hijos == 0) {
//                    var nodeRows = global_sankey.links.filter(a => a.source == selection);
//                    if (nodeRows.length > 0) {

//                        var obj_aux = { "links": [], "nodes": [] };
//                        obj_aux =
//                        {
//                            "links": global_sankey.links_nivel,
//                            "nodes": global_sankey.nodes_nivel,

//                        };

//                        nodeRows.forEach(function (row) {
//                            var origen = row.source;
//                            var destino = row.target;
//                            var valor = row.value;
//                            var obj_links_aux = { source: origen, target: destino, value: valor }
//                            obj_aux.links.push(obj_links_aux);
//                            var test_origen = obj_aux.nodes.some(item => item.name === origen);
//                            if (test_origen == false) {
//                                obj_aux.nodes.push({ name: origen });
//                                cant_aux += 1;
//                            }
//                            var test_destino = obj_aux.nodes.some(item => item.name === destino);
//                            if (test_destino == false) {
//                                obj_aux.nodes.push({ name: destino });
//                                cant_aux += 1;
//                            }
//                        });

//                        if (cant_aux > cant) {
//                            cant = cant_aux;
//                        }

//                        var dataNew =
//                        {
//                            "links": obj_aux.links,
//                            "nodes": obj_aux.nodes,
//                            "cant_nodos": cant

//                        };

//                        global_ini = dataNew;

//                        $("#sankey_basic").empty();
//                        graphSankey(dataNew);
//                    }
//                }
//                else {
//                    miga_pan = "";
//                    $("#sankey_basic").empty();
//                    var obj_aux =
//                    {
//                        "links": global_sankey.links_nivel,
//                        "nodes": global_sankey.nodes_nivel,
//                        "cant_nodos": cant
//                    };
//                    graphSankey(obj_aux);

//                }
//            }



//        }

//    }

//    //------------------------------------



//}

function recalcularSize(datos) {
    var height_aux = 0;
    var width_aux = 1050;
    var units = "millones";
    var cant_elementos = 8;
    var factor_multiplicador = 25;
    if (datos != undefined && datos != null) {
        var cant_aux = datos.cant_nodos;
        if (cant_aux != undefined) {
            if (parseInt(cant_aux) < cant_elementos) {
                factor_multiplicador = 20;
            } else {
                cant_elementos = cant_aux;
            }
        } else {
            cant_elementos = (datos.nodes.length / 1);

        }
    }

    let isMobile = window.matchMedia("only screen and (max-width: 765px)").matches;

    if ($(window).innerWidth() <= width || isMobile) {
        width_aux = 1050;

    } else {
        width_aux = $(".container").innerWidth();
    }

    var margin = { top: 10, right: 10, bottom: 10, left: 10 },
        width = width_aux - 20 - margin.left - margin.right,
        height = ((cant_elementos) * factor_multiplicador) - margin.top - margin.bottom;

    return alturas = { "margin": margin, width: width, height: height };
}

//var $carousel = $('.carouselData').flickity({
//    initialIndex: 1,
//    pageDots: false,
//    groupCells: true,
//    contain: true,
//    prevNextButtons: true,
//    freeScroll: true,
//    wrapAround: false
//});

function obtenerPresupuestoEjecutadoPorEmergencia(anio) {

    //$carousel.flickity('destroy');
    //$(".carouselData").html('');
    var $carousel = $('.carouselData').flickity({
        initialIndex: 1,
        pageDots: false,
        groupCells: true,
        contain: true,
        prevNextButtons: true,
        freeScroll: true,
        wrapAround: false
    });
    var $cellElements = $carousel.flickity('getCellElements');
    $carousel.flickity('remove', $cellElements)
    //var $cellElems = $("<div class='carousel-cell'>texto</div>");
    //$carousel.flickity('append', $cellElems);
    //$carousel.flickity('resize');


    var presupuestoEjecutadoPorEmergencia = objPresupuestoEjecutadoPorEmergencias.filter(x => x.anio == anio);

       

    if (presupuestoEjecutadoPorEmergencia != undefined && presupuestoEjecutadoPorEmergencia.length > 0) {
        //$carousel.flickity('destroy');
        //$(".carouselData").html('');
        for (var i = 0; i < presupuestoEjecutadoPorEmergencia.length; i++) {
            var item = presupuestoEjecutadoPorEmergencia[i];
            emergenciaCarrusel = "<div class='carousel-cell col-lg-3' style='height:200px;'><div class='card'><div class='card-header'>";//
            emergenciaCarrusel = emergenciaCarrusel + item.nombre + "</div><div class='card-body d-flex'><span class='bigNumber'>";
            emergenciaCarrusel = emergenciaCarrusel + "RD$ " + parseFloat(item.presupuestoEjecutado).toLocaleString('es-DO') + " millones </span><span class='label'>Monto total ejecutado</span></div>";
            if (item.enlace == "") {
                emergenciaCarrusel = emergenciaCarrusel + "</div></div>";
            }
            else {
                let footerEmergencia = "<div class='card-footer'><a class='btn btn-outlined' href=" + item.enlace + ">Más información <span class='glyphicon glyphicon-arrow-right'></span></a></div>";
                emergenciaCarrusel = emergenciaCarrusel + footerEmergencia + "</div></div>";
            }
         

            var $cellElems = $(emergenciaCarrusel);
            $carousel.flickity('append', $cellElems);
            $carousel.flickity('resize');
            //$carrusel = $(carrusel + emergenciaCarrusel);
        }
        //carrusel += '</div>';
        //$("#divResumenProcesos").append($carrusel);
    } else {

       
        if (presupuestoEjecutado == undefined || presupuestoEjecutado == 0) {
            
            let emergenciaOtrosCarrusel = "<div class='carousel-cell' style='height:200px;'>Sin datos de ejecución para el año seleccionado</div>";

            var $cellElems = $(emergenciaOtrosCarrusel);
            $carousel.flickity('append', $cellElems);
            $carousel.flickity('resize');   
   
        } // $("#divResumenProcesos").html("Sin datos de ejecución para el año seleccionado").css("text-align", "center");
        else {
            //$("#divResumenProcesos").html();

            let emergenciaOtrosCarrusel = "<div class='carousel-cell col-lg-3'><div class='card'><div class='card-header'>";//
            emergenciaOtrosCarrusel += "Otras</div><div class='card-body d-flex'><span class='bigNumber'>";
            emergenciaOtrosCarrusel += "RD$ " + parseFloat(presupuestoEjecutado).toLocaleString('es-DO') + " millones </span><span class='label'>Monto total ejecutado</span></div>";
            emergenciaOtrosCarrusel += "</div></div>";
      
            //$("#divResumenProcesos").append($cellElems);

            var $cellElems = $(emergenciaOtrosCarrusel);
            $carousel.flickity('append', $cellElems);
            $carousel.flickity('resize');   
        }

    }

}
function obtenerPresupuestoGeneralPerAnio(anio) {
    let presupuestoAnio = objPresupuestoGeneralPerAnio.filter(x => x.anio == anio);
    if (presupuestoAnio != undefined && presupuestoAnio.length > 0) {
        //console.log("Presupuesto Seleccionado", JSON.stringify(presupuestoAnio, null, 2));
        presupuestoEjecutado = presupuestoAnio[0].presupuestoEjecutado;
        $("#presupuestoAsignadoPorAnio").text("RD$ " + parseFloat(presupuestoAnio[0].presupuestoAsignado).toLocaleString('es-DO') + " millones");
        $("#presupuestoEjecutadoPorAnio").text("RD$ " + parseFloat(presupuestoEjecutado).toLocaleString('es-DO') + " millones");
        $("#porcentajeEjecutadoPorAnio").text(presupuestoAnio[0].porcentajeAvance);
    }
}
function obtMatrizData(data) {
    var cant_nodos_1 = 0;
    var cant_nodos_2 = 0;
    var cant_nodos_3 = 0;
    var cant_nodos_fin = 0;
    var obj_nodos = [];
    var obj_links = [];
    $.each(data, function (key, value) {
        cant_nodos_1 += 1;
        var test = false;
        var obj_aux = { name: value.nombre };
        var nomFuente = value.nombre;
        obj_nodos.push(obj_aux);
        $.each(value.detalles, function (key, value) {
            cant_nodos_2 += 1;
            var nomOrganismo = value.nombre;
            var valor_organismo = (value.avance / 1000000);

            //NomOrganismo
            test = obj_nodos.some(item => item.name === value.nombre);
            if (test == false) {
                obj_aux = { name: value.nombre };
                obj_nodos.push(obj_aux);
            }

            var objIndex = obj_links.findIndex((obj => obj.target == nomOrganismo && obj.source == nomFuente));
            if (objIndex > -1) {
                obj_links[objIndex].value = obj_links[objIndex].value + valor_organismo;
            } else {
                var obj_links_aux = { source: nomFuente, target: nomOrganismo, value: valor_organismo }
                obj_links.push(obj_links_aux);
            }

            $.each(value.detalles, function (key, value) {
                //NomPrograma
                cant_nodos_3 += 1;
                var nomPrograma = value.nombre;
                var valor_programa = (value.avance / 1000000);
                test = obj_nodos.some(item => item.name === value.nombre);
                if (test == false) {
                    obj_aux = { name: value.nombre };
                    obj_nodos.push(obj_aux);
                }

                var objIndex = obj_links.findIndex((obj => obj.target == nomPrograma && obj.source == nomOrganismo));
                if (objIndex > -1) {
                    obj_links[objIndex].value = obj_links[objIndex].value + valor_programa;
                } else {
                    var obj_links_aux = { source: nomOrganismo, target: nomPrograma, value: valor_programa }
                    obj_links.push(obj_links_aux);
                }

            });


        });
    });

    cant_nodos_fin = cant_nodos_1;
    if (cant_nodos_2 > cant_nodos_1) {
        cant_nodos_fin = cant_nodos_2;
    }
    if (cant_nodos_3 > cant_nodos_2) {
        cant_nodos_fin = cant_nodos_3;
    }

    var datos_final =
    {
        "links": obj_links,
        "nodes": obj_nodos,
        "cant_nodos_fin": {
            cant: cant_nodos_fin
        }
    };

    return datos_final;

}
function obtenerGraficoSankey() {
    $.ajax({
        type: 'GET',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: "/api/ServiciosEmergencias/ObtDistribucionPresupuestalGeneralPorTipoEmergencia",
        cache: false,
        success: function (result) {
            if (result.status == true) {
                //console.log("result.distribucionItem", JSON.stringify(result.distribucionItem, null, 2));
                var data = result.distribucionItem;
                if (data.length > 0) {
                    var datos = obtMatrizData(data);
                    $("#sankey_presupuesto_general").html("");
                    graphSankey("sankey_presupuesto_general", datos);
                }

            } else {
                alert("Error: " + result.message, function () {

                });
            }

        },
        error: function (response) {
            alert(response.responseText);
        },
        failure: function (response) {
            alert(response.responseText);
        }
    });

}


//FUNCION PARA PINTAR PRESUPUESTO ASIGNADO POR ENTIDAD DEPENDIENDO DEL AÑO
function obtenerPresupuestoAsignadoPorEntidadYAnio(anio) {
    $("#anioPresupuestoEjecutadoEmergencias").text(anio);
    $("#anioPresupuestoEntidad").text(anio);
    $.ajax({
        type: 'GET',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: "/api/ServiciosEmergencias/GetConsolidadoPresuAsignadoPorEntidadAnio",
                //data: {
        //    anyo: anio
        //},
        cache: false,
        success: function (data) {
            var data = data.filter(x => x.anio.toString() == $("#filtro_anio_pres_general").val());
            var i_aux = 0;
            var j_aux = 0;
            var k_aux = 0;
            var total_avance = 0;
            var total_presupuesto = 0;
            var html_str = '<div class="panel-group accordion" role="tablist" aria-multiselectable="true">';
            for (var i = 0; i < data.length; i++) {
                var nomCollapse = "collapseOne_" + i_aux.toString() + "_" + j_aux.toString();
                var nomHeading = "headingOne_" + i_aux.toString() + "_" + j_aux.toString();
                total_avance += data[i].total_avance;
                total_presupuesto += data[i].total_presupuesto;
                html_str += '<div class="panel panel-default">';
                html_str += '<div class="panel-heading" role="tab" id="' + nomHeading + '">';
                html_str += '<div class="panel-title">';
                html_str += '<a role="button" id="a_' + data[i].idItem + '" class="prueba_enlace" item="' + data[i].idItem + '" data-toggle="collapse" data-parent="#accordion" href="#' + nomCollapse + '" aria-expanded="true" aria-controls="' + nomCollapse + '">';
                html_str += '<div class="head">';
                html_str += '<div class="mainData">';
                html_str += '<span class="labelTit">Institución</span>';
                html_str += '<span class="td1">' + data[i].nombre + '</span>';
                html_str += '</div>';
                html_str += '<div class="data2">';
                html_str += '<span class="labelTit">Presupuestado</span>';
                html_str += '<span class="td1">RD $ ' + (data[i].total_presupuesto / 1000000).formatMoney(2, '.', ',').toString() + ' Millones</span>';
                html_str += '</div>';
                html_str += '<div class="data2">';
                html_str += '<span class="labelTit">Ejecutado</span>';
                html_str += '<span class="td1">RD $ ' + (data[i].total_avance / 1000000).formatMoney(2, '.', ',').toString() + ' Millones</span>';
                html_str += '</div>';
                html_str += '<div class="data2">';
                html_str += '<span class="labelTit">Cumplimiento</span>';
                html_str += '<span class="td1">' + (data[i].porcentajeCumplimiento).formatMoney(2, '.', ',').toString() + ' %</span>';
                html_str += '</div>';
                html_str += '</div>';
                html_str += '</a>';
                html_str += '</div>';
                html_str += '</div>';
                //nivel 2
                html_str += '<div id="' + nomCollapse + '" class="panel-collapse collapse nivel1" role="tabpanel" aria-labelTitledby="' + nomHeading + '" item="' + data[i].nombre.toUpperCase() + '">';
                //console.log("data.NomItem", data[i].NomItem);
                //console.log("data.Detalles", data[i].Detalles);
                html_str += '<div class="panel-body">';
                for (var j = 0; j < data[i].detalles.length; j++) {
                    //console.log("data.Detalles a ver", JSON.stringify(data.Detalles[i]['Detalles'], null, 2));
                    var nomNivel2 = "accordion_l2_" + i_aux.toString() + "_" + j_aux.toString();
                    var headNivel2 = "headLevel2_" + i_aux.toString() + "_" + j_aux.toString();
                    var panelHijo2 = "c2_" + j_aux.toString() + "_" + k_aux.toString();
                    var nomHeadLevel3 = "headLevel3_" + j_aux.toString() + "_" + k_aux.toString();
                    html_str += '<div class="panel-group nivel22" id="' + nomNivel2 + '" role="tablist" aria-multiselectable="true">';
                    html_str += '<div class="panel panel-default">';
                    html_str += '<div class="panel-heading" role="tab" id="' + headNivel2 + '">';
                    html_str += '<div class="panel-title">';
                    html_str += '<a role="button" data-toggle="collapse" data-parent="#' + nomNivel2 + '" href="#' + panelHijo2 + '" aria-expanded="true" aria-controls="' + nomCollapse + '">';
                    html_str += '<div class="head">';
                    html_str += '<div class="data2 mainData">';
                    html_str += '<span class="labelTit">Unidad ejecutora</span>';
                    html_str += '<span class="td1p">' + data[i].detalles[j]['nomCapitulo'] + '</span>';
                    //console.log("data.detalles[i]['NomCapitulo']", data[i].Detalles[j]['NomCapitulo']);
                    html_str += '</div>';
                    html_str += '<div class="data2">';
                    html_str += '<span class="labelTit">Presupuestado</span>';
                    html_str += '<span class="td1p">RD $ ' + (data[i].detalles[j]['presupuesto'] / 1000000).formatMoney(2, '.', ',').toString() + ' Millones</span>';
                    html_str += '</div>';
                    html_str += '<div class="data2">';
                    html_str += '<span class="labelTit">Ejecutado</span>';
                    html_str += '<span class="td1p">RD $ ' + (data[i].detalles[j]['avance'] / 1000000).formatMoney(2, '.', ',').toString() + ' Millones</span>';
                    html_str += '</div>';
                    html_str += '<div class="data2">';
                    html_str += '<span class="labelTit">Cumplimiento</span>';
                    html_str += '<span class="td1p">' + (data[i].detalles[j]['porcentajeCumplimiento']).formatMoney(2, '.', ',').toString() + ' %</span>';
                    html_str += '</div>';
                    html_str += '</div>';
                    html_str += '</a>';
                    html_str += '</div>';
                    html_str += '</div>';
                    //nivel 3
                    html_str += ' <div id="' + panelHijo2 + '" class="panel-collapse collapse level3 nivel2" role="tabpanel" aria-labelledby="' + nomHeadLevel3 + '" entidad="' + data[i].detalles[j]['nomCapitulo'].toUpperCase() + '">';
                    html_str += '<div class="panel-body">';
                    //console.log("data[i].Detalles[j].Detalles", data[i].Detalles[j].Detalles);
                    for (var k = 0; k < data[i].detalles[j].detalles.length; k++) {
                        var nomNivel3 = "accordion_l3_" + j_aux.toString() + "_" + k_aux.toString();
                        //var nomCnivel3 = "c3_" + j_aux.toString() + "_" + k_aux.toString();
                        html_str += '<div class="panel-group nivel33" id="' + nomNivel3 + '" role="tablist" aria-multiselectable="true">';
                        html_str += '<div class="panel panel-default">';
                        html_str += '<div class="panel-heading" role="tab" id="' + nomHeadLevel3 + '">';
                        html_str += '<div class="panel-title">';
                        html_str += '<a role="button" data-toggle="collapse" data-parent="#' + nomNivel3 + '" aria-expanded="true" aria-controls="' + nomCollapse + '">';
                        html_str += '<div class="head">';
                        html_str += '<div class="data2 mainData">';
                        html_str += '<span class="labelTit">Programa</span>';
                        html_str += '<span class="td1p">' + data[i].detalles[j].detalles[k]['nomConcepto'] + '</span>';
                        html_str += '</div>';
                        html_str += '<div class="data2">';
                        html_str += '<span class="labelTit">Presupuestado</span>';
                        html_str += '<span class="td1p">RD$ ' + (data[i].detalles[j].detalles[k]['presupuesto'] / 1000000).formatMoney(2, '.', ',').toString() + ' Millones</span>';
                        html_str += '</div>';
                        html_str += '<div class="data2">';
                        html_str += '<span class="labelTit">Ejecutado</span>';
                        html_str += '<span class="td1p">RD$ ' + (data[i].detalles[j].detalles[k]['avance'] / 1000000).formatMoney(2, '.', ',').toString() + ' Millones</span>';
                        html_str += '</div>';
                        html_str += '<div class="data2">';
                        html_str += '<span class="labelTit">Cumplimiento</span>';
                        html_str += '<span class="td1p">RD$ ' + (data[i].detalles[j].detalles[k]['porcentajeCumplimiento']).formatMoney(2, '.', ',').toString() + ' %</span>';
                        html_str += '</div>';
                        html_str += '</div>';
                        html_str += '</a>';
                        html_str += '</div>';
                        html_str += '</div>';
                        html_str += '</div>';
                        html_str += '</div>';
                        k_aux++;
                    }
                    html_str += '</div>';
                    html_str += '</div>';
                    html_str += '</div>';
                    html_str += '</div>';
                    j_aux++;
                }
                html_str += '</div>';
                html_str += '</div>';
                html_str += '</div>';
                i_aux++;
            }
            html_str += '<div id="divTotales" class="summUp">';
            html_str += '<div class="panel-title">';
            html_str += '<div class="head">';
            html_str += '<div class="mainData">';
            html_str += '<span class="labelTit">&nbsp;</span>';
            html_str += '<span class="td1">Totales</span>';
            html_str += '</div>';
            html_str += '<div class="data2">';
            html_str += '<span class="labelTit">Presupuestado</span>';
            html_str += '<span class="td1">RD $' + (total_presupuesto / 1000000).formatMoney(2, '.', ',').toString() + ' Millones</span>';
            html_str += '</div>';
            html_str += '<div class="data2">';
            html_str += '<span class="labelTit">Ejecutado</span>';
            html_str += '<span class="td1">RD $' + (total_avance / 1000000).formatMoney(2, '.', ',').toString() + ' Millones</span>';
            html_str += '</div>';

            html_str += '<div class="data2">';
            html_str += '<span class="labelTit">Cumplimiento</span>';
            if (total_presupuesto == 0) html_str += '<span class="td1">' + 0.00 + ' %</span>';
            else html_str += '<span class="td1">' + (total_avance * 100 / total_presupuesto).formatMoney(2, '.', ',').toString() + ' %</span>';
            html_str += '</div>';
            html_str += '</div>';
            html_str += '</div>';
            html_str += '</div>';
            html_str += '<div id="divPagFichas">';
            html_str += '</div>';
            html_str += "</div>";
            $("#divPresupuestoGeneralAsignadoPorEntidad").html(html_str);
        },
        error: function (response) {
            alert(response.responseText);
        },
        failure: function (response) {
            alert(response.responseText);
        }
    });
}
Number.prototype.formatMoney = function (c, d, t) {
    var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};