/* AXIOS INITIATIVE - Application Router & State Manager */

window.currentLanguage = 'en';

function setLanguage(lang) {
  if (!translations[lang]) return;
  window.currentLanguage = lang;
  
  // Update toggle buttons active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

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

function navigateTo(pageId) {
  const views = document.querySelectorAll('.page-view');
  const navLinks = document.querySelectorAll('.nav-link');

  views.forEach(view => {
    if (view.id === pageId) {
      view.classList.add('active-view');
    } else {
      view.classList.remove('active-view');
    }
  });

  navLinks.forEach(link => {
    if (link.dataset.page === pageId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initApp() {
  // Navigation listener
  document.querySelectorAll('[data-page]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const page = el.dataset.page;
      if (page) navigateTo(page);
    });
  });

  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
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

  // Initiatives Submenu items click listener
  document.querySelectorAll('.submenu-item').forEach((item, index) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.nav-dropdown-wrapper').forEach(w => w.classList.remove('active'));
      if (index === 0) {
        navigateTo('initiative-health');
      } else if (index === 1) {
        navigateTo('initiative-theological');
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

  // Initialize with English
  setLanguage('en');
  navigateTo('home');
}

document.addEventListener('DOMContentLoaded', initApp);
