//logo scale based on scroll
//let topScroll= window.pageYOffset;
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



const wrapper=document.querySelector(".wrapper");
const loginLink=document.querySelector(".login-link");
const registerLink=document.querySelector(".register-link");
const loginBtn=document.querySelector(".btnLogin-popup");
const iconClose=document.querySelector(".iconClose");
const signNow=document.getElementById("signNow");

signNow.addEventListener("click",()=>{
    wrapper.classList.add("active");
    wrapper.classList.add("active-login");
    document.body.style.overflow="hidden";
    document.body.appendChild(overlay);
    window.scrollTo(0,0);

})

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
    //hvhvh

})

iconClose.addEventListener("click",()=>{
    wrapper.classList.remove("active");
    wrapper.classList.remove("active-login");
    document.body.style.overflow="visible";
    document.body.removeChild(overlay);
})

// register & saving user imput

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

//SHOP
let cartIcon=document.querySelector(".cartIcon");
var cart=document.querySelector(".cart");

cartIcon.addEventListener("click",()=>{
    window.location.href="shop.html";
    cart.classList.add("active");
})

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







