
function openPremiumModal(resortName, price) {
    document.getElementById('premiumModalResort').textContent = resortName;
    document.getElementById('premiumModalPrice').textContent = price;
    
    document.getElementById('premiumModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closePremiumModal() {
    document.getElementById('premiumModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    
    setTimeout(() => {
        document.getElementById('premiumBookingForm').style.display = 'block';
        document.getElementById('premiumSuccess').style.display = 'none';
        document.querySelector('.premium-form-modal').reset();
    }, 500);
}

document.addEventListener('DOMContentLoaded', function() {
    // Модальное окно уже открыто по умолчанию, поэтому не нужно вызывать openPremiumModal
    
    document.querySelector('.premium-modal-close')?.addEventListener('click', closePremiumModal);
    
    document.getElementById('premiumModal')?.addEventListener('click', function(e) {
        if (e.target === this) {
            closePremiumModal();
        }
    });
    
    document.querySelector('.premium-form-modal')?.addEventListener('submit', function(e) {
        e.preventDefault();
        
        document.getElementById('premiumBookingForm').style.display = 'none';
        document.getElementById('premiumSuccess').style.display = 'block';
        
        console.log('Premium booking submitted');
    });
});
