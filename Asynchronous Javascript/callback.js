'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/*----------------------------------------------------------------------------------------------*/

const renderCountryData=function(data,cd,className=''){
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
    countriesContainer.style.opacity=1;
}

const countryAndNeighbour=function(country){
const request=new XMLHttpRequest();
request.open('GET',`https://restcountries.com/v3.1/name/${country}`)
request.send();
request.addEventListener('load',function(){
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const cdKey=Object.keys(data.currencies)[0];
    const cd=data.currencies[cdKey].name;
    renderCountryData(data,cd);

    // Getting neighbourCouuntry
    const neighbour=data.borders?.[0];
    if(!neighbour) return;

    const request2=new XMLHttpRequest();
    request2.open('GET',`https://restcountries.com/v3.1/alpha/${neighbour}`)
    request2.send();

    request2.addEventListener('load',function(){
        const [data2] = JSON.parse(this.responseText);
        console.log(data2);
        const cdKey=Object.keys(data2.currencies)[0];
        const cd=data2.currencies[cdKey].name;
        renderCountryData(data2,cd,'neighbour');
    })
});
}
// callBack function can be identified the triangular shape
countryAndNeighbour('india')
// countryAndNeighbour('usa')
