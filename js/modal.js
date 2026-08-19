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
        ? "Tu solicitud de apoyo confidencial ha sido enviada con éxito. Nuestro equipo se pondrá en contacto contigo a la brevedad."
        : "Your confidential support request has been submitted successfully. Our team will reach out to you shortly.";
      alert(alertMsg);
      helpRequestForm.reset();
      if (helpModal) {
        helpModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Team Member Biography Modal Handling
  const teamBioModal = document.getElementById('teamBioModal');
  const closeTeamBioModalBtn = document.getElementById('closeTeamBioModalBtn');

  const teamMembersData = {
    "1": {
      name: "Pr. Lielson Penido",
      title: "Fundador & Director Ejecutivo de AXIOS Initiative",
      badge: "Fundador & Director Ejecutivo",
      photo: "assets/team-president.jpg",
      quote: "“Porque quienes sirven… son dignos.”",
      bio: `<p>La historia de Lielson Penido ha estado profundamente marcada por la gracia de Dios, la familia y el ministerio. Adoptado desde pequeño y nacido en el contexto de una familia pastoral, creció en Brasil hasta los 12 años y después se mudó con sus padres a Ecuador como misioneros de la Convención Bautista de Brasil, donde comenzó a formarse su amor por Dios, la Iglesia y el servicio cristiano.</p>
<p>Más tarde vivió en Nueva York, donde estudió Ciencias de la Computación durante dos años, antes de responder al llamado de Dios al ministerio y continuar su formación en el Seminario Bautista del Sur de Brasil, en Río de Janeiro, donde fue formado teológicamente para el ministerio pastoral. También realizó una maestría de dos años en Dirección Orquestal, integrando su formación musical con su llamado al servicio en la adoración, y obtuvo un certificado en evangelismo en la Escuela de Billy Graham, fortaleciendo su compromiso con la proclamación del evangelio.</p>
<p>En 1995 contrajo matrimonio con Verónica Penido, su compañera de vida y ministerio. Juntos son padres de dos hijos, Victoria y Lukas, y han dedicado gran parte de su vida a servir a la Iglesia en diferentes culturas y contextos.</p>
<p>A lo largo de casi tres décadas de ministerio, Lielson ha servido como pastor de adoración en Tampa y Lake Worth, Florida; plantador de iglesias; misionero durante diez años en Europa; y capellán empresarial. Actualmente también sirve como Director de Lenguas de la Asociación Bautista de Tampa Bay, trabajando de cerca con pastores, iglesias y líderes de diferentes contextos culturales.</p>
<p>Haber crecido en una familia pastoral, formar su propia familia en medio del ministerio y caminar durante décadas al lado de pastores en diferentes países le ha permitido conocer tanto la belleza del llamado como el peso que muchas veces se lleva en silencio.</p>
<p>De esa historia, experiencia y profunda carga por el bienestar de los pastores y sus familias nace su compromiso con AXIOS Initiative: ayudar a cuidar, fortalecer y honrar a quienes han dedicado sus vidas a cuidar de otros.</p>`
    },
    "2": {
      name: "Pr. Francisco Juarbe, ThD",
      title: "Director de Cuidado Pastoral",
      badge: "Vicepresidente",
      photo: "assets/team-care.jpg",
      quote: "",
      bio: `<p>Francisco Juarbe, ThD, es pastor, mentor y educador cristiano con amplia experiencia en cuidado pastoral, plantación de iglesias y formación de líderes en diversos contextos multiculturales.</p>
<p>Sirve en AXIOS Initiative acompañando y fortaleciendo a pastores y líderes, brindando asesoría confidencial, restauración espiritual y herramientas estratégicas para la sostenibilidad del ministerio eclesial.</p>`
    },
    "3": {
      name: "Pr. Mario Figueroa",
      title: "Board Secretary",
      badge: "Board of Directors",
      photo: "assets/team-theology.jpg",
      quote: "",
      bio: `<p>Mario ha estado sirviendo como pastor en Tampa desde 2020. En 2023, con un fuerte sentido de llamado a establecer una iglesia multicultural para mantener la unidad generacional en familias bilingües, dejó su carrera de más de 17 años en la industria de la salud para asistir al Sovereign Grace Churches Pastors College en Louisville, KY. Mario luego regresó a Florida para plantar Vine Church Tampa.</p>
<p>Mario y su esposa, Diana, nacieron en Puerto Rico y se salvaron durante su juventud adulta. Han estado felizmente casados desde 2011 y tienen dos hijas, Anasofía y Mila. Como familia, disfrutan hablando, haciendo bromas, así como jugando juegos de mesa y noches de cine (especialmente películas de superhéroes).</p>`
    },
    "4": {
      name: "Pr. David Endara",
      title: "Board Treasurer",
      badge: "Board of Directors",
      photo: "assets/team-operations.jpg",
      quote: "",
      bio: `<p>El Pr. David Endara es pastor y miembro de la Junta Directiva de AXIOS Initiative, supervisando la gestión, administración y transparencia financiera de la organización.</p>
<p>Con una sólida trayectoria en el liderazgo pastoral y la gobernanza institucional, el pastor David trabaja arduamente para velar por la integridad fiduciaria 501(c)(3) y asegurar que los fondos de apoyo lleguen de forma efectiva a las familias pastorales que más lo necesitan.</p>`
    }
  };

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.open-team-modal');
    if (btn) {
      e.preventDefault();
      const memberId = btn.dataset.member;
      const data = teamMembersData[memberId];
      if (data && teamBioModal) {
        document.getElementById('modalMemberPhoto').src = data.photo;
        document.getElementById('modalMemberPhoto').alt = data.name;
        
        const topBadge = document.getElementById('modalTopBadge');
        if (topBadge) topBadge.textContent = data.badge;

        document.getElementById('modalMemberName').textContent = data.name;
        document.getElementById('modalMemberBio').innerHTML = data.bio;
        
        const quoteBox = document.getElementById('modalMemberQuoteBox');
        const quoteElem = document.getElementById('modalMemberQuote');
        if (data.quote) {
          quoteElem.textContent = data.quote;
          quoteBox.style.display = 'block';
        } else {
          quoteBox.style.display = 'none';
        }

        teamBioModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }
  });

  if (closeTeamBioModalBtn && teamBioModal) {
    closeTeamBioModalBtn.addEventListener('click', () => {
      teamBioModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (teamBioModal) {
    teamBioModal.addEventListener('click', (e) => {
      if (e.target === teamBioModal) {
        teamBioModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // History Modal Handling (Nuestra Historia)
  const historyModal = document.getElementById('historyModal');
  const openHistoryModalBtn = document.getElementById('openHistoryModalBtn');
  const closeHistoryModalBtn = document.getElementById('closeHistoryModalBtn');

  if (openHistoryModalBtn && historyModal) {
    openHistoryModalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      historyModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeHistoryModalBtn && historyModal) {
    closeHistoryModalBtn.addEventListener('click', () => {
      historyModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (historyModal) {
    historyModal.addEventListener('click', (e) => {
      if (e.target === historyModal) {
        historyModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', initModalAndForms);
