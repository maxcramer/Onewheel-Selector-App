// SETS HIGHEST POINTS BOARD SELECTED FROM RADIO BUTTON SELECTIONS  
// AND RECOMMENDS HIGHEST POINTS BOARDgit commit 
let pint = 0;
let xr = 0;
let plus = 0;
let v1 = 0;
let pintSH = 0;
let xrSH = 0;

function whichOnewheel() {
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
    }
    if(oneto2.checked == true) {
        pint++;
        xrSH++
    }
    if(over15.checked == true) {
        xr++;
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
        v1++;
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
        xrSH++;
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

    // FINDS THE HIGHEST VALUED BOARD 
    var newBoardArray = [v1, pint, xr, plus, xrSH, pintSH];
    const max = newBoardArray.reduce(function(a, b) {
        return Math.max(a, b);    
    })
    
    // UNHIDDING ELEMENTS IF BOARD IS HIGHEST POINTS
    if(v1 == max) {
        v1View.hidden = false;
    }
    if (pint == max) {
        pintView.hidden = false;
    }
    if (xr == max) {
        xrView.hidden = false;
    }
    if( xr == max && under1.checked == true) {
        xrView.hidden = true;
    }
    if (plus == max) {
        plusView.hidden = false;
    }
    if (xrSH == max) {
        xrSHView.hidden = false;
    }
    if (pintSH == max) {
        pintSHView.hidden = false;
    }
    if(max == 0) {
        alert("Please select what you are looking for below");
        v1View.hidden = true;
        pintView.hidden = true;
        xrView.hidden = true;
        plusView.hidden = true;
        xrSHView.hidden = true;
        pintSHView.hidden = true;
    }
    console.log("pint Value", pint);
    console.log("xr Value", xr);
    console.log("plus Value", plus);
    console.log("v1 Value", v1);
    console.log("pintSH Value", pintSH);
    console.log("xrSH Value", xrSH);
    
}

function resetForm() {
    pint = 0;
    xr = 0;
    plus = 0;
    v1 = 0;
    pintSH = 0;
    xrSH = 0;
    max = 0;
    v1View.hidden = true;
    pintView.hidden = true;
    xrView.hidden = true;
    plusView.hidden = true;
    xrSHView.hidden = true;
    pintSHView.hidden = true;
    
            console.log("pint Value", pint);
            console.log("xr Value", xr);
            console.log("plus Value", plus);
            console.log("v1 Value", v1);
            console.log("pintSH Value", pintSH);
            console.log("xrSH Value", xrSH);
}




