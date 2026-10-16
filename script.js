/**
 * MAISON D'ARÔME — Haute Parfumerie
 * Complete Application & Fragrance Dataset Engine (script.js)
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. DATASET: Fragrance Catalog, Discovery Sets, and Scent Quiz
  // ==========================================================================
  const PERFUMES_DATA = [
    {
      id: "mda-01",
      name: "Oud Royal Noir",
      subtitle: "Extrait de Parfum",
      tagline: "The sovereign majesty of wild Cambodian agarwood and midnight damask roses.",
      price50: 165,
      price100: 245,
      rating: 4.9,
      reviewsCount: 142,
      badge: "Best Seller",
      gender: "Unisex",
      scentFamily: "Woody",
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
      hoverImage: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
      description: "An intoxicating symphony designed for discerning connoisseurs. Oud Royal Noir opens with precious saffron and damask rose petals before descending into a mesmerizing foundation of aged smoked agarwood, amber crystals, and rare musk.",
      notes: {
        top: ["Saffron", "Pink Peppercorn", "Bergamot"],
        heart: ["Damask Rose", "Labdanum", "Smoked Incense"],
        base: ["Cambodian Oud", "Ambergris", "Atlas Cedar", "Patchouli"]
      },
      specs: {
        concentration: "Extrait de Parfum (30% oils)",
        longevity: "12 - 16 Hours",
        sillage: "Enveloping & Majestic",
        season: "Fall / Winter / Evening"
      }
    },
    {
      id: "mda-02",
      name: "Fleur Impériale",
      subtitle: "Eau de Parfum",
      tagline: "An opulent white floral nectar touched by golden Italian morning sunlight.",
      price50: 140,
      price100: 210,
      rating: 4.8,
      reviewsCount: 98,
      badge: "Trending",
      gender: "Women",
      scentFamily: "Floral",
      image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80",
      hoverImage: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
      description: "Radiant, feminine, and profoundly elegant. Fleur Impériale captures the blossom of nocturnal jasmine, velvet white peonies, and dew-drenched tuberose, softened with creamy vanilla bourbon.",
      notes: {
        top: ["Italian Bergamot", "Neroli Blossoms", "Dewy Pear"],
        heart: ["Jasmine Sambac", "French Tuberose", "White Peony"],
        base: ["Bourbon Vanilla", "White Musk", "Solar Amber"]
      },
      specs: {
        concentration: "Eau de Parfum (22% oils)",
        longevity: "9 - 12 Hours",
        sillage: "Radiant & Alluring",
        season: "Spring / Summer / Day"
      }
    },
    {
      id: "mda-03",
      name: "Soleil de Santal",
      subtitle: "Eau de Parfum",
      tagline: "Golden Australian sandalwood drenched in sunlit spices and silky cardamom.",
      price50: 155,
      price100: 225,
      rating: 5.0,
      reviewsCount: 184,
      badge: "Award Winner",
      gender: "Unisex",
      scentFamily: "Woody",
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
      hoverImage: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
      description: "A serene, contemplative elixir that feels like a warm cashmere embrace at golden hour. Creamy sandalwood meets crushed green cardamom, violet leaves, and subtle smoky papyrus.",
      notes: {
        top: ["Green Cardamom", "Violet Leaf", "Coriander"],
        heart: ["Tuscan Iris", "Papyrus", "Warm Cedar"],
        base: ["Australian Sandalwood", "Cashmere Wood", "Leather Accord"]
      },
      specs: {
        concentration: "Eau de Parfum (24% oils)",
        longevity: "10 - 14 Hours",
        sillage: "Intimate & Sophisticated",
        season: "All Year / Signature"
      }
    },
    {
      id: "mda-04",
      name: "Céleste Blanche",
      subtitle: "Eau de Parfum Légère",
      tagline: "Crisp crystalline sea salt, Amalfi lemons, and ethereal white musks.",
      price50: 130,
      price100: 195,
      rating: 4.7,
      reviewsCount: 76,
      badge: "Fresh Release",
      gender: "Unisex",
      scentFamily: "Fresh",
      image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
      hoverImage: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80",
      description: "An invigorating escape to a sun-bleached cliff above the Mediterranean azure sea. Mineral salt accords, hand-picked sparkling citrus, and a whisper of solar driftwood.",
      notes: {
        top: ["Amalfi Lemon", "Bitter Orange", "Sea Mist"],
        heart: ["Clary Sage", "Rosemary", "Waterlily"],
        base: ["Solar Driftwood", "Clean Amber", "Ethereal Musk"]
      },
      specs: {
        concentration: "Eau de Parfum (20% oils)",
        longevity: "8 - 10 Hours",
        sillage: "Fresh & Breezy",
        season: "Spring / Summer / Sport"
      }
    },
    {
      id: "mda-05",
      name: "Velours de Nuit",
      subtitle: "Extrait de Parfum",
      tagline: "Black cherry soaked in vintage cognac, roasted tonka, and velvety tobacco.",
      price50: 175,
      price100: 260,
      rating: 4.9,
      reviewsCount: 215,
      badge: "Bestseller",
      gender: "Unisex",
      scentFamily: "Oriental",
      image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=800&q=80",
      hoverImage: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
      description: "Dark, sultry, and unapologetically seductive. Velours de Nuit blends rich black cherry liqueur with roasted tonka beans, blond tobacco leaves, and a sultry Madagascar vanilla finish.",
      notes: {
        top: ["Black Cherry Liqueur", "Bitter Almond", "Cognac"],
        heart: ["Turkish Rose", "Roasted Tonka Bean", "Cinnamon Bark"],
        base: ["Blonde Tobacco", "Madagascar Vanilla", "Benzoin Tears"]
      },
      specs: {
        concentration: "Extrait de Parfum (32% oils)",
        longevity: "14 - 18 Hours",
        sillage: "Hypnotic & Magnetic",
        season: "Fall / Winter / Night Out"
      }
    },
    {
      id: "mda-06",
      name: "Ambre Souverain",
      subtitle: "Eau de Parfum",
      tagline: "Golden liquid amber, saffron threads, and warm saddle leather.",
      price50: 160,
      price100: 235,
      rating: 4.8,
      reviewsCount: 112,
      badge: "Limited Edition",
      gender: "Men",
      scentFamily: "Oriental",
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80",
      hoverImage: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=800&q=80",
      description: "Inspired by ancient caravan spice routes across golden dunes. Rich warm amber is intensified by Persian saffron, aromatic labdanum resin, and fine burnished leather.",
      notes: {
        top: ["Persian Saffron", "Coriander Seed", "Nutmeg"],
        heart: ["Myrrh", "Golden Amber", "Smoked Benzoin"],
        base: ["Spanish Labdanum", "Russian Leather", "Bourbon Vetiver"]
      },
      specs: {
        concentration: "Eau de Parfum (25% oils)",
        longevity: "12 - 15 Hours",
        sillage: "Rich & Commanding",
        season: "Fall / Winter / Formal"
      }
    },
    {
      id: "mda-07",
      name: "Vert Sauvage",
      subtitle: "Eau de Parfum",
      tagline: "Wild crushed fig leaves, Haitian vetiver, and crisp green cedarwood.",
      price50: 145,
      price100: 215,
      rating: 4.6,
      reviewsCount: 64,
      badge: "Artisanal",
      gender: "Unisex",
      scentFamily: "Fresh",
      image: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=800&q=80",
      hoverImage: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80",
      description: "A stroll through a Mediterranean private garden after summer rain. Earthy vetiver intertwines with unripe green figs, crisp juniper berries, and sunlit oakmoss.",
      notes: {
        top: ["Green Fig Leaf", "Juniper Berry", "Crushed Mint"],
        heart: ["Galbanum", "Wild Sage", "Orris Root"],
        base: ["Haitian Vetiver", "French Oakmoss", "Virginian Cedar"]
      },
      specs: {
        concentration: "Eau de Parfum (22% oils)",
        longevity: "9 - 11 Hours",
        sillage: "Crisp & Distinctive",
        season: "Spring / Summer / Daily"
      }
    },
    {
      id: "mda-08",
      name: "Rose Mystique",
      subtitle: "Extrait de Parfum",
      tagline: "A thorny gothic midnight rose crowned with patchouli and smoky incense.",
      price50: 165,
      price100: 250,
      rating: 4.9,
      reviewsCount: 167,
      badge: "Exclusive",
      gender: "Women",
      scentFamily: "Floral",
      image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80",
      hoverImage: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=800&q=80",
      description: "Not your grandmother's rose. Rose Mystique reveals a mysterious, velvety, shadowy rose with sharp black pepper, aged Indonesian patchouli, and sacred frankincense smoke.",
      notes: {
        top: ["Black Pepper", "Raspberry Liqueur", "Cassis"],
        heart: ["Taif Rose", "Centifolia Rose", "Incense Tears"],
        base: ["Aged Patchouli", "Dark Amber", "Vanilla Absolu"]
      },
      specs: {
        concentration: "Extrait de Parfum (28% oils)",
        longevity: "12 - 16 Hours",
        sillage: "Dramatic & Enigmatic",
        season: "All Year / Evening"
      }
    }
  ];

  const DISCOVERY_SETS = [
    {
      id: "disc-01",
      name: "The Haute Iconics Discovery Vault",
      subtitle: "5 x 10ml Travel Sprays",
      price: 85,
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80",
      description: "Includes a $85 voucher redeemable against your first 100ml full-sized flacon. Features Oud Royal Noir, Soleil de Santal, Fleur Impériale, Velours de Nuit, and Céleste Blanche."
    }
  ];

  const QUIZ_QUESTIONS = [
    {
      id: 1,
      question: "Which ambiance best represents your ideal fragrance moment?",
      options: [
        { text: "A clandestine cocktail bar, velvet booths & jazz", family: "Oriental", vibe: "seductive" },
        { text: "A breezy seaside villa surrounded by lemon groves", family: "Fresh", vibe: "energizing" },
        { text: "A serene sunlit library with leather books & warm tea", family: "Woody", vibe: "sophisticated" },
        { text: "A blooming palace garden under starlit moonlight", family: "Floral", vibe: "romantic" }
      ]
    },
    {
      id: 2,
      question: "What scent notes naturally draw your senses?",
      options: [
        { text: "Aged Sandalwood, Cedar & Smoky Cardamom", family: "Woody", matchId: "mda-03" },
        { text: "Wild Jasmine, Night Peony & Dewy Tuberose", family: "Floral", matchId: "mda-02" },
        { text: "Rare Smoked Oud, Saffron & Midnight Rose", family: "Woody", matchId: "mda-01" },
        { text: "Black Cherry Cognac, Roasted Tonka & Vanilla", family: "Oriental", matchId: "mda-05" },
        { text: "Amalfi Lemons, Mineral Sea Salt & Driftwood", family: "Fresh", matchId: "mda-04" }
      ]
    },
    {
      id: 3,
      question: "What fragrance impression do you wish to leave behind?",
      options: [
        { text: "Hypnotic, mysterious and unforgettable", family: "Oriental", matchId: "mda-05" },
        { text: "Understated, warm luxury and refined charisma", family: "Woody", matchId: "mda-03" },
        { text: "Invigorating, clean, luminous and effortless", family: "Fresh", matchId: "mda-04" },
        { text: "Regal, commanding, timeless and opulent", family: "Woody", matchId: "mda-01" }
      ]
    }
  ];

  // ==========================================================================
  // 2. STATE MANAGEMENT
  // ==========================================================================
  const STATE = {
    cart: JSON.parse(localStorage.getItem('mda_cart') || '[]'),
    wishlist: JSON.parse(localStorage.getItem('mda_wishlist') || '[]'),
    activeFilter: 'all',
    selectedSizes: {},
    appliedPromo: null,
    shippingThreshold: 200,
    shippingCost: 15,
    quiz: {
      currentStep: 0,
      answers: []
    }
  };

  const PROMO_CODES = {
    'LUXURY10': 0.10,
    'FIRST20': 0.20,
    'MAISON15': 0.15
  };

  // Cache DOM elements
  const DOM = {
    header: document.getElementById('main-header'),
    mobileMenuBtn: document.getElementById('mobile-menu-btn'),
    mobileNav: document.getElementById('mobile-nav'),
    closeMobileNav: document.getElementById('close-mobile-nav'),
    
    openCartBtn: document.getElementById('open-cart-btn'),
    closeCartBtn: document.getElementById('close-cart-btn'),
    cartDrawer: document.getElementById('cart-drawer'),
    cartBadge: document.getElementById('cart-badge'),
    cartDrawerCount: document.getElementById('cart-drawer-count'),
    cartItemsContainer: document.getElementById('cart-items-container'),
    
    openWishlistBtn: document.getElementById('open-wishlist-btn'),
    closeWishlistBtn: document.getElementById('close-wishlist-btn'),
    wishlistDrawer: document.getElementById('wishlist-drawer'),
    wishlistBadge: document.getElementById('wishlist-badge'),
    wishlistDrawerCount: document.getElementById('wishlist-drawer-count'),
    wishlistItemsContainer: document.getElementById('wishlist-items-container'),
    
    siteOverlay: document.getElementById('site-overlay'),
    
    shippingMsg: document.getElementById('shipping-msg'),
    shippingProgressFill: document.getElementById('shipping-progress-fill'),
    promoForm: document.getElementById('promo-form'),
    promoInput: document.getElementById('promo-code-input'),
    cartSubtotal: document.getElementById('cart-subtotal'),
    cartDiscountRow: document.getElementById('cart-discount-row'),
    discountPercentLabel: document.getElementById('discount-percent-label'),
    cartDiscount: document.getElementById('cart-discount'),
    cartShipping: document.getElementById('cart-shipping'),
    cartTotal: document.getElementById('cart-total'),
    checkoutBtn: document.getElementById('checkout-btn'),
    
    productsGrid: document.getElementById('products-grid'),
    filterBtns: document.querySelectorAll('.filter-nav .filter-btn'),
    
    quickviewModal: document.getElementById('quickview-modal'),
    closeQuickviewBtn: document.getElementById('close-quickview-btn'),
    quickviewContent: document.getElementById('quickview-content-inner'),
    
    startQuizHeroBtn: document.getElementById('start-quiz-hero-btn'),
    openQuizBtn: document.getElementById('open-quiz-btn'),
    quizModal: document.getElementById('quiz-modal'),
    closeQuizBtn: document.getElementById('close-quiz-btn'),
    quizModalInner: document.getElementById('quiz-modal-inner'),
    
    checkoutModal: document.getElementById('checkout-modal'),
    closeCheckoutBtn: document.getElementById('close-checkout-btn'),
    checkoutForm: document.getElementById('checkout-form'),
    checkoutBody: document.getElementById('checkout-modal-body'),
    checkoutItemsPreview: document.getElementById('checkout-items-preview'),
    checkoutSubtotal: document.getElementById('checkout-subtotal'),
    checkoutDiscountRow: document.getElementById('checkout-discount-row'),
    checkoutDiscount: document.getElementById('checkout-discount'),
    checkoutShipping: document.getElementById('checkout-shipping'),
    checkoutFinalTotal: document.getElementById('checkout-final-total'),
    
    openSearchBtn: document.getElementById('open-search-btn'),
    closeSearchBtn: document.getElementById('close-search-btn'),
    searchModal: document.getElementById('search-modal'),
    searchInput: document.getElementById('search-input'),
    searchResultsList: document.getElementById('search-results-list'),
    
    toastContainer: document.getElementById('toast-container'),
    
    spotlightAddCartBtn: document.getElementById('spotlight-add-cart-btn'),
    spotlightQuickviewBtn: document.getElementById('spotlight-quickview-btn'),
    addDiscoveryBtn: document.getElementById('add-discovery-btn'),
    newsletterForm: document.getElementById('newsletter-form')
  };

  // ==========================================================================
  // 3. INITIALIZATION
  // ==========================================================================
  function init() {
    PERFUMES_DATA.forEach(p => {
      STATE.selectedSizes[p.id] = '50ml';
    });

    renderProducts();
    updateCartUI();
    updateWishlistUI();
    bindEvents();
  }

  // ==========================================================================
  // 4. EVENT BINDINGS
  // ==========================================================================
  function bindEvents() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        DOM.header.classList.add('scrolled');
      } else {
        DOM.header.classList.remove('scrolled');
      }
    });

    DOM.mobileMenuBtn.addEventListener('click', () => openMobileNav());
    DOM.closeMobileNav.addEventListener('click', () => closeMobileNav());
    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => closeMobileNav());
    });

    DOM.openCartBtn.addEventListener('click', () => openCart());
    DOM.closeCartBtn.addEventListener('click', () => closeAllDrawers());

    DOM.openWishlistBtn.addEventListener('click', () => openWishlist());
    DOM.closeWishlistBtn.addEventListener('click', () => closeAllDrawers());

    DOM.siteOverlay.addEventListener('click', () => {
      closeAllDrawers();
      closeAllModals();
    });

    DOM.filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        DOM.filterBtns.forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        STATE.activeFilter = e.currentTarget.getAttribute('data-filter');
        renderProducts();
      });
    });

    DOM.promoForm.addEventListener('submit', handlePromoSubmit);

    DOM.checkoutBtn.addEventListener('click', () => openCheckout());
    DOM.closeCheckoutBtn.addEventListener('click', () => closeCheckout());
    DOM.checkoutForm.addEventListener('submit', handleCheckoutSubmit);

    DOM.closeQuickviewBtn.addEventListener('click', () => closeQuickview());

    if (DOM.startQuizHeroBtn) {
      DOM.startQuizHeroBtn.addEventListener('click', () => openQuiz());
    }
    if (DOM.openQuizBtn) {
      DOM.openQuizBtn.addEventListener('click', () => openQuiz());
    }
    DOM.closeQuizBtn.addEventListener('click', () => closeQuiz());

    DOM.openSearchBtn.addEventListener('click', () => openSearch());
    DOM.closeSearchBtn.addEventListener('click', () => closeSearch());
    DOM.searchInput.addEventListener('input', handleLiveSearch);

    if (DOM.spotlightAddCartBtn) {
      DOM.spotlightAddCartBtn.addEventListener('click', () => {
        addToCart('mda-01', '50ml');
        openCart();
      });
    }
    if (DOM.spotlightQuickviewBtn) {
      DOM.spotlightQuickviewBtn.addEventListener('click', () => {
        openQuickview('mda-01');
      });
    }
    if (DOM.addDiscoveryBtn) {
      DOM.addDiscoveryBtn.addEventListener('click', () => {
        addDiscoverySetToCart();
        openCart();
      });
    }

    if (DOM.newsletterForm) {
      DOM.newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input').value;
        showToast(`Privilege unlocked! Code FIRST20 sent to ${email}`, 'gold');
        e.target.reset();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllDrawers();
        closeAllModals();
      }
    });
  }

  // ==========================================================================
  // 5. PRODUCT CATALOG
  // ==========================================================================
  function renderProducts() {
    let filtered = PERFUMES_DATA;
    if (STATE.activeFilter !== 'all') {
      if (STATE.activeFilter === 'Unisex') {
        filtered = PERFUMES_DATA.filter(p => p.gender === 'Unisex');
      } else {
        filtered = PERFUMES_DATA.filter(p => p.scentFamily.toLowerCase() === STATE.activeFilter.toLowerCase());
      }
    }

    if (filtered.length === 0) {
      DOM.productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align:center; padding: 60px 0;">
          <h4 style="font-size:1.2rem; color:var(--text-muted);">No fragrances found in this category.</h4>
        </div>
      `;
      return;
    }

    DOM.productsGrid.innerHTML = filtered.map(p => {
      const isWishlisted = STATE.wishlist.some(item => item.id === p.id);
      const selectedSize = STATE.selectedSizes[p.id] || '50ml';
      const currentPrice = selectedSize === '50ml' ? p.price50 : p.price100;

      return `
        <article class="product-card" data-id="${p.id}">
          <div class="card-media">
            <span class="card-badge">${p.badge}</span>
            <button class="card-wishlist ${isWishlisted ? 'active' : ''}" data-wishlist-id="${p.id}" title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}" aria-label="Wishlist">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </button>
            <img src="${p.image}" alt="${p.name} luxury flacon" class="primary-img" loading="lazy">
            <img src="${p.hoverImage}" alt="${p.name} detail view" class="hover-img" loading="lazy">
            <button class="card-overlay-btn" data-quickview-id="${p.id}">Quick View</button>
          </div>

          <div class="card-body">
            <div class="card-meta">
              <span class="card-category">${p.scentFamily} &bull; ${p.gender}</span>
              <div class="card-rating">
                <svg width="13" height="13" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <span>${p.rating} (${p.reviewsCount})</span>
              </div>
            </div>

            <h3 class="card-title" data-quickview-id="${p.id}" style="cursor:pointer;">${p.name}</h3>
            <div class="card-subtitle">${p.subtitle}</div>

            <div class="card-notes">
              <strong>Key Notes:</strong> ${p.notes.heart.concat(p.notes.base.slice(0, 1)).join(', ')}
            </div>

            <!-- Size Selector Pills -->
            <div class="size-selector">
              <button class="size-pill ${selectedSize === '50ml' ? 'active' : ''}" data-product="${p.id}" data-size="50ml">50ml / 1.7oz</button>
              <button class="size-pill ${selectedSize === '100ml' ? 'active' : ''}" data-product="${p.id}" data-size="100ml">100ml / 3.4oz</button>
            </div>

            <div class="card-footer">
              <div class="card-price">
                <span class="price-val" id="price-label-${p.id}">$${currentPrice}</span>
                <span class="price-sub">Free Samples Included</span>
              </div>
              <button class="btn-add-cart" data-cart-id="${p.id}">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-2z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                <span>Add To Bag</span>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    attachCatalogEventListeners();
  }

  function attachCatalogEventListeners() {
    document.querySelectorAll('.size-pill').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const productId = e.currentTarget.getAttribute('data-product');
        const size = e.currentTarget.getAttribute('data-size');
        STATE.selectedSizes[productId] = size;

        const card = e.currentTarget.closest('.product-card');
        card.querySelectorAll('.size-pill').forEach(p => p.classList.remove('active'));
        e.currentTarget.classList.add('active');

        const perfume = PERFUMES_DATA.find(p => p.id === productId);
        if (perfume) {
          const priceLabel = document.getElementById(`price-label-${productId}`);
          if (priceLabel) {
            priceLabel.textContent = `$${size === '50ml' ? perfume.price50 : perfume.price100}`;
          }
        }
      });
    });

    document.querySelectorAll('[data-cart-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-cart-id');
        const size = STATE.selectedSizes[id] || '50ml';
        addToCart(id, size);

        const button = e.currentTarget;
        const originalContent = button.innerHTML;
        button.classList.add('added');
        button.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>Added</span>
        `;
        setTimeout(() => {
          button.classList.remove('added');
          button.innerHTML = originalContent;
        }, 1200);
      });
    });

    document.querySelectorAll('[data-wishlist-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = e.currentTarget.getAttribute('data-wishlist-id');
        toggleWishlist(id);
      });
    });

    document.querySelectorAll('[data-quickview-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-quickview-id');
        openQuickview(id);
      });
    });
  }

  // ==========================================================================
  // 6. CART SYSTEM & PERSISTENCE
  // ==========================================================================
  function addToCart(productId, size = '50ml') {
    const perfume = PERFUMES_DATA.find(p => p.id === productId);
    if (!perfume) return;

    const price = size === '50ml' ? perfume.price50 : perfume.price100;
    const cartItemId = `${productId}-${size}`;

    const existingIndex = STATE.cart.findIndex(item => item.cartItemId === cartItemId);

    if (existingIndex > -1) {
      STATE.cart[existingIndex].quantity += 1;
    } else {
      STATE.cart.push({
        cartItemId: cartItemId,
        id: perfume.id,
        name: perfume.name,
        subtitle: perfume.subtitle,
        size: size,
        price: price,
        image: perfume.image,
        quantity: 1
      });
    }

    saveCart();
    updateCartUI();
    showToast(`Added ${perfume.name} (${size}) to your bag.`);
  }

  function addDiscoverySetToCart() {
    const set = DISCOVERY_SETS[0];
    const cartItemId = `${set.id}-10ml`;
    const existingIndex = STATE.cart.findIndex(item => item.cartItemId === cartItemId);

    if (existingIndex > -1) {
      STATE.cart[existingIndex].quantity += 1;
    } else {
      STATE.cart.push({
        cartItemId: cartItemId,
        id: set.id,
        name: set.name,
        subtitle: set.subtitle,
        size: "Vault",
        price: set.price,
        image: set.image,
        quantity: 1
      });
    }

    saveCart();
    updateCartUI();
    showToast(`Added Discovery Vault to your bag.`);
  }

  function modifyQuantity(cartItemId, delta) {
    const itemIndex = STATE.cart.findIndex(item => item.cartItemId === cartItemId);
    if (itemIndex === -1) return;

    STATE.cart[itemIndex].quantity += delta;
    if (STATE.cart[itemIndex].quantity <= 0) {
      STATE.cart.splice(itemIndex, 1);
    }

    saveCart();
    updateCartUI();
  }

  function removeFromCart(cartItemId) {
    STATE.cart = STATE.cart.filter(item => item.cartItemId !== cartItemId);
    saveCart();
    updateCartUI();
    showToast('Flacon removed from bag.');
  }

  function saveCart() {
    localStorage.setItem('mda_cart', JSON.stringify(STATE.cart));
  }

  function updateCartUI() {
    const totalItems = STATE.cart.reduce((sum, item) => sum + item.quantity, 0);

    DOM.cartBadge.textContent = totalItems;
    DOM.cartDrawerCount.textContent = totalItems;
    if (totalItems > 0) {
      DOM.cartBadge.classList.remove('hidden');
    } else {
      DOM.cartBadge.classList.add('hidden');
    }

    if (STATE.cart.length === 0) {
      DOM.cartItemsContainer.innerHTML = `
        <div class="empty-state">
          <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-2z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
          <h4>Your Flacon Bag is Empty</h4>
          <p>Explore our exquisite extraits de parfum and add your signature scent.</p>
          <button class="btn btn-gold btn-sm" id="empty-shop-btn">Explore Collections</button>
        </div>
      `;
      const emptyShopBtn = document.getElementById('empty-shop-btn');
      if (emptyShopBtn) {
        emptyShopBtn.addEventListener('click', () => {
          closeAllDrawers();
          window.location.hash = '#collections';
        });
      }
    } else {
      DOM.cartItemsContainer.innerHTML = STATE.cart.map(item => `
        <div class="cart-item">
          <div class="cart-item-thumb">
            <img src="${item.image}" alt="${item.name}">
          </div>
          <div class="cart-item-details">
            <h5>${item.name}</h5>
            <div class="cart-item-variant">${item.size} &bull; ${item.subtitle || ''}</div>
            <div class="cart-item-price">$${item.price} each</div>
            <div class="qty-control">
              <button class="qty-btn" data-cart-minus="${item.cartItemId}">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" data-cart-plus="${item.cartItemId}">+</button>
            </div>
          </div>
          <button class="cart-item-remove" data-cart-remove="${item.cartItemId}" title="Remove flacon" aria-label="Remove">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
        </div>
      `).join('');

      document.querySelectorAll('[data-cart-minus]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          modifyQuantity(e.currentTarget.getAttribute('data-cart-minus'), -1);
        });
      });
      document.querySelectorAll('[data-cart-plus]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          modifyQuantity(e.currentTarget.getAttribute('data-cart-plus'), 1);
        });
      });
      document.querySelectorAll('[data-cart-remove]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          removeFromCart(e.currentTarget.getAttribute('data-cart-remove'));
        });
      });
    }

    const subtotal = STATE.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let discount = 0;
    if (STATE.appliedPromo) {
      discount = subtotal * STATE.appliedPromo.discountPercent;
    }

    const freeShippingQualified = subtotal >= STATE.shippingThreshold;
    const shipping = (totalItems === 0 || freeShippingQualified) ? 0 : STATE.shippingCost;
    const total = Math.max(0, subtotal - discount + shipping);

    const remainingForFree = Math.max(0, STATE.shippingThreshold - subtotal);
    const progressPercent = Math.min(100, (subtotal / STATE.shippingThreshold) * 100);
    DOM.shippingProgressFill.style.width = `${progressPercent}%`;

    if (subtotal === 0) {
      DOM.shippingMsg.innerHTML = `Add <strong>$${STATE.shippingThreshold.toFixed(2)}</strong> more to unlock complimentary global courier shipping.`;
    } else if (remainingForFree > 0) {
      DOM.shippingMsg.innerHTML = `Add <strong>$${remainingForFree.toFixed(2)}</strong> more for <strong>Complimentary Express Courier</strong>.`;
    } else {
      DOM.shippingMsg.innerHTML = `✨ <strong>Complimentary Global Courier Delivery Unlocked!</strong>`;
    }

    DOM.cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    if (discount > 0) {
      DOM.cartDiscountRow.style.display = 'flex';
      DOM.discountPercentLabel.textContent = `${(STATE.appliedPromo.discountPercent * 100).toFixed(0)}%`;
      DOM.cartDiscount.textContent = `-$${discount.toFixed(2)}`;
    } else {
      DOM.cartDiscountRow.style.display = 'none';
    }

    DOM.cartShipping.textContent = (shipping === 0) ? 'Complimentary' : `$${shipping.toFixed(2)}`;
    DOM.cartTotal.textContent = `$${total.toFixed(2)}`;
  }

  function handlePromoSubmit(e) {
    e.preventDefault();
    const code = DOM.promoInput.value.trim().toUpperCase();
    if (!code) return;

    if (PROMO_CODES[code]) {
      STATE.appliedPromo = {
        code: code,
        discountPercent: PROMO_CODES[code]
      };
      updateCartUI();
      showToast(`Privilege code '${code}' applied: ${(PROMO_CODES[code] * 100)}% off!`, 'gold');
    } else {
      showToast(`Privilege code '${code}' is invalid or expired. Try LUXURY10`, 'error');
    }
  }

  // ==========================================================================
  // 7. WISHLIST SYSTEM
  // ==========================================================================
  function toggleWishlist(productId) {
    const perfume = PERFUMES_DATA.find(p => p.id === productId);
    if (!perfume) return;

    const existingIndex = STATE.wishlist.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      STATE.wishlist.splice(existingIndex, 1);
      showToast(`Removed ${perfume.name} from saved favorites.`);
    } else {
      STATE.wishlist.push(perfume);
      showToast(`Saved ${perfume.name} to your private wishlist.`, 'gold');
    }

    localStorage.setItem('mda_wishlist', JSON.stringify(STATE.wishlist));
    updateWishlistUI();
    renderProducts();
  }

  function updateWishlistUI() {
    const count = STATE.wishlist.length;
    DOM.wishlistBadge.textContent = count;
    DOM.wishlistDrawerCount.textContent = count;

    if (count > 0) {
      DOM.wishlistBadge.classList.remove('hidden');
    } else {
      DOM.wishlistBadge.classList.add('hidden');
    }

    if (count === 0) {
      DOM.wishlistItemsContainer.innerHTML = `
        <div class="empty-state">
          <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          <h4>Your Wishlist is Empty</h4>
          <p>Curate your private olfactory wardrobe by clicking the heart icon on any flacon.</p>
        </div>
      `;
    } else {
      DOM.wishlistItemsContainer.innerHTML = STATE.wishlist.map(p => `
        <div class="cart-item">
          <div class="cart-item-thumb">
            <img src="${p.image}" alt="${p.name}">
          </div>
          <div class="cart-item-details">
            <h5>${p.name}</h5>
            <div class="cart-item-variant">${p.scentFamily} &bull; ${p.subtitle}</div>
            <div class="cart-item-price">From $${p.price50}</div>
            <button class="btn btn-outline-gold btn-sm" style="margin-top:6px; padding:4px 10px;" data-wishlist-to-cart="${p.id}">
              Move to Bag
            </button>
          </div>
          <button class="cart-item-remove" data-wishlist-remove="${p.id}" title="Remove from wishlist" aria-label="Remove">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      `).join('');

      document.querySelectorAll('[data-wishlist-to-cart]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = e.currentTarget.getAttribute('data-wishlist-to-cart');
          addToCart(id, '50ml');
          toggleWishlist(id);
          closeWishlist();
          openCart();
        });
      });

      document.querySelectorAll('[data-wishlist-remove]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const id = e.currentTarget.getAttribute('data-wishlist-remove');
          toggleWishlist(id);
        });
      });
    }
  }

  // ==========================================================================
  // 8. QUICKVIEW MODAL
  // ==========================================================================
  function openQuickview(productId) {
    const perfume = PERFUMES_DATA.find(p => p.id === productId);
    if (!perfume) return;

    const currentSize = STATE.selectedSizes[productId] || '50ml';
    const currentPrice = currentSize === '50ml' ? perfume.price50 : perfume.price100;

    DOM.quickviewContent.innerHTML = `
      <div class="quickview-media">
        <img src="${perfume.image}" alt="${perfume.name}">
      </div>
      <div class="quickview-info">
        <div class="card-meta">
          <span class="card-category">${perfume.scentFamily} &bull; ${perfume.gender}</span>
          <div class="card-rating">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#cba267"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <span>${perfume.rating} / 5.0 (${perfume.reviewsCount} verified connoisseurs)</span>
          </div>
        </div>

        <h2 style="font-size:1.8rem; margin-bottom:4px;">${perfume.name}</h2>
        <div style="font-size:0.85rem; color:var(--gold-light); margin-bottom:16px;">${perfume.subtitle}</div>

        <p style="font-size:0.92rem; line-height:1.7; margin-bottom:20px;">
          ${perfume.description}
        </p>

        <div class="specs-grid">
          <div class="spec-item">
            <h6>Concentration</h6>
            <p>${perfume.specs.concentration}</p>
          </div>
          <div class="spec-item">
            <h6>Longevity</h6>
            <p>${perfume.specs.longevity}</p>
          </div>
          <div class="spec-item">
            <h6>Sillage</h6>
            <p>${perfume.specs.sillage}</p>
          </div>
          <div class="spec-item">
            <h6>Ideal Season</h6>
            <p>${perfume.specs.season}</p>
          </div>
        </div>

        <div style="margin-bottom:18px;">
          <h6 style="font-size:0.75rem; letter-spacing:0.15em; text-transform:uppercase; color:var(--gold-light); margin-bottom:8px;">Olfactory Notes Pyramid</h6>
          <div style="font-size:0.8rem; color:var(--text-muted); line-height:1.6;">
            <div><strong>Top:</strong> ${perfume.notes.top.join(', ')}</div>
            <div><strong>Heart:</strong> ${perfume.notes.heart.join(', ')}</div>
            <div><strong>Base:</strong> ${perfume.notes.base.join(', ')}</div>
          </div>
        </div>

        <div style="display:flex; align-items:center; gap:16px; margin-top:auto; padding-top:16px; border-top:1px solid var(--border-subtle);">
          <div>
            <span id="qv-price" style="font-size:1.6rem; font-family:var(--font-serif); color:var(--gold-light); font-weight:600;">$${currentPrice}</span>
          </div>
          <div class="size-selector" style="margin-bottom:0; flex-grow:1;">
            <button class="size-pill ${currentSize === '50ml' ? 'active' : ''}" id="qv-size-50">50ml Flacon</button>
            <button class="size-pill ${currentSize === '100ml' ? 'active' : ''}" id="qv-size-100">100ml Flacon</button>
          </div>
          <button class="btn btn-gold" id="qv-add-btn">
            Add to Bag
          </button>
        </div>
      </div>
    `;

    let chosenSize = currentSize;
    const size50Btn = document.getElementById('qv-size-50');
    const size100Btn = document.getElementById('qv-size-100');
    const priceDisplay = document.getElementById('qv-price');

    size50Btn.addEventListener('click', () => {
      chosenSize = '50ml';
      size50Btn.classList.add('active');
      size100Btn.classList.remove('active');
      priceDisplay.textContent = `$${perfume.price50}`;
    });

    size100Btn.addEventListener('click', () => {
      chosenSize = '100ml';
      size100Btn.classList.add('active');
      size50Btn.classList.remove('active');
      priceDisplay.textContent = `$${perfume.price100}`;
    });

    document.getElementById('qv-add-btn').addEventListener('click', () => {
      addToCart(productId, chosenSize);
      closeQuickview();
      openCart();
    });

    DOM.siteOverlay.classList.add('open');
    DOM.quickviewModal.classList.add('open');
  }

  function closeQuickview() {
    DOM.quickviewModal.classList.remove('open');
    if (!isAnyDrawerOpen()) {
      DOM.siteOverlay.classList.remove('open');
    }
  }

  // ==========================================================================
  // 9. FRAGRANCE FINDER QUIZ
  // ==========================================================================
  function openQuiz() {
    STATE.quiz.currentStep = 0;
    STATE.quiz.answers = [];
    renderQuizStep();
    DOM.siteOverlay.classList.add('open');
    DOM.quizModal.classList.add('open');
  }

  function closeQuiz() {
    DOM.quizModal.classList.remove('open');
    if (!isAnyDrawerOpen()) {
      DOM.siteOverlay.classList.remove('open');
    }
  }

  function renderQuizStep() {
    const qIndex = STATE.quiz.currentStep;

    if (qIndex >= QUIZ_QUESTIONS.length) {
      renderQuizResult();
      return;
    }

    const q = QUIZ_QUESTIONS[qIndex];

    const dots = document.querySelectorAll('.quiz-step-dot');
    dots.forEach((dot, idx) => {
      if (idx <= qIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    document.getElementById('quiz-step-label').textContent = `Step ${qIndex + 1} of ${QUIZ_QUESTIONS.length}`;
    document.getElementById('quiz-question-title').textContent = q.question;

    const optionsContainer = document.getElementById('quiz-options-container');
    optionsContainer.innerHTML = q.options.map((opt, idx) => `
      <div class="quiz-option-card" data-quiz-opt="${idx}">
        <span style="font-size:0.92rem; color:var(--text-main);">${opt.text}</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--gold-light);"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </div>
    `).join('');

    const prevBtn = document.getElementById('quiz-prev-btn');
    if (prevBtn) {
      prevBtn.style.visibility = qIndex > 0 ? 'visible' : 'hidden';
      prevBtn.onclick = () => {
        STATE.quiz.currentStep--;
        renderQuizStep();
      };
    }

    let selectedOptionIndex = null;
    const nextBtn = document.getElementById('quiz-next-btn');
    nextBtn.onclick = () => {
      if (selectedOptionIndex === null) {
        showToast('Please select an option to continue.', 'error');
        return;
      }
      STATE.quiz.answers[qIndex] = q.options[selectedOptionIndex];
      STATE.quiz.currentStep++;
      renderQuizStep();
    };

    optionsContainer.querySelectorAll('.quiz-option-card').forEach(card => {
      card.addEventListener('click', (e) => {
        optionsContainer.querySelectorAll('.quiz-option-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        selectedOptionIndex = parseInt(card.getAttribute('data-quiz-opt'));
      });
    });
  }

  function renderQuizResult() {
    let matchedId = "mda-03";
    const familyCounts = {};

    STATE.quiz.answers.forEach(ans => {
      if (ans.matchId) {
        matchedId = ans.matchId;
      }
      if (ans.family) {
        familyCounts[ans.family] = (familyCounts[ans.family] || 0) + 1;
      }
    });

    const recommendedPerfume = PERFUMES_DATA.find(p => p.id === matchedId) || PERFUMES_DATA[0];

    DOM.quizModalInner.innerHTML = `
      <div style="text-align:center; padding: 20px 0;">
        <span class="section-eyebrow">Your Olfactory Signature Match</span>
        <h3 style="font-size:2rem; margin-bottom:8px;">${recommendedPerfume.name}</h3>
        <p style="color:var(--gold-light); font-size:0.85rem; margin-bottom:24px;">${recommendedPerfume.subtitle} &bull; ${recommendedPerfume.scentFamily} Profile</p>
        
        <div style="width:160px; height:190px; margin:0 auto 24px auto; border-radius:var(--radius-sm); overflow:hidden; border:1px solid var(--gold-border);">
          <img src="${recommendedPerfume.image}" alt="${recommendedPerfume.name}" style="width:100%; height:100%; object-fit:cover;">
        </div>

        <p style="font-size:0.95rem; line-height:1.7; color:var(--text-muted); max-width:480px; margin:0 auto 28px auto;">
          ${recommendedPerfume.tagline} Formulated to reflect your affinity for deep resonance, pure extracts, and commanding aura.
        </p>

        <div style="display:flex; justify-content:center; gap:16px;">
          <button class="btn btn-gold" id="quiz-result-add-cart">
            Acquire Signature Flacon &bull; $${recommendedPerfume.price50}
          </button>
          <button class="btn btn-outline-gold" id="quiz-result-retake">
            Retake Quiz
          </button>
        </div>
      </div>
    `;

    document.getElementById('quiz-result-add-cart').addEventListener('click', () => {
      addToCart(recommendedPerfume.id, '50ml');
      closeQuiz();
      openCart();
    });

    document.getElementById('quiz-result-retake').addEventListener('click', () => {
      openQuiz();
    });
  }

  // ==========================================================================
  // 10. CHECKOUT FLOW
  // ==========================================================================
  function openCheckout() {
    if (STATE.cart.length === 0) {
      showToast('Your bag is empty. Please select a flacon first.', 'error');
      return;
    }

    closeCart();

    const subtotal = STATE.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discount = STATE.appliedPromo ? (subtotal * STATE.appliedPromo.discountPercent) : 0;
    const shipping = (subtotal >= STATE.shippingThreshold) ? 0 : STATE.shippingCost;
    const total = Math.max(0, subtotal - discount + shipping);

    DOM.checkoutItemsPreview.innerHTML = STATE.cart.map(item => `
      <div style="display:flex; justify-content:space-between; font-size:0.8rem; margin-bottom:8px; color:var(--text-muted);">
        <span>${item.name} (${item.size}) x${item.quantity}</span>
        <span style="color:var(--text-main); font-weight:500;">$${(item.price * item.quantity).toFixed(2)}</span>
      </div>
    `).join('');

    DOM.checkoutSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    if (discount > 0) {
      DOM.checkoutDiscountRow.style.display = 'flex';
      DOM.checkoutDiscount.textContent = `-$${discount.toFixed(2)}`;
    } else {
      DOM.checkoutDiscountRow.style.display = 'none';
    }

    DOM.checkoutShipping.textContent = (shipping === 0) ? 'Complimentary' : `$${shipping.toFixed(2)}`;
    DOM.checkoutFinalTotal.textContent = `$${total.toFixed(2)}`;

    DOM.siteOverlay.classList.add('open');
    DOM.checkoutModal.classList.add('open');
  }

  function closeCheckout() {
    DOM.checkoutModal.classList.remove('open');
    if (!isAnyDrawerOpen()) {
      DOM.siteOverlay.classList.remove('open');
    }
  }

  function handleCheckoutSubmit(e) {
    e.preventDefault();
    const orderRef = 'MDA-' + Math.floor(100000 + Math.random() * 900000);

    DOM.checkoutBody.innerHTML = `
      <div class="order-success-view">
        <div class="order-success-icon">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <span class="section-eyebrow">Commande Confirmée</span>
        <h3 style="font-size:1.8rem; margin-bottom:12px;">Your Flacon Has Been Reserved</h3>
        <p style="color:var(--text-muted); font-size:0.95rem; line-height:1.7; max-width:500px; margin:0 auto 24px auto;">
          Thank you for choosing Maison D'Arôme. Your order <strong>#${orderRef}</strong> is being hand-packaged with insured wax sealing and scheduled for express courier dispatch.
        </p>
        <div style="padding:16px; background:var(--bg-secondary); border-radius:var(--radius-sm); border:1px solid var(--gold-border); max-width:400px; margin:0 auto 28px auto; font-size:0.85rem;">
          <div><strong>Order Reference:</strong> ${orderRef}</div>
          <div><strong>Complimentary Samples:</strong> 2x 2ml Flacons Included</div>
          <div><strong>Courier:</strong> DHL Express Air (2-3 Business Days)</div>
        </div>
        <button class="btn btn-gold" id="order-success-close">Return to Boutique</button>
      </div>
    `;

    STATE.cart = [];
    STATE.appliedPromo = null;
    saveCart();
    updateCartUI();

    document.getElementById('order-success-close').addEventListener('click', () => {
      closeCheckout();
      window.location.reload();
    });
  }

  // ==========================================================================
  // 11. LIVE SEARCH
  // ==========================================================================
  function openSearch() {
    DOM.searchModal.classList.add('open');
    DOM.siteOverlay.classList.add('open');
    DOM.searchInput.value = '';
    renderSearchResults('');
    setTimeout(() => DOM.searchInput.focus(), 100);
  }

  function closeSearch() {
    DOM.searchModal.classList.remove('open');
    if (!isAnyDrawerOpen()) {
      DOM.siteOverlay.classList.remove('open');
    }
  }

  function handleLiveSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    renderSearchResults(query);
  }

  function renderSearchResults(query) {
    if (!query) {
      DOM.searchResultsList.innerHTML = `
        <div style="text-align:center; padding:30px 0; color:var(--text-light); font-size:0.85rem;">
          Type to search our collection by note (e.g. Saffron, Oud, Rose) or fragrance name.
        </div>
      `;
      return;
    }

    const matches = PERFUMES_DATA.filter(p => {
      const allNotes = [...p.notes.top, ...p.notes.heart, ...p.notes.base].join(' ').toLowerCase();
      return p.name.toLowerCase().includes(query) ||
             p.scentFamily.toLowerCase().includes(query) ||
             p.tagline.toLowerCase().includes(query) ||
             allNotes.includes(query);
    });

    if (matches.length === 0) {
      DOM.searchResultsList.innerHTML = `
        <div style="text-align:center; padding:30px 0; color:var(--text-light); font-size:0.85rem;">
          No matching fragrances found for "${query}".
        </div>
      `;
      return;
    }

    DOM.searchResultsList.innerHTML = matches.map(p => `
      <div class="search-result-item" data-search-result-id="${p.id}">
        <div class="search-result-thumb">
          <img src="${p.image}" alt="${p.name}">
        </div>
        <div style="flex-grow:1;">
          <h5 style="font-size:0.95rem; margin-bottom:2px;">${p.name}</h5>
          <span style="font-size:0.75rem; color:var(--gold-light); text-transform:uppercase;">${p.scentFamily} &bull; ${p.subtitle}</span>
          <div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">
            Notes: ${p.notes.heart.join(', ')}
          </div>
        </div>
        <div style="font-family:var(--font-serif); color:var(--gold-light); font-size:1rem; font-weight:600;">
          $${p.price50}
        </div>
      </div>
    `).join('');

    DOM.searchResultsList.querySelectorAll('[data-search-result-id]').forEach(item => {
      item.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-search-result-id');
        closeSearch();
        openQuickview(id);
      });
    });
  }

  // ==========================================================================
  // 12. DRAWER & MODAL HELPERS
  // ==========================================================================
  function openCart() {
    closeAllDrawers();
    DOM.cartDrawer.classList.add('open');
    DOM.siteOverlay.classList.add('open');
  }

  function closeCart() {
    DOM.cartDrawer.classList.remove('open');
    if (!isAnyModalOpen() && !DOM.wishlistDrawer.classList.contains('open')) {
      DOM.siteOverlay.classList.remove('open');
    }
  }

  function openWishlist() {
    closeAllDrawers();
    DOM.wishlistDrawer.classList.add('open');
    DOM.siteOverlay.classList.add('open');
  }

  function closeWishlist() {
    DOM.wishlistDrawer.classList.remove('open');
    if (!isAnyModalOpen() && !DOM.cartDrawer.classList.contains('open')) {
      DOM.siteOverlay.classList.remove('open');
    }
  }

  function openMobileNav() {
    DOM.mobileNav.classList.add('open');
    DOM.siteOverlay.classList.add('open');
  }

  function closeMobileNav() {
    DOM.mobileNav.classList.remove('open');
    if (!isAnyDrawerOpen() && !isAnyModalOpen()) {
      DOM.siteOverlay.classList.remove('open');
    }
  }

  function closeAllDrawers() {
    DOM.cartDrawer.classList.remove('open');
    DOM.wishlistDrawer.classList.remove('open');
    DOM.mobileNav.classList.remove('open');
  }

  function closeAllModals() {
    DOM.quickviewModal.classList.remove('open');
    DOM.quizModal.classList.remove('open');
    DOM.checkoutModal.classList.remove('open');
    DOM.searchModal.classList.remove('open');
    DOM.siteOverlay.classList.remove('open');
  }

  function isAnyDrawerOpen() {
    return DOM.cartDrawer.classList.contains('open') ||
           DOM.wishlistDrawer.classList.contains('open') ||
           DOM.mobileNav.classList.contains('open');
  }

  function isAnyModalOpen() {
    return DOM.quickviewModal.classList.contains('open') ||
           DOM.quizModal.classList.contains('open') ||
           DOM.checkoutModal.classList.contains('open') ||
           DOM.searchModal.classList.contains('open');
  }

  // ==========================================================================
  // 13. TOAST NOTIFICATIONS
  // ==========================================================================
  function showToast(message, type = 'normal') {
    const toast = document.createElement('div');
    toast.className = 'toast';

    const iconSvg = type === 'gold' ? `
      <svg class="toast-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
    ` : type === 'error' ? `
      <svg class="toast-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff5252" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
    ` : `
      <svg class="toast-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
    `;

    toast.innerHTML = `
      ${iconSvg}
      <span class="toast-message">${message}</span>
    `;

    DOM.toastContainer.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }

  // Launch on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
