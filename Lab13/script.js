
mapboxgl.accessToken = 'pk.eyJ1IjoibHRvcm5hcmkiLCJhIjoiY20xdGkxZ3J2MDJrcjJyb2JrbDZmNDFuMiJ9.kLvs70_baAbqWlz268EnIA';

const map = new mapboxgl.Map({
  container: 'lulu', // container id
  style: 'mapbox://styles/ltornari/cm3hkzk7p00d701rv63t8884a', // replace this with your style URL
  center: [-122.42285, 37.76869],
  zoom: 13,
  pitch: 30.00,
  bearing: 0.00,
  minZoom: 13

});

map.on('load', function () {
	// MORE CODE WILL GO INSIDE HERE
	map.addSource('restaurantSource',{
        'type':'vector',
        'url': 'mapbox://ltornari.3ycrvizb',
      });

	map.addLayer ({
		"id": "restaurantLayer",
		"source": "restaurantSource",
		"source-layer": "Historical_Restaurant_Inspect-b8uy7b",
		"type": "circle",
		"paint": {
			'circle-opacity': 0.3,
			'circle-color':
				['step',
					['to-number', ['get', 'inspecti_2']],
					'#aaaaaa',  
					45, '#440154',  // (45 - 80)
					80, '#3b528b',  // (80 - 85)
					85, '#21908d',  // (85 - 90)
					90, '#5dc963',  // (90 - 95)
					95, '#fde725'   // (95 - 100)
					]
		}	
	});

	console.log('My name is YOUR-NAME');
	map.on('mouseenter', 'restaurantLayer', (e) => {
				console.log(e.features[0]['properties'])
        var name = (e.features[0]['properties']['business_n']);
        var textField = document.getElementById('restText');
        textField.innerHTML = name;
  })      
})
