import Tab from '../modules/Tab'
;((doc) => {
    console.log('1111')
    const oApp = document.getElementById('app');
    const init = () => {
        new Tab(oApp).init();
    }
    init();
})(document)