class GameObject extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback() {
        this.render();
    }

    getGameCanvas() {
        return this.shadowRoot.querySelector(".game");
    }

    getScoreCanvas() {
        return this.shadowRoot.querySelector(".score");
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .header { 
                    position: absolute;
                    top: 0%;
                    width: 100%;
                    text-align: center;
                    font-size: 45px;
                    font-weight: bold;
                }
                
                .container {
                    position: relative;
                    width: 850px;
                    height: 450px;
                }
                
                .game {
                    position: absolute;
                    bottom: 0%;
                    left: 0%;
                }
                
                .score {
                    position: absolute;
                    bottom: 10%;
                    right: 0%;
                }
                
                .resetButton {
                    position: absolute;
                    bottom: 250px;
                    right: 100px;
                    width: 100px;
                    
                    font-size: 15px;
                    font-weight: bold;
                }
            </style>

            <div class="container">
                <h1 class="header">Diamond Race</h1>

                <canvas class="game" id="gameCanvas" width="600" height="350"></canvas>
                <canvas class="score" id="scoreCanvas" width="250" height="200"></canvas>
                <button class="resetButton" onclick="resetButton()">Reset</button>            
            </div>
        `
    }
}

customElements.define('game-object', GameObject);

