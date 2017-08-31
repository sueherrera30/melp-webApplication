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
			var name = response.name;
			nameArray.push(name)
			nameArray.sort();
		})
		
		nameArray.forEach(function(nameValue){
			var totalNameArray = [];
				totalNameArray.push(nameValue);
			showingInDomAlphabeth(totalNameArray);
			});
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
			var rating = response.rating;
			var name = response.name;
			
			ratingAndNameArray.push(rating);
			ratingAndNameArray.sort(function (a, b) {
				return b - a			
			});
			   var arrayNames = [];
				arrayNames.push(name);
	
		});
			
		ratingAndNameArray.forEach(function(ratingValue){
			var totalRatingArray = [];
		   totalRatingArray.push(ratingAndNameArray, name);
			showingInDomRating(ratingValue,name);
			});

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
	this.addEventListener("click", showingWholeInformation);
}


/*showing in dowm by rating*/

function showingInDomRating(ratingAndNameArray,arrayNames) {
	/*getting elements from dom*/
  var ratingContainer = document.getElementById("containerRating");
  
	var whiteContainer = document.getElementById("conteiner-text");

	/*creating new elements*/
	whiteContainer.style.background = "transparent";
	var li = document.createElement("li");
	li.className += "row collection-item modal-trigger";
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
	p.textContent = arrayNames;
	/*pName.className = "green-text col m5 s5";
	li.appendChild(pName);*/
	li.href = "#modal1";
	ratingContainer.appendChild(li);
	
 li.addEventListener("click", showingWholeInformation);
}

var display = 	
  '<div id="modal1" class="modal">'+
    '<div class="modal-content center">'+
      '<h4>__restaurantName__</h4>'+
	   '<p>__rating__</p>'+
      '<p>__id__</p>'+
	   '<p>Contact: </p>'+
	'<ul>'+ 
	'<li>__site__</li>'
    '<li>__email__</li>'
    '<li>__phone__</li>'
	'</ul>'+
	'<p>Address: </p>'+
	'<ul>'+ 
	'<li>__street__</li>'
    '<li>__city__</li>'
    '<li>__state__</li>'
	'</ul>'+
    '</div>'+
  ' <div class="modal-footer">'+
     ' <a href="#modal1" class="modal-action modal-close waves-effect waves-green btn-flat"> Agree</a>'+
    '</div> '+
 ' </div>';
          

	
function showingWholeInformation(){
	var emptyDisplay = '';
	var theRequest = new XMLHttpRequest();
	theRequest.open('GET', url);
	theRequest.onload = function () {
		var info = JSON.parse(theRequest.responseText);
		
		info.forEach(function (response) {
			/*var id = response.id;
			var rating = response.rating;
			var name = response.name;
			var contact = response.contact;
			var address = response.address;*/
			
		info.forEach(function(data){
	console.log(data.rating);
	console.log(data.name);
	console.log(data.contact);
	console.log(data.address);
			
		})
	});
					 
};
	theRequest.send();
	};



