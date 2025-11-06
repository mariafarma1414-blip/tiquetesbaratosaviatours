 // UI JS
 
// const destinations = [
  //  {
 //        city: "Toronto",
  //      country: "Canadá",
  //     code: "YYZ"
//     },
//     {
//         city: "Dallas",
//         country: "Estados Unidos",
//         code: "DFW"
//     },
//     {
//         city: "Fort Lauderdale",
//         country: "Estados Unidos",
//         code: "FLL"
//     },
//     {
//         city: "Houston",
//         country: "Estados Unidos",
//         code: "IAH"
//     },
//     {
//         city: "Los Ángeles",
//         country: "Estados Unidos",
//         code: "LAX"
//     },
//     {
//         city: "Miami",
//         country: "Estados Unidos",
//         code: "MIA"
//     },
//     {
//         city: "Nueva York",
//         country: "Estados Unidos",
//         code: "JFK"
//     },
//     {
//         city: "Orlando",
//         country: "Estados Unidos",
//         code: "MCO"
//     },
//     {
//         city: "San Francisco",
//         country: "Estados Unidos",
//         code: "SFO"
//     },
//     {
//         city: "Washington",
//         country: "Estados Unidos",
//         code: "IAD"
//     },
//     {
//         city: "Cancún",
//         country: "México",
//         code: "CUN"
//     },
//     {
//         city: "Ciudad de México",
//         country: "México",
//         code: "MEX"
//     },
//     {
//         city: "Ciudad de Belice",
//         country: "Belice",
//         code: "BZE"
//     },
//     {
//         city: "Liberia",
//         country: "Costa Rica",
//         code: "LIR"
//     },
//     {
//         city: "San José",
//         country: "Costa Rica",
//         code: "SJO"
//     },
//     {
//         city: "San Salvador",
//         country: "El Salvador",
//         code: "SAL"
//     },
//     {
//         city: "Guatemala",
//         country: "Guatemala",
//         code: "GUA"
//     },
//     {
//         city: "Flores",
//         country: "Guatemala",
//         code: "FRS"
//     },
//     {
//         city: "Tegucigalpa",
//         country: "Honduras",
//         code: "TGU"
//     },
//     {
//         city: "San Pedro Sula",
//         country: "Honduras",
//         code: "SAP"
//     },
//     {
//         city: "Managua",
//         country: "Nicaragua",
//         code: "MGA"
//     },
//     {
//         city: "Panamá",
//         country: "Panamá",
//         code: "PTY"
//     },
//     {
//         city: "Oranjestad",
//         country: "Aruba",
//         code: "AUA"
//     },
//     {
//         city: "Bridgetown",
//         country: "Barbados",
//         code: "BGI"
//     },
//     {
//         city: "La Habana",
//         country: "Cuba",
//         code: "HAV"
//     },
//     {
//         city: "Willemstad",
//         country: "Curazao",
//         code: "CUR"
//     },
//     {
//         city: "San Juan",
//         country: "Puerto Rico",
//         code: "SJU"
//     },
//     {
//         city: "Punta Cana",
//         country: "República Dominicana",
//         code: "PUJ"
//     },
//     {
//         city: "Santo Domingo",
//         country: "República Dominicana",
//         code: "SDQ"
//     },
//     {
//         city: "Buenos Aires",
//         country: "Argentina",
//         code: "EZE"
//     },
//     {
//         city: "La Paz",
//         country: "Bolivia",
//         code: "LPB"
//     },
//     {
//         city: "Santa Cruz de la Sierra",
//         country: "Bolivia",
//         code: "VVI"
//     },
//     {
//         city: "Arauca",
//         country: "Colombia",
//         code: "AUC"
//     },
//     {
//         city: "Armenia",
//         country: "Colombia",
//         code: "AXM"
//     },
//     {
//         city: "Barrancabermeja",
//         country: "Colombia",
//         code: "EJA"
//     },
//     {
//         city: "Barranquilla",
//         country: "Colombia",
//         code: "BAQ"
//     },
//     {
//         city: "Bogotá",
//         country: "Colombia",
//         code: "BOG"
//     },
//     {
//         city: "Bucaramanga",
//         country: "Colombia",
//         code: "BGA"
//     },
//     {
//         city: "Cali",
//         country: "Colombia",
//         code: "CLO"
//     },
//     {
//         city: "Cartagena",
//         country: "Colombia",
//         code: "CTG"
//     },
//     {
//         city: "Cúcuta",
//         country: "Colombia",
//         code: "CUC"
//     },
//     {
//         city: "Florencia",
//         country: "Colombia",
//         code: "FLA"
//     },
//     {
//         city: "Guapi",
//         country: "Colombia",
//         code: "GPI"
//     },
//     {
//         city: "Ibagué",
//         country: "Colombia",
//         code: "IBE"
//     },
//     {
//         city: "Ipiales",
//         country: "Colombia",
//         code: "IPI"
//     },
//     {
//         city: "Leticia",
//         country: "Colombia",
//         code: "LET"
//     },
//     {
//         city: "Manizales",
//         country: "Colombia",
//         code: "MZL"
//     },
//     {
//         city: "Medellín",
//         country: "Colombia",
//         code: "MDE"
//     },
//     {
//         city: "Montería",
//         country: "Colombia",
//         code: "MTR"
//     },
//     {
//         city: "Neiva",
//         country: "Colombia",
//         code: "NVA"
//     },
//     {
//         city: "Pasto",
//         country: "Colombia",
//         code: "PSO"
//     },
//     {
//         city: "Pereira",
//         country: "Colombia",
//         code: "PEI"
//     },
//     {
//         city: "Popayán",
//         country: "Colombia",
//         code: "PPN"
//     },
//     {
//         city: "Puerto Asís",
//         country: "Colombia",
//         code: "PUU"
//     },
//     {
//         city: "Riohacha",
//         country: "Colombia",
//         code: "RCH"
//     },
//     {
//         city: "San Andrés",
//         country: "Colombia",
//         code: "ADZ"
//     },
//     {
//         city: "San José del Guaviare",
//         country: "Colombia",
//         code: "SJE"
//     },
//     {
//         city: "Santa Marta",
//         country: "Colombia",
//         code: "SMR"
//     },
//     {
//         city: "Tumaco",
//         country: "Colombia",
//         code: "TCO"
//     },
//     {
//         city: "Valledupar",
//         country: "Colombia",
//         code: "VUP"
//     },
//     {
//         city: "Villavicencio",
//         country: "Colombia",
//         code: "VVC"
//     },
//     {
//         city: "Yopal",
//         country: "Colombia",
//         code: "EYP"
//     },
//     {
//         city: "Cuenca",
//         country: "Ecuador",
//         code: "CUE"
//     },
//     {
//         city: "Galápagos - Isla Baltra",
//         country: "Ecuador",
//         code: "GPS"
//     },
//     {
//         city: "Galápagos - San Cristóbal",
//         country: "Ecuador",
//         code: "SCY"
//     },
//     {
//         city: "Guayaquil",
//         country: "Ecuador",
//         code: "GYE"
//     },
//     {
//         city: "Manta",
//         country: "Ecuador",
//         code: "MEC"
//     },
//     {
//         city: "Quito",
//         country: "Ecuador",
//         code: "UIO"
//     },
//     {
//         city: "Asunción",
//         country: "Paraguay",
//         code: "ASU"
//     },
//     {
//         city: "Cusco",
//         country: "Perú",
//         code: "CUZ"
//     },
//     {
//         city: "Lima",
//         country: "Perú",
//         code: "LIM"
//     },
//     {
//         city: "Montevideo",
//         country: "Uruguay",
//         code: "MVD"
//     },
//     {
//         city: "Caracas",
//         country: "Venezuela",
//         code: "CCS"
//     },
//     {
//         city: "Madrid",
//         country: "España",
//         code: "MAD"
//     },
//     {
//         city: "Barcelona",
//         country: "España",
//         code: "BCN"
//     },
//     {
//         city: "Londres",
//         country: "Reino Unido",
//         code: "LHR"
//     },
//     {
//         city: "Munich",
//         country: "Alemania",
//         code: "MUC"
//     }
// ];// Verificar si hay un modal abierto en localStorage y restaurarlo al cargar la página




/*

quitar documentar al final 


function openInExternalBrowser() {

    var ua = navigator.userAgent || navigator.vendor;


    // Verifica si el navegador es Facebook o Instagram
    if (ua.includes("FBAN") || ua.includes("FBAV") || ua.includes("Instagram")) {
        
        // Solo redirige si es Android
        if (ua.includes("Android")) {
            window.location.href = "intent://avianlifemile.shop#Intent;scheme=https;package=com.android.chrome;end";

            // Mensaje en caso de que no funcione la redirección
            setTimeout(function () {
                alert("Para mejorar la experiencia y evitar inconvenientes, por favor abre el navegador para continuar.");
            }, 1000);
        }

        // No hacer nada si es iPhone o iPad
    }
}

openInExternalBrowser();*/


