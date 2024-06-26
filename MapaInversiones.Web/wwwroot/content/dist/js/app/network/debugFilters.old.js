define(function(){
	return [{
    'name': 'Region',
    'parameter': 'region',
    'esMultiple': false,
    'seccionAplicativo': 'Comunes',
    'items': [{
        'dependsOn': null,
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'REGION DEL LLANO',
        'value': '01'
    }, {
        'dependsOn': null,
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'REGION CENTRO SUR AMAZONIA',
        'value': '02'
    }, {
        'dependsOn': null,
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'REGION CARIBE',
        'value': '03'
    }, {
        'dependsOn': null,
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'REGION CENTRO ORIENTE',
        'value': '04'
    }, {
        'dependsOn': null,
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'REGION EJE CAFETERO',
        'value': '05'
    }, {
        'dependsOn': null,
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'REGION PACIFICO',
        'value': '06'
    }]
}, {
    'name': 'Departamento',
    'parameter': 'departamento',
    'esMultiple': false,
    'seccionAplicativo': 'Comunes',
    'items': [{
        'dependsOn': [{
            'type': 'region',
            'id': '02'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'AMAZONAS',
        'value': '91'
    }, {
        'dependsOn': [{
            'type': 'region',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ANTIOQUIA',
        'value': '05'
    }, {
        'dependsOn': [{
            'type': 'region',
            'id': '01'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ARAUCA',
        'value': '81'
    }, {
        'dependsOn': [{
            'type': 'region',
            'id': '03'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ATLANTICO',
        'value': '08'
    }, {
        'dependsOn': [{
            'type': 'region',
            'id': '04'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BOGOTA',
        'value': '11'
    }, {
        'dependsOn': [{
            'type': 'region',
            'id': '03'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BOLIVAR',
        'value': '13'
    }, {
        'dependsOn': [{
            'type': 'region',
            'id': '04'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BOYACA',
        'value': '15'
    }, {
        'dependsOn': [{
            'type': 'region',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CALDAS',
        'value': '17'
    }, {
        'dependsOn': [{
            'type': 'region',
            'id': '02'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CAQUETA',
        'value': '18'
    }, {
        'dependsOn': [{
            'type': 'region',
            'id': '01'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CASANARE',
        'value': '85'
    }, {
        'dependsOn': [{
            'type': 'region',
            'id': '06'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CAUCA',
        'value': '19'
    }, {
        'dependsOn': [{
            'type': 'region',
            'id': '03'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CESAR',
        'value': '20'
    }, {
        'dependsOn': [{
            'type': 'region',
            'id': '06'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CHOCO',
        'value': '27'
    }, {
        'dependsOn': [{
            'type': 'region',
            'id': '03'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CORDOBA',
        'value': '23'
    }, {
        'dependsOn': [{
            'type': 'region',
            'id': '04'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CUNDINAMARCA',
        'value': '25'
    }, {
        'dependsOn': [{
            'type': 'region',
            'id': '01'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GUAINIA',
        'value': '94'
    }, {
        'dependsOn': [{
            'type': 'region',
            'id': '01'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GUAVIARE',
        'value': '95'
    }, {
        'dependsOn': [{
            'type': 'region',
            'id': '02'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'HUILA',
        'value': '41'
    }, {
        'dependsOn': [{
            'type': 'region',
            'id': '03'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA GUAJIRA',
        'value': '44'
    }, {
        'dependsOn': [{
            'type': 'region',
            'id': '03'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MAGDALENA',
        'value': '47'
    }, {
        'dependsOn': [{
            'type': 'region',
            'id': '04'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'META',
        'value': '50'
    }, {
        'dependsOn': [{
            'type': 'region',
            'id': '06'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'NARIÑO',
        'value': '52'
    }, {
        'dependsOn': [{
            'type': 'region',
            'id': '04'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'NORTE DE SANTANDER',
        'value': '54'
    }, {
        'dependsOn': [{
            'type': 'region',
            'id': '02'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUTUMAYO',
        'value': '86'
    }, {
        'dependsOn': [{
            'type': 'region',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'QUINDIO',
        'value': '63'
    }, {
        'dependsOn': [{
            'type': 'region',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'RISARALDA',
        'value': '66'
    }, {
        'dependsOn': [{
            'type': 'region',
            'id': '03'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN ANDRES',
        'value': '88'
    }, {
        'dependsOn': [{
            'type': 'region',
            'id': '04'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SANTANDER',
        'value': '68'
    }, {
        'dependsOn': [{
            'type': 'region',
            'id': '03'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SUCRE',
        'value': '70'
    }, {
        'dependsOn': [{
            'type': 'region',
            'id': '02'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TOLIMA',
        'value': '73'
    }, {
        'dependsOn': [{
            'type': 'region',
            'id': '06'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VALLE',
        'value': '76'
    }, {
        'dependsOn': [{
            'type': 'region',
            'id': '01'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VAUPES',
        'value': '97'
    }, {
        'dependsOn': [{
            'type': 'region',
            'id': '01'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VICHADA',
        'value': '99'
    }]
}, {
    'name': 'Municipio',
    'parameter': 'municipio',
    'esMultiple': false,
    'seccionAplicativo': 'Comunes',
    'items': [{
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ABEJORRAL, ANTIOQUIA',
        'value': '05002'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ABREGO, NORTE DE SANTANDER',
        'value': '54003'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ABRIAQUI, ANTIOQUIA',
        'value': '05004'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '50'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ACACIAS, META',
        'value': '50006'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '27'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ACANDI, CHOCO',
        'value': '27006'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ACEVEDO, HUILA',
        'value': '41006'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ACHI, BOLIVAR',
        'value': '13006'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'AGRADO, HUILA',
        'value': '41013'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'AGUA DE DIOS, CUNDINAMARCA',
        'value': '25001'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '20'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'AGUACHICA, CESAR',
        'value': '20011'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'AGUADA, SANTANDER',
        'value': '68013'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '17'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'AGUADAS, CALDAS',
        'value': '17013'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '85'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'AGUAZUL, CASANARE',
        'value': '85010'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '20'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'AGUSTIN CODAZZI, CESAR',
        'value': '20013'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'AIPE, HUILA',
        'value': '41016'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ALBAN, CUNDINAMARCA',
        'value': '25019'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ALBAN, NARIÑO',
        'value': '52019'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '18'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ALBANIA, CAQUETA',
        'value': '18029'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '44'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ALBANIA, LA GUAJIRA',
        'value': '44035'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ALBANIA, SANTANDER',
        'value': '68020'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ALCALA, VALLE',
        'value': '76020'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ALDANA, NARIÑO',
        'value': '52022'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ALEJANDRIA, ANTIOQUIA',
        'value': '05021'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '47'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ALGARROBO, MAGDALENA',
        'value': '47030'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ALGECIRAS, HUILA',
        'value': '41020'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ALMAGUER, CAUCA',
        'value': '19022'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ALMEIDA, BOYACA',
        'value': '15022'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ALPUJARRA, TOLIMA',
        'value': '73024'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ALTAMIRA, HUILA',
        'value': '41026'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '27'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ALTO BAUDO, CHOCO',
        'value': '27025'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ALTOS DEL ROSARIO, BOLIVAR',
        'value': '13030'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ALVARADO, TOLIMA',
        'value': '73026'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'AMAGA, ANTIOQUIA',
        'value': '05030'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'AMALFI, ANTIOQUIA',
        'value': '05031'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'AMBALEMA, TOLIMA',
        'value': '73030'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ANAPOIMA, CUNDINAMARCA',
        'value': '25035'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ANCUYA, NARIÑO',
        'value': '52036'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ANDALUCIA, VALLE',
        'value': '76036'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ANDES, ANTIOQUIA',
        'value': '05034'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ANGELOPOLIS, ANTIOQUIA',
        'value': '05036'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ANGOSTURA, ANTIOQUIA',
        'value': '05038'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ANOLAIMA, CUNDINAMARCA',
        'value': '25040'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ANORI, ANTIOQUIA',
        'value': '05040'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '17'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ANSERMA, CALDAS',
        'value': '17042'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ANSERMANUEVO, VALLE',
        'value': '76041'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ANZA, ANTIOQUIA',
        'value': '05044'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ANZOATEGUI, TOLIMA',
        'value': '73043'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'APARTADO, ANTIOQUIA',
        'value': '05045'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '66'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'APIA, RISARALDA',
        'value': '66045'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'APULO, CUNDINAMARCA',
        'value': '25599'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'AQUITANIA, BOYACA',
        'value': '15047'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '47'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ARACATACA, MAGDALENA',
        'value': '47053'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '17'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ARANZAZU, CALDAS',
        'value': '17050'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ARATOCA, SANTANDER',
        'value': '68051'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '81'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ARAUCA, ARAUCA',
        'value': '81001'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '81'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ARAUQUITA, ARAUCA',
        'value': '81065'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ARBELAEZ, CUNDINAMARCA',
        'value': '25053'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ARBOLEDA, NARIÑO',
        'value': '52051'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ARBOLEDAS, NORTE DE SANTANDER',
        'value': '54051'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ARBOLETES, ANTIOQUIA',
        'value': '05051'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ARCABUCO, BOYACA',
        'value': '15051'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ARENAL, BOLIVAR',
        'value': '13042'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ARGELIA, ANTIOQUIA',
        'value': '05055'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ARGELIA, CAUCA',
        'value': '19050'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ARGELIA, VALLE',
        'value': '76054'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '47'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ARIGUANI, MAGDALENA',
        'value': '47058'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ARJONA, BOLIVAR',
        'value': '13052'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ARMENIA, ANTIOQUIA',
        'value': '05059'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '63'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ARMENIA, QUINDIO',
        'value': '63001'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ARMERO, TOLIMA',
        'value': '73055'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ARROYOHONDO, BOLIVAR',
        'value': '13062'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '20'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ASTREA, CESAR',
        'value': '20032'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ATACO, TOLIMA',
        'value': '73067'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '27'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ATRATO, CHOCO',
        'value': '27050'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '23'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'AYAPEL, CORDOBA',
        'value': '23068'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '27'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BAGADO, CHOCO',
        'value': '27073'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '27'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BAHIA SOLANO, CHOCO',
        'value': '27075'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '27'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BAJO BAUDO, CHOCO',
        'value': '27077'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BALBOA, CAUCA',
        'value': '19075'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '66'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BALBOA, RISARALDA',
        'value': '66075'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '08'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BARANOA, ATLANTICO',
        'value': '08078'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BARAYA, HUILA',
        'value': '41078'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BARBACOAS, NARIÑO',
        'value': '52079'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BARBOSA, ANTIOQUIA',
        'value': '05079'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BARBOSA, SANTANDER',
        'value': '68077'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BARICHARA, SANTANDER',
        'value': '68079'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '50'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BARRANCA DE UPIA, META',
        'value': '50110'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BARRANCABERMEJA, SANTANDER',
        'value': '68081'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '44'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BARRANCAS, LA GUAJIRA',
        'value': '44078'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BARRANCO DE LOBA, BOLIVAR',
        'value': '13074'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '94'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BARRANCO MINAS, GUAINIA',
        'value': '94343'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '08'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BARRANQUILLA, ATLANTICO',
        'value': '08001'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '20'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BECERRIL, CESAR',
        'value': '20045'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '17'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BELALCAZAR, CALDAS',
        'value': '17088'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BELEN, BOYACA',
        'value': '15087'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BELEN, NARIÑO',
        'value': '52083'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '18'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BELEN DE LOS ANDAQUIES, CAQUETA',
        'value': '18094'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '66'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BELEN DE UMBRIA, RISARALDA',
        'value': '66088'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BELLO, ANTIOQUIA',
        'value': '05088'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BELMIRA, ANTIOQUIA',
        'value': '05086'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BELTRAN, CUNDINAMARCA',
        'value': '25086'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BERBEO, BOYACA',
        'value': '15090'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BETANIA, ANTIOQUIA',
        'value': '05091'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BETEITIVA, BOYACA',
        'value': '15092'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BETULIA, ANTIOQUIA',
        'value': '05093'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BETULIA, SANTANDER',
        'value': '68092'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BITUIMA, CUNDINAMARCA',
        'value': '25095'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BOAVITA, BOYACA',
        'value': '15097'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BOCHALEMA, NORTE DE SANTANDER',
        'value': '54099'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '11'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BOGOTA, D.C, BOGOTA',
        'value': '906'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BOJACA, CUNDINAMARCA',
        'value': '25099'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '27'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BOJAYA, CHOCO',
        'value': '27099'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BOLIVAR, CAUCA',
        'value': '19100'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BOLIVAR, SANTANDER',
        'value': '68101'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BOLIVAR, VALLE',
        'value': '76100'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '20'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BOSCONIA, CESAR',
        'value': '20060'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BOYACA, BOYACA',
        'value': '15104'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BRICEÑO, ANTIOQUIA',
        'value': '05107'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BRICEÑO, BOYACA',
        'value': '15106'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BUCARAMANGA, SANTANDER',
        'value': '68001'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BUCARASICA, NORTE DE SANTANDER',
        'value': '54109'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BUENAVENTURA, VALLE',
        'value': '76109'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BUENAVISTA, BOYACA',
        'value': '15109'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '23'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BUENAVISTA, CORDOBA',
        'value': '23079'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '63'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BUENAVISTA, QUINDIO',
        'value': '63111'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '70'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BUENAVISTA, SUCRE',
        'value': '70110'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BUENOS AIRES, CAUCA',
        'value': '19110'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BUESACO, NARIÑO',
        'value': '52110'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BUGALAGRANDE, VALLE',
        'value': '76113'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BURITICA, ANTIOQUIA',
        'value': '05113'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'BUSBANZA, BOYACA',
        'value': '15114'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CABRERA, CUNDINAMARCA',
        'value': '25120'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CABRERA, SANTANDER',
        'value': '68121'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '50'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CABUYARO, META',
        'value': '50124'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '94'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CACAHUAL, GUAINIA',
        'value': '94886'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CACERES, ANTIOQUIA',
        'value': '05120'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CACHIPAY, CUNDINAMARCA',
        'value': '25123'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CACHIRA, NORTE DE SANTANDER',
        'value': '54128'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CACOTA, NORTE DE SANTANDER',
        'value': '54125'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CAICEDO, ANTIOQUIA',
        'value': '05125'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CAICEDONIA, VALLE',
        'value': '76122'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '70'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CAIMITO, SUCRE',
        'value': '70124'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CAJAMARCA, TOLIMA',
        'value': '73124'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CAJIBIO, CAUCA',
        'value': '19130'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CAJICA, CUNDINAMARCA',
        'value': '25126'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CALAMAR, BOLIVAR',
        'value': '13140'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '95'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CALAMAR, GUAVIARE',
        'value': '95015'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '63'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CALARCA, QUINDIO',
        'value': '63130'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CALDAS, ANTIOQUIA',
        'value': '05129'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CALDAS, BOYACA',
        'value': '15131'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CALDONO, CAUCA',
        'value': '19137'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CALI, VALLE',
        'value': '76001'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CALIFORNIA, SANTANDER',
        'value': '68132'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CALIMA, VALLE',
        'value': '76126'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CALOTO, CAUCA',
        'value': '19142'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CAMPAMENTO, ANTIOQUIA',
        'value': '05134'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '08'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CAMPO DE LA CRUZ, ATLANTICO',
        'value': '08137'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CAMPOALEGRE, HUILA',
        'value': '41132'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CAMPOHERMOSO, BOYACA',
        'value': '15135'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '23'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CANALETE, CORDOBA',
        'value': '23090'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '08'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CANDELARIA, ATLANTICO',
        'value': '08141'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CANDELARIA, VALLE',
        'value': '76130'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CANTAGALLO, BOLIVAR',
        'value': '13160'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CAÑASGORDAS, ANTIOQUIA',
        'value': '05138'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CAPARRAPI, CUNDINAMARCA',
        'value': '25148'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CAPITANEJO, SANTANDER',
        'value': '68147'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CAQUEZA, CUNDINAMARCA',
        'value': '25151'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CARACOLI, ANTIOQUIA',
        'value': '05142'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CARAMANTA, ANTIOQUIA',
        'value': '05145'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CARCASI, SANTANDER',
        'value': '68152'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CAREPA, ANTIOQUIA',
        'value': '05147'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CARMEN DE APICALA, TOLIMA',
        'value': '73148'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CARMEN DE CARUPA, CUNDINAMARCA',
        'value': '25154'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '27'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CARMEN DEL DARIEN, CHOCO',
        'value': '27150'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CAROLINA, ANTIOQUIA',
        'value': '05150'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CARTAGENA, BOLIVAR',
        'value': '13001'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '18'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CARTAGENA DEL CHAIRA, CAQUETA',
        'value': '18150'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CARTAGO, VALLE',
        'value': '76147'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '97'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CARURU, VAUPES',
        'value': '97161'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CASABIANCA, TOLIMA',
        'value': '73152'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '50'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CASTILLA LA NUEVA, META',
        'value': '50150'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CAUCASIA, ANTIOQUIA',
        'value': '05154'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CEPITA, SANTANDER',
        'value': '68160'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '23'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CERETE, CORDOBA',
        'value': '23162'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CERINZA, BOYACA',
        'value': '15162'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CERRITO, SANTANDER',
        'value': '68162'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '47'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CERRO SAN ANTONIO, MAGDALENA',
        'value': '47161'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '27'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CERTEGUI, CHOCO',
        'value': '27160'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CHACHAGÜI, NARIÑO',
        'value': '52240'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CHAGUANI, CUNDINAMARCA',
        'value': '25168'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '70'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CHALAN, SUCRE',
        'value': '70230'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '85'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CHAMEZA, CASANARE',
        'value': '85015'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CHAPARRAL, TOLIMA',
        'value': '73168'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CHARALA, SANTANDER',
        'value': '68167'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CHARTA, SANTANDER',
        'value': '68169'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CHIA, CUNDINAMARCA',
        'value': '25175'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CHIGORODO, ANTIOQUIA',
        'value': '05172'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '23'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CHIMA, CORDOBA',
        'value': '23168'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CHIMA, SANTANDER',
        'value': '68176'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '20'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CHIMICHAGUA, CESAR',
        'value': '20175'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CHINACOTA, NORTE DE SANTANDER',
        'value': '54172'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CHINAVITA, BOYACA',
        'value': '15172'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '17'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CHINCHINA, CALDAS',
        'value': '17174'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '23'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CHINU, CORDOBA',
        'value': '23182'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CHIPAQUE, CUNDINAMARCA',
        'value': '25178'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CHIPATA, SANTANDER',
        'value': '68179'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CHIQUINQUIRA, BOYACA',
        'value': '15176'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CHIQUIZA, BOYACA',
        'value': '15232'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '20'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CHIRIGUANA, CESAR',
        'value': '20178'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CHISCAS, BOYACA',
        'value': '15180'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CHITA, BOYACA',
        'value': '15183'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CHITAGA, NORTE DE SANTANDER',
        'value': '54174'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CHITARAQUE, BOYACA',
        'value': '15185'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CHIVATA, BOYACA',
        'value': '15187'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '47'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CHIVOLO, MAGDALENA',
        'value': '47170'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CHIVOR, BOYACA',
        'value': '15236'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CHOACHI, CUNDINAMARCA',
        'value': '25181'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CHOCONTA, CUNDINAMARCA',
        'value': '25183'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CICUCO, BOLIVAR',
        'value': '13188'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '47'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CIENAGA, MAGDALENA',
        'value': '47189'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '23'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CIENAGA DE ORO, CORDOBA',
        'value': '23189'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CIENEGA, BOYACA',
        'value': '15189'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CIMITARRA, SANTANDER',
        'value': '68190'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '63'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CIRCASIA, QUINDIO',
        'value': '63190'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CISNEROS, ANTIOQUIA',
        'value': '05190'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CIUDAD BOLIVAR, ANTIOQUIA',
        'value': '05101'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CLEMENCIA, BOLIVAR',
        'value': '13222'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'COCORNA, ANTIOQUIA',
        'value': '05197'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'COELLO, TOLIMA',
        'value': '73200'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'COGUA, CUNDINAMARCA',
        'value': '25200'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'COLOMBIA, HUILA',
        'value': '41206'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'COLON, NARIÑO',
        'value': '52203'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '86'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'COLON, PUTUMAYO',
        'value': '86219'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '70'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'COLOSO, SUCRE',
        'value': '70204'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'COMBITA, BOYACA',
        'value': '15204'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CONCEPCION, ANTIOQUIA',
        'value': '05206'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CONCEPCION, SANTANDER',
        'value': '68207'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CONCORDIA, ANTIOQUIA',
        'value': '05209'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '47'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CONCORDIA, MAGDALENA',
        'value': '47205'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '27'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CONDOTO, CHOCO',
        'value': '27205'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CONFINES, SANTANDER',
        'value': '68209'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CONSACA, NARIÑO',
        'value': '52207'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CONTADERO, NARIÑO',
        'value': '52210'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CONTRATACION, SANTANDER',
        'value': '68211'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CONVENCION, NORTE DE SANTANDER',
        'value': '54206'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'COPACABANA, ANTIOQUIA',
        'value': '05212'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'COPER, BOYACA',
        'value': '15212'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CORDOBA, BOLIVAR',
        'value': '13212'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CORDOBA, NARIÑO',
        'value': '52215'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '63'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CORDOBA, QUINDIO',
        'value': '63212'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CORINTO, CAUCA',
        'value': '19212'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'COROMORO, SANTANDER',
        'value': '68217'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '70'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'COROZAL, SUCRE',
        'value': '70215'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CORRALES, BOYACA',
        'value': '15215'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'COTA, CUNDINAMARCA',
        'value': '25214'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '23'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'COTORRA, CORDOBA',
        'value': '23300'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'COVARACHIA, BOYACA',
        'value': '15218'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '70'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'COVEÑAS, SUCRE',
        'value': '70221'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'COYAIMA, TOLIMA',
        'value': '73217'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '81'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CRAVO NORTE, ARAUCA',
        'value': '81220'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CUASPUD, NARIÑO',
        'value': '52224'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CUBARA, BOYACA',
        'value': '15223'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '50'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CUBARRAL, META',
        'value': '50223'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CUCAITA, BOYACA',
        'value': '15224'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CUCUNUBA, CUNDINAMARCA',
        'value': '25224'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CUCUTA, NORTE DE SANTANDER',
        'value': '54001'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CUCUTILLA, NORTE DE SANTANDER',
        'value': '54223'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CUITIVA, BOYACA',
        'value': '15226'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '50'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CUMARAL, META',
        'value': '50226'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '99'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CUMARIBO, VICHADA',
        'value': '99773'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CUMBAL, NARIÑO',
        'value': '52227'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CUMBITARA, NARIÑO',
        'value': '52233'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CUNDAY, TOLIMA',
        'value': '73226'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '18'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CURILLO, CAQUETA',
        'value': '18205'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CURITI, SANTANDER',
        'value': '68229'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '20'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'CURUMANI, CESAR',
        'value': '20228'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'DABEIBA, ANTIOQUIA',
        'value': '05234'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'DAGUA, VALLE',
        'value': '76233'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '44'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'DIBULLA, LA GUAJIRA',
        'value': '44090'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '44'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'DISTRACCION, LA GUAJIRA',
        'value': '44098'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'DOLORES, TOLIMA',
        'value': '73236'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'DONMATIAS, ANTIOQUIA',
        'value': '05237'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '66'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'DOSQUEBRADAS, RISARALDA',
        'value': '66170'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'DUITAMA, BOYACA',
        'value': '15238'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'DURANIA, NORTE DE SANTANDER',
        'value': '54239'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EBEJICO, ANTIOQUIA',
        'value': '05240'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL AGUILA, VALLE',
        'value': '76243'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL BAGRE, ANTIOQUIA',
        'value': '05250'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '47'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL BANCO, MAGDALENA',
        'value': '47245'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL CAIRO, VALLE',
        'value': '76246'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '50'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL CALVARIO, META',
        'value': '50245'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '27'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL CANTON DEL SAN PABLO, CHOCO',
        'value': '27135'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL CARMEN, NORTE DE SANTANDER',
        'value': '54245'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '27'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL CARMEN DE ATRATO, CHOCO',
        'value': '27245'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL CARMEN DE BOLIVAR, BOLIVAR',
        'value': '13244'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL CARMEN DE CHUCURI, SANTANDER',
        'value': '68235'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL CARMEN DE VIBORAL, ANTIOQUIA',
        'value': '05148'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '50'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL CASTILLO, META',
        'value': '50251'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL CERRITO, VALLE',
        'value': '76248'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL CHARCO, NARIÑO',
        'value': '52250'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL COCUY, BOYACA',
        'value': '15244'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL COLEGIO, CUNDINAMARCA',
        'value': '25245'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '20'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL COPEY, CESAR',
        'value': '20238'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '18'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL DONCELLO, CAQUETA',
        'value': '18247'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '50'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL DORADO, META',
        'value': '50270'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL DOVIO, VALLE',
        'value': '76250'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '91'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL ENCANTO, AMAZONAS',
        'value': '91263'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL ESPINO, BOYACA',
        'value': '15248'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL GUACAMAYO, SANTANDER',
        'value': '68245'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL GUAMO, BOLIVAR',
        'value': '13248'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '27'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL LITORAL DEL SAN JUAN, CHOCO',
        'value': '27250'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '44'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL MOLINO, LA GUAJIRA',
        'value': '44110'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '20'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL PASO, CESAR',
        'value': '20250'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '18'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL PAUJIL, CAQUETA',
        'value': '18256'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL PEÑOL, NARIÑO',
        'value': '52254'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL PEÑON, BOLIVAR',
        'value': '13268'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL PEÑON, CUNDINAMARCA',
        'value': '25258'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL PEÑON, SANTANDER',
        'value': '68250'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '47'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL PIÑON, MAGDALENA',
        'value': '47258'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL PLAYON, SANTANDER',
        'value': '68255'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '47'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL RETEN, MAGDALENA',
        'value': '47268'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '95'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL RETORNO, GUAVIARE',
        'value': '95025'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '70'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL ROBLE, SUCRE',
        'value': '70233'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL ROSAL, CUNDINAMARCA',
        'value': '25260'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL ROSARIO, NARIÑO',
        'value': '52256'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL SANTUARIO, ANTIOQUIA',
        'value': '05697'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL TABLON DE GOMEZ, NARIÑO',
        'value': '52258'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL TAMBO, CAUCA',
        'value': '19256'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL TAMBO, NARIÑO',
        'value': '52260'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL TARRA, NORTE DE SANTANDER',
        'value': '54250'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'EL ZULIA, NORTE DE SANTANDER',
        'value': '54261'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ELIAS, HUILA',
        'value': '41244'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ENCINO, SANTANDER',
        'value': '68264'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ENCISO, SANTANDER',
        'value': '68266'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ENTRERRIOS, ANTIOQUIA',
        'value': '05264'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ENVIGADO, ANTIOQUIA',
        'value': '05266'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ESPINAL, TOLIMA',
        'value': '73268'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'FACATATIVA, CUNDINAMARCA',
        'value': '25269'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'FALAN, TOLIMA',
        'value': '73270'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '17'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'FILADELFIA, CALDAS',
        'value': '17272'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '63'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'FILANDIA, QUINDIO',
        'value': '63272'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'FIRAVITOBA, BOYACA',
        'value': '15272'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'FLANDES, TOLIMA',
        'value': '73275'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '18'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'FLORENCIA, CAQUETA',
        'value': '18001'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'FLORENCIA, CAUCA',
        'value': '19290'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'FLORESTA, BOYACA',
        'value': '15276'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'FLORIAN, SANTANDER',
        'value': '68271'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'FLORIDA, VALLE',
        'value': '76275'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'FLORIDABLANCA, SANTANDER',
        'value': '68276'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'FOMEQUE, CUNDINAMARCA',
        'value': '25279'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '44'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'FONSECA, LA GUAJIRA',
        'value': '44279'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '81'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'FORTUL, ARAUCA',
        'value': '81300'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'FOSCA, CUNDINAMARCA',
        'value': '25281'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'FRANCISCO PIZARRO, NARIÑO',
        'value': '52520'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'FREDONIA, ANTIOQUIA',
        'value': '05282'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'FRESNO, TOLIMA',
        'value': '73283'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'FRONTINO, ANTIOQUIA',
        'value': '05284'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '50'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'FUENTE DE ORO, META',
        'value': '50287'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '47'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'FUNDACION, MAGDALENA',
        'value': '47288'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'FUNES, NARIÑO',
        'value': '52287'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'FUNZA, CUNDINAMARCA',
        'value': '25286'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'FUQUENE, CUNDINAMARCA',
        'value': '25288'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'FUSAGASUGA, CUNDINAMARCA',
        'value': '25290'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GACHALA, CUNDINAMARCA',
        'value': '25293'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GACHANCIPA, CUNDINAMARCA',
        'value': '25295'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GACHANTIVA, BOYACA',
        'value': '15293'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GACHETA, CUNDINAMARCA',
        'value': '25297'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GALAN, SANTANDER',
        'value': '68296'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '08'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GALAPA, ATLANTICO',
        'value': '08296'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '70'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GALERAS, SUCRE',
        'value': '70235'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GAMA, CUNDINAMARCA',
        'value': '25299'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '20'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GAMARRA, CESAR',
        'value': '20295'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GAMBITA, SANTANDER',
        'value': '68298'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GAMEZA, BOYACA',
        'value': '15296'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GARAGOA, BOYACA',
        'value': '15299'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GARZON, HUILA',
        'value': '41298'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '63'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GENOVA, QUINDIO',
        'value': '63302'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GIGANTE, HUILA',
        'value': '41306'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GINEBRA, VALLE',
        'value': '76306'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GIRALDO, ANTIOQUIA',
        'value': '05306'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GIRARDOT, CUNDINAMARCA',
        'value': '25307'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GIRARDOTA, ANTIOQUIA',
        'value': '05308'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GIRON, SANTANDER',
        'value': '68307'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GOMEZ PLATA, ANTIOQUIA',
        'value': '05310'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '20'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GONZALEZ, CESAR',
        'value': '20310'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GRAMALOTE, NORTE DE SANTANDER',
        'value': '54313'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GRANADA, ANTIOQUIA',
        'value': '05313'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GRANADA, CUNDINAMARCA',
        'value': '25312'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '50'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GRANADA, META',
        'value': '50313'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GUACA, SANTANDER',
        'value': '68318'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GUACAMAYAS, BOYACA',
        'value': '15317'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GUACARI, VALLE',
        'value': '76318'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GUACHENE, CAUCA',
        'value': '19300'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GUACHETA, CUNDINAMARCA',
        'value': '25317'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GUACHUCAL, NARIÑO',
        'value': '52317'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GUADALAJARA DE BUGA, VALLE',
        'value': '76111'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GUADALUPE, ANTIOQUIA',
        'value': '05315'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GUADALUPE, HUILA',
        'value': '41319'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GUADALUPE, SANTANDER',
        'value': '68320'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GUADUAS, CUNDINAMARCA',
        'value': '25320'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GUAITARILLA, NARIÑO',
        'value': '52320'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GUALMATAN, NARIÑO',
        'value': '52323'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '47'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GUAMAL, MAGDALENA',
        'value': '47318'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '50'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GUAMAL, META',
        'value': '50318'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GUAMO, TOLIMA',
        'value': '73319'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GUAPI, CAUCA',
        'value': '19318'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GUAPOTA, SANTANDER',
        'value': '68322'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '70'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GUARANDA, SUCRE',
        'value': '70265'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GUARNE, ANTIOQUIA',
        'value': '05318'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GUASCA, CUNDINAMARCA',
        'value': '25322'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GUATAPE, ANTIOQUIA',
        'value': '05321'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GUATAQUI, CUNDINAMARCA',
        'value': '25324'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GUATAVITA, CUNDINAMARCA',
        'value': '25326'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GUATEQUE, BOYACA',
        'value': '15322'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '66'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GUATICA, RISARALDA',
        'value': '66318'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GUAVATA, SANTANDER',
        'value': '68324'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GUAYABAL DE SIQUIMA, CUNDINAMARCA',
        'value': '25328'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GUAYABETAL, CUNDINAMARCA',
        'value': '25335'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GUAYATA, BOYACA',
        'value': '15325'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GÜEPSA, SANTANDER',
        'value': '68327'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GÜICAN, BOYACA',
        'value': '15332'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'GUTIERREZ, CUNDINAMARCA',
        'value': '25339'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'HACARI, NORTE DE SANTANDER',
        'value': '54344'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'HATILLO DE LOBA, BOLIVAR',
        'value': '13300'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'HATO, SANTANDER',
        'value': '68344'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '85'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'HATO COROZAL, CASANARE',
        'value': '85125'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '44'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'HATONUEVO, LA GUAJIRA',
        'value': '44378'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'HELICONIA, ANTIOQUIA',
        'value': '05347'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'HERRAN, NORTE DE SANTANDER',
        'value': '54347'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'HERVEO, TOLIMA',
        'value': '73347'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'HISPANIA, ANTIOQUIA',
        'value': '05353'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'HOBO, HUILA',
        'value': '41349'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'HONDA, TOLIMA',
        'value': '73349'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'IBAGUE, TOLIMA',
        'value': '73001'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ICONONZO, TOLIMA',
        'value': '73352'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ILES, NARIÑO',
        'value': '52352'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'IMUES, NARIÑO',
        'value': '52354'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '94'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'INIRIDA, GUAINIA',
        'value': '94001'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'INZA, CAUCA',
        'value': '19355'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'IPIALES, NARIÑO',
        'value': '52356'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'IQUIRA, HUILA',
        'value': '41357'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ISNOS, HUILA',
        'value': '41359'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '27'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ISTMINA, CHOCO',
        'value': '27361'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ITAGUI, ANTIOQUIA',
        'value': '05360'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ITUANGO, ANTIOQUIA',
        'value': '05361'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'IZA, BOYACA',
        'value': '15362'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'JAMBALO, CAUCA',
        'value': '19364'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'JAMUNDI, VALLE',
        'value': '76364'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'JARDIN, ANTIOQUIA',
        'value': '05364'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'JENESANO, BOYACA',
        'value': '15367'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'JERICO, ANTIOQUIA',
        'value': '05368'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'JERICO, BOYACA',
        'value': '15368'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'JERUSALEN, CUNDINAMARCA',
        'value': '25368'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'JESUS MARIA, SANTANDER',
        'value': '68368'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'JORDAN, SANTANDER',
        'value': '68370'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '08'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'JUAN DE ACOSTA, ATLANTICO',
        'value': '08372'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'JUNIN, CUNDINAMARCA',
        'value': '25372'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '27'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'JURADO, CHOCO',
        'value': '27372'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '23'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA APARTADA, CORDOBA',
        'value': '23350'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA ARGENTINA, HUILA',
        'value': '41378'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA BELLEZA, SANTANDER',
        'value': '68377'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA CALERA, CUNDINAMARCA',
        'value': '25377'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA CAPILLA, BOYACA',
        'value': '15380'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA CEJA, ANTIOQUIA',
        'value': '05376'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '66'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA CELIA, RISARALDA',
        'value': '66383'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '91'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA CHORRERA, AMAZONAS',
        'value': '91405'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA CRUZ, NARIÑO',
        'value': '52378'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA CUMBRE, VALLE',
        'value': '76377'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '17'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA DORADA, CALDAS',
        'value': '17380'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA ESPERANZA, NORTE DE SANTANDER',
        'value': '54385'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA ESTRELLA, ANTIOQUIA',
        'value': '05380'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA FLORIDA, NARIÑO',
        'value': '52381'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '20'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA GLORIA, CESAR',
        'value': '20383'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '94'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA GUADALUPE, GUAINIA',
        'value': '94885'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '20'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA JAGUA DE IBIRICO, CESAR',
        'value': '20400'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA LLANADA, NARIÑO',
        'value': '52385'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '50'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA MACARENA, META',
        'value': '50350'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '17'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA MERCED, CALDAS',
        'value': '17388'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA MESA, CUNDINAMARCA',
        'value': '25386'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '18'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA MONTAÑITA, CAQUETA',
        'value': '18410'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA PALMA, CUNDINAMARCA',
        'value': '25394'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '20'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA PAZ, CESAR',
        'value': '20621'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA PAZ, SANTANDER',
        'value': '68397'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '91'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA PEDRERA, AMAZONAS',
        'value': '91407'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA PEÑA, CUNDINAMARCA',
        'value': '25398'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA PINTADA, ANTIOQUIA',
        'value': '05390'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA PLATA, HUILA',
        'value': '41396'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA PLAYA, NORTE DE SANTANDER',
        'value': '54398'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '99'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA PRIMAVERA, VICHADA',
        'value': '99524'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '85'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA SALINA, CASANARE',
        'value': '85136'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA SIERRA, CAUCA',
        'value': '19392'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '63'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA TEBAIDA, QUINDIO',
        'value': '63401'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA TOLA, NARIÑO',
        'value': '52390'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA UNION, ANTIOQUIA',
        'value': '05400'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA UNION, NARIÑO',
        'value': '52399'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '70'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA UNION, SUCRE',
        'value': '70400'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA UNION, VALLE',
        'value': '76400'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA UVITA, BOYACA',
        'value': '15403'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA VEGA, CAUCA',
        'value': '19397'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA VEGA, CUNDINAMARCA',
        'value': '25402'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA VICTORIA, BOYACA',
        'value': '15401'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA VICTORIA, VALLE',
        'value': '76403'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '91'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA VICTORIA, AMAZONAS',
        'value': '91430'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '66'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LA VIRGINIA, RISARALDA',
        'value': '66400'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LABATECA, NORTE DE SANTANDER',
        'value': '54377'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LABRANZAGRANDE, BOYACA',
        'value': '15377'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LANDAZURI, SANTANDER',
        'value': '68385'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LEBRIJA, SANTANDER',
        'value': '68406'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LEIVA, NARIÑO',
        'value': '52405'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '50'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LEJANIAS, META',
        'value': '50400'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LENGUAZAQUE, CUNDINAMARCA',
        'value': '25407'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LERIDA, TOLIMA',
        'value': '73408'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '91'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LETICIA, AMAZONAS',
        'value': '91001'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LIBANO, TOLIMA',
        'value': '73411'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LIBORINA, ANTIOQUIA',
        'value': '05411'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LINARES, NARIÑO',
        'value': '52411'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '27'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LLORO, CHOCO',
        'value': '27413'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LOPEZ, CAUCA',
        'value': '19418'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '23'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LORICA, CORDOBA',
        'value': '23417'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LOS ANDES, NARIÑO',
        'value': '52418'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '23'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LOS CORDOBAS, CORDOBA',
        'value': '23419'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '70'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LOS PALMITOS, SUCRE',
        'value': '70418'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LOS PATIOS, NORTE DE SANTANDER',
        'value': '54405'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LOS SANTOS, SANTANDER',
        'value': '68418'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LOURDES, NORTE DE SANTANDER',
        'value': '54418'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '08'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'LURUACO, ATLANTICO',
        'value': '08421'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MACANAL, BOYACA',
        'value': '15425'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MACARAVITA, SANTANDER',
        'value': '68425'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MACEO, ANTIOQUIA',
        'value': '05425'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MACHETA, CUNDINAMARCA',
        'value': '25426'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MADRID, CUNDINAMARCA',
        'value': '25430'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MAGANGUE, BOLIVAR',
        'value': '13430'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MAGÜI, NARIÑO',
        'value': '52427'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MAHATES, BOLIVAR',
        'value': '13433'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '44'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MAICAO, LA GUAJIRA',
        'value': '44430'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '70'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MAJAGUAL, SUCRE',
        'value': '70429'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MALAGA, SANTANDER',
        'value': '68432'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '08'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MALAMBO, ATLANTICO',
        'value': '08433'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MALLAMA, NARIÑO',
        'value': '52435'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '08'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MANATI, ATLANTICO',
        'value': '08436'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '20'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MANAURE, CESAR',
        'value': '20443'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '44'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MANAURE, LA GUAJIRA',
        'value': '44560'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '85'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MANI, CASANARE',
        'value': '85139'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '17'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MANIZALES, CALDAS',
        'value': '17001'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MANTA, CUNDINAMARCA',
        'value': '25436'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '17'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MANZANARES, CALDAS',
        'value': '17433'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '50'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MAPIRIPAN, META',
        'value': '50325'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '94'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MAPIRIPANA, GUAINIA',
        'value': '94663'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MARGARITA, BOLIVAR',
        'value': '13440'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MARIA LA BAJA, BOLIVAR',
        'value': '13442'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MARINILLA, ANTIOQUIA',
        'value': '05440'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MARIPI, BOYACA',
        'value': '15442'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '17'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MARMATO, CALDAS',
        'value': '17442'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '17'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MARQUETALIA, CALDAS',
        'value': '17444'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '66'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MARSELLA, RISARALDA',
        'value': '66440'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '17'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MARULANDA, CALDAS',
        'value': '17446'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MATANZA, SANTANDER',
        'value': '68444'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MEDELLIN, ANTIOQUIA',
        'value': '05001'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MEDINA, CUNDINAMARCA',
        'value': '25438'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '27'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MEDIO ATRATO, CHOCO',
        'value': '27425'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '27'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MEDIO BAUDO, CHOCO',
        'value': '27430'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '27'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MEDIO SAN JUAN, CHOCO',
        'value': '27450'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MELGAR, TOLIMA',
        'value': '73449'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MERCADERES, CAUCA',
        'value': '19450'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '50'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MESETAS, META',
        'value': '50330'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '18'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MILAN, CAQUETA',
        'value': '18460'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MIRAFLORES, BOYACA',
        'value': '15455'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '95'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MIRAFLORES, GUAVIARE',
        'value': '95200'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MIRANDA, CAUCA',
        'value': '19455'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '91'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MIRITI - PARANA, AMAZONAS',
        'value': '91460'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '66'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MISTRATO, RISARALDA',
        'value': '66456'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '97'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MITU, VAUPES',
        'value': '97001'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '86'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MOCOA, PUTUMAYO',
        'value': '86001'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MOGOTES, SANTANDER',
        'value': '68464'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MOLAGAVITA, SANTANDER',
        'value': '68468'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '23'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MOMIL, CORDOBA',
        'value': '23464'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MOMPOS, BOLIVAR',
        'value': '13468'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MONGUA, BOYACA',
        'value': '15464'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MONGUI, BOYACA',
        'value': '15466'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MONIQUIRA, BOYACA',
        'value': '15469'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MONTEBELLO, ANTIOQUIA',
        'value': '05467'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MONTECRISTO, BOLIVAR',
        'value': '13458'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '23'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MONTELIBANO, CORDOBA',
        'value': '23466'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '63'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MONTENEGRO, QUINDIO',
        'value': '63470'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '23'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MONTERIA, CORDOBA',
        'value': '23001'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '85'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MONTERREY, CASANARE',
        'value': '85162'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '23'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MOÑITOS, CORDOBA',
        'value': '23500'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MORALES, BOLIVAR',
        'value': '13473'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MORALES, CAUCA',
        'value': '19473'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '18'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MORELIA, CAQUETA',
        'value': '18479'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '94'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MORICHAL, GUAINIA',
        'value': '94888'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '70'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MORROA, SUCRE',
        'value': '70473'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MOSQUERA, CUNDINAMARCA',
        'value': '25473'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MOSQUERA, NARIÑO',
        'value': '52473'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MOTAVITA, BOYACA',
        'value': '15476'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MURILLO, TOLIMA',
        'value': '73461'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MURINDO, ANTIOQUIA',
        'value': '05475'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MUTATA, ANTIOQUIA',
        'value': '05480'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MUTISCUA, NORTE DE SANTANDER',
        'value': '54480'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'MUZO, BOYACA',
        'value': '15480'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'NARIÑO, ANTIOQUIA',
        'value': '05483'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'NARIÑO, NARIÑO',
        'value': '52480'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'NATAGA, HUILA',
        'value': '41483'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'NATAGAIMA, TOLIMA',
        'value': '73483'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'NECHI, ANTIOQUIA',
        'value': '05495'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'NECOCLI, ANTIOQUIA',
        'value': '05490'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '17'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'NEIRA, CALDAS',
        'value': '17486'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'NEIVA, HUILA',
        'value': '41001'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'NEMOCON, CUNDINAMARCA',
        'value': '25486'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'NILO, CUNDINAMARCA',
        'value': '25488'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'NIMAIMA, CUNDINAMARCA',
        'value': '25489'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'NOBSA, BOYACA',
        'value': '15491'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'NOCAIMA, CUNDINAMARCA',
        'value': '25491'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '17'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'NORCASIA, CALDAS',
        'value': '17495'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'NOROSI, BOLIVAR',
        'value': '13490'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '27'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'NOVITA, CHOCO',
        'value': '27491'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '47'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'NUEVA GRANADA, MAGDALENA',
        'value': '47460'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'NUEVO COLON, BOYACA',
        'value': '15494'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '85'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'NUNCHIA, CASANARE',
        'value': '85225'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '27'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'NUQUI, CHOCO',
        'value': '27495'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'OBANDO, VALLE',
        'value': '76497'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'OCAMONTE, SANTANDER',
        'value': '68498'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'OCAÑA, NORTE DE SANTANDER',
        'value': '54498'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'OIBA, SANTANDER',
        'value': '68500'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'OICATA, BOYACA',
        'value': '15500'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'OLAYA, ANTIOQUIA',
        'value': '05501'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'OLAYA HERRERA, NARIÑO',
        'value': '52490'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ONZAGA, SANTANDER',
        'value': '68502'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'OPORAPA, HUILA',
        'value': '41503'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '86'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ORITO, PUTUMAYO',
        'value': '86320'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '85'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'OROCUE, CASANARE',
        'value': '85230'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ORTEGA, TOLIMA',
        'value': '73504'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'OSPINA, NARIÑO',
        'value': '52506'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'OTANCHE, BOYACA',
        'value': '15507'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '70'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'OVEJAS, SUCRE',
        'value': '70508'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PACHAVITA, BOYACA',
        'value': '15511'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PACHO, CUNDINAMARCA',
        'value': '25513'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '97'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PACOA, VAUPES',
        'value': '97511'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '17'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PACORA, CALDAS',
        'value': '17513'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PADILLA, CAUCA',
        'value': '19513'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PAEZ, CAUCA',
        'value': '19517'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PAICOL, HUILA',
        'value': '41518'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '20'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PAILITAS, CESAR',
        'value': '20517'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PAIME, CUNDINAMARCA',
        'value': '25518'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PAIPA, BOYACA',
        'value': '15516'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PAJARITO, BOYACA',
        'value': '15518'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PALERMO, HUILA',
        'value': '41524'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '17'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PALESTINA, CALDAS',
        'value': '17524'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PALESTINA, HUILA',
        'value': '41530'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PALMAR, SANTANDER',
        'value': '68522'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '08'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PALMAR DE VARELA, ATLANTICO',
        'value': '08520'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PALMAS DEL SOCORRO, SANTANDER',
        'value': '68524'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PALMIRA, VALLE',
        'value': '76520'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '70'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PALMITO, SUCRE',
        'value': '70523'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PALOCABILDO, TOLIMA',
        'value': '73520'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PAMPLONA, NORTE DE SANTANDER',
        'value': '54518'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PAMPLONITA, NORTE DE SANTANDER',
        'value': '54520'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '94'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PANA PANA, GUAINIA',
        'value': '94887'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PANDI, CUNDINAMARCA',
        'value': '25524'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PANQUEBA, BOYACA',
        'value': '15522'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '97'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PAPUNAUA, VAUPES',
        'value': '97777'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PARAMO, SANTANDER',
        'value': '68533'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PARATEBUENO, CUNDINAMARCA',
        'value': '25530'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PASCA, CUNDINAMARCA',
        'value': '25535'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PASTO, NARIÑO',
        'value': '52001'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PATIA, CAUCA',
        'value': '19532'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PAUNA, BOYACA',
        'value': '15531'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PAYA, BOYACA',
        'value': '15533'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '85'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PAZ DE ARIPORO, CASANARE',
        'value': '85250'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PAZ DE RIO, BOYACA',
        'value': '15537'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '47'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PEDRAZA, MAGDALENA',
        'value': '47541'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '20'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PELAYA, CESAR',
        'value': '20550'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '17'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PENSILVANIA, CALDAS',
        'value': '17541'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PEÑOL, ANTIOQUIA',
        'value': '05541'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PEQUE, ANTIOQUIA',
        'value': '05543'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '66'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PEREIRA, RISARALDA',
        'value': '66001'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PESCA, BOYACA',
        'value': '15542'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PIAMONTE, CAUCA',
        'value': '19533'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PIEDECUESTA, SANTANDER',
        'value': '68547'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PIEDRAS, TOLIMA',
        'value': '73547'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PIENDAMO, CAUCA',
        'value': '19548'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '63'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PIJAO, QUINDIO',
        'value': '63548'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '47'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PIJIÑO DEL CARMEN, MAGDALENA',
        'value': '47545'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PINCHOTE, SANTANDER',
        'value': '68549'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PINILLOS, BOLIVAR',
        'value': '13549'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '08'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PIOJO, ATLANTICO',
        'value': '08549'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PISBA, BOYACA',
        'value': '15550'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PITAL, HUILA',
        'value': '41548'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PITALITO, HUILA',
        'value': '41551'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '47'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PIVIJAY, MAGDALENA',
        'value': '47551'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PLANADAS, TOLIMA',
        'value': '73555'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '23'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PLANETA RICA, CORDOBA',
        'value': '23555'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '47'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PLATO, MAGDALENA',
        'value': '47555'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'POLICARPA, NARIÑO',
        'value': '52540'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '08'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'POLONUEVO, ATLANTICO',
        'value': '08558'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '08'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PONEDERA, ATLANTICO',
        'value': '08560'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'POPAYAN, CAUCA',
        'value': '19001'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '85'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PORE, CASANARE',
        'value': '85263'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'POTOSI, NARIÑO',
        'value': '52560'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PRADERA, VALLE',
        'value': '76563'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PRADO, TOLIMA',
        'value': '73563'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PROVIDENCIA, NARIÑO',
        'value': '52565'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '88'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PROVIDENCIA, SAN ANDRES',
        'value': '88564'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '20'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUEBLO BELLO, CESAR',
        'value': '20570'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '23'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUEBLO NUEVO, CORDOBA',
        'value': '23570'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '66'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUEBLO RICO, RISARALDA',
        'value': '66572'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUEBLORRICO, ANTIOQUIA',
        'value': '05576'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '47'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUEBLOVIEJO, MAGDALENA',
        'value': '47570'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUENTE NACIONAL, SANTANDER',
        'value': '68572'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUERRES, NARIÑO',
        'value': '52573'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '91'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUERTO ALEGRIA, AMAZONAS',
        'value': '91530'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '91'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUERTO ARICA, AMAZONAS',
        'value': '91536'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '86'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUERTO ASIS, PUTUMAYO',
        'value': '86568'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUERTO BERRIO, ANTIOQUIA',
        'value': '05579'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUERTO BOYACA, BOYACA',
        'value': '15572'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '86'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUERTO CAICEDO, PUTUMAYO',
        'value': '86569'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '99'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUERTO CARREÑO, VICHADA',
        'value': '99001'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '08'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUERTO COLOMBIA, ATLANTICO',
        'value': '08573'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '94'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUERTO COLOMBIA, GUAINIA',
        'value': '94884'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '50'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUERTO CONCORDIA, META',
        'value': '50450'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '23'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUERTO ESCONDIDO, CORDOBA',
        'value': '23574'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '50'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUERTO GAITAN, META',
        'value': '50568'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '86'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUERTO GUZMAN, PUTUMAYO',
        'value': '86571'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '86'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUERTO LEGUIZAMO, PUTUMAYO',
        'value': '86573'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '23'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUERTO LIBERTADOR, CORDOBA',
        'value': '23580'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '50'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUERTO LLERAS, META',
        'value': '50577'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '50'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUERTO LOPEZ, META',
        'value': '50573'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUERTO NARE, ANTIOQUIA',
        'value': '05585'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '91'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUERTO NARIÑO, AMAZONAS',
        'value': '91540'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUERTO PARRA, SANTANDER',
        'value': '68573'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '18'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUERTO RICO, CAQUETA',
        'value': '18592'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '50'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUERTO RICO, META',
        'value': '50590'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '81'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUERTO RONDON, ARAUCA',
        'value': '81591'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUERTO SALGAR, CUNDINAMARCA',
        'value': '25572'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUERTO SANTANDER, NORTE DE SANTANDER',
        'value': '54553'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '91'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUERTO SANTANDER, AMAZONAS',
        'value': '91669'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUERTO TEJADA, CAUCA',
        'value': '19573'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUERTO TRIUNFO, ANTIOQUIA',
        'value': '05591'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUERTO WILCHES, SANTANDER',
        'value': '68575'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PULI, CUNDINAMARCA',
        'value': '25580'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PUPIALES, NARIÑO',
        'value': '52585'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PURACE, CAUCA',
        'value': '19585'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PURIFICACION, TOLIMA',
        'value': '73585'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '23'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'PURISIMA, CORDOBA',
        'value': '23586'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'QUEBRADANEGRA, CUNDINAMARCA',
        'value': '25592'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'QUETAME, CUNDINAMARCA',
        'value': '25594'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '27'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'QUIBDO, CHOCO',
        'value': '27001'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '63'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'QUIMBAYA, QUINDIO',
        'value': '63594'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '66'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'QUINCHIA, RISARALDA',
        'value': '66594'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'QUIPAMA, BOYACA',
        'value': '15580'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'QUIPILE, CUNDINAMARCA',
        'value': '25596'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'RAGONVALIA, NORTE DE SANTANDER',
        'value': '54599'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'RAMIRIQUI, BOYACA',
        'value': '15599'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'RAQUIRA, BOYACA',
        'value': '15600'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '85'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'RECETOR, CASANARE',
        'value': '85279'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'REGIDOR, BOLIVAR',
        'value': '13580'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'REMEDIOS, ANTIOQUIA',
        'value': '05604'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '47'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'REMOLINO, MAGDALENA',
        'value': '47605'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '08'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'REPELON, ATLANTICO',
        'value': '08606'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '50'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'RESTREPO, META',
        'value': '50606'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'RESTREPO, VALLE',
        'value': '76606'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'RETIRO, ANTIOQUIA',
        'value': '05607'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'RICAURTE, CUNDINAMARCA',
        'value': '25612'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'RICAURTE, NARIÑO',
        'value': '52612'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '20'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'RIO DE ORO, CESAR',
        'value': '20614'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '27'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'RIO IRO, CHOCO',
        'value': '27580'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '27'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'RIO QUITO, CHOCO',
        'value': '27600'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'RIO VIEJO, BOLIVAR',
        'value': '13600'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'RIOBLANCO, TOLIMA',
        'value': '73616'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'RIOFRIO, VALLE',
        'value': '76616'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '44'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'RIOHACHA, LA GUAJIRA',
        'value': '44001'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'RIONEGRO, ANTIOQUIA',
        'value': '05615'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'RIONEGRO, SANTANDER',
        'value': '68615'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '17'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'RIOSUCIO, CALDAS',
        'value': '17614'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '27'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'RIOSUCIO, CHOCO',
        'value': '27615'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '17'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'RISARALDA, CALDAS',
        'value': '17616'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'RIVERA, HUILA',
        'value': '41615'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ROBERTO PAYAN, NARIÑO',
        'value': '52621'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ROLDANILLO, VALLE',
        'value': '76622'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'RONCESVALLES, TOLIMA',
        'value': '73622'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'RONDON, BOYACA',
        'value': '15621'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ROSAS, CAUCA',
        'value': '19622'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ROVIRA, TOLIMA',
        'value': '73624'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SABANA DE TORRES, SANTANDER',
        'value': '68655'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '08'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SABANAGRANDE, ATLANTICO',
        'value': '08634'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SABANALARGA, ANTIOQUIA',
        'value': '05628'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '08'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SABANALARGA, ATLANTICO',
        'value': '08638'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '85'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SABANALARGA, CASANARE',
        'value': '85300'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '47'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SABANAS DE SAN ANGEL, MAGDALENA',
        'value': '47660'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SABANETA, ANTIOQUIA',
        'value': '05631'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SABOYA, BOYACA',
        'value': '15632'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '85'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SACAMA, CASANARE',
        'value': '85315'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SACHICA, BOYACA',
        'value': '15638'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '23'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAHAGUN, CORDOBA',
        'value': '23660'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SALADOBLANCO, HUILA',
        'value': '41660'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '17'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SALAMINA, CALDAS',
        'value': '17653'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '47'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SALAMINA, MAGDALENA',
        'value': '47675'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SALAZAR, NORTE DE SANTANDER',
        'value': '54660'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SALDAÑA, TOLIMA',
        'value': '73671'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '63'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SALENTO, QUINDIO',
        'value': '63690'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SALGAR, ANTIOQUIA',
        'value': '05642'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAMACA, BOYACA',
        'value': '15646'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '17'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAMANA, CALDAS',
        'value': '17662'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAMANIEGO, NARIÑO',
        'value': '52678'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '70'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAMPUES, SUCRE',
        'value': '70670'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN AGUSTIN, HUILA',
        'value': '41668'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '20'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN ALBERTO, CESAR',
        'value': '20710'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN ANDRES, SANTANDER',
        'value': '68669'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '88'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN ANDRES, SAN ANDRES',
        'value': '88001'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN ANDRES DE CUERQUIA, ANTIOQUIA',
        'value': '05647'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN ANDRES DE TUMACO, NARIÑO',
        'value': '52835'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '23'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN ANDRES SOTAVENTO, CORDOBA',
        'value': '23670'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '23'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN ANTERO, CORDOBA',
        'value': '23672'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN ANTONIO, TOLIMA',
        'value': '73675'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN ANTONIO DEL TEQUENDAMA, CUNDINAMARCA',
        'value': '25645'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN BENITO, SANTANDER',
        'value': '68673'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '70'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN BENITO ABAD, SUCRE',
        'value': '70678'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN BERNARDO, CUNDINAMARCA',
        'value': '25649'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN BERNARDO, NARIÑO',
        'value': '52685'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '23'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN BERNARDO DEL VIENTO, CORDOBA',
        'value': '23675'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN CALIXTO, NORTE DE SANTANDER',
        'value': '54670'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN CARLOS, ANTIOQUIA',
        'value': '05649'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '23'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN CARLOS, CORDOBA',
        'value': '23678'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '50'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN CARLOS DE GUAROA, META',
        'value': '50680'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN CAYETANO, CUNDINAMARCA',
        'value': '25653'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN CAYETANO, NORTE DE SANTANDER',
        'value': '54673'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN CRISTOBAL, BOLIVAR',
        'value': '13620'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '20'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN DIEGO, CESAR',
        'value': '20750'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN EDUARDO, BOYACA',
        'value': '15660'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN ESTANISLAO, BOLIVAR',
        'value': '13647'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '94'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN FELIPE, GUAINIA',
        'value': '94883'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN FERNANDO, BOLIVAR',
        'value': '13650'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN FRANCISCO, ANTIOQUIA',
        'value': '05652'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN FRANCISCO, CUNDINAMARCA',
        'value': '25658'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '86'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN FRANCISCO, PUTUMAYO',
        'value': '86755'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN GIL, SANTANDER',
        'value': '68679'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN JACINTO, BOLIVAR',
        'value': '13654'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN JACINTO DEL CAUCA, BOLIVAR',
        'value': '13655'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN JERONIMO, ANTIOQUIA',
        'value': '05656'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN JOAQUIN, SANTANDER',
        'value': '68682'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '17'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN JOSE, CALDAS',
        'value': '17665'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN JOSE DE LA MONTAÑA, ANTIOQUIA',
        'value': '05658'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN JOSE DE MIRANDA, SANTANDER',
        'value': '68684'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN JOSE DE PARE, BOYACA',
        'value': '15664'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '23'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN JOSE DE URE, CORDOBA',
        'value': '23682'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '18'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN JOSE DEL FRAGUA, CAQUETA',
        'value': '18610'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '95'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN JOSE DEL GUAVIARE, GUAVIARE',
        'value': '95001'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '27'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN JOSE DEL PALMAR, CHOCO',
        'value': '27660'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '50'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN JUAN DE ARAMA, META',
        'value': '50683'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '70'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN JUAN DE BETULIA, SUCRE',
        'value': '70702'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN JUAN DE RIO SECO, CUNDINAMARCA',
        'value': '25662'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN JUAN DE URABA, ANTIOQUIA',
        'value': '05659'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '44'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN JUAN DEL CESAR, LA GUAJIRA',
        'value': '44650'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN JUAN NEPOMUCENO, BOLIVAR',
        'value': '13657'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '50'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN JUANITO, META',
        'value': '50686'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN LORENZO, NARIÑO',
        'value': '52687'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN LUIS, ANTIOQUIA',
        'value': '05660'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN LUIS, TOLIMA',
        'value': '73678'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN LUIS DE GACENO, BOYACA',
        'value': '15667'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '85'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN LUIS DE PALENQUE, CASANARE',
        'value': '85325'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '70'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN LUIS DE SINCE, SUCRE',
        'value': '70742'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '70'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN MARCOS, SUCRE',
        'value': '70708'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '20'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN MARTIN, CESAR',
        'value': '20770'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '50'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN MARTIN, META',
        'value': '50689'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN MARTIN DE LOBA, BOLIVAR',
        'value': '13667'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN MATEO, BOYACA',
        'value': '15673'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN MIGUEL, SANTANDER',
        'value': '68686'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '86'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN MIGUEL, PUTUMAYO',
        'value': '86757'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN MIGUEL DE SEMA, BOYACA',
        'value': '15676'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '70'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN ONOFRE, SUCRE',
        'value': '70713'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN PABLO, BOLIVAR',
        'value': '13670'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN PABLO, NARIÑO',
        'value': '52693'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN PABLO DE BORBUR, BOYACA',
        'value': '15681'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '70'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN PEDRO, SUCRE',
        'value': '70717'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN PEDRO, VALLE',
        'value': '76670'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN PEDRO DE CARTAGO, NARIÑO',
        'value': '52694'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN PEDRO DE LOS MILAGROS, ANTIOQUIA',
        'value': '05664'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN PEDRO DE URABA, ANTIOQUIA',
        'value': '05665'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '23'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN PELAYO, CORDOBA',
        'value': '23686'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN RAFAEL, ANTIOQUIA',
        'value': '05667'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN ROQUE, ANTIOQUIA',
        'value': '05670'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN SEBASTIAN, CAUCA',
        'value': '19693'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '47'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN SEBASTIAN DE BUENAVISTA, MAGDALENA',
        'value': '47692'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN SEBASTIAN DE MARIQUITA, TOLIMA',
        'value': '73443'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN VICENTE, ANTIOQUIA',
        'value': '05674'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN VICENTE DE CHUCURI, SANTANDER',
        'value': '68689'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '18'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN VICENTE DEL CAGUAN, CAQUETA',
        'value': '18753'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '47'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAN ZENON, MAGDALENA',
        'value': '47703'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SANDONA, NARIÑO',
        'value': '52683'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '47'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SANTA ANA, MAGDALENA',
        'value': '47707'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SANTA BARBARA, ANTIOQUIA',
        'value': '05679'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SANTA BARBARA, NARIÑO',
        'value': '52696'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SANTA BARBARA, SANTANDER',
        'value': '68705'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '47'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SANTA BARBARA DE PINTO, MAGDALENA',
        'value': '47720'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SANTA CATALINA, BOLIVAR',
        'value': '13673'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SANTA HELENA DEL OPON, SANTANDER',
        'value': '68720'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SANTA ISABEL, TOLIMA',
        'value': '73686'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '08'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SANTA LUCIA, ATLANTICO',
        'value': '08675'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SANTA MARIA, BOYACA',
        'value': '15690'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SANTA MARIA, HUILA',
        'value': '41676'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '47'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SANTA MARTA, MAGDALENA',
        'value': '47001'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SANTA ROSA, BOLIVAR',
        'value': '13683'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SANTA ROSA, CAUCA',
        'value': '19701'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '66'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SANTA ROSA DE CABAL, RISARALDA',
        'value': '66682'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SANTA ROSA DE OSOS, ANTIOQUIA',
        'value': '05686'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SANTA ROSA DE VITERBO, BOYACA',
        'value': '15693'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SANTA ROSA DEL SUR, BOLIVAR',
        'value': '13688'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '99'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SANTA ROSALIA, VICHADA',
        'value': '99624'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SANTA SOFIA, BOYACA',
        'value': '15696'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SANTACRUZ, NARIÑO',
        'value': '52699'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SANTAFE DE ANTIOQUIA, ANTIOQUIA',
        'value': '05042'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SANTANA, BOYACA',
        'value': '15686'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SANTANDER DE QUILICHAO, CAUCA',
        'value': '19698'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SANTIAGO, NORTE DE SANTANDER',
        'value': '54680'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '86'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SANTIAGO, PUTUMAYO',
        'value': '86760'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '70'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SANTIAGO DE TOLU, SUCRE',
        'value': '70820'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SANTO DOMINGO, ANTIOQUIA',
        'value': '05690'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '08'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SANTO TOMAS, ATLANTICO',
        'value': '08685'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '66'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SANTUARIO, RISARALDA',
        'value': '66687'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SAPUYES, NARIÑO',
        'value': '52720'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '81'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SARAVENA, ARAUCA',
        'value': '81736'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SARDINATA, NORTE DE SANTANDER',
        'value': '54720'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SASAIMA, CUNDINAMARCA',
        'value': '25718'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SATIVANORTE, BOYACA',
        'value': '15720'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SATIVASUR, BOYACA',
        'value': '15723'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SEGOVIA, ANTIOQUIA',
        'value': '05736'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SESQUILE, CUNDINAMARCA',
        'value': '25736'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SEVILLA, VALLE',
        'value': '76736'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SIACHOQUE, BOYACA',
        'value': '15740'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SIBATE, CUNDINAMARCA',
        'value': '25740'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '86'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SIBUNDOY, PUTUMAYO',
        'value': '86749'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SILOS, NORTE DE SANTANDER',
        'value': '54743'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SILVANIA, CUNDINAMARCA',
        'value': '25743'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SILVIA, CAUCA',
        'value': '19743'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SIMACOTA, SANTANDER',
        'value': '68745'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SIMIJACA, CUNDINAMARCA',
        'value': '25745'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SIMITI, BOLIVAR',
        'value': '13744'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '70'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SINCELEJO, SUCRE',
        'value': '70001'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '27'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SIPI, CHOCO',
        'value': '27745'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '47'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SITIONUEVO, MAGDALENA',
        'value': '47745'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SOACHA, CUNDINAMARCA',
        'value': '25754'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SOATA, BOYACA',
        'value': '15753'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SOCHA, BOYACA',
        'value': '15757'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SOCORRO, SANTANDER',
        'value': '68755'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SOCOTA, BOYACA',
        'value': '15755'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SOGAMOSO, BOYACA',
        'value': '15759'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '18'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SOLANO, CAQUETA',
        'value': '18756'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '08'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SOLEDAD, ATLANTICO',
        'value': '08758'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '18'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SOLITA, CAQUETA',
        'value': '18785'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SOMONDOCO, BOYACA',
        'value': '15761'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SONSON, ANTIOQUIA',
        'value': '05756'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SOPETRAN, ANTIOQUIA',
        'value': '05761'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SOPLAVIENTO, BOLIVAR',
        'value': '13760'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SOPO, CUNDINAMARCA',
        'value': '25758'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SORA, BOYACA',
        'value': '15762'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SORACA, BOYACA',
        'value': '15764'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SOTAQUIRA, BOYACA',
        'value': '15763'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SOTARA, CAUCA',
        'value': '19760'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SUAITA, SANTANDER',
        'value': '68770'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '08'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SUAN, ATLANTICO',
        'value': '08770'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SUAREZ, CAUCA',
        'value': '19780'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SUAREZ, TOLIMA',
        'value': '73770'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SUAZA, HUILA',
        'value': '41770'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SUBACHOQUE, CUNDINAMARCA',
        'value': '25769'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SUCRE, CAUCA',
        'value': '19785'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SUCRE, SANTANDER',
        'value': '68773'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '70'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SUCRE, SUCRE',
        'value': '70771'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SUESCA, CUNDINAMARCA',
        'value': '25772'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SUPATA, CUNDINAMARCA',
        'value': '25777'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '17'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SUPIA, CALDAS',
        'value': '17777'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SURATA, SANTANDER',
        'value': '68780'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SUSA, CUNDINAMARCA',
        'value': '25779'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SUSACON, BOYACA',
        'value': '15774'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SUTAMARCHAN, BOYACA',
        'value': '15776'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SUTATAUSA, CUNDINAMARCA',
        'value': '25781'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'SUTATENZA, BOYACA',
        'value': '15778'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TABIO, CUNDINAMARCA',
        'value': '25785'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '27'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TADO, CHOCO',
        'value': '27787'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TALAIGUA NUEVO, BOLIVAR',
        'value': '13780'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '20'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TAMALAMEQUE, CESAR',
        'value': '20787'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '85'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TAMARA, CASANARE',
        'value': '85400'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '81'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TAME, ARAUCA',
        'value': '81794'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TAMESIS, ANTIOQUIA',
        'value': '05789'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TAMINANGO, NARIÑO',
        'value': '52786'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TANGUA, NARIÑO',
        'value': '52788'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '97'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TARAIRA, VAUPES',
        'value': '97666'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '91'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TARAPACA, AMAZONAS',
        'value': '91798'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TARAZA, ANTIOQUIA',
        'value': '05790'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TARQUI, HUILA',
        'value': '41791'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TARSO, ANTIOQUIA',
        'value': '05792'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TASCO, BOYACA',
        'value': '15790'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '85'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TAURAMENA, CASANARE',
        'value': '85410'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TAUSA, CUNDINAMARCA',
        'value': '25793'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TELLO, HUILA',
        'value': '41799'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TENA, CUNDINAMARCA',
        'value': '25797'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '47'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TENERIFE, MAGDALENA',
        'value': '47798'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TENJO, CUNDINAMARCA',
        'value': '25799'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TENZA, BOYACA',
        'value': '15798'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TEORAMA, NORTE DE SANTANDER',
        'value': '54800'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TERUEL, HUILA',
        'value': '41801'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TESALIA, HUILA',
        'value': '41797'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TIBACUY, CUNDINAMARCA',
        'value': '25805'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TIBANA, BOYACA',
        'value': '15804'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TIBASOSA, BOYACA',
        'value': '15806'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TIBIRITA, CUNDINAMARCA',
        'value': '25807'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TIBU, NORTE DE SANTANDER',
        'value': '54810'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '23'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TIERRALTA, CORDOBA',
        'value': '23807'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TIMANA, HUILA',
        'value': '41807'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TIMBIO, CAUCA',
        'value': '19807'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TIMBIQUI, CAUCA',
        'value': '19809'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TINJACA, BOYACA',
        'value': '15808'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TIPACOQUE, BOYACA',
        'value': '15810'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TIQUISIO, BOLIVAR',
        'value': '13810'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TITIRIBI, ANTIOQUIA',
        'value': '05809'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TOCA, BOYACA',
        'value': '15814'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TOCAIMA, CUNDINAMARCA',
        'value': '25815'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TOCANCIPA, CUNDINAMARCA',
        'value': '25817'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TOGÜI, BOYACA',
        'value': '15816'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TOLEDO, ANTIOQUIA',
        'value': '05819'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TOLEDO, NORTE DE SANTANDER',
        'value': '54820'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '70'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TOLU VIEJO, SUCRE',
        'value': '70823'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TONA, SANTANDER',
        'value': '68820'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TOPAGA, BOYACA',
        'value': '15820'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TOPAIPI, CUNDINAMARCA',
        'value': '25823'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TORIBIO, CAUCA',
        'value': '19821'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TORO, VALLE',
        'value': '76823'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TOTA, BOYACA',
        'value': '15822'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TOTORO, CAUCA',
        'value': '19824'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '85'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TRINIDAD, CASANARE',
        'value': '85430'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TRUJILLO, VALLE',
        'value': '76828'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '08'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TUBARA, ATLANTICO',
        'value': '08832'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '23'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TUCHIN, CORDOBA',
        'value': '23815'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TULUA, VALLE',
        'value': '76834'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TUNJA, BOYACA',
        'value': '15001'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TUNUNGUA, BOYACA',
        'value': '15832'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TUQUERRES, NARIÑO',
        'value': '52838'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TURBACO, BOLIVAR',
        'value': '13836'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TURBANA, BOLIVAR',
        'value': '13838'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TURBO, ANTIOQUIA',
        'value': '05837'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TURMEQUE, BOYACA',
        'value': '15835'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TUTA, BOYACA',
        'value': '15837'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'TUTAZA, BOYACA',
        'value': '15839'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'UBALA, CUNDINAMARCA',
        'value': '25839'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'UBAQUE, CUNDINAMARCA',
        'value': '25841'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ULLOA, VALLE',
        'value': '76845'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'UMBITA, BOYACA',
        'value': '15842'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'UNE, CUNDINAMARCA',
        'value': '25845'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '27'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'UNGUIA, CHOCO',
        'value': '27800'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '27'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'UNION PANAMERICANA, CHOCO',
        'value': '27810'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'URAMITA, ANTIOQUIA',
        'value': '05842'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '50'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'URIBE, META',
        'value': '50370'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '44'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'URIBIA, LA GUAJIRA',
        'value': '44847'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'URRAO, ANTIOQUIA',
        'value': '05847'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '44'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'URUMITA, LA GUAJIRA',
        'value': '44855'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '08'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'USIACURI, ATLANTICO',
        'value': '08849'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'UTICA, CUNDINAMARCA',
        'value': '25851'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VALDIVIA, ANTIOQUIA',
        'value': '05854'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '23'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VALENCIA, CORDOBA',
        'value': '23855'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VALLE DE SAN JOSE, SANTANDER',
        'value': '68855'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VALLE DE SAN JUAN, TOLIMA',
        'value': '73854'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '86'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VALLE DEL GUAMUEZ, PUTUMAYO',
        'value': '86865'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '20'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VALLEDUPAR, CESAR',
        'value': '20001'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VALPARAISO, ANTIOQUIA',
        'value': '05856'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '18'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VALPARAISO, CAQUETA',
        'value': '18860'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VEGACHI, ANTIOQUIA',
        'value': '05858'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VELEZ, SANTANDER',
        'value': '68861'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VENADILLO, TOLIMA',
        'value': '73861'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VENECIA, ANTIOQUIA',
        'value': '05861'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VENECIA, CUNDINAMARCA',
        'value': '25506'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VENTAQUEMADA, BOYACA',
        'value': '15861'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VERGARA, CUNDINAMARCA',
        'value': '25862'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VERSALLES, VALLE',
        'value': '76863'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VETAS, SANTANDER',
        'value': '68867'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VIANI, CUNDINAMARCA',
        'value': '25867'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '17'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VICTORIA, CALDAS',
        'value': '17867'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VIGIA DEL FUERTE, ANTIOQUIA',
        'value': '05873'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VIJES, VALLE',
        'value': '76869'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VILLA CARO, NORTE DE SANTANDER',
        'value': '54871'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VILLA DE LEYVA, BOYACA',
        'value': '15407'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VILLA DE SAN DIEGO DE UBATE, CUNDINAMARCA',
        'value': '25843'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '54'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VILLA DEL ROSARIO, NORTE DE SANTANDER',
        'value': '54874'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '19'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VILLA RICA, CAUCA',
        'value': '19845'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '86'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VILLAGARZON, PUTUMAYO',
        'value': '86885'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VILLAGOMEZ, CUNDINAMARCA',
        'value': '25871'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VILLAHERMOSA, TOLIMA',
        'value': '73870'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '17'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VILLAMARIA, CALDAS',
        'value': '17873'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VILLANUEVA, BOLIVAR',
        'value': '13873'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '44'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VILLANUEVA, LA GUAJIRA',
        'value': '44874'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VILLANUEVA, SANTANDER',
        'value': '68872'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '85'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VILLANUEVA, CASANARE',
        'value': '85440'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VILLAPINZON, CUNDINAMARCA',
        'value': '25873'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '73'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VILLARRICA, TOLIMA',
        'value': '73873'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '50'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VILLAVICENCIO, META',
        'value': '50001'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VILLAVIEJA, HUILA',
        'value': '41872'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VILLETA, CUNDINAMARCA',
        'value': '25875'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VIOTA, CUNDINAMARCA',
        'value': '25878'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VIRACACHA, BOYACA',
        'value': '15879'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '50'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VISTAHERMOSA, META',
        'value': '50711'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '17'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'VITERBO, CALDAS',
        'value': '17877'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'YACOPI, CUNDINAMARCA',
        'value': '25885'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '52'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'YACUANQUER, NARIÑO',
        'value': '52885'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '41'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'YAGUARA, HUILA',
        'value': '41885'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'YALI, ANTIOQUIA',
        'value': '05885'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'YARUMAL, ANTIOQUIA',
        'value': '05887'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '97'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'YAVARATE, VAUPES',
        'value': '97889'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'YOLOMBO, ANTIOQUIA',
        'value': '05890'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'YONDO, ANTIOQUIA',
        'value': '05893'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '85'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'YOPAL, CASANARE',
        'value': '85001'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'YOTOCO, VALLE',
        'value': '76890'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'YUMBO, VALLE',
        'value': '76892'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '13'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ZAMBRANO, BOLIVAR',
        'value': '13894'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '68'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ZAPATOCA, SANTANDER',
        'value': '68895'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '47'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ZAPAYAN, MAGDALENA',
        'value': '47960'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '05'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ZARAGOZA, ANTIOQUIA',
        'value': '05895'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '76'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ZARZAL, VALLE',
        'value': '76895'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '15'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ZETAQUIRA, BOYACA',
        'value': '15897'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ZIPACON, CUNDINAMARCA',
        'value': '25898'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '25'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ZIPAQUIRA, CUNDINAMARCA',
        'value': '25899'
    }, {
        'dependsOn': [{
            'type': 'departamento',
            'id': '47'
        }],
        'topLeft': [0.0, 0.0],
        'bottomRight': [0.0, 0.0],
        'name': 'ZONA BANANERA, MAGDALENA',
        'value': '47980'
    }]
}, {
    'name': 'Estados del proyecto',
    'parameter': 'estado',
    'esMultiple': false,
    'seccionAplicativo': 'Proyectos',
    'items': [{
        'name': 'PRIORIZADO - APROBADO',
        'value': '-4022'
    }, {
        'name': 'APROBADO - SIN PRIORIZAR',
        'value': '-4021'
    }, {
        'name': 'PRIORIZADO - SIN APROBAR',
        'value': '-4020'
    }, {
        'name': 'SIN PRIORIZAR - SIN APROBAR',
        'value': '-4019'
    }, {
        'name': 'VIABILIDAD COLCIENCIAS',
        'value': '-3997'
    }, {
        'name': 'VIABILIDAD DNP',
        'value': '-3996'
    }, {
        'name': 'VIABILIDAD OCAD',
        'value': '-3995'
    }, {
        'name': 'VERIFICACION COLCIENCIAS',
        'value': '-3994'
    }, {
        'name': 'VERIFICACION SPM',
        'value': '-3993'
    }, {
        'name': 'VERIFICACION DNP',
        'value': '-3992'
    }, {
        'name': 'EN ACTUALIZACION',
        'value': '-3991'
    }, {
        'name': 'NO VIABLE',
        'value': '-3917'
    }, {
        'name': 'REGISTRADO ACTUALIZADO',
        'value': '-3916'
    }, {
        'name': 'FORMULADO PARA REGISTRAR',
        'value': '-3915'
    }, {
        'name': 'APROBADO - ACUERDO',
        'value': '-1'
    }]
}, {
    'name': 'Sector del proyecto',
    'parameter': 'sector',
    'esMultiple': false,
    'seccionAplicativo': 'Proyectos',
    'items': [{
        'name': 'Medio Ambiente y Riesgo  - Control de la contaminación y manejo de residuos',
        'value': '1'
    }, {
        'name': 'Medio Ambiente y Riesgo  - Conservación y uso de la biodiversidad',
        'value': '2'
    }, {
        'name': 'Medio Ambiente y Riesgo  - Gestión integral de las aguas nacionales',
        'value': '3'
    }, {
        'name': 'Medio Ambiente y Riesgo  - Prevención y adaptación al cambio climático',
        'value': '4'
    }, {
        'name': 'Medio Ambiente y Riesgo  - Atención de desastres',
        'value': '5'
    }, {
        'name': 'Educación - Preescolar y Básica y Media',
        'value': '6'
    }, {
        'name': 'Educación - Superior',
        'value': '7'
    }, {
        'name': 'Educación - Formación para el trabajo y el desarrollo humano',
        'value': '8'
    }, {
        'name': 'Minas y Energía - Energía Eléctrica - Generación Zonas No Interconectadas',
        'value': '9'
    }, {
        'name': 'Minas y Energía - Energía Eléctrica - Transmisión (> 220 KV)',
        'value': '10'
    }, {
        'name': 'Minas y Energía - Energía Eléctrica - Distribución (< 220 KV)',
        'value': '11'
    }, {
        'name': 'Minas y Energía - Hidrocarburos - Transporte de gas combustible',
        'value': '12'
    }, {
        'name': 'Minas y Energía - Minería - Apoyo a pequeña minería',
        'value': '14'
    }, {
        'name': 'Transporte - Vial Red Primaria',
        'value': '17'
    }, {
        'name': 'Transporte - Vial Red Secundaria',
        'value': '18'
    }, {
        'name': 'Transporte - Vial Red Terciaria',
        'value': '19'
    }, {
        'name': 'Transporte - Férrea',
        'value': '20'
    }, {
        'name': 'Transporte - Fluvial',
        'value': '21'
    }, {
        'name': 'Transporte - Aeroportuaria',
        'value': '22'
    }, {
        'name': 'Transporte - Red urbana                                                            ',
        'value': '23'
    }, {
        'name': 'Vivienda y Desarrollo Urbano - Ordenamiento territorial y desarrollo urbano',
        'value': '24'
    }, {
        'name': 'Vivienda y Desarrollo Urbano - Vivienda rural                                                        ',
        'value': '25'
    }, {
        'name': 'Vivienda y Desarrollo Urbano - Vivienda urbana                                                       ',
        'value': '26'
    }, {
        'name': 'Vivienda y Desarrollo Urbano - Agua potable y saneamiento básico',
        'value': '27'
    }, {
        'name': 'Salud - Dotación, adquisición o reposición de equipos',
        'value': '28'
    }, {
        'name': 'Salud -  Prestación de servicios de salud',
        'value': '29'
    }, {
        'name': 'Salud - Régimen subsidiado',
        'value': '30'
    }, {
        'name': 'Comercio, Industria y Turismo - Ventajas competitivas de las cadenas productivas',
        'value': '31'
    }, {
        'name': 'Comercio, Industria y Turismo - Fondos de capital emprendedores',
        'value': '32'
    }, {
        'name': 'Comercio, Industria y Turismo - Fondo del Turismo',
        'value': '33'
    }, {
        'name': 'Salud - Vigilancia en salud',
        'value': '34'
    }, {
        'name': 'Agricultura - Adquisición y Adjudicación de Tierras',
        'value': '48'
    }, {
        'name': 'Agricultura - Asistencia Técnica',
        'value': '49'
    }, {
        'name': 'Agricultura - Control y prevención a la producción agropecuaria y pesquera',
        'value': '50'
    }, {
        'name': 'Agricultura - Distritos De Riego',
        'value': '51'
    }, {
        'name': 'Agricultura - Incentivos y Financiamiento',
        'value': '52'
    }, {
        'name': 'Agricultura - Proyectos de Desarrollo Rural',
        'value': '53'
    }, {
        'name': 'Agricultura - Titulación baldíos',
        'value': '56'
    }, {
        'name': 'Ciencia y Tecnología - Formación del Capital Humano altamente Calificado',
        'value': '57'
    }, {
        'name': 'Ciencia y Tecnología - Innovación',
        'value': '58'
    }, {
        'name': 'Ciencia y Tecnología - Investigación y Desarrollo',
        'value': '59'
    }, {
        'name': 'Ciencia y Tecnología - Servicios Científicos y Tecnológicos',
        'value': '60'
    }, {
        'name': 'Comunicaciones - Servicios en comunicaciones',
        'value': '61'
    }, {
        'name': 'Cultura - Formación artística y creación cultural',
        'value': '62'
    }, {
        'name': 'Cultura - Industrias Culturales',
        'value': '64'
    }, {
        'name': 'Cultura - Lectura y escritura',
        'value': '65'
    }, {
        'name': 'Cultura - Patrimonio',
        'value': '66'
    }, {
        'name': 'Defensa y Seguridad- Infraestructura de las FFMM',
        'value': '67'
    }, {
        'name': 'Defensa y Seguridad- Seguridad ciudadana',
        'value': '68'
    }, {
        'name': 'Deporte  - Fomento a la recreación, actividad fisica y deporte',
        'value': '69'
    }, {
        'name': 'Deporte  - Formación de deportistas',
        'value': '70'
    }, {
        'name': 'Deporte  - Infraestructura deportiva',
        'value': '71'
    }, {
        'name': 'Desarrollo Social - Familia, primera infancia, niñez, adolescencia',
        'value': '72'
    }, {
        'name': 'Desarrollo Social - Infraestructura social y comunitaria',
        'value': '73'
    }, {
        'name': 'Desarrollo Social - Población indígena, afrocolombiana y grupos étnicos',
        'value': '74'
    }, {
        'name': 'Desarrollo Social - población vulnerable y excluída',
        'value': '75'
    }, {
        'name': 'Estadística',
        'value': '76'
    }, {
        'name': 'Interior - Convivencia',
        'value': '77'
    }, {
        'name': 'Interior - Participación',
        'value': '78'
    }, {
        'name': 'Justicia - Infraestructura Judicial',
        'value': '79'
    }, {
        'name': 'Planificación',
        'value': '80'
    }, {
        'name': 'Prevención y Atención de emergencias - atención inmediata a individuos',
        'value': '81'
    }, {
        'name': 'Trabajo - Empleabilidad',
        'value': '82'
    }, {
        'name': 'Trabajo - Proyectos productivos',
        'value': '83'
    }]
}, {
    'name': 'Periodos',
    'parameter': 'periods',
    'esMultiple': true,
    'seccionAplicativo': 'Proyectos',
    'items': [{
        'name': '2013',
        'value': '2013'
    }, {
        'name': '2012',
        'value': '2012'
    }]
}, {
    'name': 'Fuentes',
    'parameter': 'fuentes',
    'esMultiple': false,
    'seccionAplicativo': 'Recursos',
    'items': [{
        'name': 'Propios',
        'value': '2878'
    }, {
        'name': 'Fondo  de desarrollo regional',
        'value': '2874'
    }, {
        'name': 'Nación',
        'value': '2871'
    }, {
        'name': 'Asignaciones directas',
        'value': '2995'
    }, {
        'name': 'Fondo  de compensación regional',
        'value': '2873'
    }, {
        'name': 'Propios',
        'value': '2872'
    }, {
        'name': 'Asignaciones Directas',
        'value': '2875'
    }, {
        'name': 'Fondo de ciencia, tecnología e innovación',
        'value': '2876'
    }, {
        'name': 'Propios',
        'value': '2877'
    }, {
        'name': 'Todas las Fuentes',
        'value': '-1'
    }]
}, {
    'name': 'Periodos',
    'parameter': 'periodosRecursos',
    'esMultiple': true,
    'seccionAplicativo': 'Recursos',
    'items': [{
        'name': '2013',
        'value': '2013'
    }, {
        'name': '2012',
        'value': '2012'
    }]
}]
})