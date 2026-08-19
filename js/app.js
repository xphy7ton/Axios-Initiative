/* AXIOS INITIATIVE - Application Router & State Manager */

window.currentLanguage = 'en';

function setLanguage(lang) {
  if (!translations[lang]) return;
  window.currentLanguage = lang;
  
  // Update toggle buttons active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update floating trigger label
  const langLabel = document.getElementById('currentLangLabel');
  if (langLabel) {
    langLabel.textContent = lang.toUpperCase();
  }

  // Apply translations to all DOM elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      const val = translations[lang][key];
      if (val.includes('<') && val.includes('>')) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    }
  });

  // Apply translations to all input/textarea elements with data-i18n-placeholder attribute
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // HTML lang attribute
  document.documentElement.lang = lang;
}

let scrollObserver = null;

function triggerEntranceAnimations(targetContainer = document) {
  const elements = targetContainer.querySelectorAll('.reveal-on-scroll, .reveal-left, .reveal-right, .reveal-scale');
  
  elements.forEach(el => {
    el.classList.remove('is-visible');
  });

  setTimeout(() => {
    if ('IntersectionObserver' in window) {
      if (!scrollObserver) {
        scrollObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            }
          });
        }, {
          threshold: 0.1,
          rootMargin: '0px 0px -20px 0px'
        });
      }

      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-visible');
        }
        scrollObserver.observe(el);
      });
    } else {
      elements.forEach(el => el.classList.add('is-visible'));
    }
  }, 40);
}

function navigateTo(pageId, updateHash = true) {
  const views = document.querySelectorAll('.page-view');
  const navLinks = document.querySelectorAll('.nav-link');

  let targetFound = false;
  views.forEach(view => {
    if (view.id === pageId) {
      view.classList.add('active-view');
      triggerEntranceAnimations(view);
      targetFound = true;
    } else {
      view.classList.remove('active-view');
    }
  });

  // Fallback to home if pageId doesn't exist
  if (!targetFound) {
    pageId = 'home';
    const homeView = document.getElementById('home');
    if (homeView) {
      homeView.classList.add('active-view');
      triggerEntranceAnimations(homeView);
    }
  }

  navLinks.forEach(link => {
    if (link.dataset.page === pageId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Close all navigation dropdown menus upon navigation
  document.querySelectorAll('.nav-dropdown-wrapper').forEach(wrapper => {
    wrapper.classList.remove('active');
  });

  if (updateHash) {
    if (pageId === 'home') {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    } else {
      window.location.hash = pageId;
    }
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initApp() {
  // Restore language from localStorage or browser default
  const savedLang = localStorage.getItem('axios_lang') || 'es';
  setLanguage(savedLang);

  // Initial Hash Routing
  const initialHash = window.location.hash.replace('#', '');
  if (initialHash) {
    navigateTo(initialHash, false);
  } else {
    navigateTo('home', false);
  }

  // Handle browser back / forward buttons and hash changes
  window.addEventListener('hashchange', () => {
    const currentHash = window.location.hash.replace('#', '');
    if (currentHash) {
      navigateTo(currentHash, false);
    } else {
      navigateTo('home', false);
    }
  });

  // Navigation listener
  document.querySelectorAll('[data-page]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const page = el.dataset.page;
      if (page) navigateTo(page);
    });
  });

  // Floating Language Widget Toggle
  const floatingWidget = document.getElementById('floatingLangWidget');
  const floatingTrigger = document.getElementById('floatingLangTrigger');

  if (floatingTrigger && floatingWidget) {
    floatingTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      floatingWidget.classList.toggle('active');
    });
  }

  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      setLanguage(lang);
      localStorage.setItem('axios_lang', lang);
      if (floatingWidget) floatingWidget.classList.remove('active');
    });
  });

  // Close floating lang popup when clicking outside
  document.addEventListener('click', (e) => {
    if (floatingWidget && !floatingWidget.contains(e.target)) {
      floatingWidget.classList.remove('active');
    }
  });

  // Header scroll effect
  const header = document.querySelector('.glass-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Dropdown click & toggle behavior for all dropdown wrappers
  document.querySelectorAll('.nav-dropdown-wrapper').forEach(wrapper => {
    const trigger = wrapper.querySelector('.dropdown-trigger');
    if (trigger) {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        document.querySelectorAll('.nav-dropdown-wrapper').forEach(w => {
          if (w !== wrapper) w.classList.remove('active');
        });
        
        wrapper.classList.toggle('active');
        if (trigger.dataset.page) {
          navigateTo(trigger.dataset.page);
        }
      });
    }
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    document.querySelectorAll('.nav-dropdown-wrapper').forEach(wrapper => {
      if (!wrapper.contains(e.target)) {
        wrapper.classList.remove('active');
      }
    });
  });

  // Initiative Cards Click Handlers
  const initCard1 = document.querySelector('#init-card-1');
  if (initCard1) {
    initCard1.style.cursor = 'pointer';
    initCard1.addEventListener('click', () => {
      navigateTo('initiative-health');
    });
  }

  const initCard2 = document.querySelector('#init-card-2');
  if (initCard2) {
    initCard2.style.cursor = 'pointer';
    initCard2.addEventListener('click', () => {
      navigateTo('initiative-theological');
    });
  }

  const initCard3 = document.querySelector('#init-card-3');
  if (initCard3) {
    initCard3.style.cursor = 'pointer';
    initCard3.addEventListener('click', () => {
      navigateTo('initiative-sponsorship');
    });
  }

  // Initiatives Submenu items click listener
  document.querySelectorAll('.submenu-item').forEach((item, index) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.nav-dropdown-wrapper').forEach(w => w.classList.remove('active'));
      if (index === 0) {
        navigateTo('initiative-health');
      } else if (index === 1) {
        navigateTo('initiative-theological');
      } else if (index === 2) {
        navigateTo('initiative-sponsorship');
      } else {
        navigateTo('program');
      }
    });
  });

  // Country item click handler
  document.querySelectorAll('.country-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const country = item.dataset.country;
      document.querySelectorAll('.nav-dropdown-wrapper').forEach(w => w.classList.remove('active'));
      if (country === 'Ecuador') {
        navigateTo('project-ecuador');
      } else {
        navigateTo('projects');
      }
    });
  });

  // Modals event listeners logic
  const historyModal = document.getElementById('historyModal');
  const openHistoryBtn = document.getElementById('openHistoryModalBtn');
  const closeHistoryBtn = document.getElementById('closeHistoryModalBtn');

  if (openHistoryBtn && historyModal) {
    openHistoryBtn.addEventListener('click', () => historyModal.classList.add('active'));
  }
  if (closeHistoryBtn && historyModal) {
    closeHistoryBtn.addEventListener('click', () => historyModal.classList.remove('active'));
  }
  if (historyModal) {
    historyModal.addEventListener('click', (e) => {
      if (e.target === historyModal) historyModal.classList.remove('active');
    });
  }

  // Adoption modal
  const adoptionModal = document.getElementById('adoptionModal');
  const closeAdoptionBtn = document.getElementById('closeAdoptionModalBtn');

  if (adoptionModal) {
    document.querySelectorAll('.trigger-adoption-modal').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        adoptionModal.classList.add('active');
      });
    });
    if (closeAdoptionBtn) {
      closeAdoptionBtn.addEventListener('click', () => adoptionModal.classList.remove('active'));
    }
    adoptionModal.addEventListener('click', (e) => {
      if (e.target === adoptionModal) adoptionModal.classList.remove('active');
    });
  }

  // Framework modal
  const frameworkModal = document.getElementById('frameworkModal');
  const closeFrameworkBtn = document.getElementById('closeFrameworkModalBtn');

  if (frameworkModal) {
    document.querySelectorAll('.trigger-framework-modal').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        frameworkModal.classList.add('active');
      });
    });
    if (closeFrameworkBtn) {
      closeFrameworkBtn.addEventListener('click', () => frameworkModal.classList.remove('active'));
    }
    frameworkModal.addEventListener('click', (e) => {
      if (e.target === frameworkModal) frameworkModal.classList.remove('active');
    });
  }

  // Generic helper for Cards 3 to 13 modals
  for (let i = 3; i <= 13; i++) {
    const modal = document.getElementById(`card${i}Modal`);
    const closeBtn = document.getElementById(`closeCard${i}ModalBtn`);
    if (modal) {
      document.querySelectorAll(`.trigger-card${i}-modal`).forEach(trigger => {
        trigger.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          modal.classList.add('active');
        });
      });
      if (closeBtn) {
        closeBtn.addEventListener('click', () => modal.classList.remove('active'));
      }
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', initApp);
