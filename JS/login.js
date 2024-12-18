document.addEventListener("DOMContentLoaded", (=>{
    loginButton.addEventListener("click",async ()=>{
        const result = await login(
            udername.value,
            password.value,
        );
    })
}))