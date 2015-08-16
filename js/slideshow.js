

var images = [
                {source: "assets/images/reporting/user view.png", text: "Users only access the actions they need"},
                {source: "assets/images/reporting/admin view.png", text: "Administrators are authorized to do additional actions through custom authorization"},
                {source: "assets/images/reporting/dashboard.png", text: "Call up reports by period"},
                {source: "assets/images/reporting/printable view.png", text: "Then print out the reports.  Printable view created with custom CSS"},
                {source: "assets/images/reporting/responsive.png", text: "Custom responsive CSS ensures that users can report via mobile devices"},
                {source: "assets/images/reporting/validations.png", text: "content is validated to prevent faulty data entry"},
                {source: "assets/images/reporting/validations2.png", text: ""}];


var currentImage = 0;
var length = images.length;

var display = function(num){
		document.getElementById("slide").src = images[num].source;
		document.getElementById("text").innerHTML = images[num].text;	
};

var goLeft = function() {
	if (currentImage === 0) {
		currentImage = length - 1;
		display(currentImage);
	}
	else {
		currentImage -= 1;
		display(currentImage);
	}
	console.log(currentImage);
};

var goRight = function(){
	if (currentImage === length - 1) {
		currentImage = 0;
		display(currentImage);
	}
	else {
		currentImage += 1;
		display(currentImage);
	}
	console.log(currentImage);
};
