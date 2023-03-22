class Diamond {

    constructor(x, y, xStep, color) {

        this.color = color;
        this.step = xStep;
        this.initX = x;
        this.x = this.initX;
        this.y = y;
        this.scoreCounter = null;
    }

    moveDiamond(clickX, clickY) {

        const clickRadius = 20;

        // (p-x)^2 + (p-y)^2 < r^2
        if(Math.pow(clickX-this.x, 2) + Math.pow(clickY-this.y, 2) < Math.pow(clickRadius, 2)) {
            this.x = this.x + this.step;
            
            if(this.scoreCounter != null) {
                this.scoreCounter.updateScore();
            }
        }
    }

    isGameOver() {
        return this.scoreCounter.isScoreMaxed();
    }

    resetDiamond() {
        this.x = this.initX;
    }

    assignCounter(counter) {
        this.scoreCounter = counter;
    }

    drawDiamond(context) {
        
        const width = 40;
        const height = 40;
    
        context.beginPath();
        context.moveTo(this.x, this.y - height / 2);
        context.lineTo(this.x - width / 2, this.y);
        context.lineTo(this.x, this.y + height / 2);
        context.lineTo(this.x + width / 2, this.y);
        context.lineTo(this.x, this.y - height / 2);
        context.closePath();
        
        context.fillStyle = this.color;
        context.fill();
    }
}