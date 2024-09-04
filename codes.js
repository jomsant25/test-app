


// const element = document.getElementById("demo").value;

function reverseString() {
    const element = document.getElementById("demo");

    var splitStr = element.value.split("");
    var reverseStr = splitStr.toReversed();
    var joinString = reverseStr.join("");
    document.getElementById("p1").innerHTML = joinString;
    // document.getElementById("p1").innerHTML = splitStr;
}


