import { fetchData } from "./modules/async.js";
import headerComponent from "./components/header.js";
import footerComponent from "./components/footer.js";

(()=>{
    new Vue({
        el: "#app",

        components: {
            "headercomponent" : headerComponent,
            "footercomponent" : footerComponent
        },
        
    })
})();