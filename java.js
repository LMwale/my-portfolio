<!DOCTYPE html>
<html>
<head>
   <style type="text/css">
      /* Set the size of the div element
      that contains the map */
      #map {
         height: 400px;
         width: 400px;
      }
      h2 {
         color: #308d46;
      }
   </style>
</head>
<body>
   <h1 style="color: green;">Welcome to Tutorials Point</h1>
   <h2 style="color: grey;">
      Add Google Map to your Webpage
   </h2>
   <!--The div element for the map -->
   <div id="map"></div>
   <!--Adding script by google -->
   <script src="https://maps.googleapis.com/maps/api/js?key=<YOUR_API_KEY>&callback=initMap&libraries=&v=weekly"async></script>
   <script>
      // Initialize and add the map
      function initMap() {
         // The location of Geeksforgeeks office
         const tutorialsPoint_office = {
            lat: 17.43827944602866,
            lng: 78.39530424154626
         };
         // Create the map, centered at tutorialsPoint_office
         const map = new google.maps.Map(
         document.getElementById("map"), {
            // Set the zoom of the map
            zoom: 17.56,
            center: tutorialsPoint_office,
         });
      }
   </script>
</body>
</html>

</body>
</html>

