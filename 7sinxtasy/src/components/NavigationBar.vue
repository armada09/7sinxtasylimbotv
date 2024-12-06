<template>
    <div class=container>
        <div class="row">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="/7sinxtasylimbotv/">Character</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/7sinxtasylimbotv/event">Events</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/7sinxtasylimbotv/story">Story</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="/7sinxtasylimbotv/kizuna">Kizuna</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

        <!-- this is where the page is used to show the pages of the navigation here -->
        <div class="row">
            <div class="col-12">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scope>
</style>