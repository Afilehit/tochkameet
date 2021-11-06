function initMap() {
    
    var manager = new google.maps.LatLng(55.75636585524346, 37.60491988473058);
    var client = new google.maps.LatLng(55.76138972593363, 37.61029924421599);

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: { lat: 55.751244, lng: 37.618423 }, // Moscow.
    });
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
      draggable: true,
      map,
      panel: document.getElementById("panel"),
    });
  
    directionsRenderer.addListener("directions_changed", () => {
      const directions = directionsRenderer.getDirections();
  
      if (directions) {
        console.log(computeDistance(directions));
      }
    });
    displayRoute(
      manager,
      client,
      directionsService,
      directionsRenderer
    );
  }
  
  function displayRoute(origin, destination, service, display) {
    service
      .route({
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
        avoidTolls: true,
      })
      .then((result) => {
        display.setDirections(result);
      })
      .catch((e) => {
        alert("Could not display directions due to: " + e);
      });
  }
  
  function computeDistance(result) {
    const myroute = result.routes[0];
  
    if (!myroute) {
      return;
    }
    else {
        return myroute.legs[0].distance.value / 1000;
    }
  }
  firebase.database().ref('managers').set({
    status: true,
  });

//   function computeTotalDistance(result) {
//     let total = 0;
//     const myroute = result.routes[0];
  
//     if (!myroute) {
//       return;
//     }
  
//     for (let i = 0; i < myroute.legs.length; i++) {
//       total += myroute.legs[i].distance.value;
//     }
  
//     total = total / 1000;
//     document.getElementById("total").innerHTML = total + " km";
//   }