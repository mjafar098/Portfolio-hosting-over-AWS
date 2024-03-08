function myFunction(){
    var x = document.getElementById("mynav");
    if (x.className === "navlist") {
      x.className += " responsive";
    } else {
      x.className = "navlist";
    }
  }