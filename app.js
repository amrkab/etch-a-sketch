// create 16x16 grid of div using javascript
// put grid of divs inside another div (holds your grids)
// use flexbox to make divs appear as grid
// user hover effect to change each div whenever the mouse goes over it
    // you can change color by either adding a class or changiing backgroundColor of the divs
// add button to the top of screen that will prompt user to change number of divs per side
// max input is 100 squares


// currently trying to create custom grid size with an input field and a button



const input = document.querySelector('input');

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

function defaultGrid() {
    const parentGrid = document.querySelector('#parentGrid');

        for (let i = 0; i<16; i++) {

            const row = document.createElement('div');
            row.id = 'row' + i;
            row.setAttribute('class', 'rowContainer');
            parentGrid.append(row);

            const rowWidth = document.getElementById('row' + i)

            for (let x = 0; x<16; x++) {
                const tile = document.createElement('div');
                tile.setAttribute('class', 'tiles');
                rowWidth.append(tile);
            }
        }
}

function resetGrid() {}

defaultGrid();
input.addEventListener('input', makeGrid);