// JavaScript source code



function Project() {
    this.content = [];
    this.resize = true;

    this.draw = function(offset) {
        if (this.resize) {
            var cumulativeOffset = offset;
            for (var i = 0; i < this.content.length; i++)
            {
                this.content[i].draw(cumulativeOffset)
                cumulativeOffset += this.content[i].height();
            }
        }
        //else only redraw the stuf that isn't an html div, which rn is nothing
    }

    this.resize = function() {
        this.resize = true;
    }
}