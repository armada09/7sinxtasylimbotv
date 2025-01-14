// import the vue-router library
import {createRouter, createWebHistory} from 'vue-router'

// import the navigation pages we want
import Character from '../components/Character.vue'
import Event from '../components/Event.vue'
import Kizuna from '../components/Kizuna.vue'
import Story from '../components/Story.vue'

// create the url routes
const routes = [
    {path: '/', redirect: '/7sinxtasylimbotv/' },
    {path: '/7sinxtasylimbotv/', name:Character, component:Character},
    {path: '/7sinxtasylimbotv/event', name:Event, component:Event},
    {path: '/7sinxtasylimbotv/story', name:Story, component:Story},
    {path: '/7sinxtasylimbotv/kizuna', name:Kizuna, component:Kizuna}
]

//
const router = createRouter({
    history: createWebHistory(''), 
    routes, 
})


export default router
