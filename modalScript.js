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
	"<p> CalTrout's Salmon Life Stages Wheel of Misfortune! <br><br> What are you waiting for? Click the X on the top right or outside this popup to start the game. </p>";

    result +=
    "<br><hr><br> <p> Here is a quick preview of the life stages of Salmon! </p> <br>";


	document.getElementsByClassName("modalText")[0].innerHTML = result;
	setTimeout(openModal, 300);
};

function optionModal() {
    var option = getOption();
    var result = "<p> You landed on " + option + "!</p>" ;

    result += "<br> <br> <hr> <p> To spin again, close out of the popup! :) </p>"

    document.getElementsByClassName("modalText")[0].innerHTML = result;
	setTimeout(openModal, 400);
}

