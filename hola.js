fetch('https://hp-api.onrender.com/api/characters')
  .then(response => response.json())
  .then(data => {
    console.log(data);
        personajes = data;
        mostrarPersonajes(personajes);
  })
  .catch(
    error => console.error('Error en el fetch:', error)
);


searchInput.addEventListener('input', () => {
  const texto = searchInput.value.toLowerCase();  
  const filtrados = personajes.filter(p =>
    p.name.toLowerCase().includes(texto)
  );
    mostrarPersonajes(filtrados);
});


function mostrarPersonajes(lista) {
  container.innerHTML = '';

  if (lista.length === 0) {
    container.innerHTML = '<p>No se encontraron personajes.</p>';
    return;
  }


  lista.forEach(p => {
    const foto = p.image !== ''
      ? p.image
      : 'https://via.placeholder.com/200x260?text=Sin+Foto';


    const card = document.createElement('article');
    card.classList.add('card');


    card.innerHTML = `
      <figure>
        <img src="${foto}" alt="${p.name}">
      </figure>
      <h2>${p.name}</h2>
      <p>Casa: ${p.house || 'Desconocida'}</p>
    `;


    container.appendChild(card);
  });
}
