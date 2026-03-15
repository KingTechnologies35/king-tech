function openProduct(type) {
    const modal = document.getElementById('productModal');
    const preview = document.getElementById('modalPreview');
    const title = document.getElementById('modalTitle');
    const selectionArea = document.getElementById('selectionArea');

    if (type === 'wallet') {
        preview.src = 'wallet-brown.jpg';
        title.innerText = "Signature Wallet";
        selectionArea.innerHTML = `
            <div class="circle" style="background:#8B4513" onclick="changeStyle('wallet-brown.jpg')"></div>
            <div class="circle" style="background:#000" onclick="changeStyle('wallet-black.jpg')"></div>
        `;
    } else if (type === 'eink') {
        preview.src = 'e-ink1.jpg';
        title.innerText = "E-Ink Custom Case";
        selectionArea.innerHTML = '';
        for (let i = 1; i <= 5; i++) {
            selectionArea.innerHTML += `<div class="circle" style="background:#fff; color:#000" onclick="changeStyle('e-ink${i}.jpg')">${i}</div>`;
        }
    }
    modal.style.display = 'flex';
}

function changeStyle(src) {
    document.getElementById('modalPreview').src = src;
    if(src.includes('wallet')) document.getElementById('homeImg').src = src;
}

function showPayment() {
    document.getElementById('productModal').style.display = 'none';
    document.getElementById('paymentModal').style.display = 'flex';
    navigator.clipboard.writeText("YOUR_USDT_ADDRESS_HERE");
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
    document.getElementById('paymentModal').style.display = 'none';
}

function sendWhatsApp() {
    const item = document.getElementById('modalTitle').innerText;
    const style = document.getElementById('modalPreview').src.split('/').pop();
    const message = `Hello King! I paid USDT for ${item} (${style}). Confirming now!`;
    window.open(`https://wa.me/2519XXXXXXXX?text=${encodeURIComponent(message)}`, '_blank');
}