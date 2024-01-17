// user hover effect to change each div whenever the mouse goes over it
    // you can change color by either adding a class or changing backgroundColor of the divs
// add button to the top of screen that will prompt user to change number of divs per side
// max input is 100 squares

const myForm = document.querySelector('#myForm');
const input = document.querySelector('#sizeInput');

myForm.addEventListener('submit', e => {
e.preventDefault();
if (input.value>100 || input.value==0) {
    alert("That size will break everything")
} else {
    resetGrid();
    makeGrid(input.value)
}
});

function makeGrid(e) {

    const parentGrid = document.querySelector('#parentGrid');

        for (let i = 0; i<e; i++) {

            const row = document.createElement('div');
            row.id = 'row' + i;
            row.setAttribute('class', 'rowContainer');
            parentGrid.append(row);

            const rowWidth = document.getElementById('row' + i)

            for (let x = 0; x<e; x++) {
                const tile = document.createElement('div');
                tile.setAttribute('class', 'tiles');
                rowWidth.append(tile);
            }
        }
}


function resetGrid() {

    while (parentGrid.firstChild) {
        parentGrid.removeChild(parentGrid.firstChild);
    }

}

makeGrid(16);