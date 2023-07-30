import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faEnvelope, faHandsClapping, faHandsWash, faUserAstronaut,
} from '@fortawesome/free-solid-svg-icons'

import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitch, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faHandsWash, faHandsClapping, faInstagram, faTwitch, faTwitter, faYoutube, faFacebook, faLinkedin, faGithub, faUserAstronaut, faWhatsapp, faEnvelope)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
