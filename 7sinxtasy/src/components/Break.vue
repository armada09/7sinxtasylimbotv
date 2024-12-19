<template>
    <div class=container>
        <div class="row">
            <div>
                <div v-for="key in buttonkeys"  class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-primary"  @click="changeImage(key)" >{{ key }}</button>
                </div>
            </div>
            <div class="col-12">
                <template v-if="showl2d == true">
                  <Animation :l2dpath="img_url" />
                </template>
                <template v-else>
                  <img :src="img_url" />
                </template> 
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import Animation from './Animation.vue'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
});

// array of all the keys of the selected waifu which becomes the button labels
const buttonkeys = Object.keys(props.item)

// inital value of the url string
const img_url = ref("")


// determine which page or template to show depending on click
let showl2d = ref(false)

// function to change the url based on the button clicked.
const changeImage = (key) => {
    // check if the button clicked belongs to the ld family
    if (/^l2d.*$/.test(key)) {
        // check to see if the ld has an actual value or is empty string
        if (props.item[key] == "") {
            showl2d.value = false
        }
        else {
            showl2d.value = true
            img_url.value = props.item[key]
        }
    }
    else {
      img_url.value = props.item[key]
      showl2d.value = false
    }
}
</script>

<style scoped>

img {
  width: 100%;  /* Makes images responsive */
  height: auto;
  object-fit: cover;  /* Ensures images maintain aspect ratio */
}

button {
    margin-right: 5px;    /* Optional: space between buttons */
}

</style>