
function toggleHamburgerMenu() {
  var e = document.getElementById('hamburgerMenuContent');
  if (e.style.display == 'flex') {
    e.style.display = 'none';
  } else {
    e.style.display = 'flex';
  }
}

document.getElementById('hamburgerMenu').addEventListener('click', toggleHamburgerMenu);