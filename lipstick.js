let tempProduct={};
function addToCart(proName,proPrice,proImg){
    tempProduct={
        name  : proName,
        price : proPrice,
        img : proImg
    };
    document.getElementById('box').classList.add('d-block');
    document.getElementById('box').classList.remove('d-none');

}

function add(){
    let cart=JSON.parse(localStorage.getItem('cart'))|| [];
    let existingProduct = cart.find(item => item.name === tempProduct.name);
    if(existingProduct){
        existingProduct.qty += 1;
    }else{
     let product={
        id : cart.length+1,
        name : tempProduct.name,
        price : tempProduct.price,
        image : tempProduct.img,
        qty : 1
     }
     
     cart.push(product);

    }
 
     console.log(cart);
     localStorage.setItem('cart',JSON.stringify(cart));
     tempProduct = {};
    cancel();
}
function cancel(){
    document.getElementById('box').classList.add('d-none');
    document.getElementById('box').classList.remove('d-block');
}
function clearAll(){
    localStorage.removeItem('cart');
    loadData2();
    let totalPrice = document.querySelector('#total');
    totalPrice.textContent = 0;

}
function loadData2(){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let ShowCart = document.querySelector('.carts');
    //let totalPrice = document.querySelector('#total');
    let total = 0;
    ShowCart.innerHTML='';
    if(cart.lenght===0){
        ShowCart.innerHTML = `<h4 class="text-center my-4">Your Shopping cart is empty</h4>`;
    }
    else{
       cart.forEach ((item,index)=>{
         ShowCart.innerHTML+=` <div class="cart d-flex justify-content-between">
    <img src="imgs/${item.image}" alt="" style="width: 100px;">
    <div class="info text-end">
        <h4 class="m-0">${item.name}</h4>
        <p class="m-0 fs-4">Price: $ ${item.price}</p>
        <div class="btns">
            <button onclick="changeQuantity(${index},
            'decrease')" class="btn mx-2 fs-4">-</button>
            <span>${item.qty}</span>
            <button onclick="changeQuantity(${index},
            'increase')"class="btn mx-2 fs-4">+</button>
        </div>
        </div>
    </div> <hr> `;
     total += item.price*item.qty;
    let totalPrice = document.querySelector('#total');
    totalPrice.textContent=total;
     });
    }
}

function changeQuantity(index,action){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if(action == 'increase'){
        cart[index].qty +=1;
    }else if(action == 'decrease'){ 
        cart[index].qty -=1;
    }
    if(cart[index].qty == 0){
        cart.splice(index,1);
    }
    localStorage.setItem('cart',JSON.stringify(cart));
    loadData2()

}
const imageData = {
    0: [
      "https://romand.us/cdn/shop/files/9_6c7f0737-3d67-42ce-bdaf-8d70b5b70127.jpg?v=1717747607=image+1",
      "https://romand.us/cdn/shop/files/22.jpg?v=1708067195=image+2",
      "https://romand.us/cdn/shop/files/8copy.jpg?v=1708061986=image+3"
     
    ],
    1: [
      "https://romand.us/cdn/shop/products/dewyfull_water_tint.jpg?v=1641423292=image+1",
      "https://romand.us/cdn/shop/products/dewyful_water_tint_lip_swatch.jpg?v=1645690588=image+2",
      "https://romand.us/cdn/shop/products/01-in-coral-_1.jpg?v=1663001693=image+3"
    ],
    2:[
      "https://romand.us/cdn/shop/products/Picture095us.jpg?v=1639112852=image+1",
      "https://romand.us/cdn/shop/products/swatch_eafa0c06-d29a-4411-8b96-cb28ecc81d54.jpg?v=1663003183=image+2",
      "https://romand.us/cdn/shop/products/12_cherr_bomb_model.jpg?v=1663003183=image+3"
    ],
    3:[
        "https://romand.us/cdn/shop/products/palette_5f4e9cf9-c138-4ab7-a543-802cd6b323e6.jpg?v=1663004637=image+1",
        "https://romand.us/cdn/shop/products/berryfuchsiagarden-t.png?v=1663004637=image+2",
        "https://romand.us/cdn/shop/products/220307_4622.jpg?v=1663004637=image+3"
    ],
    4:[
        "https://romand.us/cdn/shop/files/12_7.jpg?v=1717747571=image+1",
        "https://romand.us/cdn/shop/files/14_74109724-58c2-433b-a850-88849d668f41.jpg?v=1709620186=image+2",
        "https://romand.us/cdn/shop/files/15_8f815e1e-6f7f-4cfd-8b67-f1c6bc402353.jpg?v=1709619547=iamge+3"  

    ],
    5:[
        "https://romand.us/cdn/shop/products/M01-dry-apple-blossom_3.jpg?v=1663005803=image+1",
        "https://romand.us/cdn/shop/products/02_dry_apple_blossom_02.jpg?v=1663005803=image+2",
        "https://romand.us/cdn/shop/products/02_dry_apple_blossom_01.jpg?v=1663005803=image+3"
    ]
    
  };

  document.querySelectorAll('.card').forEach((cardEl, cardIdx) => {
    let currentIndex = 0;
    const imgEl = cardEl.querySelector('img');
    const leftBtn = cardEl.querySelector('.nav-icon.left');
    const rightBtn = cardEl.querySelector('.nav-icon.right');

    leftBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + imageData[cardIdx].length) % imageData[cardIdx].length;
      imgEl.src = imageData[cardIdx][currentIndex];
    });

    rightBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % imageData[cardIdx].length;
      imgEl.src = imageData[cardIdx][currentIndex];
    });
  });

  filter.oninput=()=>document.querySelectorAll('.card').forEach(c=>{
  let s=filter.value.toLowerCase(),n=card.dataset.name,cg=cards.dataset.category;
  card.style.display=(n+cg).toLowerCase().includes(s)?'block':'none';
});




