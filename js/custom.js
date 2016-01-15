var slide_one = function() {
	var layer = new ol.layer.Tile({
		source: new ol.source.Stamen({
			layer: 'toner-lite'  /*terrain, terrain-background, terrain-labels, terrain-lines, 
			toner, toner-background, toner-hybrid, toner-labels, toner-lines, toner-lite, watercolor*/
		})
	});

	var center = new ol.proj.transform([-97.8, 29.3], 'EPSG:4326', 'EPSG:3857');

	/*var overlay = new ol.Overlay({
		position: center,
		element: document.getElementById('overlay')
	});*/

	var view = new ol.View({
		center: center,
		zoom: 6
	});

	var map = new ol.Map({
		target: 'map1',
		layers: [layer],
		view: view
	});
}

var baseMap = function() {
	var layer = new ol.layer.Tile({
		source: new ol.source.Stamen({
			layer: 'watercolor' 
		})
	}); 

	/*var layer2 = new ol.layer.Image({
    	extent: [-13884991, 2870341, -7455066, 6338219],
    	source: new ol.source.ImageWMS({
      		url: 'http://ec2-52-88-223-228.us-west-2.compute.amazonaws.com:8080/geoserver/wms',
      		params: {'LAYERS': 'tasmania'},
      		serverType: 'geoserver'
    	})
  	});*/

	/*var layer = new ol.layer.Tile({
		source: new ol.source.OSM()
	});*/

	var center = new ol.proj.transform([-97.8, 29.3], 'EPSG:4326', 'EPSG:3857');

	/*var overlay = new ol.Overlay({
		position: center,
		element: document.getElementById('overlay')
	});*/

	var view = new ol.View({
		center: center,
		zoom: 5
	});
	console.log("About to build the map!")
	var map = new ol.Map({
		target: 'map',
		/*layers: [layer, layer2],*/
		layers: [layer],
		view: view
	});
}

var zoomToSanMarcos = function() {
	var layer = new ol.layer.Tile({
		source: new ol.source.Stamen({
			layer: 'watercolor' 
		})
	}); 

	var center = new ol.proj.transform([-97.9389, 29.8794], 'EPSG:4326', 'EPSG:3857');

	var view = new ol.View({
		center: center,
		zoom: 15,
	});
	console.log("About to build the map!")
	var map = new ol.Map({
		target: 'map',
		layers: [layer],
		view: view
	});
}

var zoomToIssaquah = function() {
	var layer = new ol.layer.Tile({
		source: new ol.source.Stamen({
			layer: 'watercolor' 
		})
	}); 

	var center = new ol.proj.transform([-122.0433, 47.5356], 'EPSG:4326', 'EPSG:3857');

	var view = new ol.View({
		center: center,
		zoom: 15,
	});
	console.log("About to build the map!")
	var map = new ol.Map({
		target: 'map',
		layers: [layer],
		view: view
	});
}

var zoomToSLC = function() {
	var layer = new ol.layer.Tile({
		source: new ol.source.Stamen({
			layer: 'watercolor' 
		})
	}); 

	var center = new ol.proj.transform([-111.8833, 40.7500], 'EPSG:4326', 'EPSG:3857');

	var view = new ol.View({
		center: center,
		zoom: 15,
	});
	console.log("About to build the map!")
	var map = new ol.Map({
		target: 'map',
		layers: [layer],
		view: view
	});
}