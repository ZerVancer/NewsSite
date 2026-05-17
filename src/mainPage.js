import Article from "./article.js";

const article1 = BttFArticle();
const article2 = legoArticle();

localStorage.setItem('Back To The Future', article1);
localStorage.setItem('Lego', article2);

let sideArticle1 = document.getElementById('sideArticle1');
let sideArticle2 = document.getElementById('sideArticle2');
let sideArticle3 = document.getElementById('sideArticle3');

drawMainArticle(article1);

drawSideArticles(sideArticle1, article2);
drawSideArticles(sideArticle2, article1);
drawSideArticles(sideArticle3, article2);

function drawMainArticle(article) {
  const container = document.getElementById('mainSection');
  container.getElementsByTagName('h2')[0].textContent = article.title;
  container.getElementsByTagName('p')[0].textContent = article.content.substring(0, 500);
  container.getElementsByTagName('img')[0].src = article.img;

}

function drawSideArticles(container, article) {
  container.getElementsByTagName('h3')[0].textContent = article.title;
  container.getElementsByTagName('p')[0].textContent = article.content.substring(0, 60);
  container.getElementsByTagName('img')[0].src = article.img;
  let date = new Date(article.createdAt);
  container.getElementsByTagName('p')[1].textContent = date.getFullYear() + '-' + doubleDigitise(date.getMonth()+1) + '-' + doubleDigitise(date.getDate());
}

function doubleDigitise(value) {
  value = value + '';
  if (value.length < 2) { return 0 + value;}
  return value;
}

function legoArticle() {
  return new Article('Lego', 'Praesentium praesentium voluptatem perferendis corporis voluptate. Eveniet totam praesentium voluptates at, quas ratione quaerat eaque commodi iusto debitis. Voluptatem ratione cupiditate nobis excepturi. Aliquid dolore beatae molestias dolorem voluptate, praesentium maxime quam dolorem quos a nulla. Recusandae esse veniam voluptatibus fugiat, mollitia saepe perspiciatis nihil nesciunt cumque. Dolore impedit distinctio enim quae. Eum id enim sint voluptates atque. Atque alias neque soluta quos eum consequuntur, recusandae ipsam rem dolor quo veritatis iste. Aperiam quam blanditiis animi nulla vero assumenda, natus enim aperiam temporibus eligendi, nostrum minus corporis distinctio voluptas iste. Nostrum beatae eveniet id praesentium esse.', 'resources/LegoLogo.png')
}

function BttFArticle() {
  return new Article('Back To The Future', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'resources/BackToTheFuturePoster.png')
}
