import { ProxyState } from "../AppState.js"

function _drawSnacks() {
    let snacks = ProxyState.snacks
    let template = ''
    snacks.forEach(s => template += s.Template)
    document.getElementById('snacks').innerHTML = template
}


export class VendController {
    constructor() {
        _drawSnacks()
    }
    addChange() {
        ProxyState.money += .25
        console.log(ProxyState.money);
        document.getElementById('change').innerText = ProxyState.money
    }
}