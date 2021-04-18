
const myModal =document.querySelectorAll('.modal')

async function signup(e){
    e.preventDefault()
    const email = document.querySelector('#signupemail')
    const password = document.querySelector('#signuppassword')
    // console.log(email.value, password.value)
    try{ const result =  await  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        console.log(result)
        M.toast({html:`Welcome ${ result.user.email}`, classes:"yellow"})
    }

catch(err){
    console.log(err)
    // alert(err.message)
    M.toast({html: err.message, classes:"red"})
        
}
email.value="";
password.value="";
M.Modal.getInstance(myModal[0]).close()
}

async function login(e){
    e.preventDefault()
    const email = document.querySelector('#loginemail')
    const password = document.querySelector('#loginpassword')
    // console.log(email.value, password.value)
    try{ const result =  await  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        console.log(result)
        M.toast({html:`Welcome ${ result.user.email}`, classes:"yellow"})
    }

catch(err){
    console.log(err)
    // alert(err.message)
    M.toast({html: err.message, classes:"red"})
        
}
email.value="";
password.value="";
M.Modal.getInstance(myModal[1]).close()
}

function logout(){
firebase.auth().signOut().then(console.log("successfullty logged out"))
}


const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    if (user) {
     console.log(user)
      // ...
    } else {
  console.log("user signed out from using on auth state chhange!!!")
  M.toast({html:"Logged Out" ,classes:"red"})
    }
  });

//   cleanup code require unsubscribe ()

async function loginWithGoogle(){
    try{   
         var provider = new firebase.auth.GoogleAuthProvider();
  const result =    await   firebase.auth()
.signInWithPopup(provider)
console.log(result
    )}
    catch(err){
        console.log(err)
    }

  
}
