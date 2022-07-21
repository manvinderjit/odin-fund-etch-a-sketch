// Select the container div defined in the html file
const containerDiv = document.querySelector('#container');

let gridSize = 16; // Default gridSize

// Creates a div grid
function createDivGrid (_gridSize){    
    for (let i=0; i<_gridSize**2; i++){
        const tempDiv = createSquareDiv(i+1, _gridSize);
        containerDiv.appendChild(tempDiv);
    }
    implementHoveringStyles();
}

// creates each individual square element for div grid
function createSquareDiv(divNumber, _gridSize){

    const squareDiv = document.createElement('div');
    squareDiv.id = "square-div-" + divNumber;
    squareDiv.className = "square-divs";
    let divWidth = 100/_gridSize;
    squareDiv.style.width = `${divWidth}%`;
    return squareDiv;
}

// Adds events listeners for background color and transitions for hovering
function implementHoveringStyles() {
    const allSquareDivs = document.querySelectorAll('.square-divs');

    allSquareDivs.forEach((div) => {
        
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'lightseagreen';
            div.style.transition = 'hover 0.0s';
        });
        div.addEventListener('mouseout', () => {
            div.style.backgroundColor = 'lightpink';
            div.style.transition = 'background-color 0.7s ease-out';
        });
        
    });
}

// Create default grid when page is loaded
document.onload = createDivGrid(gridSize);

const buttonChangeGridSize = document.querySelector('#change-Grid-Size');

// Adds the click event for creating custom grid 
buttonChangeGridSize.addEventListener('click', () =>{
    // Removes previous grid
    containerDiv.innerHTML = '';   
    createDivGrid(promptUserForGridSize());
})

// Prompts user for custom grid size and validates the input
function promptUserForGridSize(){    
    let _userGridSize = prompt("Enter the number of squares per side, choose between 1 and 25");      
    // Creates default grid if no value supplied
    if(_userGridSize === null){
        return gridSize;
    }
    // Validates the grid value
    if(_userGridSize < 1 || _userGridSize > 25 ){
        _userGridSize = promptUserForGridSize();
    }
    return _userGridSize;
}

// Resets the grid by reloading the page
const buttonResetGridSize = document.querySelector('#reset-Grid-Size');
buttonResetGridSize.addEventListener('click', () =>{
    location.reload();
})
