document.addEventListener("DOMContentLoaded", function(event) { 
	getJoke();
});

function getJoke () {
	var xhr = new XMLHttpRequest(),
			url = 'http://api.icndb.com/jokes/random',
			responseObject,
			joke;

	xhr.open('GET', url);

	xhr.onreadystatechange = function() {
	  if (xhr.readyState == 4 && xhr.status == 200) {
	   	responseObject = JSON.parse(xhr.responseText);
	   	joke = responseObject.value.joke;

	   	updatePage(joke);
	  }
	}

	xhr.send();
}

function updatePage (joke) {
	document.getElementById('joke').innerHTML = joke;
}