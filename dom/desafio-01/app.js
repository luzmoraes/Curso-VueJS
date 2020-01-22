new Vue({
    el: '#desafio',
    data: {
        name: 'Anderson Moraes',
        age: 38,
        linkImage: 'https://pbs.twimg.com/media/DNp8LTUUQAAiIzl.jpg'
    },
    methods: {
        calcAge() {
            return this.age * 3
        },
        rondomNumber() {
            return Math.random()
        }
    }
})