function rotateFunction(){
    // Spin in degrees
    var min = 1024;
    var max = 9999;
    var deg = (Math.random()*(max-min))+min;
    document.getElementById('box').style.transform = "rotate(" + deg + "deg)";
    
    var element = document.getElementById('mainbox');
    element.classList.remove('animate');
    
    setTimeout(function(){
        element.classList.add('animate');
    }, 5000)    
}

// https://workshops.hackclub.com/spinning_wheel/