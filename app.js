
function whichOnewheel() {
    let pint = 0;
    let xr = 0;
    let plus = 0;
    let v1 = 0;
    let pintsecondHAnd = 0;
    // console.log("running");
    const under1 = document.getElementById("under1");
    const oneto2 = document.getElementById("1-2");
    const over15 = document.getElementById("over15");

    if(under1.checked == true) {
        console.log("the value of v1 and plus is", v1, plus, pintsecondHAnd);
        v1++;
        plus++;
        pintsecondHAnd++;
    }

    if(oneto2.checked == true) {
        pint++;
        xr++;
        console.log("the value of the pint and the xr", pint, xr);
    }

    if(over15.checked == true) {
        xr++;
        console.log("the value of the xr is", xr);
    }
}
