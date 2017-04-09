function getData(source, property, element) {
  const oReq = new XMLHttpRequest();

  oReq.addEventListener('load', function() {
    const data = JSON.parse(this.responseText);
    document.querySelector(element).innerHTML = data[property];
  });
  oReq.open('GET', source);
  oReq.send();

}

const person4Name = new XMLHttpRequest();

getData('http://swapi.co/api/people/4/', 'name', '#person4Name');
getData('http://swapi.co/api/planets/1/', 'name', '#person4HomeWorld');
getData('http://swapi.co/api/people/14/', 'name', '#person14Name');
getData('http://swapi.co/api/species/1/', 'name', '#person14Species');