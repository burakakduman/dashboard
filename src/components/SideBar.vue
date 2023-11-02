<template>
    <q-drawer show-if-above side="left" behavior="desktop" :width="90" class="colorBackGround">
        <div class="flex flex-center column q-mt-lg q-mb-lg">
            <q-icon name="fas fa-box" size="md" style="color:#adf8a6" />
        </div>
        <div class="flex flex-center column q-mt-sm q-mb-md">
            <q-list>
                <router-link to="/" class="navbuton">
                    <q-item clickable :active="link === 'home'" @click="link = 'home'" active-class="">
                        <q-item-section avatar class="flex flex-center column">
                            <q-icon name="fas fa-tachometer-alt" />
                        </q-item-section>
                    </q-item>
                </router-link>
                <router-link to="/about" class="navbuton">
                    <q-item clickable :active="link == 'link2'" @click="link2" active-class="">
                        <q-item-section avatar class="flex flex-center column">
                            <q-icon name="fas fa-clipboard" />
                        </q-item-section>
                    </q-item>
                </router-link>
                <router-link to="/todopage" class="navbuton">
                    <q-item clickable :active="link === 'comment'" @click="link = 'comment'" active-class="">
                        <q-item-section avatar class="flex flex-center column">
                            <q-icon name="fas fa-comments" />
                        </q-item-section>
                    </q-item>
                </router-link>
                <q-item clickable :active="link === 'chart'" @click="link = 'chart'" active-class="">
                    <q-item-section avatar class="flex flex-center column">
                        <q-icon name="fas fa-chart-bar" />
                    </q-item-section>
                </q-item>
                <q-item clickable :active="link === 'cog'" @click="link = 'cog'" active-class="">
                    <q-item-section avatar class="flex flex-center column">
                        <q-icon name="fas fa-cog" />
                    </q-item-section>
                </q-item>
            </q-list>
        </div>
        <div
            style="position:absolute; bottom:20px; margin-left:auto; margin-right:auto; left:0; right:0; text-align:center;">
            <div>
                <q-avatar>
                    <img src="https://cdn.quasar.dev/img/avatar1.jpg" />
                </q-avatar>
            </div>
            <div>
                <q-icon name="fas fa-user-plus" size="20px" color="white" class="q-my-md"></q-icon>
            </div>
            <q-icon name="fas fa-sign-out-alt" size="20px" color="white"></q-icon>
        </div>
    </q-drawer>
</template>
<script>
import { ref } from "vue";
export default {
    setup() {
        return {
            link: ref('home'),
        }
    }
}
</script>
<style >
.colorBackGround {
    background: #8ac186;
}

.q-item_section--side {
    padding-right: 0px !important;
}

.q-item_section--avatar {
    color: white !important;
}

.q-item {
    padding: 16px 0px !important;
}

.navbuton {
    text-decoration: none !important;
}</style>