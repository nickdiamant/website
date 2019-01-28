// JavaScript source code

var mouseDown;
var header;
var project;

function setup() {
	mouseDown = false;
	header = new Header();
	project = new Project();
		
	//load projectJSON - title, tags, content
	project.title = projectJSON.title;
	project.tags = projectJSON.tags;
	for (var i = 0; i < projectJSON.content.length; i++)
	{
		var element = projectJSON.content[i];

		if (element.type == 'Iframe')
		{
			project.content.push(new Iframe(element.info));
		}
		else if (element.type == 'Title')
		{
			project.content.push(new Title(element.title));
		}
		else if (element.type == 'Text')
		{
			project.content.push(new Text(element.text));
		}
	}
		

	//create canvas
	createCanvas(windowWidth, max(windowHeight, header.height() + project.height()));
    
    project.resize();
    header.resize();
}

function draw() {
	project.draw(header.height());
	header.draw();
}

function mousePressed() {
	mouseDown = true;
}

function mouseReleased() {
	mouseDown = false;
	header.click();
	project.click();
}

function windowResized() {
	project.resize();
    header.resize();
	resizeCanvas(windowWidth, max(windowHeight, header.height() + project.height()));
}