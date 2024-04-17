const inquirer = require('inquirer');

async function init() {
    // Prompt the user for answers
    const answers = await inquirer.prompt(questions);

    // Extract user input
    const text = answers.text;
    const textColor = answers['text-color'];
    const shapeType = answers.shape;
    const shapeColor = answers['shape-color'];

    // Create the corresponding shape object based on the user's choice
    let shape;
    switch (shapeType.toLowerCase()) {
        case 'circle':
            shape = new Circle();
            break;
        case 'square':
            shape = new Square();
            break;
        case 'triangle':
            shape = new Triangle();
            break;
        default:
            console.log('Invalid shape choice.');
            return;
    }
    shape.setColor(shapeColor);

    // Create an Svg instance
    const svg = new Svg();

    // Set text element
    svg.setTextElement(text, textColor);

    // Set shape element
    svg.setShapeElement(shape);

    // Generate the SVG string
    const svgString = svg.render();

    // Log the SVG string
    console.log('Generated SVG:\n', svgString);

    // Write SVG string to file
    writeToFile('logo.svg', svgString);
}

init();
