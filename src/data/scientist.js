const imageBaseUrl = "https://i.imgur.com/";

export class Scientist {
  #imageId;

  constructor(name, imageId) {
    this.name = name;
    this.#imageId = imageId;

    this.profession = null;
    this.imageSize = null;
    this.theme = null;
    this.awards = null;
    this.discovered = null;
  }

  get Profession() {
    return this.profession ? this.profession : "";
  }

  get Discovered() {
    return this.discovered ? this.discovered : "";
  }

  get ImageSize() {
    return this.imageSize ? this.imageSize : "";
  }

  get Theme() {
    return this.theme ? this.theme : null;
  }

  get Awards() {
    return this.#hasAwards ? this.awards.length : "";
  }

  get AwardsDetails() {
    if (!this.#hasAwards) {
      return "";
    }
    return "(" + this.awards.join(", ") + ")";
  }

  get #hasAwards() {
    if (this.awards == null) {
      return false;
    }    
    if (this.awards instanceof Array) {
      return true;
    }
    return false;
  }

  get ImageUrl() {
    return imageBaseUrl + this.#imageId + this.ImageSize + ".jpg";
  }
}
