export default class Tablerow extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <tr>
        <td>a</td>
        <td>b</td>
        <td>c</td>
        <td>d</td>
        <td>e</td>
        <td>f</td>
      </tr>`

  let style = document.createElement('link');
  style.setAttribute('rel', 'stylesheet');
  style.setAttribute('href', './customelement/table/table.css');
  this.append(style);

  }
}
