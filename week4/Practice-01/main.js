const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirm_password = document.getElementById('confirm-password')
const btn_submit = document.getElementById('submit')
const showtext = document.querySelector('p')

btn_submit.addEventListener("click", (e) => {
    e.preventDefault()

    let showmiss = ''
    if(!username.value === null || !email.value === null || !password.value === null || !confirm_password.value === null) {
        showmiss 
    }
})