import Article from './article.js'
import { sendToastNotif } from './toastNotif.js'

function registerArticle() {
  let titel = document.getElementById('fArticleTitel').value;
  if (titel.replace(/ /g,'') === '') {
    sendToastNotif('Missing titel!')
    return;
  } else if (localStorage.getItem(titel) != undefined) {
    sendToastNotif('Titel already exists!')
    return;
  }

  let content = document.getElementById('fArticleContent').value;
  if (content.replace(/\s/g,'') === '') {
    sendToastNotif('Missing content!')
    return;
  }

  // let img = document.getElementById('fArticleImage').files[0];
  // Temporary solve until download works
  let img = document.getElementById('imgSelector').value;
  if (img !== '') { img = 'resources/' + img }
  console.log(img);

  let article = new Article(titel, content, img);
  
  localStorage.setItem(titel, JSON.stringify(article));

  return article;
}

function createArticle() {
  let article = registerArticle();

  if (article === undefined) { return; }

  let articleElement = document.createElement('article');
  // if (article.img != undefined) {
  //   let articleImg = document.createElement('img');
  //   articleImg.src = article.img;
  //   articleElement.appendChild(articleImg);
  // }
  // Temporary solve until download works
  let articleImg = document.createElement('img');
  articleImg.src = article.img;
  articleElement.appendChild(articleImg);


  let articleTitel = document.createElement('h2');
  articleTitel.textContent = article.titel;
  articleElement.appendChild(articleTitel);

  let articleContent = document.createElement('p');
  articleContent.textContent = article.content;
  articleElement.appendChild(articleContent);

  sendToastNotif("Article created!")

  return articleElement;
}

function removeArticle(titel) {
  localStorage.removeItem(titel);
}

function emptyFileInputField() {
  document.getElementById('fArticleImage').value = null;
}

document.getElementById('articleSubmitButton').addEventListener('click', createArticle);
//document.getElementById('clearButton').addEventListener('click', emptyFileInputField);

