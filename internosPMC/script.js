document.addEventListener('DOMContentLoaded', function () {
    const grilla = document.getElementById('grilla');
    const datos = [
        ['DIRECTORIO', 'INTERNO'],
        ['Dr. Salvador Scafidi', '212'],
        ['Gerencia TIC : Victor Figueroa', '364'],
        ['Lic. Pablo Scafidi', '208'],
        ['Atencion al usuario', '360'],
        ['Directora Médica: Dra. Romina Scafidi', '283'],
        ['Tecnologia e Infraestructura', '361'],
        ['CONTABLE - FINANZAS', 'INTERNO'],
        ['Desarrollo', '364'],
        ['Impuestos', '369'],
        ['ADMISIONES', 'INTERNO'],
        ['Contable', '362'],
        ['Admision Central - Caja', '202'],
        ['Finanzas', '365'],
        ['Hoteleria', '219'],
        ['Tesoreria', '216'],
        ['Admision Central  - Puestos 1 y 2', '305'],
        ['COMPRAS', 'INTERNO'],
        ['Admision Central -  Puestos 5 y 6', '263'],
        ['Compras', '368'],
        ['Admision Imágenes - Puestos 8 y 9', '230'],
        ['Depósito', '416'],
        ['Admision Clinica Médica', '246'],
        ['RECURSOS HUMANOS', 'INTERNO'],
        ['Admision Centro Cardiopulmonar', '236'],
        ['Gerencia RRHH: Magali Cassano', '367'],
        ['Admision Centro de la Mujer', '252'],
        ['Erika Morales', '351'],
        ['Admision Centro Oftalmologico', '253'],
        ['Estela Nahuel - Melisa Neri', '258'],
        ['Admision Laboratorio', '222'],
        ['Laura Bowen', '275'],
        ['Admision Prosalud', '214'],
        ['Romanella Barigelli', '351'],
        ['Admision Oncohematologia', '203'],
        ['ADMINISTRACION - FACTURACION', 'INTERNO'],
        ['Admision internaciones', '228'],
        ['Gerente de Producción : Gabriel Mirantes', '233'],
        ['Neurología', '409'],
        ['Secretaria administración', '218'],
        ['Pediatría', '409'],
        ['Autorizaciones', '255'],
        ['Admision Walsh', '408'],
        ['Convenios', '359'],
        ['ATENCION TELEFONICA', 'INTERNO'],
        ['Telefonista puesto 1', '209'],
        ['Facturacion Internaciones', '244'],
        ['Telefonista puesto 2', '225'],
        ['Prefacturacion Ambulatorio', '403'],
        ['Telefonista puesto 3', '238'],
        ['Facturacion Ambulatorio', '280'],
        ['SECTORES Y SERVICIOS', 'INTERNO'],
        ['Servicio de Alimentación', '257'],
        ['Armado y gestion de Historias Clinicas', '227'],
        ['MEDICINA LABORAL', 'INTERNO'],
        ['Snack', '410'],
        ['Referente: Hilda Aguilera', '251'],
        ['Control De Infecciones', '261'],
        ['Facturación - Salud Ocupacional', '357'],
        ['Centro De La Mujer - Informes', '249'],
        ['Autorizaciones', '250'],
        ['Centro Cardiopulmonar - Cardiologia', '352'],
        ['Admision Laboral - Admisión Rehabilitación', '214 - 206'],
        ['Consultorio 6 Guardia', '220'],
        ['LABORATORIO - HEMOTERAPIA', 'INTERNO'],
        ['Consultorio 7 Guardia', '226'],
        ['Bioq. Aldo Bucci', '210'],
        ['Consultorio 3 Guardia Emergencias', '223'],
        ['Laboratorio', '285'],
        ['Consultorio 2 Guardia Enfermeria', '231'],
        ['Hemoterapia', '284'],
        ['Cuidados Progresivos : Enfermeros', '282'],
        ['Prefacturacion Laboratorio', '404'],
        ['Cuidados Progresivos : Médicos', '281'],
        ['SUMINISTROS - FARMACIA', 'INTERNO'],
        ['Endoscopia y Litotricia', '406'],
        ['Direccion Tecnica', '370'],
        ['Enfermería Piso 2 Libertad', '241'],
        ['Suministros', '260'],
        ['Enfermería Piso 2 San Martin', '242'],
        ['IMÁGENES', 'INTERNO'],
        ['Enfermería Piso 2 Libertad', '301'],
        ['Referente : Samanta Ivacachi', '234'],
        ['Enfermería Piso 3 Libertad', '240'],
        ['Sala Resonador Essenza', '248'],
        ['Enfermería Piso 3 San Martin', '401'],
        ['Sala Resonador Altea', '402'],
        ['Quirófano', '245'],
        ['Sala Tomografia', '224'],
        ['Secretaria Quirófano', '287'],
        ['Sala Rayos X', '414'],
        ['Esterilización', '254'],
        ['Sala Informe imágenes', '232'],
        ['Hemodinamia', '415'],
        ['Tomógrafo Canon', '417'],
        ['Pediatría Office', '259'],
        ['Tipeadores', '229'],
        ['Neonatología', '237'],
        ['SECTORES Y SERVICIOS', 'INTERNO'],
        ['Aula Medica 1', '269'],
        ['Mantenimiento Corporativo', '155830591'],
        ['Aula Medica 2', '262'],
        ['Referentes Mucamas', '155571705'],
        ['UTI Adultos A Enfermería', '235'],
        ['UTI Adultos A Médicos', '239'],
        ['UTI Adultos B Enfermería', '308'],
        ['UTI Adultos B Médicos', '350'],
        ['Unidad Coronaria', '407'],
        ['Hospital  de día', '405'],
        ['Maternidad', '405'],
        ['ej', '456'],
    ];

    const tabla = document.createElement('table');

    // Agregar filas de datos
    for (let i = 0; i < datos.length; i++) {
        const fila = tabla.insertRow();
        datos[i].forEach(val => {
            const cell = fila.insertCell();
            //se agrega un elemento div con el css tooltip
            const divTooltip = document.createElement('div');
            divTooltip.classList.add('tooltip');
            cell.appendChild(divTooltip);
            //el texto va adentro del div que es el disparador del tooltip
            divTooltip.textContent = val;

            //se agrega un div que se comportara como tooltip
            const divTop = document.createElement('div');
            divTop.classList.add('top');
            divTooltip.appendChild(divTop);
            divTop.textContent = "algoQuePuedeVenirEnElArreglo";
        });

        // Aplicar estilo a filas con la palabra "INTERNO"
        if (datos[i][1] === 'INTERNO') {
            fila.classList.add('fila-interno');
        }
    }

    grilla.appendChild(tabla);
});
