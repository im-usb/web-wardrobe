let heroSection=document.getElementById("hero-section")
let siteOptions=document.getElementById("site-options")
let userBtn= document.getElementById("user-btn")
let SignUpPage= document.getElementById("signUp")
let signUpButton=document.getElementById("signUpBtn")
let signUpNameInput= document.getElementById("signUpNameInput")
let signUpMailInput= document.getElementById("signUpMailInput")
let signUpPassword=document.getElementById("signUpPassInput")
let signInPage=document.getElementById("signIn")
let signInNameInput= document.getElementById("signInNameInput")
let signIPassword= document.getElementById("signInPassInput")
let signInBtn=document.getElementById("signInBtn")
let loggedInUser = null;


userBtn.addEventListener("click",function(){
  SignUpPage.style.display="block"
  heroSection.style.display="none"
  siteOptions.style.display="none"
})


signUpButton.addEventListener("click", async function () {
  const sendingInfo = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: signUpNameInput.value,
      email: signUpMailInput.value,
      password: signUpPassword.value,
    }),
  };
  const infoFetch = await fetch("http://localhost:3000/register", sendingInfo);
  const infoFetchDone = await infoFetch.json();
  SignUpPage.style.display = "none";
  signInPage.style.display = "block";
});

signInBtn.addEventListener("click", async function () {
  const check = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username:  signInNameInput.value,
      password:  signIPassword.value,
    }),
  };
  const myFetch = await fetch("http://localhost:3000/login", check);
  if (myFetch.status === 200) {
    const loginFetchDone = await myFetch.json();
    loggedInUser = loginFetchDone;
    signInPage.style.display = "none";
      // show page with cart or product example;(main.style.display = "block";)
   // call getCart(); function 
  } else {
    alert("i don't know you");
  }
});