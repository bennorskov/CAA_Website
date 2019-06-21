/* Global Javascriptin */
var myImages = [];
var maxNumImages = 58;
var sequencers = [];
var characterNavs;
var doAnimate = true;
var imageFrames = [];
function ready() {
	// Set up image file names
	for (var i = 0; i<maxNumImages; i++) {
		//myImages[i] = new Image(400, 400);
		var num = i;
		if (i<10) num = "0"+i;	
		myImages[i] = "globalImages/version2/000"+num+".png"
	}
	characterNavs = document.getElementsByClassName("characterNavigation");
	for (var i = characterNavs.length - 1; i >= 0; i--) {
		sequencers[i] = document.createElement("img");
		sequencers[i].src = myImages[0];
		imageFrames[i] = Math.floor( Math.random() * maxNumImages);
		characterNavs[i].replaceChild(sequencers[i], characterNavs[i].firstChild);
	};
	if (characterNavs.length > 0) window.requestAnimationFrame(animate); 
}

var lastAnimationTime = 0;
var animationFrameLength = 64;
function animate() {
	if (Date.now() - lastAnimationTime > animationFrameLength && doAnimate) {
		lastAnimationTime = Date.now();
		// console.log(imageNum);
		for (var i = sequencers.length - 1; i >= 0; i--) {
			sequencers[i].src = myImages[imageFrames[i]];
			imageFrames[i]++;
			imageFrames[i] %= maxNumImages;
		};
	}
	window.requestAnimationFrame(animate);
}