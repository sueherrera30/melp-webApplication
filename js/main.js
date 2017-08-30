var url = "https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json";

/*get elements from DOM*/

var alphabethBtn = document.getElementById("alphabeth");
var ratingBtn = document.getElementById("rating");

alphabethBtn.addEventListener('click', OrderingAlphabetically);
ratingBtn.addEventListener('click', OrderingByRating);


              /*making AJAX request*/
/*ordering alphabetically*/
var nameArray = [];

function OrderingAlphabetically() {
	var theRequest = new XMLHttpRequest();
	theRequest.open('GET', url);
	theRequest.onload = function () {
		var info = JSON.parse(theRequest.responseText);
		info.forEach(function (response) {
			/*save required values*/
			var id = response.id;
			var rating = response.rating;
			var name = response.name;
			var contact = response.contact;
			var address = response.address;
			
			nameArray.push(name)
			nameArray.sort();
		})
		
		nameArray.forEach(function(nameValue){
			var totalNameArray = [];
				totalNameArray.push(nameValue);
			showingInDomAlphabeth(totalNameArray);
			});

		console.log(nameArray);
		
	};

	theRequest.send();
};

/*ordering by rating*/
var ratingAndNameArray = [];


function OrderingByRating() {
	var theRequest = new XMLHttpRequest();
	theRequest.open('GET', url);
	theRequest.onload = function () {
		var info = JSON.parse(theRequest.responseText);
		info.forEach(function (response) {
			/*save required values*/
			var id = response.id;
			var rating = response.rating;
			var name = response.name;
			console.log(name);
			var contact = response.contact;
			var address = response.address;
			
			ratingAndNameArray.push(rating);
			ratingAndNameArray.sort(function (a, b) {
				return b - a			
			});
			
			
				var arrayNames = [];
				arrayNames.push(name);
				console.log(arrayNames);
		
			
			
		});
			
		ratingAndNameArray.forEach(function(ratingValue){
			var totalRatingArray = [];
		   totalRatingArray.push(ratingAndNameArray + name);
			showingInDomRating(ratingValue,name);
			});
		
		/*console.log(ratingAndNameArray);*/

	};
	theRequest.send();
};


/*showing info in dom by alphabeth */

function showingInDomAlphabeth(totalNameArray) {
	/*getting elements from dom*/
  var alphabethContainer = document.getElementById("containerAlphabeth");
	
	var whiteContainer = document.getElementById("conteiner-text");
	
	
	/*creating new elements*/
	whiteContainer.style.background = "transparent";
	var li = document.createElement("li");
	li.className += "row collection-item";
	var p = document.createElement("p");
	var p1 = document.createElement("p");
	p.className = "green-text col m6 s6";
	/*	pNum.style.marginTop = "7%"; */
	p.style.fontSize ="90%";
	p1.style.fontSize ="90%";
	p1.textContent = "Name:"
	p.textContent = totalNameArray;
	p1.style.color= "#f0cf7b";
	p1.className= "left";
	li.appendChild(p1);
	li.appendChild(p);
	alphabethContainer.appendChild(li);		
	li.addEventListener("click", showingWholeInformation);
}


/*showing in dowm by rating*/

function showingInDomRating(ratingAndNameArray,name) {
	/*getting elements from dom*/
  var ratingContainer = document.getElementById("containerRating");
  
	var whiteContainer = document.getElementById("conteiner-text");

	/*creating new elements*/
	whiteContainer.style.background = "transparent";
	var li = document.createElement("li");
	li.className += "row collection-item";
	var pRat = document.createElement("p");
	pRat.className += "col m6 s6";
	pRat.style.color= "#f0cf7b";
	pRat.style.fontSize ="90%";
	li.appendChild(pRat);
	var p = document.createElement("p");
	p.className = "green-text col m6 s6";
	pRat.style.marginTop = "7%"; 
	p.style.fontSize ="90%";
	pRat.textContent = ratingAndNameArray + " stars";
	li.appendChild(p);
	/*var pName = document.createElement("p");*/
	p.textContent = name;
	/*pName.className = "green-text col m5 s5";
	li.appendChild(pName);*/
	ratingContainer.appendChild(li);
	
  li.addEventListener("click", showingWholeInformation);
}


function showingWholeInformation(response){
	alert(response);
}













