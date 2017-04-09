function person4NameHTML() {
  const data = JSON.parse(this.responseText);
  document.querySelector('#person4Name').innerHTML = data.name;
}

function person4HomeWorldHTML() {
  const data = JSON.parse(this.responseText);
  document.querySelector('#person4HomeWorld').innerHTML = data.name;
}

const person4Name = new XMLHttpRequest();

person4Name.addEventListener('load', person4NameHTML);
person4Name.open('GET', 'http://swapi.co/api/people/4/');
person4Name.send();

const person4HomeWorld = new XMLHttpRequest();

person4HomeWorld.addEventListener('load', person4HomeWorldHTML);
person4HomeWorld.open('GET', 'http://swapi.co/api/planets/1/');
person4HomeWorld.send();