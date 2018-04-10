function openNav() {
  let nav__menu_id = document.getElementById("nav__menu");
  let icon_id = document.getElementById("icon");
  if (nav__menu_id.className === "nav__menu") {
    nav__menu_id.className += " active";
    icon_id.innerHTML = "&#x2715";
  } else {
    nav__menu_id.className = "nav__menu";
    icon_id.innerHTML = "&#9776";
  }
}
