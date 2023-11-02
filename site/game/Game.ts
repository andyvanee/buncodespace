import { css, customElement, html, Main } from 'thimble'
import './Screen'

@customElement('ui-main')
class Game extends Main {
    static get styles() {
        return css`
            :host {
                display: grid;
                width: 100vw;
                height: 100vh;
                align-items: center;
                justify-content: center;
                place-content: space-around;
            }
            ui-screen {
                display: block;
                width: 800px;
                aspect-ratio: 16 / 10;
            }
        `
    }
    render() {
        return html`<ui-screen></ui-screen>`
    }
}
