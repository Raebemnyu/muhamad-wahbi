// Fungsi untuk menampilkan form registrasi & menyembunyikan login
function showRegister() {
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("registerForm").classList.remove("hidden");
}

// Fungsi untuk menampilkan form login & menyembunyikan registrasi
function showLogin() {
  document.getElementById("registerForm").classList.add("hidden");
  document.getElementById("loginForm").classList.remove("hidden");
}

// Pastikan DOM telah dimuat sebelum menambahkan event listener
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#registerForm form").addEventListener("submit", function(event) {
    event.preventDefault();

    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      alert("Password dan Konfirmasi Password tidak cocok!");
      return;
    }

    let user = { nama: nama, email: email, password: password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Registrasi berhasil! Silakan login.");
    showLogin();
  });

  document.querySelector("#loginForm form").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      alert("Login berhasil! Selamat datang, " + storedUser.nama);
      sessionStorage.setItem("loggedInUser", JSON.stringify(storedUser));
      window.location.href = "dashboard.html";
    } else {
      alert("Email atau password salah!");
      document.querySelector('.menu a[href="profil.html"]').addEventListener('click', function() {
  window.location.href = "profil.html";
});

    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});
