document.addEventListener("DOMContentLoaded", () => {
  let selectedType = "ida-vuelta";
  let origin = "";
  let destination = "";
  let dateIda = "";
  let dateVuelta = "";
  let passengers = { adults: 1, teens: 0, children: 0, babies: 0 };

  const returnDateBox = document.getElementById("return-date-box");

  let currentModal = null;
  const modals = document.querySelectorAll('.modal');

  const showModal = (modalId) => {
    modals.forEach((modal) => (modal.style.display = "none"));

    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "block";
    }
  };

  const closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "none";
  };

  function navigateToModal(targetModalId) {
    if (currentModal) {
      closeModal(currentModal);
    }
    showModal(targetModalId);
  }

  function formatearFechaParaStorage(fechaISO) {
    if (!fechaISO) return "";

    const date = new Date(fechaISO + "T00:00:00");
    if (isNaN(date)) return "";

    const dias = ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."];
    const meses = ["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sep.", "oct.", "nov.", "dic."];

    const diaSemana = dias[date.getDay()];
    const dia = date.getDate();
    const mes = meses[date.getMonth()];
    const año = date.getFullYear();

    return `${diaSemana} ${dia} ${mes} ${año}`;
  }


 
 
 
 
 
 // Función para almacenar los datos de vuelo en localStorage

  // Guardar el objeto como una cadena JSON en localStorage
 
 
  // Cerrar el modal actual
  window.closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "none";
    currentModal = null;
  };

  // Regresar al modal anterior
  window.goBack = (previousModalId) => {
    showModal(previousModalId);
  };

  // Función para ocultar/mostrar Fecha de Vuelta
 // Función para ocultar/mostrar Fecha de Vuelta
 
 // Función para ocultar/mostrar Fecha de Vuelta
  // Función para ocultar/mostrar Fecha de Vuelta
  const toggleReturnDate = () => {
    const selectedType = document.querySelector('input[name="flightType"]:checked').value;

    if (selectedType === "solo-ida") {
      returnDateBox.style.display = "none"; // Oculta el cuadro de fecha de vuelta
    } else {
      returnDateBox.style.display = "block"; // Muestra el cuadro de fecha de vuelta
    }
  };

  // Selección del tipo de vuelo
  const flightTypeInputs = document.querySelectorAll('input[name="flightType"]');
  flightTypeInputs.forEach((input) => {
    input.addEventListener("change", (e) => {
      selectedType = e.target.value;
      toggleReturnDate();
    });
  });
  // Mostrar sugerencias dinámicas para origen y destino
 const cities = [
  "Arauca   (Colombia)  AUC", 
  "Armenia  (Colombia)  AXM", 
  "Aruba    (Aruba)       AUA", 
  "Barrancabermeja (Colombia)  EJA", 
  "Barranquilla  (Colombia)    BAQ", 
  "Bogotá (Colombia) BOG",
"Bucaramanga   (Colombia)  BGA", 
  "Cali  (Colombia)  CLO", 
  "Cancún (Mexico)       CUN", 
  "Cartagena (Colombia)  CTG", 
  "Cucúta  (Colombia)    CUC",
    "Florencia   (Colombia)  FLA", 
  "Guapi  (Colombia)  GPI", 
  "Ibagué    (Colombia)       IBE", 
  "Ipiales (Colombia)  IPI", 
  "Leticia  (Colombia)    LET", 
  "Manizales (Colombia) MZL",
"Medellin   (Colombia)  MED", 
  "Monteria  (Colombia)  MTR", 
  "Neiva (Colombia)       NVA", 
  "Pasto (Colombia)  PSO", 
  "Pereira  (Colombia)    PEI",
    "Pitalito,  Huila  (Colombia)  PTX", 
  "Popayan    (Colombia)       PPN", 
  "Puerto Asis (Colombia)  PUU", 
  "Quibdo  (Colombia)    UID", 
  "Riohacha (Colombia) RCH",
"San Andrés   (Colombia)  ADZ", 
  "San José del Guaviares  (Colombia)  SJE", 
  "Santa Marta (Colombia)       SMR", 
  "Tumaco (Colombia)  TCO", 
  "Valledupar  (Colombia)    VUP",
  "Villavicencio (Colombia)  VVC", 
  "Yopal  (Colombia)    EYP"

];



const createSuggestions = (inputId, suggestionsId, nextModal) => {
  const inputElement = document.getElementById(inputId);
  const suggestionsElement = document.getElementById(suggestionsId);
  
  if (inputElement) {
    inputElement.addEventListener("input", () => {
      const query = inputElement.value.toLowerCase();
      suggestionsElement.innerHTML = ""; // Limpiar sugerencias anteriores

      if (query) {
        const filteredCities = cities.filter((city) =>
          city.toLowerCase().includes(query)
        );

        filteredCities.forEach((city) => {
          const li = document.createElement("li");
          li.textContent = city; // Muestra la ciudad completa
          li.addEventListener("click", () => {
            // Extraer solo el nombre de la ciudad
            const cityName = city.split(" (")[0]; // Esto quita la parte de la abreviación
            if (inputId === "origin-input") {
              origin = cityName;
            } else if (inputId === "destination-input") {
              destination = cityName;
            }
            inputElement.value = cityName; // Solo muestra el nombre de la ciudad
            showModal(nextModal);
          });
          suggestionsElement.appendChild(li);
        });
      }
    });
  }
};

createSuggestions("origin-input", "origin-suggestions", "modal-destination");
createSuggestions("destination-input", "destination-suggestions", "modal-calendar-ida");

 
 
// Variables para almacenar las fechas seleccionadas
   const priceData = {
                      /*Enero*/    
                              "2025-10-06": "low-cost", "2025-10-05": "medium-cost", "2025-10-03": "high-cost",
                   "2025-10-04": "low-cost", "2025-10-07": "medium-cost", "2025-10-08": "high-cost",
                   "2025-10-09": "low-cost", "2025-10-10": "medium-cost", "2025-10-11": "high-cost",
                   "2025-10-12": "low-cost", "2025-10-13": "medium-cost", "2025-10-14": "high-cost",
                   "2025-10-15": "low-cost", "2025-10-16": "medium-cost", "2025-10-17": "high-cost",
                   "2025-10-18": "low-cost", "2025-10-19": "medium-cost", "2025-10-20": "high-cost",
                   "2025-10-22": "low-cost", "2025-10-23": "medium-cost", "2025-10-21": "high-cost",
                   "2025-10-24": "low-cost", "2025-10-25": "medium-cost", "2025-10-26": "high-cost",
                   "2025-10-27": "low-cost", "2025-10-29": "medium-cost", "2025-10-28": "high-cost",
                   "2025-10-29": "low-cost", "2025-10-30": "medium-cost", "2025-10-31": "high-cost",
               
                 "2025-10-01": "low-cost", "2025-10-02": "medium-cost", "2025-10-03": "high-cost",
               /*Febrero*/
                "2025-02-01": "low-cost", "2025-02-02": "medium-cost", "2025-02-03": "high-cost",
             /*Marzo*/
                "2025-03-01": "low-cost", "2025-03-02": "medium-cost", "2025-03-03": "high-cost",
             /*Abril*/
                "2025-04-15": "low-cost", "2025-09-30": "medium-cost", "2025-04-03": "high-cost",
                "2025-04-16": "low-cost", "2025-04-17": "medium-cost", "2025-04-18": "high-cost",
                "2025-09-26": "low-cost", "2025-09-27": "medium-cost", "2025-09-28": "high-cost","2025-09-29": "low-cost", "2025-04-25": "medium-cost", "2025-04-26": "high-cost",
             /*Mayo*/
                "2025-05-01": "low-cost", "2025-05-02": "medium-cost", "2025-05-03": "high-cost",
             /*Junio*/
                "2025-06-01": "low-cost", "2025-06-02": "medium-cost", "2024-06-03": "high-cost",
            /*Julio*/
                "2025-07-01": "low-cost", "2025-07-02": "medium-cost", "2025-07-03": "high-cost",
             /*Agosto*/
                "2025-08-01": "low-cost", "2025-08-02": "medium-cost", "2025-08-03": "high-cost",
           /*Septiembre*/
                "2025-09-01": "low-cost", "2025-09-02": "medium-cost", "2025-09-03": "high-cost",
           /*octubre*/
                "2025-10-01": "low-cost", "2025-10-02": "medium-cost", "2024-10-03": "high-cost",
           /*Noviembre*/
                "2025-11-01": "low-cost", "2025-11-02": "medium-cost", "2025-11-03": "high-cost",
         /*Diciembre*/
                "2025-12-16": "low-cost", "2025-12-17": "medium-cost", "2025-12-18": "high-cost",
                "2025-12-19": "high-cost", "2025-12-20": "selected", "2025-12-21": "high-cost",
                "2025-12-22": "high-cost", "2025-12-23": "high-cost", "2025-12-24": "high-cost",
                "2025-12-25": "selected", "2025-12-26": "high-cost", "2025-12-27": "high-cost",
                "2025-12-28": "high-cost", "2025-12-29": "high-cost", "2025-12-30": "high-cost",
                "2025-12-31": "medium-cost"
            };


// Inicializar Flatpickr para la fecha de ida
 
flatpickr("#date-ida", {
  locale: "es",
  inline: true,
  minDate: "today", // Deshabilitar fechas pasadas
  dateFormat: "d/m/Y", // Formato de fecha
    onDayCreate: function(dObj, dStr, fp, dayElem) {
                    const date = dayElem.dateObj.toISOString().split('T')[0];
                    if (priceData[date]) {
                        dayElem.classList.add(priceData[date]);
                    }
                },
      

  onReady: function (selectedDates, dateStr, instance) {
    // Forzar el ancho dinámico del contenedor
    instance.calendarContainer.style.width = "100%";
    instance.calendarContainer.style.maxWidth = "none"; // Evitar restricciones de ancho
  },
  onChange: function (selectedDates, dateStr) {
    dateIda = dateStr;

         // Actualizar el cuadro de la fecha seleccionada en el modal de ida
        document.getElementById("selected-date-ida").textContent = ` ${dateIda || ""}`;

        if (dateIda) {
            if (selectedType === "ida-vuelta") {
                showModal("modal-calendar-vuelta"); // Mostrar modal de vuelta si aplica
            } else {
                showModal("modal-passengers");
            }
        } else {
            alert("Por favor, selecciona una fecha de ida.");
        }
    },
});













// Inicializar Flatpickr para la fecha de vuelta
flatpickr("#date-vuelta", {
    locale: "es",
    inline: true,
    minDate: new Date().fp_incr(1), // La fecha de vuelta debe ser al menos un día después de la fecha de ida
    dateFormat: "d/m/Y", // Formato de fecha
     onDayCreate: function(dObj, dStr, fp, dayElem) {
                    const date = dayElem.dateObj.toISOString().split('T')[0];
                    if (priceData[date]) {
                        dayElem.classList.add(priceData[date]);
                    }
                },
 
   
   
     onReady: function (selectedDates, dateStr, instance) {
    // Forzar el ancho dinámico del contenedor
    instance.calendarContainer.style.width = "100%";
    instance.calendarContainer.style.maxWidth = "none"; // Evitar restricciones de ancho
  },
 
   
    onChange: function (selectedDates, dateStr, instance) {
        dateVuelta = dateStr;

        // Actualizar el cuadro de la fecha seleccionada en el modal de vuelta
        document.getElementById("selected-date-vuelta").textContent = ` ${dateVuelta || ""}`;

        if (dateVuelta) {
            // Validar que la fecha de vuelta no sea anterior a la fecha de ida
            if (new Date(dateVuelta) < new Date(dateIda)) {
                alert("La fecha de vuelta no puede ser anterior a la fecha de ida.");
                dateVuelta = null; // Resetear la fecha de vuelta
                instance.clear(); // Limpiar el calendario
                return;
            }
            showModal("modal-passengers");
        } else {
            alert("Por favor, selecciona una fecha de vuelta.");
        }
    },
});  
 
 
 
// Seleccionamos TODOS los elementos con el mismo ID
const openOriginModalButtons = document.querySelectorAll("#open-origin-modal");

openOriginModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showModal("modal-origin");
  });
});
 
  // Abrir el modal de destino
  const openModalDestinationButton = document.getElementById("open-modal-destination");
  if (openModalDestinationButton) {
    openModalDestinationButton.addEventListener("click", () => {
      showModal("modal-destination");
    });
  }

  // Función para actualizar los pasajeros
  const updatePassengers = () => {
    passengers = {
      adults: parseInt(document.getElementById("adults-count").textContent) || 1,
      teens: parseInt(document.getElementById("teens-count").textContent) || 0,
      children: parseInt(document.getElementById("children-count").textContent) || 0,
      babies: parseInt(document.getElementById("babies-count").textContent) || 0,
    };

    console.log("Pasajeros actualizados:", passengers);
  };

  // Actualiza la visualización de los pasajeros
  const updatePassengerDisplay = () => {
    // Actualizar las etiquetas de conteo en el modal
    const passengerTypes = ["adults", "teens", "children", "babies"];
    passengerTypes.forEach((type) => {
      document.getElementById(`${type}-count`).textContent = passengers[type];
    });

    // Actualizar el total de pasajeros
    const totalPassengers = Object.values(passengers).reduce((sum, count) => sum + count, 0);
    document.getElementById("total-passengers").textContent = ` ${totalPassengers}`;
  };

  // Incrementar y decrementar los pasajeros
  ["adults", "teens", "children", "babies"].forEach((type) => {
    document.getElementById(`increase-${type}`).addEventListener("click", () => {
      passengers[type]++;
      updatePassengerDisplay();
    });

    document.getElementById(`decrease-${type}`).addEventListener("click", () => {
      if (passengers[type] > 0) {
        passengers[type]--;
        updatePassengerDisplay();
      }
    });
  });

  // Actualizar el conteo de pasajeros en el resumen


  // Inicializar la visualización de pasajeros
  updatePassengerDisplay();



   


const updateSummary = () => {
  const summaryContainer = document.querySelector(".summary-container");
  if (summaryContainer) {
    summaryContainer.innerHTML = ""; // Limpia el contenido existente del resumen

    const summaryData = [
      {
        title: "Origen",
        value: origin,
        img: "takeoff_icon.png",
        modalId: "modal-origin",
        class: "cuadro-origen",
      },
      {
        title: "Destino",
        value: destination,
        img: "landing_icon.png",
        modalId: "modal-destination",
        class: "cuadro-destino",
      },
      {
        title: "Ida",
        value: dateIda,
        img: "bx-calendar.svg",
        modalId: "modal-calendar-ida",
        class: "cuadro-fecha-ida",
      },
      {
        title: "Vuelta",
        value: selectedType === "ida-vuelta" ? dateVuelta : "Vuelta",
        img: "bx-calendar.svg",
        modalId: "modal-calendar-vuelta",
        class: "cuadro-fecha-vuelta",
      },
      {
        title: "  ",
        value: `${passengers.adults + passengers.teens + passengers.children + passengers.babies}`,
        img: "bxs-user-plus.svg",
        modalId: "modal-passengers",
        class: "cuadro-pasajeros",
      },
    ];

    let originDestinationContainer = null; // Variable para el contenedor de origen y destino
    let dateContainer = null; // Variable para el contenedor de fechas
    let passengersContainer = null; // Variable para el contenedor de pasajeros

    summaryData.forEach((item) => {
      const box = document.createElement("div");
      box.classList.add("summary-box", item.class);

      // Si el tipo de vuelo es solo ida, no mostrar el cuadro de fecha de vuelta
      if (item.title === "Vuelta" && selectedType === "solo-ida") {
        return; // No se agrega el cuadro
      }

      box.innerHTML = `
     <div class="imagen-header"> 
        <img src="${item.img}" alt="${item.title}"></div>
    <div class="headerrs">
    <p>${item.title}</p>
    <span>${item.value}</span></div>
        
      `;

      // Al hacer clic, abrir el modal correspondiente para editar
      box.addEventListener("click", () => {
        navigateToModal(item.modalId);
      });

      // Agregar el cuadro de "Origen" al contenedor
      if (item.title === "Origen") {
        originDestinationContainer = document.createElement("div");
        originDestinationContainer.className = "origin-destination-container"; // Clase para el nuevo contenedor

        originDestinationContainer.appendChild(box); // Agregar cuadro de "Origen" al nuevo contenedor

    // Agregar un nuevo div para la línea
// Crear un contenedor principal
const mainContainer = document.createElement("div");
mainContainer.className = "contenedor-principal"; // Agrega una clase para estilizar

// Crear el primer div
const newDiv = document.createElement("div");
newDiv.className = "linea-arriba"; // Agrega una clase para estilizar
newDiv.innerHTML = ""; // Contenido del nuevo div

// Agregar el primer div al contenedor principal
mainContainer.appendChild(newDiv);

const image = document.createElement("img");
image.src = "bidireccional.jpg"; // Reemplaza con la ruta de tu imagen
image.alt = ""; // Descripción alternativa para la imagen
image.className = "mi-imagen"; // Agrega una clase para estilizar la imagen

// Agregar la imagen al contenedor principal
mainContainer.appendChild(image);
// Crear un nuevo div adicional
const additionalDiv = document.createElement("div");
additionalDiv.className = "linea-abajo"; // Agrega una clase para estilizar
additionalDiv.innerHTML = ""; // Contenido del nuevo div adicional

// Agregar el div adicional al contenedor principal
mainContainer.appendChild(additionalDiv);

// Agregar el contenedor principal al contenedor de origen/destino
originDestinationContainer.appendChild(mainContainer);
 // Agregar el nuevo div al contenedor de origen/destino
      } else if (item.title === "Destino" && originDestinationContainer) {
        originDestinationContainer.appendChild(box); // Agregar cuadro de "Destino" al nuevo contenedor
        summaryContainer.appendChild(originDestinationContainer); // Agregar contenedor de origen/destino al resumen
      } else if (item.title === "Ida" || item.title === "Vuelta") {
        // Para "Ida" y "Vuelta", agregar a un nuevo contenedor
        if (!dateContainer) {
          dateContainer = document.createElement("div");
          dateContainer.className = "date-container"; // Clase para el nuevo contenedor de fechas
        }
        dateContainer.appendChild(box); // Agregar cuadro de "Ida" o "Vuelta" al nuevo contenedor de fechas
        
        // Agregar un nuevo div al cuadro de "Vuelta"
        if (item.title === "Vuelta") {
          const newDiv = document.createElement("div");
          newDiv.className = "linea-vuelta"; // Clase para el nuevo div de vuelta
          newDiv.innerHTML = "<div></div>"; // Contenido del nuevo div
          
          box.appendChild(newDiv); // Agregar el nuevo div dentro del cuadro de "Vuelta"
        }
        
        // Agregar el contenedor de fechas al resumen si es el último item
        if (item.title === "Ida") {
          summaryContainer.appendChild(dateContainer);
        }
      } else if (item.title === "Pasajeros") {
        // Agregar cuadro de "Pasajeros" a un contenedor específico
        passengersContainer = document.createElement("div");
        passengersContainer.className = "passengers-container"; // Clase para el nuevo contenedor de pasajeros
        passengersContainer.appendChild(box); // Agregar cuadro de "Pasajeros" al nuevo contenedor
        summaryContainer.appendChild(passengersContainer); // Agregar contenedor de pasajeros al resumen
      } else {
        // Agregar otros cuadros directamente al contenedor de resumen
        summaryContainer.appendChild(box);
      }
    });
  }
};


// Agregar el nuevo div aquí
 

// Asegúrate de obtener el contenedor de los 

  const nextSummaryButton = document.getElementById("next-summary");
  if (nextSummaryButton) {
    nextSummaryButton.addEventListener("click", () => {
      updatePassengers();
      updateSummary();
      showModal("modal-summary");
    });
  }

const modalHeader = document.createElement("h2");
modalHeader.textContent = "Resumen de tu vuelo"; // Puedes personalizar el texto
modalHeader.classList.add("modal-header"); // Agregar la clase 'modal-header'

const addFlightTypeRadiosToSummary = () => {
  const summaryModal = document.querySelector("#modal-summary .modal-content");
  

  // Verificar si ya existe el contenedor de opciones y eliminarlo
 const existingContainer = document.querySelector("#flight-type-options");
if (existingContainer) {
  existingContainer.remove();
}

// Crear contenedor para los radios
const flightTypeContainer = document.createElement("div");
flightTypeContainer.id = "flight-type-options";
flightTypeContainer.className = "flight-type-container"; // Clase para estilizar



// Crear un contenedor individual para "Ida y Vuelta"
const idaVueltaWrapper = document.createElement("div");
idaVueltaWrapper.className = "radio-wrapper-ida"; // Clase para diseño en línea

const radioIdaVuelta = document.createElement("input");
radioIdaVuelta.type = "radio";
radioIdaVuelta.name = "FlightType";
radioIdaVuelta.value = "ida-vuelta";
radioIdaVuelta.id = "radio-ida-vuelta";
radioIdaVuelta.className = "flight-type-radio-ida"; // Clase para estilizar
radioIdaVuelta.checked = selectedType === "ida-vuelta"; // Mantener el estado actual

const labelIdaVuelta = document.createElement("label");
labelIdaVuelta.htmlFor = "radio-ida-vuelta";
labelIdaVuelta.className = "flight-type-label-ida-vuelta"; // Clase única
labelIdaVuelta.textContent = "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Ida y Vuelta"; // Agregar 2 espacios antes del texto

// Agregar radio y etiqueta al contenedor de "Ida y Vuelta"
idaVueltaWrapper.appendChild(radioIdaVuelta);
idaVueltaWrapper.appendChild(labelIdaVuelta);

// Crear un contenedor individual para "Solo Ida"
const soloIdaWrapper = document.createElement("div");
soloIdaWrapper.className = "radio-wrapper-solo"; // Clase para diseño en línea

const radioSoloIda = document.createElement("input");
radioSoloIda.type = "radio";
radioSoloIda.name = "FlightType";
radioSoloIda.value = "solo-ida";
radioSoloIda.id = "radio-solo-ida";
radioSoloIda.className = "flight-type-radio-solo"; // Clase para estilizar
radioSoloIda.checked = selectedType === "solo-ida"; // Mantener el estado actual

const labelSoloIda = document.createElement("label");
labelSoloIda.htmlFor = "radio-solo-ida";
labelSoloIda.className = "flight-type-label-solo-ida"; // Clase única
labelSoloIda.textContent = "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Solo Ida"; // Agregar 2 espacios antes del texto

// Agregar radio y etiqueta al contenedor de "Solo Ida"
soloIdaWrapper.appendChild(radioSoloIda);
soloIdaWrapper.appendChild(labelSoloIda);

// Agregar ambos contenedores al contenedor principal
flightTypeContainer.appendChild(idaVueltaWrapper);
flightTypeContainer.appendChild(soloIdaWrapper);

// Agregar contenedor al modal de resumen
summaryModal.prepend(flightTypeContainer);

  // Agregar eventos de cambio
  radioIdaVuelta.addEventListener("change", () => {
    selectedType = "ida-vuelta";
    toggleReturnDate();
    updateSummary(); // Actualiza el resumen dinámicamente
  });

  radioSoloIda.addEventListener("change", () => {
    selectedType = "solo-ida";
    toggleReturnDate();
    updateSummary(); // Actualiza el resumen dinámicamente
  });
};

// Llama a esta función después de mostrar el modal de resumen
document.getElementById("next-summary").addEventListener("click", () => {
  updatePassengers();
  updateSummary();
  showModal("modal-summary");
  addFlightTypeRadiosToSummary(); // Agregar los radios dinámicamente
});
// Dentro de la función que maneja el modal de destino

  // Asumiendo que ya tienes el modal de destino y los elementos correspondientes
const destinationInput = document.getElementById("destination-input");
const suggestionsDestinations = document.getElementById("destination-suggestions");

// Crea el contenedor principal
const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container-destino"); // Clase para el contenedor principal
// Agrega un texto al contenedor principal
const mainText = document.createElement("p"); // Cambia "p" por "span" o "div" según prefieras
mainText.textContent = "--:"; // El texto que deseas mostrar
mainText.classList.add("texto-descripcion-destino"); // Clase para estilizar el texto

// Añade el texto al contenedor principal antes del contenedor de radios

// Crea el contenedor para los inputs radio
const radioContainer = document.createElement("div");
radioContainer.classList.add("radio-container-destino"); // Clase para estilizar radios

// Crea los inputs radio y sus etiquetas
const radioAvianca = document.createElement("input");
radioAvianca.type = "radio";
radioAvianca.name = "destination-type";
radioAvianca.value = "avianca";
radioAvianca.id = "avianca-destination";

const labelAvianca = document.createElement("label");
labelAvianca.setAttribute("for", "avianca-destination");
labelAvianca.textContent = "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Destinos Avianca";

const radioAliados = document.createElement("input");
radioAliados.type = "radio";
radioAliados.name = "destination-type";
radioAliados.value = "aliados";
radioAliados.id = "aliados-destination";

const labelAliados = document.createElement("label");
labelAliados.setAttribute("for", "aliados-destination");
labelAliados.textContent = "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Destinos Aliados";

// Añade los radios y etiquetas al contenedor de radios
radioContainer.appendChild(radioAvianca);
radioContainer.appendChild(labelAvianca);
radioContainer.appendChild(radioAliados);
radioContainer.appendChild(labelAliados);

// Añade el contenedor de radios al contenedor principal
mainContainer.appendChild(radioContainer);
mainContainer.insertBefore(mainText, radioContainer);

// Inserta el contenedor principal después del input de destino y antes de las sugerencias
if (destinationInput && suggestionsDestinations && suggestionsDestinations.parentNode === destinationInput.parentNode) {
  destinationInput.parentNode.insertBefore(mainContainer, suggestionsDestinations);
} else {
  console.warn("No se pudo insertar el elemento, usando appendChild como alternativa.");
  destinationInput.parentNode.appendChild(mainContainer);
}

    const loader = document.querySelector('.loader');
    setTimeout(() =>{
        try{
            document.querySelector('body').classList.remove('sb-hidden');
            loader.classList.remove('show');

            if(info.edit === 1){
                btnSearchFlight.click();
            }

             }catch(err){
            console.log(err);
        }
    }, 1000);

// Llama a esta función antes de redirigir al usuario a la otra página

  // Ejecuta al inicio para asegurar que todo esté correcto
  toggleReturnDate();
});
// Crear el nuevo div que se agregará al modal
