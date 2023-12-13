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
        content.style.transform = "translateX(0)";
        foodContent.style.display = "block";
        drinkContent.style.display = "none";
        orderContent.style.display = "none";
    }
    
    function showDrinkContent() {
        content.style.transform = "translateX(-0%)";
        foodContent.style.display = "none";
        drinkContent.style.display = "block";
        orderContent.style.display = "none";
    }

    function showOrderContent() {
        content.style.transform = "translateX(0)";
        foodContent.style.display = "none";
        drinkContent.style.display = "none";
        orderContent.style.display = "block";
    }

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

var myForm = document.getElementById('myForm');
myForm.addEventListener("submit", function(event) {
    event.preventDefault();
    sendToWhatsApp();
    myForm.reset();
});

