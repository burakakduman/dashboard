<template>
    <q-drawer show-if-above side="right" brdered :width="300">
        <q-toolbar class="q-mt-lg">
            <q-space />
            <!-- <q-btn round icon="notifications">
                <q-badge floating color="green" rounded />
            </q-btn> -->
            <q-btn-dropdown round icon="notifications">
                <!-- <q-badge floating color="green" rounded /> -->
                <div class="row no-wrap q-pa-md">
                    <div class="column">
                        <div class="text-h6 q-mb-md">Settings</div>
                        <q-toggle v-model="mobileData" icon="alarm" label="Notifications" />
                        <q-toggle v-model="bluetooth" label="Vibrations" checked-icon="check" color="green"
                            unchecked-icon="clear" />
                    </div>

                    <q-separator vertical inset class="q-mx-lg" />

                    <div class="column items-center">
                        <q-avatar size="72px">
                            <img src="https://cdn.quasar.dev/img/avatar6.jpg">
                        </q-avatar>

                        <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

                        <q-btn color="primary" label="Logout" push size="sm" v-close-popup />
                    </div>
                </div>
            </q-btn-dropdown>
            <!--  -->
        </q-toolbar>

        <div class="flex flex-center column">
            <q-avatar size="100px">
                <img src="https://cdn.quasar.dev/img/avatar6.jpg" />
            </q-avatar>
            <q-item-label caption class="q-my-md">Your activity Today</q-item-label>
            <div class="text-h5">85%</div>
        </div>

        <q-card class="q-mx-md" flat bordered>
            <q-toolbar class="">
                <div class="text-overline">All Activity</div>
                <q-space />
                <q-btn round icon="fas fa-chevron-right" size="10px" color="green"></q-btn>
            </q-toolbar>
        </q-card>

        <q-card class="q-mx-md q-mt-lg" bordered>
            <q-toolbar>
                <div class=" text-overline text-weight-bolder">Support Chat</div>
                <q-space />
                <q-avatar size="25px">
                    <img src="https://cdn.quasar.dev/img/avatar1.jpg" />
                </q-avatar>
                <div class="text-overline q-ml-sm">Joseph</div>
            </q-toolbar>
            <q-seperator />
            <div class="q-pamd row justify-center">
                <div style="width=100%; max-width=400px">
                    <q-chat-message name="me" avatar="https://cdn.quasar.dev/img/avatar4.jpg" :text="['hey, how are you?']"
                        sent stamp="7 minutes ago" />
                    <q-chat-message name="JAne" avatar="https://cdn.quasar.dev/img/avatar3.jpg"
                        :text="['doing fine, how r you?']" stamp="4 minutes ago" />
                </div>
            </div>
            <q-input bottom-slots v-model="text" label="Your message.." class="q-mx-sm">
                <template v-slot:after>
                    <q-btn round dense flat icon="fas fa-paper-plane" color="green" size="10px" class="q-mt-md" />
                </template>
            </q-input>
        </q-card>
    </q-drawer>
</template>



<style></style>

<script>
import { ref } from 'vue'

export default {
    setup() {
        return {
            mobileData: ref(false),
            bluetooth: ref(false)
        }
    }
}
</script>