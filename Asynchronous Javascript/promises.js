"use strict";

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/*---------------------------------------------------------------------------------*/

const renderError=function(msg){
    countriesContainer.insertAdjacentText('beforeend',msg);
    // countriesContainer.style.opacity=1;
};

const renderCountryData=function(data,className=''){
    const cdKey=Object.keys(data.currencies)[0];
    const cd=data.currencies[cdKey].name;
    const html=`
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${data.population}</p>
        <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
        <p class="country__row"><span>💰</span>${cd}</p>
      </div>
    </article>`;
    countriesContainer.insertAdjacentHTML('beforeend',html);
    // countriesContainer.style.opacity=1;
}
// const countryData=function(country){
//     fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(response){
//         console.log(response);
//         return response.json();
//     }).then(function(data){
//         console.log(data);
//         data=data[0];
//         const cdKey=Object.keys(data.currencies)[0];
//         const cd=data.currencies[cdKey].name;
//         renderCountryData(data,cd);
//     })
// }

// Refactoring data and handling errors manually

const countryData=function(country){
    fetch(`https://restcountries.com/v3.1/name/${country}`).then(response => {
        console.log(response);
        if(!response.ok){
            throw new Error(`Country not found (${response.status})`)
        }
        return response.json()}).then(data => {
        renderCountryData(data[0]);
        // const neighbour=data[0].borders[0];
        console.log(data[0].borders);
        const neighbour=data[0].borders && data[0].borders[0];
        // const neighbour='dknd'
        console.log(neighbour);
        // if(!neighbour) throw new Error('No neighbour found!');
        if (!neighbour) {
            throw new Error('No neighbour found!');
        }
        // COUNTRY 2
        return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    }).then(response => {
        if(!response.ok){
            throw new Error(`Country not found (${response.status})`)
        }
        return response.json()})
        .then(data=>renderCountryData(data[0],'neighbour')).catch(err=>{
        console.error(`${err}`);
        renderError(`something went wrong ${err.message} Try again`);
    }).finally(()=>{
        countriesContainer.style.opacity=1;
    });  // finally will executed either error found or not
}
// countryData('india');
// countryData('switzerland');
btn.addEventListener('click',function(){
    countryData('australia');
});

// countryData('fjjksdfj');