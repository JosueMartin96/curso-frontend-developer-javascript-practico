const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcom = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcom = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

//toggle intercambiar
menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcom.addEventListener('click',toggleMobileMenu);
menuCarritoIcom.addEventListener('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

function toggleDesktopMenu(){
    closeShoppingCart();
    closeProductDetailAside();
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    closeShoppingCart();
    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');
   
}

function toggleCarritoAside(){
    closeDesktopMenu();
    closeProductDetailAside();
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
   
    
    shoppingCartContainer.classList.toggle('inactive');
    if(!isMobileMenuClosed){
       mobileMenu.classList.add('inactive');
    }



}
function closeShoppingCart(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
     }
}
function closeDesktopMenu(){
    const isDesktopMenuClosed  = desktopMenu.classList.contains('inactive');
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
}
function  openProductDetailAside(){
    closeShoppingCart();
    closeDesktopMenu();
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive'); 
}

const productList = [];
productList.push({
    name:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Iphone',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Moto',
    price: 1180,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});




function renderProducts(arr){
    for(product of arr){
        const productCard= document.createElement('div');
        productCard.classList.add('product-card');
       
        const ProductImg= document.createElement('img');
        ProductImg.setAttribute('src',product.image);
        ProductImg.addEventListener('click',openProductDetailAside);
       
        const productInfo= document.createElement('div');
        productInfo.classList.add('product-info');
       
        
        const productDataDiv= document.createElement('div');
        const productPrice= document.createElement('p');
        productPrice.innerText = '$'+product.price;
        const productName= document.createElement('p');
        productName.innerText = product.name;
        productDataDiv.appendChild(productPrice);
        productDataDiv.appendChild(productName);
       
       
        const productInfoFigure= document.createElement('figure');
        const productFigureImg= document.createElement('img');
        productFigureImg.setAttribute('src','./icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(productFigureImg);
       
       
        productInfo.appendChild(productDataDiv);
        productInfo.appendChild(productInfoFigure);
       
        productCard.appendChild(ProductImg);
        productCard.appendChild(productInfo);
       
        cardsContainer.appendChild(productCard);
       }
}

renderProducts(productList);