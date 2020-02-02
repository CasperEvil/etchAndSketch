function createBoard() {
    const container = document.querySelector('#container');
    for (let i = 0; i < 225; i += 1) {
        const generatedDiv = document.createElement('div');
        generatedDiv.classList.add('divGrid')
        generatedDiv.addEventListener('mouseover', (e) => {
            generatedDiv.style.backgroundColor = 'black';
        });
        container.appendChild(generatedDiv);
    }
}