import createPreLoader from "../templates/loader.js";
import homePage from "../templates/homepage.js";


function runPreLoader() {

    let app = document.getElementById('app');
    app.innerHTML = '';


    createPreLoader();
    doAnimation();

}





async function doAnimation() {
   let result = await typeWriterAnimation('Loading...');
    if (result === 'done') {
        result = await typeWriterAnimation('Please wait...');
        if (result === 'done') {
            result = await typeWriterAnimation('Almost there...');
            if (result === 'done') {
                result = await typeWriterAnimation('Done!');
                if (result === 'done') {
                    result = await pressKeyToContinue();
                    if (result === 'done') {
                        homePage();
                }
            }
        }}
    
    }



    // ------------ function to animate text ------------


    function typeWriterAnimation(text) {

        return new Promise(resolve => {
            let loaderText = document.querySelector('.loaderText');
            let newLoaderText = document.createElement('p');
        
        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                newLoaderText.textContent += text[i];
                loaderText.textContent = newLoaderText.textContent;
            }, 250 * i);
        } setTimeout(() => {
            resolve('done');
        }, 250 * text.length);
        });
    }

     // ------------ function to animate text ------------
    //  ------------ function to press key continue ------------

    function pressKeyToContinue() {
        return new Promise(resolve => {
            let loaderText = document.querySelector('.loaderText');
            let newLoaderText = document.createElement('p');
            newLoaderText.textContent = 'Press any key to continue...';
            loaderText.textContent = newLoaderText.textContent;
           window.addEventListener('keydown', () => {
               resolve('done');
           });
        });




}
    }



export default runPreLoader;