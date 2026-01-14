const container = document.querySelector('.container');
const LoginLink = document.querySelector('.SignInLink');
const RegisterLink = document.querySelector('.SignUpLink');

if(RegisterLink) {
    RegisterLink.addEventListener('click', (e) =>{
        e.preventDefault();
        container.classList.add('active');
    });
}

if(LoginLink) {
    LoginLink.addEventListener('click', (e) => {
        e.preventDefault();
        container.classList.remove('active');
    });
}