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
            }, 800, 'easeInOutExpo'); //  kecepatan dan jenis animasi 
        }
    });
});

function sendToWhatsApp() {
    var nomorWhatsApp = '6281615650796';
    var nama = document.getElementById('nama').value;
    var pesan = document.getElementById('email').value;
    var nomorHp = document.getElementById('nomorHp').value;
    var jumlahPesanan = document.getElementById('jumlahPesanan').value;
    var namaPesanan = document.getElementById('namaPesanan').value;
    var alamat = document.getElementById('alamat').value;

    // tautan WhatsApp 
    var linkWhatsApp = 'https://wa.me/' + nomorWhatsApp +
                       '?text=Nama:%20' + encodeURIComponent(nama) +
                       '%0AEmail:%20' + encodeURIComponent(pesan) +
                       '%0ANomor%20HP:%20' + encodeURIComponent(nomorHp) +
                       '%0AJumlah%20Pesanan:%20' + encodeURIComponent(jumlahPesanan) +
                       '%0ANama%20Pesanan:%20' + encodeURIComponent(namaPesanan) +
                       '%0AAlamat:%20' + encodeURIComponent(alamat);

    window.open(linkWhatsApp, '_blank');
}

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    sendToWhatsApp();
});


