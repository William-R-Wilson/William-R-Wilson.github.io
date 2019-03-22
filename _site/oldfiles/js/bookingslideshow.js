

var images = [
                {source: "assets/images/booking/calendar_view.png", text: "Calendar view allows you to see all scheduled visitors"},
                {source: "assets/images/booking/view_visit_details.png", text: "After scheduling visitors, view and update visit details"},
                {source: "assets/images/booking/calculates_cost.png", text: "Calculates cost automatically based on number of visitors and employee work schedules"},
                {source: "assets/images/booking/income_expense.png", text: "Income expense reports can be generated for any time period"},
                {source: "assets/images/booking/schedule_employees.png", text: "Schedule employees to work"}
              ];

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
