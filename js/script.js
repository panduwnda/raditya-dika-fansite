// script.js

// Fungsi untuk menampilkan alert saat form berhasil dikirim
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Mencegah form untuk reload halaman
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;

      if (name && email) {
        alert("Formulir berhasil dikirim!\nNama: " + name + "\nEmail: " + email);
      } else {
        alert("Harap isi semua field yang diperlukan.");
      }
    });
  }
});

// Fungsi untuk mengubah warna header saat halaman di-scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.backgroundColor = "#ff1493"; // Ubah warna header saat di-scroll jadi pink tua
    header.style.transition = "background-color 0.3s"; // Tambah transisi
  } else {
    header.style.backgroundColor = "#ff69b4"; // Kembali ke warna pink terang awal
  }
});

// Fungsi untuk highlight baris tabel saat di-hover
document.addEventListener("DOMContentLoaded", function () {
  const rows = document.querySelectorAll("table tbody tr");

  rows.forEach((row) => {
    row.addEventListener("mouseenter", function () {
      row.style.backgroundColor = "#ffeeba"; // Ubah warna saat mouse di atas
    });

    row.addEventListener("mouseleave", function () {
      row.style.backgroundColor = ""; // Kembali ke warna asli
    });
  });
});

// Tambahkan animasi pada gambar Raditya Dika di halaman utama
document.addEventListener("DOMContentLoaded", function () {
  const image = document.querySelector("main img");
  if (image) {
    image.addEventListener("mouseenter", function () {
      image.style.transform = "scale(1.05)"; // Zoom in saat di hover
      image.style.transition = "transform 0.5s";
    });

    image.addEventListener("mouseleave", function () {
      image.style.transform = "scale(1)"; // Kembali ke ukuran asli
    });
  }
});
