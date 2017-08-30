/*get elements from DOM*/

var alphabethBtn = document.getElementById("alphabeth");
var ratingBtn = document.getElementById("rating");

/*alphabethBtn.addEventListener('click', orderingAlphabetically);*/
ratingBtn.addEventListener('click', getInformation);


/*making AJAX request*/
var nameArray = [];
function getInformation (){
var url = "https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json";
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



/*ordering alphabetically*/
/*
function orderingAlphabetically(info){
	}
*/

