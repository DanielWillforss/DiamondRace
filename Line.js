class Line {

    constructor(x, y, length, text) {
        const yAdjustement = -50;

        this.x = x;
        this.y = y + yAdjustement;
        this.length = length;
        this.text = text;
    }

    drawLine(context) {
        const color = "black";

        //Line
        context.moveTo(this.x, this.y);
        context.lineTo(this.x, this.y + this.length);
        context.stroke();
        
        //Text above line
        context.font = "25px serif";
        context.fillStyle = color;
        context.fillText(this.text, this.x-20, this.y-20);
    }
}