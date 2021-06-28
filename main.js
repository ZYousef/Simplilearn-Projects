//login page



let Remember = document.getElementById('Remember');


if (window.location.pathname.split("/").pop() == 'index.html') {
    if (localStorage.getItem('Keep') == 1) {
        document.getElementById('email').value = localStorage.getItem('email');
        document.getElementById('pswd').value = localStorage.getItem('pswd');
    } else if (localStorage.getItem('Keep') == 0) {
        document.getElementById('email').value = "";
        document.getElementById('pswd').value = "";
    }
    document.getElementById('logBtn').addEventListener('click', () => { login() })
}


function login() {

    Recognize();
    if (document.getElementById('email').value == 'admin' && document.getElementById('pswd').value == 'admin') {
        localStorage.setItem('isUserAdmin', 1);
        window.location.assign('home.html');
    } else {
        localStorage.setItem('isUserAdmin', 0);
        window.location.assign('home.html');
    }

}

function Recognize() {
    if (Remember.checked == true) {
        localStorage.setItem('email', document.getElementById('email').value);
        localStorage.setItem('pswd', document.getElementById('pswd').value);
        localStorage.setItem('Keep', 1)
    } else {
        localStorage.setItem('Keep', 0)
    }

}

function expandTextarea(id) {
    document.getElementById(id).addEventListener('keyup', function() {
        this.style.overflow = 'hidden';
        this.style.height = 0;
        this.style.height = this.scrollHeight + 'px';
        window.scrollTo(0, document.body.scrollHeight);
    }, false);
}

expandTextarea('txtarea');