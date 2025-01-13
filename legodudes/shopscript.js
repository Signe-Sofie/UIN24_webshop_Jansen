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
                <button>Legg i handlekurv</button>
            </article>`)

//finn #productlist, og fyll den med vardiene i variablen productHTML
document.getElementById("productlist").innerHTML = productHTML