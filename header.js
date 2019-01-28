// JavaScript source code

var padding = 100; //vertical dist between elements
var screenFillWidth = 0.8;
var textFont = '15px arial, sans-serif'

function redirect(page) {
    window.location.href = page;
}

function Text(text) {
    this.text = text;
    this.id = this.text.substring(0,30);
    this.element = createDiv('');

    this.draw = function(offset) {
        var w = windowWidth * screenFillWidth;
        var x = windowWidth * (1 - screenFillWidth) / 2;
        var y = offset;
        this.element.html('<div id=' + this.id + 'style="z-index:1;width:' + w + 'px;position:absolute;top:' + y + 'px;left:' + x + 'px;font:' + textFont + ';">' + this.text + '</div>');
    }
    
    this.height = function() {
        return document.getElementById(this.id).offsetHeight + padding;
    }
}

function Iframe(info) {
    this.info = info;
    this.id = this.info.substring(0,30);
    this.element = createDiv('');

    this.draw = function(offset) {
        var w = windowWidth * screenFillWidth;
        var x = windowWidth * (1 - screenFillWidth) / 2;
        var y = offset;
        this.element.html('<iframe id=' + this.id + 'style="z-index:1;width:' + w + 'px;position:absolute;top:' + y + 'px;left:' + x + 'px;font:' + textFont + ';"' + this.info + '></iframe>');
    }
    
    this.height = function() {
        
    }
}

function Title(text) {
    this.text = text;
    this.id = this.text.substring(0,30);
    this.element = createDiv('');

    this.draw = function(offset) {
        var w = windowWidth * screenFillWidth;
        var x = windowWidth * (1 - screenFillWidth) / 2;
        var y = offset;
        this.element.html('<div id=' + this.id + 'style="z-index:1;width:' + w + 'px;position:absolute;top:' + y + 'px;left:' + x + 'px;font:' + titleFont + ';">' + this.text + '</div>');
    }
    
    this.height = function() {
        return document.getElementById(this.id).offsetHeight + padding;
    }
}


























