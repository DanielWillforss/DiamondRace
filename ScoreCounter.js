class ScoreCounter {

    constructor(context, x, y, color) {

        this.context = context;
        this.x = x;
        this.y = y;
        this.color = color;

        this.currentScore = 0;
        this.maxScore = 10;

        this.drawScoreColor();
        this.drawScoreNumber();
    }

    updateScore() {
        if(this.currentScore < this.maxScore) {
            this.currentScore++;
            this.drawScoreNumber();
        }            
    }

    isScoreMaxed() {
        if(this.currentScore < this.maxScore) {
            return false;
        }
        else {
            return true;
        }
    }

    resetScore() {
        this.currentScore = 0;
        this.drawScoreNumber();
    }
        
    assignDiamond(diamond) {
        diamond.assignCounter(this);
    }

    drawScoreNumber() {
        const color = "Black";
        const finalColor = "Red";
        const font = "25px serif";
        const textXmargin = 120;
        const clearSize = 30;

        this.context.clearRect(this.x + textXmargin, this.y, clearSize, -clearSize)

        if(this.currentScore < this.maxScore) {
            this.context.fillStyle = color;
        }
        else {
            this.context.fillStyle = finalColor;
        }
        this.context.font = font;
        this.context.fillText(this.currentScore, this.x + textXmargin, this.y);
    }

    drawScoreColor(context, x, y, color) {
        const width = 100;
        const height = 15;
        const arcsize = height / 2;
    
        this.context.beginPath();
        this.context.moveTo(this.x+arcsize, this.y-height);
        this.context.lineTo(this.x+width-arcsize, this.y-height);
        this.context.arcTo(this.x+width, this.y-height, this.x+width, this.y-height+arcsize, arcsize);
        this.context.arcTo(this.x+width, this.y, this.x+width-arcsize, this.y, arcsize);
        this.context.lineTo(this.x+arcsize, this.y);
        this.context.arcTo(this.x, this.y, this.x, this.y-height-arcsize, arcsize);
        this.context.arcTo(this.x, this.y-height, this.x+arcsize, this.y-height, arcsize);
        this.context.lineTo(this.x+arcsize, this.y-height);
        this.context.stroke();
        
        this.context.fillStyle = this.color;
        this.context.fill();
    }
}