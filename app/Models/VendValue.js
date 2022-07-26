


export class Snack {
    constructor(name, price, image) {
        this.name = name
        this.price = price
        this.image = image
    }



    get Template() {
        return `
        <div id="${this.name}" class="col-3 btn text-center p-2" onclick="">
          <span><img class="snackImg img-fluid"
              src="${this.image}"
              alt="">
            <p class="bg-dark text-danger p-2">${this.name} | $${this.price}</p>
          </span>
        </div>
        `
    }
}