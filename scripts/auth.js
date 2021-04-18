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
}