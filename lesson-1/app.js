const app = new Vue({
    el: "#app",
    data: {
        message: 'Hello Vue!',
        age: 25,
        text: ''
    },
    methods: {
        clickMe(){
            this.message = 'Hello World'
        }
    }
})

const app2 = new Vue({
    el: "#app2",
    data: {
        text: 'Hello Vue!'
    }
})