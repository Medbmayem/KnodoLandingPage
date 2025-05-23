// Application Vue.js pour la landing page Knodo

const { createApp } = Vue;

createApp({
  data() {
    return {
      currentLanguage: 'fr', // Langue par défaut: français
    }
  },
  methods: {
    toggleLanguage() {
      // Bascule entre français et anglais
      this.currentLanguage = this.currentLanguage === 'fr' ? 'en' : 'fr';
      
      // Mise à jour du titre de la page selon la langue
      document.title = this.currentLanguage === 'fr' 
        ? 'Knodo - Formation immersive et projets réels' 
        : 'Knodo - Immersive training and real projects';
      
      // Mise à jour de l'attribut lang de la balise html
      document.documentElement.lang = this.currentLanguage;
    }
  },
  mounted() {
    // Détection de la langue du navigateur (optionnel)
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('en')) {
      this.currentLanguage = 'en';
      document.title = 'Knodo - Immersive training and real projects';
      document.documentElement.lang = 'en';
    }
    
    // Initialisation des tooltips Bootstrap (si utilisés)
    if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
      const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
      });
    }
    
    // Animation au défilement (optionnel)
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight - 100) {
          element.classList.add('animated');
        }
      });
    };
    
    // Ajout de la classe animate-on-scroll aux éléments à animer
    document.querySelectorAll('.method-step, .offer-card, .parcours-card, .why-choose-item').forEach(el => {
      el.classList.add('animate-on-scroll');
    });
    
    // Écoute de l'événement de défilement
    window.addEventListener('scroll', animateOnScroll);
    
    // Animation initiale au chargement
    animateOnScroll();
  }
}).mount('#app');
