//This is an IIFE
(function(window){
	var byeSpeaker = {};		//Creating the object byeSpeaker
	var speakWord = "Good Bye";

	byeSpeaker.speak = function (name) {		//Attaching the fuction to byeSpeaker
	  console.log(speakWord + " " + name);
	}

	window.byeSpeaker = byeSpeaker;		//Exposing byeSpeaker object to the global scope
})(window);

