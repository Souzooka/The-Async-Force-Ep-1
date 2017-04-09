function getDataAndPutOnPage(source, property, element, eFunc) {
  const oReq = new XMLHttpRequest();

  oReq.addEventListener('load', function() {
    const data = JSON.parse(this.responseText);
    eFunc(data, property, element);
  });
  oReq.open('GET', source);
  oReq.send();
}




getDataAndPutOnPage('http://swapi.co/api/people/4/', 'name', '#person4Name', function(data, property, element) {
    document.querySelector(element).innerHTML = data[property];
  });
getDataAndPutOnPage('http://swapi.co/api/planets/1/', 'name', '#person4HomeWorld', function(data, property, element) {
    document.querySelector(element).innerHTML = data[property];
  });
getDataAndPutOnPage('http://swapi.co/api/people/14/', 'name', '#person14Name', function(data, property, element) {
    document.querySelector(element).innerHTML = data[property];
  });
getDataAndPutOnPage('http://swapi.co/api/species/1/', 'name', '#person14Species', function(data, property, element) {
    document.querySelector(element).innerHTML = data[property];
  });

/* 1. Get a list of all the films from the SWAPI, http://swapi.co/api/films/
      - fill in `filmList` with a new `<li>` element for each `film`
          - fill in each film's `filmTitle` with the title of the `film`
          - create a new `<li>` in this film's `filmPlanets` for each `planet` that appeared in this `film`
              - fill in each `planetTitle` with the name of the `planet` */