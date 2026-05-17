import Article from "./article.js";

let sideArticle1 = document.getElementById('sideArticle1');
let sideArticle2 = document.getElementById('sideArticle2');
let sideArticle3 = document.getElementById('sideArticle3');

const article1 = JSON.parse(localStorage.getItem('Back To The Future'));
const article2 = JSON.parse(localStorage.getItem('Lego'));

drawSideArticles(sideArticle1, article2);
drawSideArticles(sideArticle2, article1);
drawSideArticles(sideArticle3, article2);

function drawSideArticles(container, article) {
  container.getElementsByTagName('h3')[0].textContent = article.title;
  container.getElementsByTagName('p')[0].textContent = article.content.substring(0, 60);
  let date = new Date(article.createdAt);
  container.getElementsByTagName('p')[1].textContent = date.getFullYear() + '-' + doubleDigitise(date.getMonth()+1) + '-' + doubleDigitise(date.getDate());
}

function doubleDigitise(value) {
  value = value + '';
  if (value.length < 2) { return 0 + value;}
  return value;
}
