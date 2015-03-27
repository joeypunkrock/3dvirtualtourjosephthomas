
      function initialize() {
		
		//setting up variables
		var myMap, options, infoWindow, marker, locations, content;
		//create my marker array
		var markers = new Array();
		
		//initialise location of markers and information to load within the infoWindow
		locations = [
		['<div id="info">' +
			'<img src="images/js77.jpg" alt="" />' +
			'<h2>John Dalton Building</h2>' +
			'<p>The John Dalton Building is the main area for Science & Engineering and Computing and Digital Technology</P>' +
			'</div>', 53.471710, -2.239942],
      	['<div id="info">' +
			'<img src="images/js44.jpg" alt="" />' +
			'<h2>All Saints Bulding and Library</h2>' +
			'<p>MMU offers a brilliant library service with computer access within</P>' +
			'</div>', 53.470893, -2.239159],
		['<div id="info">' +
			'<img src="images/js33.jpg" alt="" />' +
			'<h2>Geoffrey Manton Building</h2>' +
			'<p>MMU offers a large amount of lecture halls and rooms to suit all academic needs</P>' +
			'</div>', 53.469216, -2.236903],
		['<div id="info">' +
			'<img src="images/js66.jpg" alt="" />' +
			'<h2>Cambridge Halls of Residence</h2>' +
			'<p>There is a large amount of student accommodation available</P>' +
			'</div>', 53.469410, -2.240100]
	  ];
	  
	  
	  
	  	//Call map div and assign to myMap
		myMapLG = new google.maps.Map (document.getElementById('map_canvas-lg'),{
			//find and set the location
          center: new google.maps.LatLng(53.470516, -2.238700),
		  //zoom level of map
          zoom: 16,
		  //ensure the correct type of map view is shown
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
		
		
		//variable for the infoWindow
    var infowindow = new google.maps.InfoWindow();
	//variable for the markers within the array
    var marker, i;
	
	//for how many locations are loaded add the markers to the position within the array list
    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: myMapLG
      });
	  
	  //event listener for clicking on a marker
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
			//set the correct content depending on which marker has been clicked. load up the information to display into the div
          infowindow.setContent(locations[i][0]);
          infowindow.open(myMapLG, marker);
        }
      })(marker, i));
    }
		
		
		
		
		
		//Call map div and assign to myMap
		myMapMD = new google.maps.Map (document.getElementById('map_canvas-md'),{
			//find and set the location
          center: new google.maps.LatLng(53.470516, -2.238700),
		  //zoom level of map
          zoom: 16,
		  //ensure the correct type of map view is shown
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
		
		
		//variable for the infoWindow
    var infowindow = new google.maps.InfoWindow();
	//variable for the markers within the array
    var marker, i;
	
	//for how many locations are loaded add the markers to the position within the array list
    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: myMapMD
      });
	  
	  //event listener for clicking on a marker
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
			//set the correct content depending on which marker has been clicked. load up the information to display into the div
          infowindow.setContent(locations[i][0]);
          infowindow.open(myMapMD, marker);
        }
      })(marker, i));
    }
		
		
		
		
		
		//Call map div and assign to myMap
		myMapSM = new google.maps.Map (document.getElementById('map_canvas-sm'),{
			//find and set the location
          center: new google.maps.LatLng(53.470516, -2.238700),
		  //zoom level of map
          zoom: 16,
		  //ensure the correct type of map view is shown
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
		
		
		//variable for the infoWindow
    var infowindow = new google.maps.InfoWindow();
	//variable for the markers within the array
    var marker, i;
	
	//for how many locations are loaded add the markers to the position within the array list
    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: myMapSM
      });
	  
	  //event listener for clicking on a marker
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
			//set the correct content depending on which marker has been clicked. load up the information to display into the div
          infowindow.setContent(locations[i][0]);
          infowindow.open(myMapSM, marker);
        }
      })(marker, i));
    }
		
		
		
		
		
		//Call map div and assign to myMap
		myMapXS = new google.maps.Map (document.getElementById('map_canvas-xs'),{
			//find and set the location
          center: new google.maps.LatLng(53.470516, -2.238700),
		  //zoom level of map
          zoom: 16,
		  //ensure the correct type of map view is shown
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });


	//variable for the infoWindow
    var infowindow = new google.maps.InfoWindow();
	//variable for the markers within the array
    var marker, i;
	
	//for how many locations are loaded add the markers to the position within the array list
    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: myMapXS
      });
	  
	  //event listener for clicking on a marker
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
			//set the correct content depending on which marker has been clicked. load up the information to display into the div
          infowindow.setContent(locations[i][0]);
          infowindow.open(myMapXS, marker);
        }
      })(marker, i));
    }
		
		
      }
	  //initiliase the map
      google.maps.event.addDomListener(window, 'load', initialize);


//  AIzaSyBoEV50vbC1lASn_BsU-QobQOEt1jn9Gf8

