// import the vue-router library
import {createRouter, createWebHistory} from 'vue-router'

// import the navigation pages we want
import Character from '../components/Character.vue'
import Event from '../components/Event.vue'
import Kizuna from '../components/Kizuna.vue'
import Story from '../components/Story.vue'

// create the url routes
const routes = [
    {path: '/', name:Character, component:Character},
    {path: '/event', name:Event, component:Event},
    {path: '/story', name:Kizuna, component:Kizuna},
    {path: '/kizuna', name:Story, component:Story}
]

//
const router = createRouter({
    history: createWebHistory('/7sinxtasylimbotv/'), 
    routes, 
})


export default router
