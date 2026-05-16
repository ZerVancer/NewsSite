import Article from './article.js'

function registerArticle() {
  let titel = document.getElementById('fArticleTitel').value;

  let content = document.getElementById('fArticleContent').value;
  let img = document.getElementById('fArticleImage').files[0];

  let article = new Article(titel, content, img);
  
  localStorage.setItem(titel, article);

  return article;
}

function createArticle() {
  let article = registerArticle();

  let articleElement = document.createElement('article');
  if (article.img != null && article.img != '') {
    let articleImg = document.createElement('img');
    articleImg.src = article.img;
    articleElement.appendChild(articleImg);
  }

  let articleTitel = document.createElement('h2');
  articleTitel.textContent = article.titel;
  articleElement.appendChild(articleTitel);

  let articleContent = document.createElement('p');
  articleContent.textContent = article.content;
  articleElement.appendChild(articleContent);

  console.log(articleElement);

  return articleElement;
}

function removeArticle(titel) {
  localStorage.removeItem(titel);
}

function emptyFileInputField() {
  document.getElementById('fArticleImage').value = null;
}

document.getElementById('articleSubmitButton').addEventListener('click', createArticle);
document.getElementById('clearButton').addEventListener('click', emptyFileInputField);

