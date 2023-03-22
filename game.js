
var mainCanvas;
var mainContext;
var diamonds = [];
var counters = [];
var lines = [];
var gameOver = false;

window.onload = function(){
    
    //Get canvases
    gameObject = document.getElementById("game");
    mainCanvas = gameObject.getGameCanvas();
    mainContext = mainCanvas.getContext("2d");
    var scoreCanvas = gameObject.getScoreCanvas();
    var scoreContext = scoreCanvas.getContext("2d");

    //Bunch of constants for drawing
    const colors = ["blue", "green", "red", "yellow"];

    const yPosDiamond = 100;
    const yStepDiamond = 50;
    const xDiamondStartPosition = 50;
    const xDiamondEndPosition = 550;
    const xNumberOfSteps = 10;
    const xStepDiamond = (xDiamondEndPosition - xDiamondStartPosition) / xNumberOfSteps;

    const xPosScoreCounter = 50;
    const yPosScoreCounter = 70;
    const yStepScoreCounter = 30;

    //Create Diamonds
    for(let i = 0; i < 4; i++) {
        diamonds.push(new Diamond(xDiamondStartPosition, yPosDiamond + i*yStepDiamond, xStepDiamond, colors[i]));
    }

    //Create Lines
    lines.push(new Line(xDiamondStartPosition, yPosDiamond, yStepDiamond*5, "Start"));
    lines.push(new Line(xDiamondEndPosition, yPosDiamond, yStepDiamond*5, "End"));

    //Create Counters
    for(let i = 0; i < 4; i++) {
        counters.push(new ScoreCounter(scoreContext, xPosScoreCounter, yPosScoreCounter + i*yStepScoreCounter, colors[i]));
        counters[i].assignDiamond(diamonds[i]);
    }

    createEventListener();
    addTextToScoreCounter(scoreContext);   
    updateVisuals();
    updateVisuals(); //Ugly solution to weird visual bug with canvas
};

function createEventListener() {
    mainCanvas.addEventListener('mousedown', function(e) {
        if(!gameOver) {
            clickOnDiamond(mainCanvas, e);
            updateVisuals();
            updateVisuals(); //Ugly solution to weird visual bug with canvas
        }
    })
}

function addTextToScoreCounter (context) {
    context.font = "25px serif";
    context.fillStyle = "black";
    context.fillText("Score board", 50, 40);
}

function clickOnDiamond(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    diamonds.forEach((Element) => {
        Element.moveDiamond(x, y);
        if(Element.isGameOver()) {
            gameOver = true;
        }
    });

}

function resetButton() {
    gameOver = false;
    diamonds.forEach((Element) => Element.resetDiamond());
    counters.forEach((Element) => Element.resetScore());
    updateVisuals();
    updateVisuals(); //Ugly solution to weird visual bug with canvas
}

function updateVisuals() {
    mainContext.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
    lines.forEach((Element) => Element.drawLine(mainContext));
    diamonds.forEach((Element) => Element.drawDiamond(mainContext));
}



