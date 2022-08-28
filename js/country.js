const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayData(data))
}

const displayData = countries => {
    const countryContainer = document.getElementById('cuntries-container');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h3>Name: ${country.name.common}</h3>
            <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
        `;
        countryContainer.appendChild(countryDiv);
    })
}

loadCountry();
