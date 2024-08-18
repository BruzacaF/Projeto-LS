import homePage from "./templates/homepage";
import runPreLoader from "./animations/pre-loader";




document.body.setAttribute('data-theme', 'light');


document.addEventListener('DOMContentLoaded', init);

async function init() {
    await runPreLoader();
    if (runPreLoader) {
            homePage();   
    }
}
