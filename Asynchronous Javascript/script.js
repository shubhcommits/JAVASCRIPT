    'use strict';

    const btn = document.querySelector('.btn-country');
    const countriesContainer = document.querySelector('.countries');

/*----------------------------------------------------------------------------------------------*/
    const countryData=function(country){
    const request=new XMLHttpRequest();
    request.open('GET',`https://restcountries.com/v3.1/name/${country}`)
    request.send();
    // console.log(request.respondText);
    request.addEventListener('load',function(){
        // console.log(request.responseText);
        const [data] = JSON.parse(this.responseText);
        console.log(data);
        const cdKey=Object.keys(data.currencies)[0];
        const cd=data.currencies[cdKey].name;
        // console.log(data.currencies);  === console.log(data['currencies']);
        // if(data.currencies===data['currencies']){
        //     console.log('yes');  // print yes as both are equal
        // }
        // data[currencies]    // this is used when currencies is stored in a variable and we want to use it as a property
        // console.log(data['currencies']);  // this is used to directly access when it not stored in a variable can clso use as ->
        // console.log(dats.currencies);
        const html=`
        <article class="country">
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
    });
}
countryData('india')
countryData('usa')
countryData('australia')