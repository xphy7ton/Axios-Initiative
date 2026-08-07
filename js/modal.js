/* AXIOS INITIATIVE - Modal & Form Handler */

function initModalAndForms() {
  const modalOverlay = document.getElementById('donationModal');
  const openModalBtns = document.querySelectorAll('.trigger-donation-modal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const amountBtns = document.querySelectorAll('.amount-btn');
  const customAmountInput = document.getElementById('customAmountInput');
  const submitDonationBtn = document.getElementById('submitDonationBtn');
  
  // Open modal
  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modal
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // Close on backdrop click
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Amount selection
  amountBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      amountBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      if (customAmountInput) customAmountInput.value = '';
    });
  });

  if (customAmountInput) {
    customAmountInput.addEventListener('input', () => {
      amountBtns.forEach(b => b.classList.remove('selected'));
    });
  }

  if (submitDonationBtn) {
    submitDonationBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentLang = window.currentLanguage || 'en';
      const selectedBtn = document.querySelector('.amount-btn.selected');
      const customVal = customAmountInput ? customAmountInput.value : '';
      const selectedAmount = selectedBtn ? selectedBtn.dataset.amount : customVal || '50';

      const alertMsg = currentLang === 'es' 
        ? `Gracias por tu deseo de bendecir al ministerio pastoral con una donación de $${selectedAmount}. Serás redirigido a la pasarela de donación 501(c)(3).`
        : `Thank you for your generosity in supporting pastoral families with a gift of $${selectedAmount}. You will be redirected to the secure 501(c)(3) portal.`;

      alert(alertMsg);
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // Contact Form Handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const currentLang = window.currentLanguage || 'en';
      const alertMsg = currentLang === 'es'
        ? "Tu mensaje confidencial ha sido recibido. Un representante de AXIOS INITIATIVE te contactará a la brevedad."
        : "Your confidential message has been received. A representative from AXIOS INITIATIVE will reach out to you shortly.";
      
      alert(alertMsg);
      contactForm.reset();
    });
  }

  // Help Modal Handling (Solicitar Ayuda)
  const helpModal = document.getElementById('helpModal');
  const openHelpBtns = document.querySelectorAll('.trigger-help-modal');
  const closeHelpModalBtn = document.getElementById('closeHelpModalBtn');
  const helpRequestForm = document.getElementById('helpRequestForm');

  openHelpBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (helpModal) {
        helpModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (closeHelpModalBtn && helpModal) {
    closeHelpModalBtn.addEventListener('click', () => {
      helpModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (helpModal) {
    helpModal.addEventListener('click', (e) => {
      if (e.target === helpModal) {
        helpModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  if (helpRequestForm) {
    helpRequestForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const currentLang = window.currentLanguage || 'en';
      const alertMsg = currentLang === 'es'
        ? "Tu solicitud de apoyo pastoral confidencial ha sido recibida exitosamente. Nuestro equipo se pondrá en contacto contigo de forma privada."
        : "Your confidential pastoral support request has been successfully submitted. Our team will contact you privately.";
      
      alert(alertMsg);
      if (helpModal) helpModal.classList.remove('active');
      document.body.style.overflow = '';
      helpRequestForm.reset();
    });
  }
}

document.addEventListener('DOMContentLoaded', initModalAndForms);
