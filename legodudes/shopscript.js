console.log(products)

//gå gjennom alle producter, generere html for hvert produkt, skrive dette til index.html

//en variabel som kan holde på htmlen for produktene
let productHTML = ""

products.map((product, index) => productHTML += 
            `<article class="product-card">
                <img src="website_images/PROD_${product.imagefile}" alt="PRODUKTTITTEL" />
                <a href="#ketegoriside">Ninjago</a>
                <h3>${product.title}</h3>
                <p>Kr. ${product.price},-</p>
                <button onclick="addProductToCart(${product.prodid})">Legg i handlekurv</button>
            </article>`)

//finn #productlist, og fyll den med vardiene i variablen productHTML
document.getElementById("productlist").innerHTML = productHTML

//lage toggle funksjonalitet for handlevogn
document.getElementById("shoppingcart").addEventListener("click", function() {
    document.getElementById("cart").classList.toggle("visible")
})

//add product to cart
function addProductToCart(prodid) {
    console.log("du vil legge til produktid " + prodid)
    //bruk .some for å sjekke om prodid allerede finnes i cart
    const idExists = cart.some(cartprod => cartprod.cartprodid === prodid)

    if(idExists) {
        //oppdatere dette produktets quantity
        //først: finne indexen til denne id-en:
        const index = cart.findIndex(p => p.cartprodid === prodid)
        //så: oppdatere riktig quantity
        cart[index].quantity++
    } else {
        cart.push({cartprodid: prodid, quantity: 1})
    }

    printCart()
    console.log(cart)
}

//lage en funksjon so, skriver ut oppdatert versjon av handlevognen
function printCart() {
    //starte med en tom variabel vi kan fylle med html
    let cartHTML = ""
    //lag klar variabel for pris:
    let cartTotal = 0;
    //lag variabel for anntal produkter
    let cartNumber = 0;

    //gå gjennom cart arrayen og generere HTML for hvert produkt
    cart.map((cartprod, index) => {
        const currentProduct = products.findIndex(p => p.prodid === cartprod.cartprodid)
        const currentProductInfo = products[currentProduct]
        cartHTML += `<article class="cart-product">
                    <span class="title">${currentProductInfo.title}</span>
                    <span class="price">${currentProductInfo.price},-</span>
                    <span class="quantity">x<span class="quantity-number">${cartprod.quantity}</span></span>
                    <button class="delete">x</button>
                </article>`
            //regn ut totalsum
            cartTotal += currentProductInfo.price * cartprod.quantity
            //regn ut antall produkter
            cartNumber += cartprod.quantity
    })

    //skrive ut generert html til index fila:
    document.getElementById("cart-products").innerHTML = cartHTML

    //skrive ut totalpris
    document.getElementById("cart-total").innerHTML = cartTotal

    //skrive ut antall produkter
    document.getElementById("cartcount").innerHTML = cartNumber
}

printCart()