<template>
    <h1>Sinful Followers Enjoy the Main Chapter Stories !</h1>
    <div class="accordion">
          <div v-for="(item, key) in storydb" :key="key">
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
                    <div v-for="(value, key, index) in item" :key="key"
                            :class="index % 2 === 0 ? 'container' : 'container darker'">
                        <img :src="'./assets/face/' + value[0]" alt="Avatar" style="width:100%">
                        <h5>{{ value[1] }} </h5> 
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

</template>

<script setup>
    import {ref} from 'vue'
    import storydb from '../story.js'
    ref(storydb);
</script>

<style scoped>
.container {
    border: 2px solid #dedede;
    background-color: #f1f1f1;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
}

.darker {
    border-color: #ccc;
    background-color: #ddd;
}

.container::after {
    content: "";
    clear: both;
    display: table;
}

.container img {
    float: left;
    max-width: 60px;
    width: 100%;
    margin-right: 20px;
    border-radius: 50%;
}

.container img.right {
    float: right;
    margin-left: 20px;
    margin-right:0;
}

.time-right {
    float: right;
    color: #aaa;
}

.time-left {
    float: left;
    color: #999;
}
</style>
