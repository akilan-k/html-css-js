//This is an IIFE
(function(window){
	var helloSpeaker = {};		//Creating the object
	var speakWord = "Hello";

	helloSpeaker.speak = function (name) {		//Attaching the fuction to the ovject helloSpeaker
	  console.log(speakWord + " " + name);
	}

	window.helloSpeaker = helloSpeaker;		//Exposing to global scope
})(window);
