/* If you're feeling fancy you can add interactivity
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');

// When the user clicks on <div>, open the popup


function myFunction() {
  var x = document.getElementById("myDIV");
 if (x.innerHTML === "Hi") {
    x.innerHTML = "HI";
  } else {
    x.innerHTML = "<h2>My name is Eyitayo Olowojolu</h2> <br> <h2>Click on one of the following to know more about me :) </h2><br> <a class='ob' href='https://unruly-station.glitch.me'><h3>About Me</h3></a><a class='ob' href='https://mint-peach.glitch.me'><h3>Projects</h3></a>";

  }
  var bew = document.getElementByID("myDIV")
  function bew() {
   x.innerHTML = "smooth";
  }
}
