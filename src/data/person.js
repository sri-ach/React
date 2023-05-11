const iamgeBaseUrl = "https://i.imgur.com/";

export class Person {
  constructor(name, imageId, imageSize = null, theme = null) {
    this.name = name;
    this.imageId = imageId;
    this.imageSize = imageSize;
    this.theme = theme;
  }

  get ImageUrl() {
    const imageSize = this.imageSize ? this.imageSize : "";
    return iamgeBaseUrl + this.imageId + imageSize + ".jpg";
  }
}
