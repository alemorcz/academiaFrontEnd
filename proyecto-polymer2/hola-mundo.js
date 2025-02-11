import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class HolaMundo extends PolymerElement {
    static get template() {
        return html`
      <style>
        :host {
          display: block;
          padding: 16px;
          color: #333;
          font-family: Arial, sans-serif;
        }
        input {
          padding: 10px;
          font-size: 16px;
          margin-right: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
         button {
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          background-color: #0078d4;
          color: white;
          border: none;
          border-radius: 5px;
        }
        button:hover {
          background-color:rgb(181, 0, 121);
        }
      </style>
      <h1>Hola [[name]]</h1>
      <input type="text" value="{{inputValue::input}}" placeholder="Escribe algo">
      <button on-click="mostrarValor">Mostrar valor</button>
      <button on-click="mostrarAlert">Haz clic aquí</button>
    `;
    }
    static get properties() {
        return {
            name: {
                type: String
            },
            inputValue: {
                type: String,
                value: '' // Valor inicial vacío
            }
        }
    }
    mostrarAlert() {
        alert("Esto es un Alert");
    }

    mostrarValor() {
        if (this.inputValue) {
          alert(`El input: ${this.inputValue}`);
        } else {
          alert("El input está vacío");
        }
      }
}




customElements.define('hola-mundo', HolaMundo);