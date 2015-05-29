var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 500 );
			var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			var geometry = new THREE.BoxGeometry( 3, 3, 3, 0,0,0);
			var material3 = new THREE.MeshBasicMaterial( { color: 0x00ffff, wireframe: true } );
			var cube3 = new THREE.Mesh( geometry, material3 );
			cube3.position.set( 5, 0, 0 );
			scene.add( cube3 );

			var material2 = new THREE.MeshBasicMaterial( { color: 0x00ffff, wireframe: true} );
			var geometry2 = new THREE.BoxGeometry( 5, 5, 5, 0,0,0);
			var cube2 = new THREE.Mesh(geometry2, material2);
			cube2.position.set( -5, 0, 0 );
			//setTimeout(function(){scene.add(cube2);},18000)

			var material1 = new THREE.MeshNormalMaterial({ wireframe: true});
			var sphereS = new THREE.SphereGeometry(15,6,5);
			//var material1 = new THREE.MeshBasicMaterial( { color: 0x4e2cc4,  wireframe: true} );
			var sphere1 = new THREE.Mesh(sphereS, material1);
			var clock = new THREE.Clock();
			var delta = clock.getDelta();
			sphere1.position.set( 0, 0, 0 );
			scene.add(sphere1);

// var material = new THREE.MeshBasicMaterial({color: 0x2d73a0})
// var delta = clock.getDelta();
// cube.rotation.x += 3.2 * delta;
// cube.rotation.y += 3.2 * delta;

				
			var material4 = new THREE.MeshBasicMaterial( {color: 0xffa500, wireframe: true} );
			var cube4 = new THREE.Mesh(geometry, material4);
			cube4.position.set (15, 0, 0); 
			// scene.add(cube4);


			camera.position.z = 30;

			function rotateCubes () {
				setTimeout(function(){
					cube3.rotation.y += 0.025;
					cube3.rotation.x += 0.025;}, 122250);

				setTimeout(function(){
					cube2.rotation.y += 0.035;
					cube2.rotation.x += 0.015;}, 122250
				setTimeout(function(){
					cube4.rotation.y += 0.025;
					cube4.rotation.x += 0.015;}, 122250);
				// cube1.rotation.x += 0.025;
				// cube1.rotation.y += 0.025;
				setTimeout(function(){
					sphere1.rotation.x += 0.025;
					sphere1.rotation.y += 0.025;}, 32250);
			}

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

function onMouseMove( event ) {

	// calculate mouse position in normalized device coordinates
	// (-1 to +1) for both components

	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = (- ( event.clientY / window.innerHeight ) * 2 + 1);		

}


window.addEventListener( 'click', onMouseMove, false );
window.requestAnimationFrame(render);



			function render() {
				requestAnimationFrame( render );
				renderer.render( scene, camera );
      			//var delta = clock.getDelta();
					
				rotateCubes();
					// update the picking ray with the camera and mouse position	
				raycaster.setFromCamera( mouse, camera );	
			
				// calculate objects intersecting the picking ray
				var intersects = raycaster.intersectObjects( scene.children );
			
				// for ( var i = 0; i < intersects.length; i++ ) {
				// 	intersects[i].object.material.color.set( 0xff0000 );
				// 	intersects[i].object.translateX(2);
				// }
				// renderer.render( scene, camera );
			}

			//setTimeout(render(), 10000);

var blue = document.getElementById('blue');		

blue.addEventListener('click', function() {
	console.log("div clicked!")
	cube1.translateX(4);
})

console.log(cube1);

//

// cube1.addEventListener("click", function() {
//     console.log("Button clicked.");
//   });


// function cube1r(cube1) {
// 	THREE.EventDispatcher.call(cube1);
//  	cube1.addEventListener("click", function(event) {
  	
//   	// if (event.keyCode == 66) {
//   	  cube1.translateX(5);
//   	//
//   });
//   // addEventListener("keyup", function(event) {
//   //   if (event.keyCode == 66)
//   //     document.body.style.background = "";
//   // });
// };
// cube1r(cube1);



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




// var material = new THREE.MeshBasicMaterial({color: 0x2d73a0})
// var delta = clock.getDelta();
// cube.rotation.x += 3.2 * delta;
// cube.rotation.y += 3.2 * delta;




