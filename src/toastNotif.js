
let toastDuration =  setTimeout(function() {}, 3000);

export function showToastNotif() {
  clearTimeout(toastDuration);

  let toast = document.getElementById('toast');

  toast.style.visibility = 'visible';

  toastDuration = setTimeout(function(){ toast.style.visibility = 'hidden'; }, 3000);
}

export function changeMsg(msg) {
  document.getElementById('toastMsg').textContent = msg;
}

export function sendToastNotif(msg) {
  changeMsg(msg);
  showToastNotif();
}
