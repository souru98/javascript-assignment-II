//function to generate random color 
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


//to display random color on html page
function setRandomColor() {
    $("#colorpad").css("background-color", getRandomColor());
}