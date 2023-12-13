// Menangani peristiwa apabila button pada tampilan hp saat ditekan

var menuIcon = document.getElementById('menu-icon')
var menuList = document.getElementById('menu-list')
var menuIconX = document.getElementById('menu-iconX')

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle ('hidden');
    menuIconX.classList.toggle ('hidden');
    menuList.classList.toggle ('hidden');
});

menuIconX.addEventListener('click', () => {
    menuIcon.classList.toggle ('hidden');
    menuList.classList.toggle ('hidden');
    menuIconX.classList.toggle ('hidden');
});

// Menangani tombol sosial media

$(document).ready(function () {
    // Menangani peristiwa klik pada tombol "Social Media"
    $("#sosmed").click(function () {
        // Mengubah status tampilan dropdown
        $("#drop-down-sosmed").toggleClass("active");
    });

    // Menangani peristiwa klik di luar dropdown untuk menutupnya
    $(document).click(function (e) {
        if (!$(e.target).closest('.dropdown').length) {
            // Menutup dropdown jika diklik di luar area dropdown
            $("#drop-down-sosmed").removeClass("active");
        }
    });
});

$(document).ready(function () {

    // Menangani klik pada menu navbar untuk scroll halus
    $(".nav-item a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            // Simpan hash
            var hash = this.hash;

            // Animasi scroll halus
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1500, 'easeInOutExpo'); //  kecepatan dan jenis animasi 
        }
    });

    $(".nav-link").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            // Simpan hash
            var hash = this.hash;

            // Animasi scroll halus
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1500, 'easeInOutExpo'); //  kecepatan dan jenis animasi 
        }
    });
});

// Untuk mengirim ke WhatsaApp

function sendToWhatsApp() {
    var nomorWhatsApp = '6281615650796';
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var nomorHp = document.getElementById('nomorHp').value;
    var jumlahPesanan = document.getElementById('jumlahPesanan').value;
    var namaPesanan = document.getElementById('namaPesanan').value;
    var alamat = document.getElementById('alamat').value;

    if (!nama || !email || !nomorHp || !jumlahPesanan || !namaPesanan || !alamat) {
        alert('Harap isi semua form sebelum mengirim pesan.');
        return;
    }

    // tautan WhatsApp 
    var linkWhatsApp = 'https://wa.me/' + nomorWhatsApp +
                       '?text=Nama:%20' + encodeURIComponent(nama) +
                       '%0AEmail:%20' + encodeURIComponent(email) +
                       '%0ANomor%20HP:%20' + encodeURIComponent(nomorHp) +
                       '%0AJumlah%20Pesanan:%20' + encodeURIComponent(jumlahPesanan) +
                       '%0ANama%20Pesanan:%20' + encodeURIComponent(namaPesanan) +
                       '%0AAlamat:%20' + encodeURIComponent(alamat);

    window.open(linkWhatsApp, '_blank');
}

var myForm = document.getElementById('myForm').value;

myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    sendToWhatsApp();
    myForm.reset();
});


document.addEventListener("DOMContentLoaded", function() {
    var animatedElements = document.querySelectorAll(".animate__animated");

    function checkVisibility() {
        animatedElements.forEach(function(element) {
            if (isElementInViewport(element)) {
                element.classList.add("animate__fadeInUp");
            }
        });
    }

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Panggil checkVisibility saat halaman dimuat dan saat digulir
    checkVisibility();
    window.addEventListener("scroll", checkVisibility());
});
