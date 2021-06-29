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


function ReadMore(id) {
    var btnText = document.getElementById(id);
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
        btnText.parentElement.parentElement.style.width = '300px'
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
        btnText.parentElement.parentElement.style.width = 'fit-content'
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

expandTextarea('txtcontent');

//Editor Storage
function submit() {
    let title = document.getElementById('blogTitle').value;
    let details = document.getElementById('txtcontent').value;
    let date = new Date();
    if (title == "" || details == "") {
        alert(`You have to fill both fields.`);
        return;
    }
    localStorage.setItem("blogTitle", title);
    localStorage.setItem("txtcontent", details);
    localStorage.setItem("date", date.toLocaleTimeString() + ',' + date.toDateString());
    localStorage.setItem("addedFromBlog", 1);

    alert(`Sucessful. Check Home page for "${title}"`)
    title.value = "";
    details.value = "";
}

if (window.location.pathname.split("/").pop() == 'blog.html') {
    document.getElementById('save').addEventListener('click', submit);

}