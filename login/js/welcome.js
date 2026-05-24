document.addEventListener("DOMContentLoaded", function () {

    function masuk() {
        window.location.href = "login/index.html";
    }

    function keluar() {
        localStorage.removeItem("username");
        location.reload();
    }

    const user = localStorage.getItem("username");

    if (user) {
        document.getElementById("userInfo").innerText = "Halo, " + user;

        document.getElementById("authArea").innerHTML = `
            <button onclick="keluar()" class="nav-link tm-nav-link">Keluar</button>
        `;
    }

    window.goLogin = masuk;
    window.logout = keluar;

});
