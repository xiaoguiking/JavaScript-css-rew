import '../scss/Tab.sass';
import nav from '../components/tab/nav/index';
console.log(nav);

export default class Tab {
    constructor(app) {
        this.app = app;
        this.oTab = document.createElement('div');
        this.oTab.className= 'tab J_tab';

       this.app.appendChild(this.oTab);
    }
    init () {

    }
}