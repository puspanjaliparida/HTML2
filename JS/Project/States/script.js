document.addEventListener('DOMContentLoaded', () => {
    fetch('states.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        displayStates(data);
        setupSearch(data);
    })
    .catch(error => console.error('Error fetching the states data:', error));
});

function displayStates(states) {
    const statesContainer = document.getElementById('states-container');
    statesContainer.innerHTML = '';
    
    states.forEach(state => {
        const stateCard = document.createElement('div');
        stateCard.className = 'state-card';

        stateCard.innerHTML = `
            <img src="${state.image}" alt="${state.name}">
            <h2><a href="${state.mapUrl}" target="_blank">${state.name}</a></h2>
            <p><strong>Capital:</strong> ${state.capital}</p>
            <p><strong>Traditional Food:</strong> ${state.food}</p>
            <p><strong>Famous Landmark:</strong> ${state.landmark}</p>
            <button class="details-button" onclick='displayStateDetails(${JSON.stringify(state)})'>More Details</button>
            `;

        statesContainer.appendChild(stateCard);
    });
}
function displaySingleState(state) {
    const statesContainer = document.getElementById('states-container');
    statesContainer.innerHTML = ''; 

    const stateCard = document.createElement('div');
    stateCard.className = 'state-card';

    stateCard.innerHTML = `
        <img src="${state.image}" alt="${state.name}">
        <h2><a href="${state.mapUrl}" target="_blank">${state.name}</a></h2>
        <p><strong>Capital:</strong> ${state.capital}</p>
        <p><strong>Traditional Food:</strong> ${state.food}</p>
        <p><strong>Famous Landmark:</strong> ${state.landmark}</p>
        <button class="details-button" onclick='location.href="state.html?state=${encodeURIComponent(state.name)}"'>More Details</button>
    `;

    statesContainer.appendChild(stateCard);
}

function displayStateDetails(state) {
    const statesContainer = document.getElementById('states-container');
    statesContainer.innerHTML = ''; 

    const stateCard = document.createElement('div');
    stateCard.className = 'state-card';

    stateCard.innerHTML = `
        <h2><a href="${state.mapUrl}" target="_blank">${state.name}</a></h2>
        <img src="${state.image}" alt="${state.name}">
        <p><strong>Traditional Food:-</strong><h2>${state.food}</h2></p>
        <img src="${state.foodImage}" alt="${state.food}" class="food-image">
        <p><strong>Traditional Dance:-<h2>${state.culture}</h2></strong></p>
        <img src="${state.imageCulture}" alt="${state.culture}"  class="culture-image">
        <p><strong>Famous Landmark:-</strong><h2>${state.landmark}</h2></p>
        <img src="${state.imageLandmark}" alt="${state.landmark}"  class="landmark-image">
        <button class="back-button" onclick='fetchAndDisplayStates()'>Back</button>
    `;

    statesContainer.appendChild(stateCard);
}

function fetchAndDisplayStates() {
    fetch('states.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        displayStates(data);
        setupSearch(data);
    })
    .catch(error => console.error('Error fetching the states data:', error));
}

function setupSearch(states) {
    const searchBar = document.getElementById('search-bar');
    console.log('Setting up search bar'); 
    searchBar.addEventListener('input', (event) => {
        console.log('Input event triggered'); 
        const query = event.target.value.toLowerCase();
        const filteredStates = states.filter(state => state.name.toLowerCase().includes(query));
        console.log('Filtered states:', filteredStates); 

        if (filteredStates.length === 1) {
            displaySingleState(filteredStates[0]);
        } else {
            displayStates(filteredStates);
        }
    });
}

