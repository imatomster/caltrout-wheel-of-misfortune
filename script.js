// Angle of 0 degrees starts at initial side of Fry on the left and goes clockwise
var array = [
    {name: "Egg", initial: 180, terminal: 225},
    {name: "Egg", initial: 225, terminal: 270},
    {name: "Fry", initial: 270, terminal: 315},
    {name: "Fry", initial: 315, terminal: 360},
    {name: "Fry", initial: 0, terminal: 45},
    {name: "Smolt", initial: 45, terminal: 90},
    {name: "Adult", initial: 90, terminal: 135},
    {name: "Spawner", initial: 135, terminal: 180}
];

function rotateFunction(){
    // Generate degrees for a spin
    var min = 1024;
    var max = 9999;
    var deg = (Math.random()*(max-min))+min;

    // Track the spinning
    updateAngle(deg);
    // Actually spinning
    document.getElementById('box').style.transform = "rotate(" + deg + "deg)";
    

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

         // Start of the popups and getting what I landed on
        console.log(getOption());
    }, 5000)    
}

function updateAngle(deg){
    var fixedDeg =  deg%360;

    for(var i = 0; i < array.length; i++){
        array[i].initial += fixedDeg;
        array[i].terminal += fixedDeg;

        if(array[i].initial > 360){
            array[i].initial -= 360;
        }
        if(array[i].terminal > 360){
            array[i].terminal -= 360;
        }
        console.log(array[i]);
    }
} 

function getOption(){
    for(var i = 0; i < array.length; i++){
        if(array[i].initial < 180 && array[i].terminal > 180){
            return array[i].name;
        }
    }
}