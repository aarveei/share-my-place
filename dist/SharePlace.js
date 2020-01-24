class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-btn");

    locateUserBtn.addEventListener("click", this.locateUserHandler);
    addressForm.addEventListener("click", this.findAddressHandler);
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert(
        "Location feature is not available in your browser. Please use a modern browser!"
      );
      return;
    }

    navigator.geolocation.getCurrentPosition(
      successResult => {
        const coordinates = {
          lat: successResult.coords.latitude,
          long: successResult.coords.longitude
        };
        console.log(coordinates);
      },
      error => {
        alert("Could not locate you. Please enter an address manually!");
      }
    );
  }

  findAddressHandler() {}
}

const placeFinder = new PlaceFinder();
