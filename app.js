let pint = 0;
let xr = 0;
let plus = 0;
let v1 = 0;
let pintSH = 0;
let xrSH = 0;

function whichOnewheel() {
    // console.log("running");
    const under1 = document.getElementById("under1");
    const oneto2 = document.getElementById("1-2");
    const over15 = document.getElementById("over15");
    const less6 = document.getElementById("less6");
    const sixto8 = document.getElementById("sixto8");
    const over8 = document.getElementById("over8");
    const width4 = document.getElementById("width4");
    const width6 = document.getElementById("width6");
    const gentle = document.getElementById("gentle");
    const offroad = document.getElementById("offroad");
    const tricks = document.getElementById("tricks");
    const onroad = document.getElementById("Onroad");
    const lowspeed = document.getElementById("lowspeed");
    const midspeed = document.getElementById("midspeed");
    const highspeed = document.getElementById("highspeed");
   

    // PRICE CHECK
    if(under1.checked == true) {
        v1++;
        plus++;
        pintSH++;
        oneto2, over15 == false;
    }

    if(oneto2.checked == true) {
        pint++;
        xrSH++
        
    }

    if(over15.checked == true) {
        xr++;
        // console.log("the value of the xr is", xr);
    }

    
    // DISTANCE CHECK
    if(less6.checked == true) {
        v1++;
        plus++;
    }

    if(sixto8.checked == true) {
        pint++;
        pintSH++
    }

    if(over8.checked == true) {
        xr++;
        xrSH++;

    }

    // FOOTPAD SIZING
    if(width4.checked == true) {
        pint++;
    }

    if(width6.checked == true) {
        xr++;
        plus++;
        v1++;
        pintSH++;
        xrSH++;
    }

    // RIDING STYLE    
    if(gentle.checked == true) {
        pint++;
    }

    if(offroad.checked == true) {
        xr++;
        plus++;
        xrSH++;
    }

    if(tricks.checked == true) {
        pint++;
        xr++;
        plus++;
    }

    if(onroad.checked == true) {
       xr++;
       plus++;
       xrSH++;
    }

    // TOP SPEED
    if(lowspeed.checked == true) {
        v1++;
        pint++;
        pintSH++;
    }

    if(midspeed.checked == true) {
        plus++;
    }

    if(highspeed.checked == true) {
        xr++;
        xrSH++;
    }

    console.clear();
    console.log("the value of the v1 is ", v1);
    console.log("the value of the pint is ", pint);
    console.log("the value of the xr is ", xr);
    console.log("the value of the plus is ", plus);
    console.log("the value of the second hand XR is ", xrSH);
    console.log("the value of the second hand Pint is ", pintSH);
    
    var newBoardArray = [v1, pint, xr, plus, xrSH, pintSH];
    const max = newBoardArray.reduce(function(a, b) {
        return Math.max(a, b);
        
    })
    
    console.log(max);
    if(v1 == max) {
        console.log("v1");
    }
    if (pint == max) {
        console.log("pint");
    }
    if (xr == max) {
        console.log("xr");
    }
    if (plus == max) {
        console.log("plus");
    }
    if (xrSH == max) {
        console.log("xrSH");
    }
    if (pintSH == max) {
        console.log("pintSH");
    }
}
