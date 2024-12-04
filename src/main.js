import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n';


import App from './App.vue'
import router from './router'

import './assets/main.scss'
import './helpers/animations.js'


const messages = {
    en: {
        heroTitle: "Full Stack DEVELOPER",
        heroSubtitle: "DRIVEN TO DELIVER EXCEPTIONAL DIGITAL EXPERIENCES",
        scrollText: "SCROLL DOWN FOR MORE . SCROLL DOWN FOR MORE .",
        'about.title': "ABOUT",
        'about.disclaimer': "YEP, THAT'S ME! A PROUDLY ORIGINAL PHOTOGRAPH",
        'about.description1': "Hi there! I am Muhammad Talha, a passionate and detail-oriented",
        'about.description2': "Full-Stack Developer",
        'about.description3': "dedicated to building seamless and innovative web applications. With expertise in both front-end and back-end development, I thrive on transforming complex ideas into functional, user-friendly, and visually appealing digital solutions.",
        'about.description4': "I have a keen eye for design, architecture, and performance optimization, ensuring that every project delivers an exceptional user experience.",
        'about.description5': "Beyond coding, I enjoy exploring new technologies, enhancing my skills, and sharing knowledge with others.",
        'about.description6': "When I’m not developing, you’ll often find me playing games, staying active at the gym, enjoying basketball, or relaxing with a great movie. I am constantly seeking new challenges and opportunities to grow, and I’m excited to contribute to the dynamic and ever-evolving tech industry.",
        'about.description7': "Thanks for visiting, and I look forward to connecting with you soon!",
        'about.buttonText': "GET IN TOUCH",
        skills: "Skills",
        work: "My Work",
        contact: "Contact Me",
    },
    fr: {
        heroTitle: "DÉVELOPPEUR Full Stack",
        heroSubtitle: "IMPULSÉ À LIVRER DES EXPÉRIENCES NUMÉRIQUES EXCEPTIONNELLES",
        scrollText: "DÉFILEZ VERS LE BAS POUR PLUS . DÉFILEZ VERS LE BAS POUR PLUS .",
        'about.title': "À PROPOS",
        'about.disclaimer': "OUI, C'EST MOI! UNE PHOTO ORIGINALE AVEC FIERTE",
        "about.description1": "Bonjour! Je suis Muhammad Talha, un développeur Full-Stack passionné et attentif aux détails",
        "about.description2": "Développeur Full-Stack",
        "about.description3": "dédié à la création d'applications web innovantes et fluides. Avec des compétences en développement front-end et back-end, j'aime transformer des idées complexes en solutions numériques fonctionnelles, conviviales et visuellement attrayantes.",
        "about.description4": "J'ai un œil attentif pour le design, l'architecture et l'optimisation des performances, garantissant que chaque projet offre une expérience utilisateur exceptionnelle.",
        "about.description5": "Au-delà du codage, j'aime explorer de nouvelles technologies, améliorer mes compétences et partager mes connaissances avec les autres.",
        "about.description6": "Lorsque je ne développe pas, vous me trouverez souvent en train de jouer, de rester actif à la salle de sport, de jouer au basket ou de me détendre avec un bon film. Je suis toujours à la recherche de nouveaux défis et d'opportunités de croissance, et je suis impatient de contribuer à l'industrie technologique dynamique et en constante évolution.",
        "about.description7": "Merci de votre visite, et j'ai hâte de vous contacter bientôt!",
        "about.buttonText": "CONTACTEZ-NOUS",
        skills: "Compétences",
        work: "Mon Travail",
        contact: "Contactez Moi",
    },
};

// Create i18n instance
const i18n = createI18n({
    locale: 'en', // Set default language
    fallbackLocale: 'en', // Fallback language in case translation is missing
    messages, // Provide translation messages
});

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n);


app.mount('#app')
