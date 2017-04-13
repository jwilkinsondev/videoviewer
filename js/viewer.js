
/*****************************************************************************
*	Spherical Video Viewer
*	Author: John Wilkinson
*	Purpose: Spherical video display and hotspot demonstration
*****************************************************************************/

window.addEventListener('load', onVrViewLoad)

function onVrViewLoad() {
	// Create a new VRView
	var vrView = new VRView.Player('#vrview', {
		video: 'http://vr.jwplayer.com/content/AgqYcfAT/AgqYcfAT-8yQ1cYbs.mp4',
		is_stereo: false
	});

	vrView.on('ready', onVRViewReady);
	vrView.on('click', onHotspotClick);

	function onVRViewReady() {
		loadScene(); // Set up so that I can come back and add aditional scenes easily later on
	}

	function loadScene(){
		// There doesn't seem to be support for hotspots other than circles currently. Potential future upgrade
		vrView.addHotspot("hotspot-play",
			{
				pitch: -30,
				yaw: -5,
				radius: 0.05,
				distance: 1
			}
		);
		vrView.addHotspot("hotspot-pause",
			{
				pitch: -30,
				yaw: 5,
				radius: 0.05,
				distance: 1
			}
		);
	}
	// Bind the controls for the video
	function onHotspotClick(e) {
	if (e.id === "hotspot-play") {
		vrView.play();
	}
	if(e.id === "hotspot-pause") {
		vrView.pause();
	}
	}
}
