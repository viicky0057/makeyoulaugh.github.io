let menu = document.querySelector(".menu");
let CloseMenu = document.querySelector(".CloseMenu");
let OpenMeu = document.querySelector(".openMenu");
let body = document.querySelector("body");
let Bg_Cover = document.getElementById('universalCover')

OpenMeu.addEventListener('click', () => {
    menu.classList.add("translate-x-[0]");
    menu.classList.remove("translate-x-[+300px]");
    body.style.overflowY = "hidden";
    Bg_Cover.classList.remove('hidden')

    CloseMenu.addEventListener('click', () => {
        menu.classList.add("translate-x-[+300px]");
        body.style.overflowY = "auto";
        Bg_Cover.classList.add('hidden');
    });
    Bg_Cover.addEventListener('click', () => {
        menu.classList.add("translate-x-[+300px]");
        body.style.overflowY = "auto";
        Bg_Cover.classList.add('hidden');
    });
    Login();
    SignUp();
});

if (innerWidth > 1024) {
    document.write("Sorry Website will be ready soon for desktop also");
    body.style.color = "red";
    body.style.textAlign = "center";
    body.style.fontSize = "20px";
}





function Login() {
    let LoginBtn = document.querySelector('.loginbtn');
    let LoginForm = document.querySelector(".login");
    let CloseLoginForm = document.querySelector('.cancel-Login');
    let Input_of_Login = document.getElementById('LoginForm')

    LoginBtn.addEventListener('click', () => {
        LoginForm.classList.replace('scale-0', 'scale-1');
        let Temp_Bg = document.createElement('div');
        menu.classList.replace('translate-x-[0]', 'translate-x-[+300px]');
        Temp_Bg.setAttribute('class', 'h-screen w-screen -z-1 bg-black-rgb fixed top-0');
        body.appendChild(Temp_Bg);
        CloseLoginForm.addEventListener('click', () => {
            LoginForm.classList.replace('scale-1', 'scale-0');
            menu.classList.replace('translate-x-[+300px]', 'translate-x-[0]');
            body.removeChild(Temp_Bg);

        });
    });
    Input_of_Login.addEventListener('submit', (e) => {
        e.preventDefault();
        let username = document.querySelector('.L-username')
        let tel = document.querySelector('.L-tel')
        let password = document.querySelector('.L-password')

    });

};

function SignUp() {
    let SignUpbtn = document.querySelector('.signUp');
    let SignUpForm = document.querySelector('.signupForm');
    let Cancelbtn = document.querySelector('.cancel-signup');

    SignUpbtn.addEventListener('click', () => {
        SignUpForm.classList.replace('scale-0', 'scale-1');
        let Temp_Bg = document.createElement('div');
        menu.classList.replace('translate-x-[0]', 'translate-x-[+300px]');
        Temp_Bg.setAttribute('class', 'h-screen w-screen -z-1 bg-black-rgb fixed top-0');
        body.appendChild(Temp_Bg);

        Cancelbtn.addEventListener('click', () => {
            SignUpForm.classList.replace('scale-1', 'scale-0');
            menu.classList.replace('translate-x-[+300px]', 'translate-x-[0]');
            body.removeChild(Temp_Bg);
        });

        let Inputs_of_SignUp = document.querySelector('#SignupForm');
        Inputs_of_SignUp.addEventListener('submit', (e) => {
            e.preventDefault();
            let username = document.querySelector('.S-username')
            let tel = document.querySelector('.S-tel')
            let email = document.querySelector('.S-email')
            let password = document.querySelector('.S-password')
            username.value = ""
            tel.value = ""
            email.value = ""
            password.value = ""
            SignUpForm.classList.replace('scale-1', 'scale-0');
            menu.classList.replace('translate-x-[+300px]', 'translate-x-[0]');
            body.removeChild(Temp_Bg);

        });
    });
};