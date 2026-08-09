import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("md-viewer")
export class ViewerApp extends LitElement {

  static styles = css`
    :host {
      display: block;
      height: 100vh;
      margin: 0;
      padding: 0;

      background: #202124;
      color: white;

      font-family:
        Inter,
        "Segoe UI",
        Roboto,
        sans-serif;
    }

    .container {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 100%;
      flex-direction: column;
      gap: 1rem;
    }

    h1 {
      margin: 0;
      font-size: 2rem;
    }

    p {
      opacity: .8;
    }
  `;

  render() {
    return html`
      <div class="container">
        <h1>🚀 MD Studio</h1>

        <p>La extensión está funcionando correctamente.</p>
      </div>
    `;
  }
}