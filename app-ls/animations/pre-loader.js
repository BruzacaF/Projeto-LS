import createPreLoader from "../templates/loader.js";
import homePage from "../templates/homepage.js";

var counter = 0;




function runPreLoader() {
    
    let app = document.getElementById('app');
    app.innerHTML = '';


    createPreLoader();
    typeWriterAnimation('Loading...');

}





function typeWriterAnimation(text){
    
    let loaderText = document.querySelector('.loaderText');
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            loaderText.textContent += text[i];
        }, 250 * i);
    }
    setTimeout(() => {
        loaderText.textContent = '';
        homePage();
    }, 350 * text.length);
    
}












export default runPreLoader;