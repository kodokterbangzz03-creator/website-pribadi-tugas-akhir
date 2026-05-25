function goLogin() {
    window.location.href = "login/index.html";
}

function keluar() {
    localStorage.removeItem("username");
    location.reload();
}

window.goLogin = goLogin;
window.keluar = keluar;

document.addEventListener("DOMContentLoaded", function () {
    const user = localStorage.getItem("username");

    if (user) {
        document.getElementById("userInfo").innerText = "Halo, " + user;

        document.getElementById("authArea").innerHTML = `
            <button onclick="keluar()" class="nav-link tm-nav-link">Keluar</button>
        `;
    }
});
