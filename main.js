const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcom = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcom = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

//toggle intercambiar
menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcom.addEventListener('click',toggleMobileMenu);
menuCarritoIcom.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu(){

    const isAsideClosed = aside.classList.contains('inactive');
    mobileMenu.classList.toggle('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
     }
    /* if(desktopMenu.getAttribute('class').indexOf('inactive') > -1){
        desktopMenu.classList.remove('inactive')
        
    }else{
        desktopMenu.classList.add('inactive')
    } */
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    mobileMenu.classList.toggle('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
     }

}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed  = desktopMenu.classList.contains('inactive');
    aside.classList.toggle('inactive');
    if(!isMobileMenuClosed){
       mobileMenu.classList.add('inactive');
    }
   if(!isDesktopMenuClosed){
           desktopMenu.classList.add('inactive');
   }

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