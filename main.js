
const products = [{
  name: "Jacket with the consectetur adipisicing.",
  price: 200,
  img: "./images/image1.webp",
  qte: 0,
}, {
  name: "Shoes Nike the best in the makrket",
  price: 150,
  img: "./images/image2.webp",
  qte: 0,
}, {
  name: "Phone 14 pro max akher makayn",
  price: 450,
  img: "./images/image3.webp",
  qte: 0,
}, {
  name: "Laptop Hp elitebook 840 with ...",
  price: 650,
  img: "./images/image4.webp",
  qte: 0,
}]

let theRooot = document.getElementById('root')
function buildDOM() {
  products.forEach((product) => {
    let productroot = document.createElement('div');
    productroot.classList.add('all_product');

    let productTitle = document.createElement('h2');
    productTitle.innerHTML = product.name

    let productIMG = document.createElement('img')
    productIMG.setAttribute('src', product.img)

    let productPrice = document.createElement('span')
    productPrice.innerHTML = product.price

    // HEART 
    let heart = document.createElement('i');
    heart.classList.add(['fa-heart']);
    heart.classList.add(['fa-regular']);

    productroot.appendChild(heart);

    heart.addEventListener("click", function() {
      heart.classList.toggle("fa-solid")
      heart.style.color = "red"
    })
     // HEART 


    //  REMOVE ITEM
    let delete_item = document.createElement('i');
    delete_item.classList.add(["fa-solid"]);
    delete_item.classList.add(['fa-xmark']);
    delete_item.style.color = "red"

    productroot.appendChild(delete_item);

    delete_item.addEventListener("click", function() {
      theRooot.removeChild(productroot)
    })
    //  REMOVE ITEM



    let inputQTE = document.createElement('input')
    inputQTE.setAttribute('type', 'number')
    inputQTE.setAttribute('value', product.qte)

    inputQTE.addEventListener('change', (e) => {
      product.qte = e.target.value;
      document.querySelector('#totalPrices').value = totalPrices();
      
    });

    productroot.appendChild(productTitle)
    productroot.appendChild(productIMG)
    productroot.appendChild(productPrice)
    productroot.appendChild(inputQTE)
    theRooot.appendChild(productroot)
  })
}

buildDOM();

// COUNT PRICE

total = document.createElement('input')
total.setAttribute('readonly', 'readonly')
total.setAttribute('id', 'totalPrices')
total.setAttribute('placeholder', 'Total price')
theRooot.appendChild(total)

function totalPrices() {
  // return `${products.price} *  ${products.qte}`
  return products.reduce((s, p,) => s + (p.price * p.qte), 0)
}




// COVERT OBJECT TO ARRAY

// function toArray(obj) {
// 	var result = Object.keys(obj).map((key) => [key, obj[key]]);
	
// 	return result;
// }

// COVERT OBJECT TO ARRAY

