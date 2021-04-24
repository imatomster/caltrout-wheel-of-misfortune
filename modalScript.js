// Global Variables for modalBackground and modalX element
var modal = document.getElementsByClassName("modalBackground")[0];
var modalX = document.getElementsByClassName("modalX")[0];

window.onload = loadUpGame();

function loadUpGame() {
	setupModal();
	welcomeModal();
};

/* Modal Script */
function setupModal() {
	modalX.addEventListener("click", closeModal, false);
	window.addEventListener("click", 
		function(event) { 
			if(event.target == modal){
				closeModal();
			}
		}, false);
};

function openModal() {
	modal.style.display = "block";
};

function closeModal() {
	modal.style.display = "none";
	document.getElementsByClassName("modalText")[0].innerHTML = "";
};

function welcomeModal() {
	var result = "";
	result += 
	"<p> CalTrout's Salmon Life Stages Wheel of Misfortune! <br><br> What are you waiting for? Click outside this popup or the X in the top right to start the game. </p>";

	result += "<br><hr><br> <p> Here is a quick preview of the life stages of Salmon! </p> <br>";

	result += "<img src ='pictures/cycle.jpg' style='height: 100%; width: 100%; object-fit: contain'>"

	document.getElementsByClassName("modalText")[0].innerHTML = result;
	setTimeout(openModal, 300);
};

function optionModal() {
    var option = getOption();
    var result = "<p> You landed on " + array[option].name + "!</p> <br>";
	result += "<p> " + array[option].text + "</p> <br> "
	result += "<img src='" + array[option].pic +"' alt='"+array[option].name+"' style='height: 100%; width: 100%; object-fit: contain'>"

    result += "<br> <br> <hr> <br> <p> To spin again, close out of the popup! :) </p>"

    document.getElementsByClassName("modalText")[0].innerHTML = result;
	setTimeout(openModal, 400);
}

