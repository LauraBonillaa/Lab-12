const url = 'https://valorant-api.com/v1/agents';

// Función para obtener la lista de personajes
async function obtenerPersonajes() {
  const response = await fetch(url);
  const data = await response.json();
  const personajes = data.data;

  const personajesDiv = document.getElementById('personajes');
  personajesDiv.classList.add("personanjes")
  personajes.forEach(personaje => {
    const card = `
      <div class="card">
        <img src="${personaje.displayIcon}" alt="${personaje.displayName}">

        <h3>${personaje.displayName}</h3>
        <p>${personaje.description}</p>
        <a href="detalle.html?id=${personaje.uuid}" class="btn">Ver información detallada</a>
      </div>
    `;
    personajesDiv.innerHTML += card;
  });
}

// Llamar a la función para obtener la lista de personajes al cargar la página
obtenerPersonajes();
