export default class LinkVideo extends HTMLElement {
    constructor(name,path) {
      super();
      this.shadow = this.attachShadow({mode: 'open'})
      this.name = name
      this.path = path
      this.shadow.innerHTML = `<div class="containerlink">
      <a href="./medias/${this.path}.mp4">${this.name}</a>
  </div>`;
  
    let style = document.createElement('link');
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('href', './customelement/link/link.css');
    this.shadow.append(style);
    }
  }
  