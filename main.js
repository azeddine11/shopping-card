
const products = [{
  name: "Lorem ipsum dolor sit amet consectetur adipisicing.",
  price: 200,
  img: "./images/image1.webp",
  qte: 1,
}, {
  name: "Lorem ipsum dolor sit",
  price: 150,
  img: "./images/image2.webp",
  qte: 1,
}]

let theRooot = document.getElementById('root')
function buildDOM() {
  products.forEach((product) => {
    let productroot = document.createElement('div');

    let productTitle = document.createElement('h2');
    productTitle.innerHTML = product.name


    let productIMG = document.createElement('img')
    productIMG.setAttribute('src', product.img)

    let productPrice = document.createElement('span')
    productPrice.innerHTML = product.price


    let inputQTE = document.createElement('input')
    inputQTE.setAttribute('type', 'number')
    inputQTE.setAttribute('value', product.qte)

    inputQTE.addEventListener('change', (e) => product.qte = e.target.value);

    
    let total = document.createElement('input')
    total.setAttribute('readonly', 'readonly')
    total.innerHTML = "0"
    

    total = total + ( parseFloat(productPrice) * inputQTE)



    productroot.appendChild(productTitle)
    productroot.appendChild(productIMG)
    productroot.appendChild(productPrice)
    productroot.appendChild(inputQTE)


    theRooot.appendChild(productroot)
  })
}

buildDOM();
// function addEvent() {
//   let inputs = [...document.getElementsByTagName('input')]

//   inputs.forEach((input) => {
//     input.addEventListener('change', (e) => console.log(e.target.value))
//   })


// }
