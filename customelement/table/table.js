export default class Tableclient extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<table>
    <thead>
      <th class="column" id="col_firstname">Prénom</th>
      <th class="column" id="col_lastname">Nom</th>
      <th class="column" id="col_email">Mail</th>
      <th class="column" id="col_phone_number">Téléphone</th>
      <th class="column" id="col_siret">SIRET</th>
      <th class="column" id="col_adress">Adresse</th>
    </thead>
    <tbody class="table">
    </tbody>
  </table>`

  let style = document.createElement('link');
  style.setAttribute('rel', 'stylesheet');
  style.setAttribute('href', './customelement/table/table.css');
  this.append(style);

  }
}
