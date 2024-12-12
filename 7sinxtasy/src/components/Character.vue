<template>
    <h1>this is the character waifu page</h1>
    <template v-if="selectedItem">
            <Break :item="selectedItem" />
        </template>
        <template v-else>
            <div class="imgGrid">
                <div v-for="(item, key) in db" :key="key">
                    <img @click="clickMe(item)" :src="item.break1" alt="Image description"/>
                </div>
            </div>
        </template>
</template>

<script setup>
import {ref} from 'vue'
// Importing db.js
import db from '../db.js' 
// import the Break vue component.
import Break from './Break.vue'

ref([db])

const selectedItem = ref(null)

/// Method on image clicked 
const clickMe = (item) => {
    selectedItem.value = item
}

</script>

<style scoped>
.imgGrid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);  /* 4 equal-width columns */
    grid-template-rows: repeat(4, 1fr);     /* 4 equal-height rows */
    gap: 10px;  /* Optional: spacing between grid items */
}

img {
  width: 100%;  /* Makes images responsive */
  height: auto;
  object-fit: cover;  /* Ensures images maintain aspect ratio */
}
</style>