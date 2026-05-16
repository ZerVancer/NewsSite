class Article {
  constructor (titel, content, img) {
    this.title = titel;
    this.content = content;
    this.img = img;
    this.createdAt = Date.now;
  }
}

export default(Article);