
import Tableclient from "./customelement/table/table.js";
import Tablerow from "./customelement/table/tablerow.js";

customElements.define("table-client", Tableclient);
customElements.define("table-row", Tablerow);


const table = document.querySelector('.table')
console.log(table);



    const trow =new Tablerow()
// console.dir(trow);

table.appendChild(trow)
