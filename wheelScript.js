// Angle of 0 degrees starts at initial side of Spawner which is the top on the left and goes clockwise
var array = [
    {name: "Adult", initial: 0, terminal: 15, text: 'Adult thought it was going to eat a tasty anchovy lunch but was instead captured by an angler.', pic: 'pictures/adult1.png'},
    {name: "Adult", initial: 0, terminal: 0, text: 'Salmon almost made it to the spawning grounds but died from exhaustion due to the long journey.', pic: 'pictures/adult2.png'},
    {name: "Spawner", initial: 0, terminal: 0, text: 'HOORAY! Salmon successfully navigated its way to the spawning grounds where it met another special salmon and they spawned. Congratulations!', pic: 'pictures/spawner1.png'},
    {name: "Egg", initial: 0, terminal: 0, text: 'Oh no! Eggs were covered in silt and suffocated!', pic: 'pictures/egg1.png'},
    {name: "Egg", initial: 0, terminal: 0, text: 'Eggs became a tasty crawdad lunch.', pic: 'pictures/egg2.png'},
    {name: "Egg", initial: 0, terminal: 0, text: 'A flood washed the eggs downstream… and they died.', pic: 'pictures/egg3.png'},
    {name: "Egg", initial: 0, terminal: 0, text: 'Eggs were distributed to a local classroom for an outreach project and died of fungus.', pic: 'pictures/egg4.png'},
    {name: "Fry", initial: 0, terminal: 0, text: 'Salmon became a tasty lunch for a heron!', pic: 'pictures/fry1.png'},
    {name: "Fry", initial: 0, terminal: 0, text: 'Salmon was gobbled up by a catfish!', pic: 'pictures/fry2.png'},
    {name: "Fry", initial: 0, terminal: 0, text: 'Poor salmon needed food but was unable to locate some...died of starvation.', pic: 'pictures/fry3.png'},
    {name: "Fry", initial: 0, terminal: 0, text: 'Cormorant swooped in for the kill and ate it up!', pic: 'pictures/fry4.png'},
    {name: "Fry", initial: 0, terminal: 0, text: 'Egret wasn’t fooled by salmon camouflage and scooped it up for dinner!', pic: 'pictures/fry5.png'},
    {name: "Fry", initial: 0, terminal: 0, text: 'Researcher wanted to see what the salmon had for lunch but instead of asking politely, eviscerated the salmon and threw it in some ethanol.', pic: 'pictures/fry6.png'},
    {name: "Fry", initial: 0, terminal: 0, text: 'Motor oil was poured down the drain and poisoned the salmon.', pic: 'pictures/fry7.png'},
    {name: "Fry", initial: 0, terminal: 0, text: 'Disfiguration developed due to poor genetics, was easily picked off by a predator.', pic: 'pictures/fry8.png'},
    {name: "Fry", initial: 0, terminal: 0, text: 'Swam past a striped bass and was immediately devoured.', pic: 'pictures/fry9.png'},
    {name: "Fry", initial: 0, terminal: 0, text: 'While swimming around, the salmon found its way inside of a plastic bag and never made it out.', pic: 'pictures/fry10.png'},
    {name: "Fry", initial: 0, terminal: 0, text: 'Swam right into a large mouth bass’ mouth!', pic: 'pictures/fry11.png'},
    {name: "Fry", initial: 0, terminal: 0, text: 'Salmon became trapped in a hot and polluted pool...it couldn’t handle the high temperature s and died.', pic: 'pictures/fry12.png'},
    {name: "Fry", initial: 0, terminal: 0, text: 'Made the mistake of being caught by a garter snake!', pic: 'pictures/fry13.png'},
    {name: "Smolt", initial: 0, terminal: 0, text: 'Was sucked into a pump while trying to make it through the delta and died.', pic: 'pictures/smolt1.png'},
    {name: "Smolt", initial: 0, terminal: 0, text: 'Unfortunately, no one gave the salmon a map of the delta. Now it is lost forever!', pic: 'pictures/smolt2.png'},
    {name: "Smolt", initial: 0, terminal: 0, text: 'An otter was tired of crustaceans and decided to have a salmon smolt for breakfast.', pic: 'pictures/smolt3.png'},
    {name: "Smolt", initial: 0, terminal: 0, text: 'Fishermen left their gillnet behind and the poor salmon was caught.', pic: 'pictures/smolt4.png'}
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
            return i;
        }
    }
}