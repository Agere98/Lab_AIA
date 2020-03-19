function toggleMenu() {
  var x = document.getElementById("menu");
  if (x.classList.contains("responsive")) {
    x.classList.remove("responsive");
  } else {
    x.classList.add("responsive");
  }
}
