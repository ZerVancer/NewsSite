
function createArticle() {
  let article = document.createElement('article');
  let titel = document.getElementById('fArticleTitel').value;
  let content = document.getElementById('fArticleContent').value;
  let img = document.getElementById('fArticleImage').files[0];

  if (img != null && img != '') {
    let articleImg = document.createElement('img');
    articleImg.src = img;
    article.appendChild(articleImg);
  }

  let articleTitel = document.createElement('h2');
  articleTitel.textContent = titel;
  article.appendChild(articleTitel);

  let articleContent = document.createElement('p');
  articleContent.textContent = content;
  article.appendChild(articleContent);

  return article;
}

function emptyFileInputField() {
  document.getElementById('fArticleImage').value = null;
}

document.getElementById('articleSubmitButton').addEventListener('click', createArticle);
document.getElementById('clearButton').addEventListener('click', emptyFileInputField);

