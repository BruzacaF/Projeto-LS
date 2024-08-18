import homePage from "./templates/homepage";
import runPreLoader from "./animations/pre-loader";
import createPopUp from "./templates/pop-up-init";



document.addEventListener('DOMContentLoaded', homePage);

async function init() {
    await runPreLoader();
    if (runPreLoader) {
            homePage();   
    }
}
