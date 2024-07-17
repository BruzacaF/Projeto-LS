
function createPreLoader() {

    let app = document.getElementById('app');

    let loader = document.createElement('div');
    let boxLoader = document.createElement('div');
    let loaderText = document.createElement('h1');
    

    loader.id = 'loader';
    loader.classList.add('loader');
    loaderText.classList.add('loaderText');
    boxLoader.classList.add('boxLoader');


    
    
    boxLoader.append(loaderText);
    loader.append(boxLoader);

    app.appendChild(loader);

}





export default createPreLoader;