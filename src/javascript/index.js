import { alertPopUp } from './funcs'
import '../scss/style.scss'

//Making alertPop appear on page load
window.addEventListener('load', () => {
    alertPopUp();
});