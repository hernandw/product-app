class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

class UI {
  addProduct() {}

  deleteProduct() {}

  showMessages() {}
}



//EVENTS IN DOM

document.getElementById('product-form').addEventListener("submit", (e)=>{
    e.preventDefault()

    const name = document.getElementById('name').value.trim()
    const price = document.getElementById('price').value.trim()
    const year = document.getElementById('year').value.trim()

    const product = new Product(name, price, year)
    console.log(product)
})