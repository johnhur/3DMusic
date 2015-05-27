var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );
			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			var geometry = new THREE.BoxGeometry( 3, 3, 3, 0,0,0);
			var material3 = new THREE.MeshBasicMaterial( { color: 0x00ffff, wireframe: true } );
			var cube3 = new THREE.Mesh( geometry, material3 );
			cube3.position.set( 5, 0, 0 );
			scene.add( cube3 );

			var material2 = new THREE.MeshBasicMaterial( { color: 0xb3b3b3, wireframe: true} );
			var cube2 = new THREE.Mesh(geometry, material2);
			cube2.position.set( -5, 0, 0 );
			scene.add(cube2);

			var material1 = new THREE.MeshBasicMaterial( { color: 0x4e2cc4,  wireframe: true} );
			var cube1 = new THREE.Mesh(geometry, material1);
			cube1.position.set( -15, 0, 0 );
			scene.add(cube1);

				
			var material4 = new THREE.MeshBasicMaterial( { color: 0xffa500, wireframe: true} );
			var cube4 = new THREE.Mesh(geometry, material4);
			cube4.position.set (15, 0, 0); 
			scene.add(cube4);


			camera.position.z = 15;

			function rotateCubes () {
				cube3.rotation.y += 0.025;
				cube3.rotation.x += 0.025;
				cube2.rotation.y += 0.035;
				cube2.rotation.x += 0.015;
				cube1.rotation.y += 0.025;
				cube1.rotation.x += 0.025;
				cube4.rotation.y += 0.025;
				cube4.rotation.x += 0.015;
			}

			function render() {
				requestAnimationFrame( render );
					rotateCubes();
				renderer.render( scene, camera );
			}
			render();

var blue = document.getElementById('blue');		

blue.addEventListener('click', function() {
	console.log("div clicked!")
	cube1.translateX(2);
})

console.log(cube1);


// cube1.addEventListener("click", function() {
//     console.log("Button clicked.");
//   });


function cube1r(cube1) {
	THREE.EventDispatcher.call(cube1);
 	cube1.addEventListener("click", function(event) {
  	
  	// if (event.keyCode == 66) {
  	  cube1.translateX(5);
  	//
  });
  // addEventListener("keyup", function(event) {
  //   if (event.keyCode == 66)
  //     document.body.style.background = "";
  // });
};
cube1r(cube1);



function cube2r() {
  addEventListener("keydown", function(event) {
    if (event.keyCode == 86) {
      cube2.rotation.x += 1;
    }

  });
  // addEventListener("keyup", function(event) {
  //   if (event.keyCode == 86)
  //     document.body.style.background = "";
  // });
};
cube2r();

