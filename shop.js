//same header
window.onload=function(){
    setTimeout(function(){
        document.getElementById("pageHeader").style.display="flex";
    },50);
}
let logOutBtn=document.querySelector(".logOutBtn");
const container=document.querySelector(".logo");
const plogo=document.querySelector(".plogo");



window.addEventListener("scroll", function(){
    let currentScroll=this.window.pageYOffset;
    if(currentScroll<=50)
    {
        container.classList.remove("small");
        plogo.style.visibility="visible";
       

    }
    else{
        container.classList.add("small");
        plogo.style.visibility="hidden";
        
    }
    
})

//button contor
var HomeBtn=document.querySelector(".HomeBtn");
var ShopBtn=document.querySelector(".ShopBtn");
var HomeBtnC=parseInt(localStorage.getItem("HomeBtnC")) || 0;
var ShopBtnC=parseInt(localStorage.getItem("ShopBtnC")) || 0;

HomeBtn.addEventListener("click",()=>{
    HomeBtnC++;
    localStorage.setItem("HomeBtnC", HomeBtnC);
})

ShopBtn.addEventListener("click",()=>{
    ShopBtnC++;
    localStorage.setItem("ShopBtnC", ShopBtnC);
})

    if(ShopBtnC>HomeBtnC){
        ShopBtn.parentNode.insertBefore(ShopBtn,HomeBtn);
    }


// login/register form
var overlay = document.createElement("div");
overlay.style.position = "fixed";
overlay.style.top = 0;
overlay.style.left = 0;
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
overlay.style.zIndex = 8999;

// login/register form
var overlay = document.createElement("div");
overlay.style.position = "fixed";
overlay.style.top = 0;
overlay.style.left = 0;
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
overlay.style.zIndex = 8999;



const wrapper=document.querySelector(".wrapper");
const loginLink=document.querySelector(".login-link");
const registerLink=document.querySelector(".register-link");
const loginBtn=document.querySelector(".btnLogin-popup");
const iconClose=document.querySelector(".iconClose");


registerLink.addEventListener("click",()=>{
    wrapper.classList.add("active");

})
loginLink.addEventListener("click",()=>{
    wrapper.classList.remove("active");
    
})
loginBtn.addEventListener("click",()=>{
    wrapper.classList.add("active-login");
    document.body.style.overflow="hidden";
    document.body.appendChild(overlay);
    window.scrollTo(0,0);

})

iconClose.addEventListener("click",()=>{
    wrapper.classList.remove("active");
    wrapper.classList.remove("active-login");
    document.body.style.overflow="visible";
    document.body.removeChild(overlay);
})

// register, validate register & saving user imput

let users=[];

if(localStorage.getItem("logInfo")!=null){
    document.querySelector(".btnLogin-popup").classList.remove("logged");
    document.querySelector(".loggedUser").classList.add("logged");
    document.getElementById("userLabel").textContent=`${localStorage.getItem("logInfo")}`;
}

logOutBtn.addEventListener("click", function(){
    document.querySelector(".btnLogin-popup").classList.add("logged");
    document.querySelector(".loggedUser").classList.remove("logged");
    localStorage.removeItem("logInfo");
})




const addUser=(ev)=>{
    ev.preventDefault();//to stop from submitting
    if (validateUsername(document.getElementById("username").value)) {
        if (validateEmail(document.getElementById("email").value)) {
            if (validatePassword(document.getElementById("password").value)) {
                let user={
                    username: document.getElementById("username").value,
                    email: document.getElementById("email").value,
                    password: document.getElementById("password").value
                   
                }
               
                users.push(user);
                document.forms[0].reset();
                //to clear the form for the next entries
                //saving to localstorage
            
                localStorage.setItem("Users", JSON.stringify(users));
                alert("Registration successful! You can now log in to your account.");
                wrapper.classList.remove("active");
      } else {
        alert("Invalid password. It should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.");
      }
      } else {
        alert("Invalid email. Please enter a valid email address.");
      }
      } else {
        alert("Invalid username. It should contain only alphanumeric characters and underscore.");
      }
   
    
}
document.addEventListener("DOMContentLoaded",()=>{
    if(localStorage.getItem("Users")){
        users=JSON.parse(localStorage.getItem("Users"));
    }
    
      document.getElementById("registerBtn").addEventListener("click",addUser);
});


//login & valdiate login

let userExists;
const validateLogin = (ev)=>{
    ev.preventDefault();
    // localStorage.clear();
    const email=document.getElementById("loginEmail").value;
    const password=document.getElementById("loginPassword").value;
    const users=JSON.parse(localStorage.getItem("Users"));
    // const loggedUser=document.querySelector(".loggedUser");

    

    for(let i=0;i<users.length;i++){
        if(users[i].email==email && users[i].password==password){
            userExists=true;
            iterator=i;
            username=users[i].username;
            localStorage.setItem("logInfo", username);
            break;
        }
    }

    if(userExists){
       Validate();
        
    }
    else{
        alert("Invalid email or password!");
    }
};
document.addEventListener("DOMContentLoaded",()=>{
      
      document.getElementById("loginBtn").addEventListener("click",validateLogin);
      
    
});





function Validate(){
        alert(`Welcome ${username}`);
        wrapper.classList.remove("active-login");
        document.querySelector(".btnLogin-popup").classList.remove("logged");
        document.body.style.overflow="visible";
        document.body.removeChild(overlay);
        setTimeout( function()
        {   document.querySelector(".loggedUser").classList.add("logged");
            document.getElementById("userLabel").textContent=`${username}`;
        },300);
        
}
//validation
function validateEmail(email) {
    // Email should follow the standard email format
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  function validatePassword(password) {
    // Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
  }
  function validateUsername(username) {
    // Username should contain only alphanumeric characters (letters and numbers) and underscore
    var regex = /^[a-zA-Z0-9_]+$/;
    return regex.test(username);
  }
      

//shop
//cart
let cartIcon=document.querySelector(".cartIcon");
var cart=document.querySelector(".cart");
let closeCart=document.getElementById("closeCart");
let modal=document.querySelector(".modal");
let closeModal=document.getElementById("closeModal");
let loginModal=document.getElementById("loginModal");

cartIcon.addEventListener("click",()=>{
    cart.classList.add("active");
})
closeCart.addEventListener("click",()=>{
    cart.classList.remove("active");
})

if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready();
}

function ready(){
    //removing item form cart
    var removeCartButtons=document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons);
    for(var i=0;i<removeCartButtons.length;i++){
        var button=removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }
    //if quantity is changed
    var quantityInputs=document.getElementsByClassName("cart-quantity");
    for(var i=0;i<quantityInputs.length;i++){
        var input= quantityInputs[i];
        input.addEventListener("change", quantityChanged)
    }
    //add to cart
    var addCart=document.getElementsByClassName("add-cart")
    for(var i=0;i<addCart.length;i++){
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
    //purchase
    document.getElementsByClassName("btnBuy")[0].addEventListener("click", buyBtnClicked);
}
function removeCartItem(event){
    var buttonClicked=event.target;
    buttonClicked.parentElement.remove();
    uptdateTotal();

}
function quantityChanged(event){
    var input=event.target;
    if(isNaN(input.value) || input.value<=0){
        input.value=1;
    }
    uptdateTotal();
}

//update total
function uptdateTotal(){
    var cartContent=document.getElementsByClassName("cart-content")[0];
    var cartBoxes=cartContent.getElementsByClassName("cart-box");
    var total=0;
    for(var i=0;i<cartBoxes.length;i++){
        var cartBox=cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var price= parseFloat(priceElement.innerText.replace("$", ""))
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var quantity=quantityElement.value;
        total = total + (price*quantity);
    }
        total=Math.round(total *100)/100;
        document.getElementsByClassName("total-price")[0].innerText="$"+total;
    
}
loginModal.addEventListener("click",()=>{
    modal.classList.remove("active");
    wrapper.classList.add("active-login");
    document.body.style.overflow="hidden";
    document.body.appendChild(overlay);
    window.scrollTo(0,0);
})

closeModal.addEventListener("click",()=>{
    modal.classList.remove("active");
})

function addCartClicked(event){
    if(document.querySelector(".loggedUser").classList.contains("logged")){
        var button = event.target;
    var shopProducts = button.parentElement;
    var title=shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price=shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg=shopProducts.getElementsByClassName("product-img")[0].src;

    addProductToCart(title, price, productImg);
    uptdateTotal();


    console.log(title);
    }else{
        modal.classList.add("active");
        
    }
    
}

function addProductToCart(title, price, productImg){
    var cartShopBox=document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems=document.getElementsByClassName("cart-content")[0];
    var cartItemsNames= cartItems.getElementsByClassName("cart-product-title");
    for(var i=0;i<cartItemsNames.length;i++){
        if(cartItemsNames[i].innerHTML==title){ 
            alert("You have already added this item to your cart");
            return;
        }
       

    }
var cartBoxContent = `
    <img src="${productImg}" class="cart-img">
    <div class="detail-box">
        <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
    <ion-icon class="cart-remove" name="trash"></ion-icon>`;
cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName("cart-remove")[0]
           .addEventListener("click", removeCartItem);
cartShopBox.getElementsByClassName("cart-quantity")[0]
           .addEventListener("change", quantityChanged);

}

function buyBtnClicked(event){
    
    var cartContent=document.getElementsByClassName("cart-content")[0];
    while(cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    uptdateTotal();
    window.location.href="payment.html";
 


}
let logOut=document.querySelector(".logOut");

let userLabel=document.getElementById("userLabel");
let userIcon=document.querySelector(".userIcon")


userLabel.addEventListener("mousemove",function(){
    logOut.classList.add("active");
  
    
});

userLabel.addEventListener("mouseleave",function(){
    setTimeout(function(){logOut.classList.remove("active")},500) ;
    
});
userIcon.addEventListener("mousemove",function(){
    logOut.classList.add("active");
    
});

userIcon.addEventListener("mouseleave",function(){
    setTimeout(function(){logOut.classList.remove("active")},500) ;
    
});

logOut.addEventListener("mousemove",function(){
    logOut.classList.add("active2");
   
});
logOut.addEventListener("mouseleave",function(){
    logOut.classList.remove("active2");
    
});


  