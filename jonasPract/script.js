'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map, mapEvent;

class App {
  // make the variable private methood property
  #map;
  #mapEvent;
  constructor() {
    this._getPosition;

    form.addEventListener('submit', e => {});

    inputType.addEventListener('change', () => {
      inputElevation.closest('form__row').classList.toggle('form__row--hidden');
      inputCadence.closest('form__row').classList.toggle('form__row--hidden');
    });
  }
  _getPosition() {
    navigator.geolocation.getCurrentPosition(
      this._loadMap.bind(this),
      function () {
        alert('errooor');
      }
    );
  }
  _loadMap(position) {
    //this first success fxn takes in a params
    let latitude = position.coords.latitude; //or use the next line style
    let { longitude } = position.coords;
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, 13);

    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // handling clicks on map
    this.#map.on('click', function (mapE) {
      this.#mapEvent = mapE;
      inputDistance.focus();
      form.classList.remove('hidden');
    });
  }
  _showform() {}
  _toggleElevationField() {}
  _newWorkout(e) {
    e.preventDefault(); //to prevent the windown fromloading

    //   clar input field
    inputDistance.vlaue =
      inputDuration.vlaue =
      inputCadence.vlaue =
      inputElevation.vlaue =
        '';
    //   get location of each clicked point on the map
    const { lat, lng } = mapEvent.latlng;
    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup',
        })
      )
      .setPopupContent(`${(lat, lng)}`)
      .openPopup();
  }
}
// make the code work
const app = new App();
