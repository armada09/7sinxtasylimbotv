<template>
<h1>this is the event Stories</h1>
<div>
    <div class="accordion">
      <div v-for="(item, key) in eventdb" :key="key">
        <div class="accordion-item">
          <h2 class="accordion-header">
              <button class="accordion-button" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      :data-bs-target="'#'+key">
                  {{ key }}
              </button>
          </h2>
          <div :id="key" class="accordion-collapse collapse " >
            <div class="accordion-body">
                <div>
                  <div :id="'waifucarousel' + key" class="carousel slide" data-bs-ride="carousel">
                    <!-- Carousel Indicators -->
                    <div class="carousel-indicators">
                      <button
                        v-for="(img, index) in item"
                        :key="index"
                        type="button"
                        :data-bs-target="'#waifucarousel' + key "
                        :data-bs-slide-to="index"
                        :class="{'active': index === 0}"
                        aria-current="true"
                        :aria-label="'Slide ' + (index + 1)"
                      ></button>
                    </div>

                    <!-- Carousel Inner -->
                    <div class="carousel-inner">
                      <div v-for="(img, index) in item" :key="index" 
                            :class="{'carousel-item': true, 'active': index === 0}">
                        <img :src="img" class="d-block w-100" alt="" />
                      </div>
                    </div>

                    <!-- Carousel Controls -->
                    <button
                      class="carousel-control-prev"
                      type="button"
                      :data-bs-target="'#waifucarousel' + key"
                      data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      :data-bs-target="'#waifucarousel' + key"
                      data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>

</template>

<script setup>
import {ref} from 'vue'
import eventdb from '../event.js'

ref([eventdb])

console.log(eventdb)

</script>

<style>
</style>