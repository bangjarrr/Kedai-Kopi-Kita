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

    $(".nav-link a").on('click', function (event) {
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

document.addEventListener("DOMContentLoaded", function() {
    // Ambil elemen-elemen yang ingin dianimasikan
    var animatedElements = document.querySelectorAll(".animate__animated");

    // Tambahkan kelas animasi saat halaman dimuat
    animatedElements.forEach(function(element) {
        element.classList.add("animate__fadeInDown");
    });
});