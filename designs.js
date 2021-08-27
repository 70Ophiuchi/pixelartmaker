const boxColor = document.querySelector("#colorPicker"); // Declaring the colorPicker as a constant
let colorBG = boxColor.value // Assigning the value of the colorPicker to a variable

boxColor.addEventListener("input", function(e) { // Adding an event listener to the colorPicker constant
    colorBG = e.target.value; // updating the value of the background color variable, according to the user input
});

const gridSize = document.querySelector("#sizePicker"); // Declaring the sizePicker as a constant
var container = document.querySelector("#canvasContainer"); // Container for the canvas as a variable
var button = document.getElementById("reset"); // Declaring the reset button for resetting the colored boxes
var canvasTable = document.getElementById('pixelCanvas'); // Declaring the table for the canvas as a variable
const grid = document.querySelector("#pixelCanvas") // Declaring the table as a constant

function sizeInput() { // Declaring a function for the size input event
    gridSize.addEventListener('submit', function _listener(evt) { // Adding an event listener to the submit button
        while (canvasTable.hasChildNodes()) { // Checks for child nodes i.e. if the grid exists inside the parent node
            canvasTable.removeChild(canvasTable.lastChild) // Removes the child nodes i.e. clears the grid if child nodes exist
        }
        const A = gridSize.elements[0].value; // Assigning the value of the form element to a constant 
        const B = gridSize.elements[1].value; // Assigning the value of the form element to a constant
        evt.preventDefault(); // Preventing the default action of the submit button
        makeGrid(A, B); // Calling the makeGrid function with two params: size of the table
    });
}

sizeInput(); // Calling the sizeInput function



function makeGrid(A, B) { // Function for making a grid when the user inputs the size of the grid

    for (let i = 0; i < A; i++) { // Main loop for making the grid, this loop adds new lines for the inner loop
        var c = document.createElement("tr"); // Creating a table element
        c.style.height = "0px"; // Declaring the size of the element
        c.style.width = "0x"; // Declaring the size of the element
        c.style.padding = "10px"; // Declaring the size of the element
        grid.appendChild(c); // Appending the element to the parent table element

        for (let x = 0; x < B; x++) { // inner loop that adds the boxes for the grid
            var r = document.createElement("td"); // Creating a table element
            r.style.height = "15px"; // Declaring the size of the element
            r.style.width = "15px"; // Declaring the size of the element
            r.style.padding = "10px"; // Declaring the size of the element
            grid.appendChild(r); // Appending the element to the parent table element 
        }
    }
    container.addEventListener('click', function(evt) { // Adding an event listener for the container
        if (evt.target.nodeName === "TD") { // Setting up a conditional based on the target of the event listener
            evt.target.style.backgroundColor = colorBG; // Changing background of the boxes in the grid, using the colorBG variable
            button.addEventListener('click', function() { // Function for resetting the colors inside the grid without making a new grid
                evt.target.style.backgroundColor = "white"; // Sets the color to white to reset
            });
        }
    });
}