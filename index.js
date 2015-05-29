var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 500 );
			var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			var geometry = new THREE.BoxGeometry( 1, 1, 1, 0,0,0);
			var material3 = new THREE.MeshBasicMaterial( { color: 0x53FFDC, wireframe: false } );
			var material4 = new THREE.MeshBasicMaterial( { color: 0x53E0FF, wireframe: false } );

			var cubeTop1 = new THREE.Mesh( geometry, material3 );
			var cubeTop2 = new THREE.Mesh( geometry, material4  );
			var cubeTop3 = new THREE.Mesh( geometry, material3 );
			var cubeTop4 = new THREE.Mesh( geometry, material4  );
			var cubeTop5 = new THREE.Mesh( geometry, material3 );
			var cubeTop6 = new THREE.Mesh( geometry, material4  );
			var cubeTop7 = new THREE.Mesh( geometry, material3 );
			var cubeTop8 = new THREE.Mesh( geometry, material4  );
			var cubeTop9 = new THREE.Mesh( geometry, material3 );
			var cubeTop10 = new THREE.Mesh( geometry, material4  );
			var cubeTop11 = new THREE.Mesh( geometry, material3 );

			cubeTop1.position.set( -25, 30, 0 );
			cubeTop2.position.set( -20, 30, 0 );
			cubeTop3.position.set( -15, 30, 0 );
			cubeTop4.position.set( -10, 30, 0 );
			cubeTop5.position.set( -5, 30, 0 );
			cubeTop6.position.set( 0, 30, 0 );
			cubeTop7.position.set( 5, 30, 0 );
			cubeTop8.position.set( 10, 30, 0 );
			cubeTop9.position.set( 15, 30, 0 );
			cubeTop10.position.set( 20, 30, 0 );
			cubeTop11.position.set( 25, 30, 0 );
			
			scene.add(cubeTop1, cubeTop2, cubeTop3, cubeTop4, cubeTop5, cubeTop6, cubeTop7, cubeTop8, cubeTop9, cubeTop10, cubeTop11);
			setTimeout(function(){
				scene.remove(cubeTop10, cubeTop11)
			}, 75000)
			setTimeout(function(){
				scene.remove(cubeTop8, cubeTop9)
			}, 77250)
			setTimeout(function(){
				scene.remove(cubeTop6, cubeTop7)
			}, 79500)
			setTimeout(function(){
				scene.remove(cubeTop4, cubeTop5)
			}, 81750)
			setTimeout(function(){
				scene.remove(cubeTop1, cubeTop2, cubeTop3)
			}, 84000)

			var material1 = new THREE.MeshNormalMaterial({ wireframe: true});
			var sphereS = new THREE.SphereGeometry(18,6,5);
			//var material1 = new THREE.MeshBasicMaterial( { color: 0x4e2cc4,  wireframe: true} );
			var sphere1 = new THREE.Mesh(sphereS, material1);
			sphere1.position.set( 0, 0, 0 );
			setTimeout(function(){scene.add(sphere1);}, 18500);

			var materialInside = new THREE.MeshNormalMaterial({wireframe: true});
			var sphereInside = new THREE.SphereGeometry(10,20,20);
			//var material1 = new THREE.MeshBasicMaterial( { color: 0x4e2cc4,  wireframe: true} );
			var sphereIn = new THREE.Mesh(sphereInside, materialInside);
			sphereIn.position.set( 0, 0, 0 );
			setTimeout(function(){scene.add(sphereIn);}, 84000)//18650);

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
					cube4.rotation.y += 0.025;
					cube4.rotation.x += 0.015;}, 122250);
				// cube1.rotation.x += 0.025;
				// cube1.rotation.y += 0.025;
				setTimeout(function(){
					sphere1.rotation.x += 0.025;
					sphere1.rotation.y += 0.025;}, 32200);

				setTimeout(function(){
					sphereIn.rotation.x += 0.1;}, 82550);
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





// var material = new THREE.MeshBasicMaterial({color: 0x2d73a0})
// var delta = clock.getDelta();
// cube.rotation.x += 3.2 * delta;
// cube.rotation.y += 3.2 * delta;




