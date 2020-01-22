new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        showAlert() {
            alert('Mostrando o alerta!')
        },
        setValue(event) {
            this.valor = event.target.value
        }
    }
})