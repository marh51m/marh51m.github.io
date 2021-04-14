class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Mauricio Romero Hernández  IC 51 M.`;
  }
}
customElements.define(
  "mi-footer", MiFooter);
