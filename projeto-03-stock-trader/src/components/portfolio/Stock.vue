<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card class="blue darken-3 white--text">
            <v-card-title class="headline">
                <strong>
                        {{ stock.name }} 
                        <small>
                            (Preço: {{ stock.price }} | Qtd: {{ stock.quantity }})
                        </small>
                    </strong>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill-height>
                <v-text-field label="Quantidade" type="number"
                    v-model.number="quantity" />
                <v-btn class="blue darken-3 white--text"
                    :disabled="quantity <= 0 || !Number.isInteger(quantity)"
                    @click="sellStock">Vender</v-btn>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
/* Nesse componente vamos chamar a action com o mapAction */
import { mapActions } from 'vuex'

export default {
    props: [ 'stock' ],
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
        /*
        * não podemos chamar dessa maneira pq já tem um método com esse nome e daria
        * conflito, por isso temos que atribuir outro nome 'sellStockActions'
        ...mapActions(['sellStock']),
        */
        ...mapActions({ sellStockActions: 'sellStock' }),
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }
            /* E com o mapActions, ao invés disso: */
            // this.$store.dispatch('sellStock', order)
            /* Chamamos a ação assim: */
            this.sellStockActions(order)

            this.quantity = 0
        }
    },
}
</script>

<style>

</style>