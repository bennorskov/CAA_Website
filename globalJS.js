/* Global Javascriptin */
var myImages = [];
var maxNumImages = 58;
var sequencers = [];
var characterNavs;
var doAnimate = false;
var imageFrames = [];
function ready() {
	removeUnsetElements();
	// Set up image file names
	for (var i = 0; i<maxNumImages; i++) {
		//myImages[i] = new Image(400, 400);
		var num = i;
		if (i<10) num = "0"+i;	
		myImages[i] = "../../globalImages/version2/000"+num+".png"
	}
	characterNavs = document.getElementsByClassName("characterNavigation");
	for (var i = characterNavs.length - 1; i >= 0; i--) {
		if(characterNavs[i].getAttribute("href").indexOf("studentname") != -1) {
			characterNavs[i].remove();
		} else {
			doAnimate = true;
			sequencers[i] = document.createElement("img");
			sequencers[i].src = myImages[0];
			imageFrames[i] = Math.floor( Math.random() * maxNumImages);
			characterNavs[i].replaceChild(sequencers[i], characterNavs[i].firstChild);
		}
	};
	if (characterNavs.length > 0 && doAnimate) window.requestAnimationFrame(animate); 
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
function removeUnsetElements() {
	var characterInfo = document.getElementById("characterInfo");
	if (characterInfo != null && characterInfo.innerText.indexOf("This Character is A") != -1) {
		characterInfo.innerText = " ";
	}

	var artistName = document.getElementById("artistName");
	if (artistName != null && artistName.innerText.indexOf("Norskov") != -1) {
		artistName.innerText = " ";
	}

	var imageDescription = document.getElementById("imageDescription");
	if (imageDescription != null && imageDescription.innerText.indexOf("Cityscape") != -1) {
		imageDescription.innerText = " ";
	}
}