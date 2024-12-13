document.addEventListener("DOMContentLoaded", ()=>{
    signUpButton.addEventlIstener("click",async ()=>{
        const result = await signUp(
            username.value,
            fullName.value,
            password.value,
        );
        if("Conflict")
    })
})