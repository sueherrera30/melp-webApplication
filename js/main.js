var url = "https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json";

/*get elements from DOM*/

var alphabethBtn = document.getElementById("alphabeth");
var ratingBtn = document.getElementById("rating");

alphabethBtn.addEventListener('click',OrderingAlphabetically);
ratingBtn.addEventListener('click', OrderingByRating);


				/*making AJAX request*/
/*ordering alphabetically*/
var nameArray = [];
function OrderingAlphabetically(){
var theRequest = new XMLHttpRequest();
theRequest.open('GET' ,url);
theRequest.onload = function(){
	var info = JSON.parse(theRequest.responseText);
	info.forEach(function(name){
	var restaurantName = name.name;
	nameArray.push(name.name)			
	})
	nameArray.sort();
    console.log(nameArray);	
};
theRequest.send();	
};

/*ordering by rating*/
var generalRatingArray = [];
var ratingAndNameArray = [];
function OrderingByRating(){
var theRequest = new XMLHttpRequest();
theRequest.open('GET' ,url);
theRequest.onload = function(){
	var info = JSON.parse(theRequest.responseText);
	info.forEach(function(response){
	var rating = response.rating;
	var name = response.name;
	
	ratingAndNameArray.push(rating);
	ratingAndNameArray.sort(function(a,b){ return b - a});		
	})
		console.log(ratingAndNameArray);
	generalRatingArray.push(ratingAndNameArray);
	console.log(generalRatingArray);  	
};
theRequest.send();	
};




