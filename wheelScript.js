// Angle of 0 degrees starts at initial side of Spawner which is the top on the left and goes clockwise
var array = [
    {name: "Adult", initial: 0, terminal: 15},
    {name: "Adult", initial: 0, terminal: 0},
    {name: "Spawner", initial: 0, terminal: 0},
    {name: "Egg", initial: 0, terminal: 0},
    {name: "Egg", initial: 0, terminal: 0},
    {name: "Egg", initial: 0, terminal: 0},
    {name: "Egg", initial: 0, terminal: 0},
    {name: "Fry", initial: 0, terminal: 0},
    {name: "Fry", initial: 0, terminal: 0},
    {name: "Fry", initial: 0, terminal: 0},
    {name: "Fry", initial: 0, terminal: 0},
    {name: "Fry", initial: 0, terminal: 0},
    {name: "Fry", initial: 0, terminal: 0},
    {name: "Fry", initial: 0, terminal: 0},
    {name: "Fry", initial: 0, terminal: 0},
    {name: "Fry", initial: 0, terminal: 0},
    {name: "Fry", initial: 0, terminal: 0},
    {name: "Fry", initial: 0, terminal: 0},
    {name: "Fry", initial: 0, terminal: 0},
    {name: "Fry", initial: 0, terminal: 0},
    {name: "Smolt", initial: 0, terminal: 0},
    {name: "Smolt", initial: 0, terminal: 0},
    {name: "Smolt", initial: 0, terminal: 0},
    {name: "Smolt", initial: 0, terminal: 0}
];
var previous = 0;

window.onload = fillAngles();

function rotateFunction(){
    // Generate degrees for a spin
    var min = 68;
    var max = 667;
    var deg = 7.5 + 15 * Math.floor((Math.random()*(max-min))+min);
    // Track the spinning
    updateAngle(deg);
    // Actually spinning
    document.getElementById('wheelHolder').style.transform = "rotate(" + deg + "deg)";
    

    // Remove the animate on the arrow bounce and button clicm
    var mainboxID = document.getElementById('mainbox');
    mainboxID.classList.remove('animate');
    var disablingTheButton = document.getElementById('spin');
    disablingTheButton.disabled = true;

    // 5 seconds after the animation since the animation is set to 5 seconds
    setTimeout(function(){
        // After 5 seconds, add back the bouncing arrow and ability to click the button
        mainboxID.classList.add('animate');
        disablingTheButton.disabled = false;
        previous = deg;

         // Start of the popups and getting what I landed on
        optionModal();
    }, 5000)    
}

function fillAngles(){
    for(var i = 1; i < array.length; i++){
        array[i].initial = array[i-1].terminal;
        array[i].terminal = array[i].initial + 15;
    }
}

function updateAngle(deg){
    var correctedDeg = deg - previous;
    for(var i = 0; i < array.length; i++){
        array[i].initial = (array[i].initial + correctedDeg) % 360;
        array[i].terminal = (array[i].terminal + correctedDeg) % 360;

        if(correctedDeg < 0){
            array[i].initial += 360;
            array[i].terminal += 360;
        }
    }
} 

function getOption(){
    for(var i = 0; i < array.length; i++){
        if(45 > array[i].initial && 45 < array[i].terminal){
            return array[i].name;
        }
    }
}