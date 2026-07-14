// Crea una aplicación con un botón y una lista.
// Al presionar el botón se debe de agregar un elemento a una lista desordenada con la siguiente leyenda "Task 1", "Task 2", "Task 3" y asi su
// Solo puedes usar un método y una propiedad

import { LitElement, html } from "lit";

export class todoList extends LitElement {
  //static get properties() {}

  //constructor() {}

  render() {
    return html`
      <h1>Ejercicio 2</h1>
    `;
  }
}
customElements.define("todo-list", todoList);
