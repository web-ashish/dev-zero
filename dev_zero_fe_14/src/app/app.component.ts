import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    this.getBowserLoaction();
  }

  getBowserLoaction() {
    if ("geolocation" in navigator) {
      // Geolocation is available
      navigator.geolocation.getCurrentPosition(
        function (position) {
          // Success callback
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

          // You can now use the latitude and longitude to fetch location-specific data or display the location on a map.
        },
        function (error) {
          // Error callback
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      // Geolocation is not available
      console.error("Geolocation is not supported by this browser.");
    }

  }

}
