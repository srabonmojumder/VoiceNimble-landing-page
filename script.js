/* ================================================================
   VOICE NIMBLE — Landing Page Interactions
   Scroll Reveals · Animated Counters · Mobile Menu · Header Scroll
   Cursor Glow · Smooth Anchors
   ================================================================ */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initThemeToggle();
    initHeader();
    initMobileMenu();
    initScrollReveal();
    initCounters();
    initSmoothAnchors();
    initCursorGlow();
    initWidgets();
    initBillingToggle();
    initUseCaseTabs();
  }

  /* ================================================================
     THEME TOGGLE — dark / light mode with localStorage persistence
     ================================================================ */
  function initThemeToggle() {
    var root = document.documentElement;
    var stored = localStorage.getItem('vnTheme');

    // Apply stored preference or default to dark
    if (stored === 'light') {
      root.setAttribute('data-theme', 'light');
    }

    // Bind both desktop and mobile toggles
    var toggles = [
      document.getElementById('themeToggle'),
      document.getElementById('themeToggleMobile')
    ];

    toggles.forEach(function (btn) {
      if (!btn) return;
      btn.addEventListener('click', function () {
        var current = root.getAttribute('data-theme');
        var next = current === 'light' ? 'dark' : 'light';

        if (next === 'dark') {
          root.removeAttribute('data-theme');
        } else {
          root.setAttribute('data-theme', 'light');
        }

        localStorage.setItem('vnTheme', next);
      });
    });
  }

  /* ================================================================
     HEADER — scrolled state
     ================================================================ */
  function initHeader() {
    var header = document.querySelector('.header');
    if (!header) return;

    function onScroll() {
      header.classList.toggle('scrolled', window.scrollY > 50);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ================================================================
     MOBILE MENU — burger toggle + close on link click
     ================================================================ */
  function initMobileMenu() {
    var burger = document.getElementById('burger');
    var mobileNav = document.getElementById('mobileNav');
    if (!burger || !mobileNav) return;

    burger.addEventListener('click', function () {
      burger.classList.toggle('active');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        burger.classList.remove('active');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ================================================================
     SCROLL REVEAL — Intersection Observer for .reveal elements
     ================================================================ */
  function initScrollReveal() {
    var reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    if (!('IntersectionObserver' in window)) {
      reveals.forEach(function (el) { el.classList.add('visible'); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var delay = entry.target.dataset.delay || 0;
            setTimeout(function () {
              entry.target.classList.add('visible');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach(function (el) {
      var parent = el.parentElement;
      if (parent) {
        var siblings = parent.querySelectorAll(':scope > .reveal');
        if (siblings.length > 1) {
          var siblingIndex = Array.from(siblings).indexOf(el);
          el.dataset.delay = siblingIndex * 100;
        }
      }
      observer.observe(el);
    });
  }

  /* ================================================================
     ANIMATED COUNTERS — count up on scroll into view
     ================================================================ */
  function initCounters() {
    var counters = document.querySelectorAll('[data-target]');
    if (!counters.length) return;

    if (!('IntersectionObserver' in window)) {
      counters.forEach(function (el) {
        el.textContent = formatNumber(parseFloat(el.dataset.target), el.dataset.decimal === 'true') + (el.dataset.suffix || '');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(function (el) { observer.observe(el); });
  }

  function animateCounter(el) {
    var target = parseFloat(el.dataset.target);
    var suffix = el.dataset.suffix || '';
    var isDecimal = el.dataset.decimal === 'true';
    var duration = 2000;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = eased * target;

      el.textContent = formatNumber(current, isDecimal) + suffix;

      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  function formatNumber(num, isDecimal) {
    if (isDecimal) return num.toFixed(1);
    if (num >= 1000000) return (num / 1000000).toFixed(0) + 'M';
    if (num >= 1000) return Math.floor(num).toLocaleString('en-US');
    return Math.floor(num).toString();
  }

  /* ================================================================
     SMOOTH ANCHOR SCROLL
     ================================================================ */
  function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '#top') return;

        var targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* ================================================================
     CURSOR GLOW — Track mouse position on interactive cards
     ================================================================ */
  function initCursorGlow() {
    var selectors = [
      '.glass-card',
      '.glow-card__inner',
      '.use-card',
      '.int-card',
      '.price-card',
      '.testi-card',
      '.more-features__item',
      '.faq__item',
      '.step-card'
    ];

    var cards = document.querySelectorAll(selectors.join(','));
    if (!cards.length) return;

    cards.forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', (e.clientX - rect.left) + 'px');
        card.style.setProperty('--mouse-y', (e.clientY - rect.top) + 'px');
      });

      card.addEventListener('mouseleave', function () {
        card.style.removeProperty('--mouse-x');
        card.style.removeProperty('--mouse-y');
      });
    });
  }

  /* ================================================================
     FLOATING WIDGETS — Voice Call Bar, Chat Bubble, Modals
     ================================================================ */
  function initWidgets() {
    var vcallOpenBtn  = document.getElementById('vcallOpenBtn');
    var vcallModal    = document.getElementById('vcallModal');
    var vcallClose    = document.getElementById('vcallClose');
    var chatBubble    = document.getElementById('chatBubble');
    var chatWidget    = document.getElementById('chatWidget');
    var chatCollapse  = document.getElementById('chatCollapse');

    /* --- Country Dropdown --- */
    var vcallFlagBtn  = document.getElementById('vcallFlagBtn');
    var countryDrop   = document.getElementById('countryDrop');
    var countrySearch = document.getElementById('countrySearch');
    var countryList   = document.getElementById('countryList');
    var barFlagEmoji  = document.getElementById('barFlagEmoji');
    var modalFlagBtn  = document.getElementById('modalFlagBtn');

    if (vcallFlagBtn && countryDrop && countryList) {
      // Toggle dropdown
      vcallFlagBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        countryDrop.classList.toggle('open');
        if (countryDrop.classList.contains('open') && countrySearch) {
          countrySearch.value = '';
          filterCountries('');
          setTimeout(function () { countrySearch.focus(); }, 50);
        }
      });

      // Search filtering
      if (countrySearch) {
        countrySearch.addEventListener('input', function () {
          filterCountries(this.value.toLowerCase());
        });
        countrySearch.addEventListener('click', function (e) {
          e.stopPropagation();
        });
      }

      function filterCountries(query) {
        var items = countryList.querySelectorAll('.country-drop__item');
        items.forEach(function (item) {
          var name = (item.dataset.name || '').toLowerCase();
          var code = item.dataset.code || '';
          item.style.display = (name.indexOf(query) !== -1 || code.indexOf(query) !== -1) ? '' : 'none';
        });
      }

      // Country selection
      countryList.addEventListener('click', function (e) {
        var btn = e.target.closest('.country-drop__item');
        if (!btn) return;

        var flag = btn.dataset.flag;
        var code = btn.dataset.code;

        // Update bar flag
        if (barFlagEmoji) barFlagEmoji.innerHTML = flag;

        // Update modal prefix button
        if (modalFlagBtn) {
          var flagSpan = modalFlagBtn.querySelector('span');
          if (flagSpan) flagSpan.innerHTML = flag + ' ' + code;
        }

        countryDrop.classList.remove('open');
      });

      // Also open dropdown from modal prefix button
      if (modalFlagBtn) {
        modalFlagBtn.addEventListener('click', function (e) {
          e.stopPropagation();
          countryDrop.classList.toggle('open');
          if (countryDrop.classList.contains('open') && countrySearch) {
            countrySearch.value = '';
            filterCountries('');
            setTimeout(function () { countrySearch.focus(); }, 50);
          }
        });
      }

      // Close dropdown on outside click
      document.addEventListener('click', function () {
        countryDrop.classList.remove('open');
      });

      countryDrop.addEventListener('click', function (e) {
        e.stopPropagation();
      });
    }

    /* --- Voice Call Modal --- */
    if (vcallOpenBtn && vcallModal && vcallClose) {
      vcallOpenBtn.addEventListener('click', function () {
        vcallModal.classList.add('open');
      });

      vcallClose.addEventListener('click', function () {
        vcallModal.classList.remove('open');
      });

      vcallModal.addEventListener('click', function (e) {
        if (e.target === vcallModal) {
          vcallModal.classList.remove('open');
        }
      });
    }

    /* --- Chat Widget --- */
    if (chatBubble && chatWidget && chatCollapse) {
      chatBubble.addEventListener('click', function () {
        var isOpen = chatWidget.classList.toggle('open');
        chatBubble.classList.toggle('active', isOpen);
      });

      chatCollapse.addEventListener('click', function () {
        chatWidget.classList.remove('open');
        chatBubble.classList.remove('active');
      });
    }
  }

  /* ================================================================
     BILLING TOGGLE — monthly / annual pricing switch
     ================================================================ */
  function initBillingToggle() {
    var toggle = document.getElementById('billingToggle');
    if (!toggle) return;

    var labels = document.querySelectorAll('.billing-toggle__label');
    var amounts = document.querySelectorAll('.price-card__amount[data-monthly]');
    var isAnnual = false;

    toggle.addEventListener('click', function () {
      isAnnual = !isAnnual;
      toggle.classList.toggle('active', isAnnual);

      labels.forEach(function (label) {
        var period = label.getAttribute('data-period');
        label.classList.toggle('billing-toggle__label--active',
          (isAnnual && period === 'annual') || (!isAnnual && period === 'monthly'));
      });

      amounts.forEach(function (el) {
        var target = isAnnual ? el.getAttribute('data-annual') : el.getAttribute('data-monthly');
        animatePrice(el, parseInt(el.textContent), parseInt(target));
      });
    });

    function animatePrice(el, from, to) {
      var duration = 400;
      var start = performance.now();
      function tick(now) {
        var progress = Math.min((now - start) / duration, 1);
        var ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(from + (to - from) * ease);
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }
  }

  /* ================================================================
     USE CASES TABS — filter cards by category
     ================================================================ */
  function initUseCaseTabs() {
    var tabs = document.querySelectorAll('.uc2-tab');
    var items = document.querySelectorAll('.uc2-item');
    if (!tabs.length) return;

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var cat = tab.getAttribute('data-uc');

        // Update active tab
        tabs.forEach(function (t) { t.classList.remove('uc2-tab--active'); });
        tab.classList.add('uc2-tab--active');

        // Filter items
        items.forEach(function (item, i) {
          var itemCat = item.getAttribute('data-uc-cat');
          if (cat === 'all' || itemCat === cat) {
            item.classList.remove('uc2-item--hidden');
            item.style.animationDelay = (i * 0.08) + 's';
          } else {
            item.classList.add('uc2-item--hidden');
          }
        });
      });
    });
  }

})();
