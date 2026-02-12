class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

class UI {
  addProduct(product) {
const productList = document.getElementById('product-list')
const element = document.createElement("div")
element.innerHTML = `

<div class="card text-center mb-4">
<div class="card-body">
<strong>Nombre Producto: </strong> ${product.name} 
<strong>Price Producto: </strong> ${product.price} 
<strong>Year Producto: </strong> ${product.year}
<a href="#" class="btn btn-danger" name=delete>Borrar</a> 

</div>


</div>


`
productList.appendChild(element)

  }

  deleteProduct(element) {
if(element.name === "delete" )
    

  }

  resetForm(){
    document.getElementById('product-form').reset()
  }

  showMessages() {}
}



//EVENTS IN DOM

document.getElementById('product-form').addEventListener("submit", (e)=>{
    e.preventDefault()

    const name = document.getElementById('name').value.trim()
    const price = document.getElementById('price').value.trim()
    const year = document.getElementById('year').value.trim()

    const product = new Product(name, price, year)
    

    const ui = new UI()

    ui.addProduct(product)
    ui.resetForm()
})

document.getElementById('product-list').addEventListener("click", (e)=>{
const ui = new UI()
ui.deleteProduct(e.target)
})