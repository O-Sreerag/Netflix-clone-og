function formFunction() {
    var x = document.getElementById("sign-up-form");
    var y = document.getElementById("header-container");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "block";
    }
}
