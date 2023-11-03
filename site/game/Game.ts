import { css, customElement, html, Main } from 'thimble'
import './Screen'
import './MoveHint'

@customElement('ui-main')
export class Game extends Main {
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
                overflow: hidden;
            }
            @media (min-width: 1200px) {
                ui-screen {
                    transform: scale(1.3);
                }
            }
            @media (max-width: 820px) {
                ui-screen {
                    transform: scale(0.8);
                }
            }
            @keyframes move-hint-hidden {
                from {
                    top: 0;
                    opacity: 1;
                }
                to {
                    top: 40%;
                    opacity: 0;
                }
            }
            move-hint.hidden {
                animation-duration: 1s;
                animation-name: move-hint-hidden;
                animation-fill-mode: forwards;
            }
        `
    }
    render() {
        return html`
            <ui-screen>
                <move-hint slot="after"></move-hint>
            </ui-screen>
        `
    }
}
