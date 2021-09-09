const gifContainer = document.querySelector('#gifContainer');
const getButton = document.querySelector('#getButton');

const apiKey ='YXWuXcT39KxyhvmHdXsYlOCKiQptAhJO';
const API = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

let getGIF = async () => {
    try {
        let res = await fetch(API);
        let gifData = await res.json();

        gifContainer.style.backgroundColor = 'transparent';
        gifContainer.innerHTML = `<img src="${gifData.data.images.original.url}"/>`;
    } catch (error) {
        console.log(`Error en la petición ${error}`);
    }
};

getButton.addEventListener('click', getGIF);