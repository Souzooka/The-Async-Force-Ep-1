function getData(source, property, element, eFunc) {
  const oReq = new XMLHttpRequest();

  oReq.addEventListener('load', function() {
    const data = JSON.parse(this.responseText);
    eFunc(data, property, element);
  });
  oReq.open('GET', source);
  oReq.send();
}

function iterateFilms(data, property, element) {
  const filmList = document.querySelector('#filmsList');
  if (data.next !== null && data.next !== undefined) {
    getData(data.next, 'name', null, iterateFilms);
  }

  for (let i = 0; i < data.results.length; ++i) {
    const newList = document.createElement('li');
    newList.class = 'film';
    document.querySelector('#filmList').appendChild(newList);
    const newH2 = document.createElement('h2');
    newH2.class = 'filmTitle';
    newH2.innerHTML = data.results[i].title;
    newList.appendChild(newH2);
    const newH3 = document.createElement('h3');
    newH3.innerHTML = 'Planets';
    newList.appendChild(newH3);
    const newUL = document.createElement('ul');
    newUL.class = 'filmPlanets';
    newList.appendChild(newUL);

    for (let j = 0; j < data.results[i].planets.length; ++j) {
      getData(data.results[i].planets[j], 'name', newUL, iteratePlanets);
    }
  }
}

function iteratePlanets(data, property, element) {
  const newLI = document.createElement('li');
  newLI.class = 'planet';
  const newH4 = document.createElement('h4');
  newH4.class = 'planetName';
  newH4.innerHTML = data.name;
  newLI.appendChild(newH4);
  element.appendChild(newLI);
}

function postData(data, property, element) {
  document.querySelector(element).innerHTML = data[property];
}

getData('http://swapi.co/api/people/4/', 'name', '#person4Name', postData);
getData('http://swapi.co/api/planets/1/', 'name', '#person4HomeWorld', postData);
getData('http://swapi.co/api/people/14/', 'name', '#person14Name', postData);
getData('http://swapi.co/api/species/1/', 'name', '#person14Species', postData);
getData('http://swapi.co/api/films/', 'name', '#person14Species', iterateFilms);

