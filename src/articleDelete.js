import { sendToastNotif } from "./toastNotif.js";

function deleteArticle() {
  let titel = document.getElementById('fArticleTitel').value;
  if (titel.replace(/ /g,'') === '') {
    sendToastNotif('Missing titel!')
    return;
  }

  localStorage.removeItem(titel);

  sendToastNotif('Article deleted!')
}

document.getElementById('articleDeleteButton').addEventListener('click', deleteArticle)
