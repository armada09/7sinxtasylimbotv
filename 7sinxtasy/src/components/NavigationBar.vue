<template>
    <div class=container>
        <div class="row">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="navbar" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/7sinxtasylimbotv/">Character</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/7sinxtasylimbotv/event">Events</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/7sinxtasylimbotv/story">Story</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/7sinxtasylimbotv/kizuna">Kizuna</router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<script setup>
</script>

<style scope>

.navbar {
  width: 100%;  /* Makes images responsive */
  height: auto;
  object-fit: cover;  /* Ensures images maintain aspect ratio */
}

</style>