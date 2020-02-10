function createBoard() {
    const container = document.querySelector('#container');
    for (let i = 0; i < 225; i += 1) {
        const generatedDiv = document.createElement('div');
        generatedDiv.classList.add('divGrid')
        generatedDiv.addEventListener('mouseover', (e) => {
            generatedDiv.style.backgroundColor = generateRandColor();
        });
        container.appendChild(generatedDiv);
    }
}

function clearBoard() {
    const gridItems = document.querySelectorAll('.divGrid');

    gridItems.forEach((element) => {
        element.style.backgroundColor = 'white';
    })
}

function generateRandColor() {
    const red = Math.floor(Math.random() * 255) + 1;
    const green = Math.floor(Math.random() * 255) + 1;
    const blue = Math.floor(Math.random() * 255) + 1;

    return `rgb(${red}, ${green}, ${blue})`
}