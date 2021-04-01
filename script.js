function rotateFunction(){
    // Spin in degrees
    var min = 1024;
    var max = 9999;
    var deg = (Math.random()*(max-min))+min;
    document.getElementById('box').style.transform = "rotate(" + deg + "deg)";
    
    var mainboxID = document.getElementById('mainbox');
    mainboxID.classList.remove('animate');
    
    var disablingTheButton = document.getElementById('spin');
    disablingTheButton.disabled = true;

    setTimeout(function(){
        mainboxID.classList.add('animate');
        disablingTheButton.disabled = false;

        console.log(getOption());
    }, 5000)    
}

function getOption(){
    var elem = document.elementFromPoint(50, 50);
    return elem;
    // if(){
    //     return "egg";
    // }else if(){
    //     return "fry";
    // }else if(){
    //     return "smolt";
    // }else if(){
    //     return "adult";
    // }else {
    //     return "spawner";
    // }
}