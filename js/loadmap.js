console.log("Document ready!");

//make map globally available
window.map;

var map = L.map('map-canvas', {zoomControl: false}).setView([39.750717, -104.973487],13)


var tileLayer = L.tileLayer(
	'https://api.mapbox.com/styles/v1/kedography/ck2tkebdw2ffw1cqzg6s850u4/tiles/{z}/{x}/{y}?access_token={accessToken}', {
		attribution: '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
    minZoom: 6,
    id: 'ck2tkebdw2ffw1cqzg6s850u4',
    accessToken: 'pk.eyJ1Ijoia2Vkb2dyYXBoeSIsImEiOiJjazJ0a2NzZ3QxYng2M2Jxb2oxMW16azZzIn0.Wm9vlKUC3USjWsbpdQQtUQ'
});


tileLayer.addTo(map);

L.control.zoom({
    position: 'topright'
}).addTo(map);

$.getJSON("sptl/COminusArea.json", function(data) {

    var denverCutout = L.geoJSON(data, {
            //onEachFeature: function onEachFeature(feature, layer) { //layer.bindPopup('<strong>' + feature.properties.Title + '</strong><br><br>Description: ' + feature.properties.Descr);
        // Style the nitrate concentration hexbins
        style: function (feature) {
            return {
                color: '#585858', // Stroke Color
                weight: 0.5, // Stroke Weight
                fillOpacity: 0.6, // Override the default fill opacity
                opacity: 0.6 // Border opacity
            };
        }
        }).addTo(map);
});     

$(function () {
  $('#LT').change(function () {
      if ($(this).val() == 'a') {
          $('.radios').show();
      } 
      //else if ($(this).val() == 'b') {
      //    $('radios').show();
      //}
      else {
          $('.radios').hide();
      }
  });
  $('#LT2').change(function () {
    if ($(this).val() == 'b') {
        $('.radios').show();
    } else {
        $('.radios').hide();
    }
  })
});
$(function () {
    $('#LVL').change(function() {
        if ($(this).val() == 'easy') {
            $('.textEntry').show();
        } else {
            $('.textEntry').hide();
        }
    });
    $('#LVL2').change(function() {
        if ($(this).val() == 'medium') {
            $('.textEntry').show();
        } else {
            $('.textEntry').hide();
        }
    });
    $('#LVL3').change(function() {
        if ($(this).val() == 'hard') {
            $('.textEntry').show();
        } else {
            $('.textEntry').hide();
        }
    })
});
/*
$(function searchinput() {
    //$("#startbox").autocomplete({
    $.ajax({
        type: 'GET',
        url: '/data/v1/' + searchinput,
        success: function(result) {
            window.location.reload(true);
        }
    //name: 'startbox',
    //source: 'http://localhost:3000/search?addresses=%QUERY',
    //limit: 4
    })
});
*/

$.getJSON('/data/v1/addresses', function(response) {
    // do something with the response, which should be the same as 'results.rows' above
  });

function widgets(){
	//widget to display help info
	var helpWidget = $("#help");
	html = "<img src = 'img/help.png' id='helpImg' class='widget' alt='help' data-toggle='tooltip' data-placement='bottom' title='Walkthrough'>";
	helpWidget.html(html);
	//widget to allow user to locate self and use as starting point
	/*var locateWidget = $("#locateMe");
	html = "<img src = 'img/locateMe.png' id='locateMeImg' class='widget' alt='use gps' data-toggle='tooltip' data-placement='bottom' title='Use GPS'>";
	locateWidget.html(html);
	var resetView = $("#resetView");
	html = "<img src = 'img/resetView.png' id='resetViewImg' class='widget' alt='reset map view' data-toggle='tooltip' data-placement='bottom' title='Reset the Map'>";
	resetView.html(html);
	*/
    //reset view onClick recenters the map
	/*resetView.click(function() {
		map.setCenter({lat: 46.7615612352751, lng: -92.15266549999996});
		map.setZoom(12);
	});*/
	//locateWidget onClick uses User's GPS location
	/*
    locateWidget.click(function(){
		userLocation();
	});
    */
	
    // add event listeners for about panel 
    /* aboutWidget = $("#aboutbutton");
    aboutWidget.click(function(){
        if ($("#aboutuspanel").css("display") == "block") {
            $("#aboutuspanel").css("display", "none");
        } else {
            $("#aboutuspanel").css("display", "block");
        };
    }); 
    */
    /*
	//a few nifty triggers to close map clutter onClick
	google.maps.event.addListener(map, 'click', function() {
        infoBox.close();
	}); 
	google.maps.event.addListener(map,'click', function() {
		$("#aboutuspanel").css("display", "none");
	});
    */
    //widgets();
    

};
