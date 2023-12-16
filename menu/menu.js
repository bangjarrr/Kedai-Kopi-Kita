// MEnu yang di tekan

document.addEventListener("DOMContentLoaded", function() {
    const foodButton = document.getElementById("foodButton");
    const drinkButton = document.getElementById("drinkButton");
    const orderButton = document.getElementById("orderButton")
    const foodContent = document.getElementById("foodContent");
    const drinkContent = document.getElementById("drinkContent");
    const orderContent = document.getElementById("orderContent")
    const content = document.getElementById("content");
    const orderNowButtons = document.querySelectorAll(".button");

    // Tampilkan konten makanan secara default
    showFoodContent();

    foodButton.addEventListener("click", function() {
        showFoodContent();
    });

    drinkButton.addEventListener("click", function() {
        showDrinkContent();
    });

    orderButton.addEventListener("click", function(){
        showOrderContent();
    });

    orderNowButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            showOrderContent();
        });
    });

    function showFoodContent() {
        content.style.transform = "translateY(0)";
        foodContent.style.display = "block";
        drinkContent.style.display = "none";
        orderContent.style.display = "none";
    }
    
    function showDrinkContent() {
        content.style.transform = "translateY(-0%)";
        foodContent.style.display = "none";
        drinkContent.style.display = "block";
        orderContent.style.display = "none";
    }

    function showOrderContent() {
        content.style.transform = "translateY(0)";
        foodContent.style.display = "none";
        drinkContent.style.display = "none";
        orderContent.style.display = "block";
    }

});

// Menu yang di geser

// document.addEventListener('DOMContentLoaded', function () {
//     const content = document.getElementById('content');
//     let currentIndex = 0;

//     // Mengatur event listener untuk mendeteksi perubahan slide
//     content.addEventListener('touchstart', handleTouchStart, false);
//     content.addEventListener('touchmove', handleTouchMove, false);

//         // Fungsi untuk menangani peristiwa pergeseran
//     function handleTouchMove(event) {
//         if (!xDown) {
//             return;
//         }

//         let xUp = event.touches[0].clientX;
//         let xDiff = xDown - xUp;

//             // Menentukan arah pergeseran
//         if (xDiff > 0) {
//                 // Geser ke kiri
//             currentIndex = (currentIndex + 1) % 3; 
//         } else {
//                 // Geser ke kanan
//             currentIndex = (currentIndex - 1 + 3) % 3; 
//         }

//             // Menampilkan konten yang sesuai
//         showContent();
//         xDown = null;
//     }

//         // Fungsi untuk menampilkan konten yang sesuai berdasarkan indeks
//     function showContent() {
//         const foodContent = document.getElementById('foodContent');
//         const drinkContent = document.getElementById('drinkContent');
//         const orderContent = document.getElementById('orderContent');

//         switch (currentIndex) {
//             case 0:
//                 showFoodContent();
//                     break;
//                 case 1:
//                     showDrinkContent();
//                     break;
//                 case 2:
//                     showOrderContent();
//                     break;
//             }
//         }

//         // Fungsi untuk menampilkan konten makanan
//     function showFoodContent() {
//         content.style.transform = 'translateY(0)';
//         foodContent.style.display = 'block';
//         drinkContent.style.display = 'none';
//         orderContent.style.display = 'none';
//     }

//         // Fungsi untuk menampilkan konten minuman
//     function showDrinkContent() {
//         content.style.transform = 'translateY(0)';
//         foodContent.style.display = 'none';
//         drinkContent.style.display = 'block';
//         orderContent.style.display = 'none';
//     }

//         // Fungsi untuk menampilkan konten Order Now
//     function showOrderContent() {
//         content.style.transform = 'translateY(0)';
//         foodContent.style.display = 'none';
//         drinkContent.style.display = 'none';
//         orderContent.style.display = 'block';
//     }
// });

// Untuk mengirim ke WhatsaApp


function sendToWhatsApp() {
    
    try {
        var nomorWhatsApp = '6281615650796';
        var nama = document.getElementById('nama').value;
        var email = document.getElementById('email').value;
        var nomorHp = document.getElementById('nomorHp').value;
        var jumlahPesanan = document.getElementById('jumlahPesanan').value;
        var namaPesanan = document.getElementById('namaPesanan').value;
        var alamat = document.getElementById('alamat').value;
        var keterangan = document.getElementById('keterangan').value;

        if (!nama || !email || !nomorHp || !jumlahPesanan || !namaPesanan || !alamat || !keterangan) {
            alert('Harap isi semua form sebelum mengirim pesan.');
            return;
        }

        // Daftar nama pesanan yang valid
        var namaPesananValid = [
            'kopi hitam',
            'cappucino',
            'saos',
            'burger',
        ];

        // Mengecek apakah namaPesanan sesuai dengan opsi yang valid
        var namaPesananNormalized = namaPesanan.toLowerCase().replace(/\s/g, '');

        if (!namaPesananValid.some(validOption => validOption.toLowerCase().replace(/\s/g, '') === namaPesananNormalized)) {
            throw new Error('Nama Pesanan tidak valid. Silakan pilih menu lainnya.');
        }

        // tautan WhatsApp 
        var linkWhatsApp = 'https://wa.me/' + nomorWhatsApp +
                           '?text=Nama : %20' + encodeURIComponent(nama) +
                           '%0AEmail : %20' + encodeURIComponent(email) +
                           '%0ANomor%20 HP : %20' + encodeURIComponent(nomorHp) +
                           '%0AJumlah%20 Pesanan : %20' + encodeURIComponent(jumlahPesanan) +
                           '%0ANama%20 Pesanan : %20' + encodeURIComponent(namaPesanan) +
                           '%0AAlamat : %20' + encodeURIComponent(alamat) +
                           '%0Aketerangan : %20' + encodeURIComponent(keterangan);

        window.open(linkWhatsApp, '_blank');
    } catch (error) {
        // Menangkap dan menanggapi kesalahan
        alert('Terjadi kesalahan: ' + error.message);
    }
}

var myForm = document.getElementById('myForm');
myForm.addEventListener("submit", function(event) {
    event.preventDefault();
    sendToWhatsApp();
    myForm.reset();
});