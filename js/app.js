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
    let newList = document.createElement('li');
    newList.class = 'film';
    document.querySelector('#filmList').appendChild(newList);
    let newH2 = document.createElement('h2');
    newH2.class = 'filmTitle';
    newH2.innerHTML = data.results[i].title;
    newList.appendChild(newH2);
    let newH3 = document.createElement('h3');
    newH3.innerHTML = 'Planets';
    newList.appendChild(newH3);
    let newUL = document.createElement('ul');
    newUL.class = 'filmPlanets';
    newList.appendChild(newUL);

    for (let j = 0; j < data.results[i].planets.length; ++j) {
      getData(data.results[i].planets[j], 'name', newUL, iteratePlanets);
    }
  }

}

function iteratePlanets(data, property, element) {
  let newLI = document.createElement('li');
  newLI.class = 'planet';
  let newH4 = document.createElement('h4');
  newH4.class = 'planetName';
  newH4.innerHTML = data.name;
  newLI.appendChild(newH4);
  element.appendChild(newLI);
}


getData('http://swapi.co/api/people/4/', 'name', '#person4Name', function(data, property, element) {
    document.querySelector(element).innerHTML = data[property];
  });
getData('http://swapi.co/api/planets/1/', 'name', '#person4HomeWorld', function(data, property, element) {
    document.querySelector(element).innerHTML = data[property];
  });
getData('http://swapi.co/api/people/14/', 'name', '#person14Name', function(data, property, element) {
    document.querySelector(element).innerHTML = data[property];
  });
getData('http://swapi.co/api/species/1/', 'name', '#person14Species', function(data, property, element) {
    document.querySelector(element).innerHTML = data[property];
  });


getData('http://swapi.co/api/films/', 'name', '#person14Species', iterateFilms);


/* 1. Get a list of all the films from the SWAPI, http://swapi.co/api/films/
      - fill in `filmList` with a new `<li>` element for each `film`
          - fill in each film's `filmTitle` with the title of the `film`
          - create a new `<li>` in this film's `filmPlanets` for each `planet` that appeared in this `film`
              - fill in each `planetTitle` with the name of the `planet` */