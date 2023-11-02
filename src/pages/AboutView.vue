<template body>
    <div class="q-pa-md body ">
        <div class="col-8">
            <q-toolbar class="q-ma-sm">
                <h3 class="text-muted">Dashboard Two</h3>
                <q-space></q-space>
                <q-btn color="green-2" text-color="black" icon="fas fa-cog" />
            </q-toolbar>
            <div class="row">
                <div class="col-4">
                    <AccountDash />
                </div>
                <div class="col-8">
                    <hr>
                    <!-- SECTION -->
                    <div class="container">
                        <div class="row">
                            <div class="q-pa-md col-md-4">
                                <q-card class="my-card bg-purple text-white">
                                    <div class="row">
                                        <div class="col-md-4 flex flex-center">
                                            <div class="items-center">
                                                <q-icon name="fa fa-envelope fa-xl" size="lg"></q-icon>
                                            </div>
                                        </div>
                                        <div class="col-md-8">
                                            <q-card-section>
                                                <div class="text-subtitle2">Total Posts</div>
                                                <div class="text-h6">100</div>
                                            </q-card-section>
                                        </div>
                                    </div>
                                </q-card>
                            </div>
                            <div class="q-pa-md col-md-4">
                                <q-card class="my-card bg-purple text-white">
                                    <div class="row">
                                        <div class="col-md-4 flex flex-center">
                                            <q-icon name="fas fa-comment-alt fa-lg" size="lg"></q-icon>
                                        </div>
                                        <div class="col-md-8">
                                            <q-card-section>
                                                <div class="text-subtitle2">Total Posts</div>
                                                <div class="text-h6">100</div>
                                            </q-card-section>
                                        </div>
                                    </div>
                                </q-card>
                            </div>
                            <div class="q-pa-md col-md-4">
                                <q-card class="my-card bg-purple text-white">
                                    <div class="row">
                                        <div class="col-md-4 flex flex-center">
                                            <q-icon name="fas fa-hand-holding-usd" size="lg"></q-icon>
                                        </div>
                                        <div class="col-md-8">
                                            <q-card-section>
                                                <div class="text-subtitle2">Total Posts</div>
                                                <div class="text-h6">100</div>
                                            </q-card-section>
                                        </div>
                                    </div>
                                </q-card>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="q-pa-md">
                                    <q-card class="my-card" flat bordered>
                                        <q-card-section class="bg-green-3">
                                            <div class="text-h6">Total Graph</div>
                                        </q-card-section>
                                        <q-separator></q-separator>
                                        <q-card-section>
                                            <div>
                                                <GraphCompBar />
                                            </div>
                                        </q-card-section>
                                    </q-card>
                                </div>
                            </div>
                            <div class="col-md-8 items-center">
                                <div class="container row q-pa-xl">
                                    <div class="col-md-6">
                                        <q-card class="q-mx-md" bordered>
                                            <div class="flex flex-center column">
                                                <q-circular-progress show-value font-size="12px" value="70" size="100px"
                                                    :thickness="0.22" color="green-7" track-color="green-2" class="q-ma-md">
                                                    784 Patients
                                                </q-circular-progress>
                                                <div>
                                                    <q-badge color="green-2" rounded class="q-mr-sm" />Woman 40%
                                                </div>
                                                <div class="q-mb-xl">
                                                    <q-badge color="green-7" rounded class="q-mr-sm" />Man 60%
                                                </div>
                                            </div>
                                        </q-card>
                                    </div>
                                    <div class="col-md-6">
                                        <q-card class="q-mx-md" bordered>
                                            <div class="flex flex-center column">
                                                <q-circular-progress show-value font-size="12px" value="70" size="100px"
                                                    :thickness="0.22" color="green-7" track-color="green-2" class="q-ma-md">
                                                    784 Patients
                                                </q-circular-progress>
                                                <div>
                                                    <q-badge color="green-2" rounded class="q-mr-sm" />Woman 40%
                                                </div>
                                                <div class="q-mb-xl">
                                                    <q-badge color="green-7" rounded class="q-mr-sm" />Man 60%
                                                </div>
                                            </div>
                                        </q-card>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AccountDash from '../components/AccountDash.vue'
import GraphCompBar from '../components/GraphCompBar.vue'
export default {
    name: "AboutView",
    components: {
        GraphCompBar,
        AccountDash,
    }
}
</script>
  
<style scoped></style>
  
  