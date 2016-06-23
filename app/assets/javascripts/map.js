//DONN



var trends = app.tweets.fetch();
var data = trends.responseJSON

//AJAX



var mymap = L.map('mapid').setView([-33.8688, 151.2093], 8);


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    // attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 8,
    id: 'donnzh.0eof43al',
    accessToken: 'pk.eyJ1IjoiZG9ubnpoIiwiYSI6ImNpcG5rYTRxZTAwMTJ0cm5nZXB0d3lpNGgifQ.UFGuf2VLMfHzWwAf_fjMUQ'
}).addTo(mymap);



//
// var circle = L.circle([-33.8688, 151.2], 900, {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5
//     // text: 'hello'
// }).addTo(mymap);

//
// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(mymap);
//
//
// var marker = L.marker([51.5, -70.09]).addTo(mymap);

// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");
//
// //
// var popup = L.popup()
//     .setLatLng([51.5, -20.09])
//     .setContent("I am a standalone popup.")
//
//


//
//
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);



// var LeafIcon = L.Icon.extend({
//     options: {
//         shadowUrl: 'leaf-shadow.png',
//         iconSize:     [38, 95],
//         shadowSize:   [50, 64],
//         iconAnchor:   [22, 94],
//         shadowAnchor: [4, 62],
//         popupAnchor:  [-3, -76]
//     }
// });
//
// var greenIcon = new LeafIcon({iconUrl: 'leaf-green.png'}),
//     redIcon = new LeafIcon({iconUrl: 'leaf-red.png'}),
//     orangeIcon = new LeafIcon({iconUrl: 'leaf-orange.png'});
//
//     L.marker([-33.8688, 151.2193], {icon: greenIcon}).addTo(mymap).bindPopup("I am a green leaf.");
//     L.marker([-33.8600, 151.2093], {icon: redIcon}).addTo(mymap).bindPopup("I am a red leaf.");
//     L.marker([-33.8588, 151.2093], {icon: orangeIcon}).addTo(mymap).bindPopup("I am an orange leaf.");
//
//


// var myLines = [{
//     "type": "LineString",
//     "coordinates": [[-100, 40], [-105, 45], [-110, 55]]
// }, {
//     "type": "LineString",
//     "coordinates": [[-105, 40], [-110, 45], [-115, 55]]
// }];
//
// var myStyle = {
//     "color": "#ff7800",
//     "weight": 5,
//     "opacity": 0.65,
//     "text": "hello"
// };
//
// L.geoJson(myLines, {
//     style: myStyle
// }).addTo(mymap);


//
// var geojsonFeature = {
//     "type": "Feature",
//     "properties": {
//         "name": "Coors Field",
//         "amenity": "Baseball Stadium",
//         "popupContent": "This is where the Rockies play!"
//     },
//     "geometry": {
//         "type": "LineString",
//             "coordinates": [[-105, 40], [-110, 45], [-115, 55]]
//     }
// };
//
// L.geoJson(geojsonFeature).addTo(mymap);



//     var states = [{
//         "type": "Feature",
//         "properties": {"party": "Republican"},
//         "geometry": {
//             "type": "Polygon",
//             "coordinates": [[
//                 [-104.05, 48.99],
//                 [-97.22,  48.98],
//                 [-96.58,  45.94],
//                 [-104.03, 45.94],
//                 [-104.05, 48.99]
//             ]]
//         }
//     }, {
//         "type": "Feature",
//         "properties": {"party": "Democrat"},
//         "geometry": {
//             "type": "Polygon",
//             "coordinates": [[
//                 [-109.05, 41.00],
//                 [-102.06, 40.99],
//                 [-102.03, 36.99],
//                 [-109.04, 36.99],
//                 [-109.05, 41.00]
//             ]]
//         }
//     }];
//
//     L.geoJson(states, {
//         style: function(feature) {
//             switch (feature.properties.party) {
//                 case 'Republican': return {color: "#ff0000"};
//                 case 'Democrat':   return {color: "#0000ff"};
//             }
//         }
//     }).addTo(mymap);
//
//
//
//
//     function onEachFeature(feature, layer) {
//     // does this feature have a property named popupContent?
//     if (feature.properties && feature.properties.popupContent) {
//         layer.bindPopup(feature.properties.popupContent);
//     }
// }
//
// var geojsonFeature = {
//     "type": "Feature",
//     "properties": {
//         "name": "Coors Field",
//         "amenity": "Baseball Stadium",
//         "popupContent": "This is where the Rockies play!"
//     },
//     "geometry": {
//         "type": "Point",
//         "coordinates": [-104.99404, 39.75621]
//     }
// };
//
// L.geoJson(geojsonFeature, {
//     onEachFeature: onEachFeature
// }).addTo(mymap);


// var point = L.point(200, 300);

//
// var myIcon = L.divIcon({
//   className: 'my-div-icon',
// //  // Set class for CSS styling
//                 html: 'ATextLabel',
//                 iconSize:[80 , 20],
//                 iconAnchor:[0,0]
//
//
// } );

//
// var myIcon2 = L.divIcon({
//   className: 'my-div-icon',
// //  // Set class for CSS styling
//                 html: 'A2TextLabel',
//                 iconSize:null,
//                 iconAnchor:[0,0]
//
//
//
// } );
//
// var myIcon3 = L.divIcon({
//   className: 'my-div-icon',
// //  // Set class for CSS styling
//                 html: 'AText333Label',
//                  iconSize:null,
//                  iconAnchor:[0,0]
//
//
//
// } );


// var collisionLayer = L.layerGroup.collision({
//     margin: -8
// });

// collisionLayer.add( L.marker() );

// you can set .my-div-icon styles in CSS

var sydLatLng = [-33.8688, 151.2093];
var melLatLng = [-37.83148, 144.88083];
var adeLatLng = [-34.92647, 138.58154];
var briLatLng = [-27.47416, 153.01758];

//sydney
// var sydLatLng2 = [-33.8688, 151.0093];
// var sydLatLng3 = L.latLngBounds(sydLatLng, sydLatLng2);
//
// var textLatLng3 = [-33.8688, 151.2093];

// var textLatLng4 = [51.509, -0.01];



var sizeTest = function(num) {
    if (num > 500000) {
        return 'my-div-icon1'
    } else if (num > 50000 && num < 500000) {
        return 'my-div-icon2'
    } else if (num > 10000 && num < 50000) {
        return 'my-div-icon3'
    }
};

var locationTest = function(city) {
    var cityName = city.toLowerCase()
    if (cityName === 'sydney') {
        return sydLatLng
    } else if (cityName === 'melbourne') {
        return melLatLng
    } else if (cityName === 'adelaide') {
        return adeLatLng
    } else if (cityName === 'brisbane') {
        return briLatLng
    }
}

var zoom8

var uniqLocation = _.uniq(_.pluck(data, 'location'))

var dataByLocation = []

for (i = 0; i < uniqLocation.length; i++) {
    dataByLocation.push(_.where(data, {
        location: uniqLocation[i]
    }))
}


console.log(uniqLocation)

// var anchorX = 0
// var anchorY = -100
var mark = []

// for (i = 0; i < dataByLocation.length; i++) {
//
//   var anchorX = 0
//   var anchorY = -100
//   mark[i] = []
//
//   for (j=0; j< dataByLocation[i].length; j ++) {
//
//
//     anchorX += (dataByLocation[i][j].name.length * 10)
//     if (j % 3 == 0) {
//         anchorY += 40;
//         anchorX = 0;
//     }
//
//     mark[i][j] = L.marker(locationTest(dataByLocation[i][j].location), {
//         icon: L.divIcon({
//
//             className: sizeTest(dataByLocation[i][j].value),
//             //  // Set class for CSS styling
//             html: dataByLocation[i][j].name,
//             iconSize: null,
//             iconAnchor: [anchorX, anchorY]
//         }),
//         draggable: true, // Allow label dragging...?
//         zIndexOffset: 1000,
//     })
// }
//
// var zoom8 = L.featureGroup(mark[i]);
// zoom8.addTo(mymap);
// }


//
var zoom8;
var zoom = {
    8: {
        anchorX: 0,
        anchorY: -100,
        addXnum: 0,
        addYnum: 40
    },
    7: {
        anchorX: 20,
        anchorY: -80,
        addXnum: 0,
        addYnum: 40,

    },
    6: {
        anchorX: 0,
        anchorY: -60,
        addXnum: 0,
        addYnum: 25,

    },
    5: {
        anchorX: 0,
        anchorY: -50,
        addXnum: 0,
        addYnum: 20,

    },
    4: {
        anchorX: 0,
        anchorY: -50,
        addXnum: 0,
        addYnum: 15,

    },
    3: {
        anchorX: 0,
        anchorY: -40,
        addXnum: 0,
        addYnum: 10,

    },
    2: {
        anchorX: 0,
        anchorY: -30,
        addXnum: 0,
        addYnum: 10,

    },
    1: {
        anchorX: 0,
        anchorY: -10,
        addXnum: 0,
        addYnum: 10,

    },
    0: {
        anchorX: 0,
        anchorY: -10,
        addXnum: 0,
        addYnum: 10,

    }


}
mymap.on('zoomend', onZoomend);

function onZoomend() {
    // debugger;
    console.log(mymap.getZoom());



    mymap.eachLayer(function (layer) {
      if (layer._leaflet_id != "35")
      mymap.removeLayer(layer);
    });



    for (i = 0; i < dataByLocation.length; i++) {
        // var xAdd = zoom[mymap.getZoom()].
        var anchorX = zoom[mymap.getZoom()].anchorX
        var anchorY = zoom[mymap.getZoom()].anchorY
        mark[i] = []

        for (j = 0; j < dataByLocation[i].length; j++) {


            anchorX += (dataByLocation[i][j].name.length * 10)
            if (j % 3 == 0) {
                anchorY += zoom[mymap.getZoom()].addYnum;
                anchorX = zoom[mymap.getZoom()].addXnum;
            }

            mark[i][j] = L.marker(locationTest(dataByLocation[i][j].location), {
                icon: L.divIcon({

                    className: sizeTest(dataByLocation[i][j].value),
                    //  // Set class for CSS styling
                    html: dataByLocation[i][j].name,
                    iconSize: null,
                    iconAnchor: [anchorX, anchorY]
                }),
                draggable: true, // Allow label dragging...?
                zIndexOffset: 1000,
            })
        }
        if(mymap.getZoom() === 7)
                             {
                               $(".my-div-icon3").css({
                                //  "display" : "none",
                                 "opacity": "0.7",
                                 "font-size": "16px"

                               });}
                               if (mymap.getZoom() === 6){
                                 $(".my-div-icon3").css({
                                  //  "display" : "none",
                                   "opacity": "0.5",
                                   "font-size": "12px"
                                 });
                               }

        zoom8 = L.layerGroup(mark[i]);
        zoom8.addTo(mymap);
    }
}
onZoomend();
