import { css, customElement, html, Node } from 'thimble'

@customElement('move-hint')
export class MoveHint extends Node {
    static get styles() {
        return css`
            :host {
                display: grid;
                position: absolute;
                width: 100%;
                height: 100%;
                align-items: center;
                place-content: center;
                top: 0;
                left: 0;
                user-select: none;
            }
            .hint-inner {
                display: grid;
                gap: 3px;
                grid-template-columns: repeat(3, 30px);
                grid-auto-rows: 30px;
                padding: 15px 30px;
                background-color: rgba(0, 0, 0, 0.8);
                border: 3px solid #324;
                border-radius: 10px;
            }
            p {
                grid-column: span 3;
                margin: 0;
                text-align: center;
                opacity: 0.8;
            }
            .key {
                border: 1px solid #ddd;
                display: grid;
                justify-content: center;
                align-items: center;
                border-radius: 2px;
                background-color: #ffffff11;
            }
            .key-W {
                grid-column: 2;
            }
            .key-A {
                grid-column: 1;
            }
        `
    }
    firstUpdated() {
        window.addEventListener('interaction', () => this.classList.add('hidden'))
    }
    render() {
        return html`
            <div class="hint-inner">
                <p>Movement</p>
                <div class="key key-W">W</div>
                <div class="key key-A">A</div>
                <div class="key key-S">S</div>
                <div class="key key-D">D</div>
            </div>
        `
    }
}
