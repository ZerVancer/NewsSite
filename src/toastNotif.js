
export function showToastNotif() {
  let toast = document.getElementById('toast');

  toast.style.visibility = 'visible';

  setTimeout(function(){ toast.style.visibility = 'hidden'; }, 3000);
}

export function changeMsg(msg) {
  document.getElementById('toast').textContent = msg;
}

export function sendToastNotif(msg) {
  changeMsg(msg);
  showToastNotif();
}
