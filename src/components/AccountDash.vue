<template>
    <q-card class="my-card q-pa-sm colorCard" flat height="300">
        <h6 class="text-weight-bolder q-ml-lg">Account</h6>
        <q-list>
            <q-item clickable :active="link === 'Dashboard'" @click="link = 'Dashboard'" active-class="border text-green">
                <q-item-section avatar class="flex-center flex column">
                    <q-icon name="fas fa-tachometer-alt" />
                </q-item-section>
                <q-item-section class="q-ml-md">Dashboard</q-item-section>
            </q-item>
            <q-item clickable :active="link === 'Cashbox'" @click="link = 'Cashbox'" active-class="border text-green">
                <q-item-section avatar class="flex flex-center column">
                    <q-icon name="fas fa-box-open" />
                </q-item-section>
                <q-item-section class="q-ml-md">Cashbox</q-item-section>
            </q-item>
            <q-item clickable :active="link === 'Contact'" @click="link = 'Contact'" active-class="border text-green">
                <q-item-section avatar class="flex flex-center column">
                    <q-icon name="fas fa-address-book" />
                </q-item-section>
                <q-item-section class="q-ml-md">Contact</q-item-section>
            </q-item>
            <q-item clickable :active="link === 'Cash'" @click="link = 'Cash'" active-class="border text-green ">
                <q-item-section avatar class="flex flex-center column">
                    <q-icon name="fas fa-credit-card" />
                </q-item-section>
                <q-item-section class="q-ml-md">Cash</q-item-section>
            </q-item>
            <q-item clickable :active="link === 'Orders'" @click="link = 'Orders'" active-class="border text-green">
                <q-item-section avatar class="flex flex-center column">
                    <q-icon name="fas fa-copy" />
                </q-item-section>
                <q-item-section class="q-ml-md">Orders</q-item-section>
                <q-item-section side class="styleme">
                    <q-badge label="3" color="green" />
                </q-item-section>
            </q-item>
            <q-item clickable :active="link === 'Invoices'" @click="link = 'Invoices'" active-class="border text-green">
                <q-item-section avatar class="flex flex-center column">
                    <q-icon name="fas fa-file-download" />
                </q-item-section>
                <q-item-section class="q-ml-md">Invoices</q-item-section>
                <q-item-section side class="styleme">
                    <q-badge label="85.06$" color="orange" />
                </q-item-section>
            </q-item>
            <q-item clickable :active="link === 'Community'" @click="link = 'Community'" active-class="border text-green">
                <q-item-section avatar class="flex flex-center column">
                    <q-icon name="fas fa-satellite" />
                </q-item-section>
                <q-item-section class="q-ml-md">Community</q-item-section>
                <q-item-section side class="styleme">
                    <q-badge label="0.00$" color="grey" />
                </q-item-section>
            </q-item>
        </q-list>
    </q-card>
</template>

<script>

</script>

<style scoped>
.colorCard {
    background: #f6f8f7;
    height: 660px;
    border-radius: 25px;
}

.q-item__section--avatar {
    color: black !important;
    position: relative;
    margin-left: 0.4rem;

}

.border {
    background: #60c471;
    border-radius: 50%;
    width: 55px;

}

.styleme {
    margin-left: 165px;
}
</style>