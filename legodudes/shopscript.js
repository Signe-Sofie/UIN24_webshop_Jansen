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
    console.log("du vil legge til produkt id " + prodid)
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


    console.log(cart)
}