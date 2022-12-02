const app = new Vue({
    el: "#app",
    data: {
        message: "Hello Vue 2nd lesson",
        url: 'https://picsum.photos/400',
        h: 600,
        w:800,
        img: '<img src="https://picsum.photos/400" alt="">',
        someText: '',
        lang: 'en',
        text: 'salom'

    },
    methods: {
        clickME(){
            this.h += 50
            this.w += 50
            console.log('ok');
        },
        clickMeDouble(){
            console.log('Double Clicked');
        },
        mouseEntered(){
            this.message = 'Salom VueJS'
        },
        submitME(){
            console.log('Submitted!');
        },
        log(){
            console.log('ok');
        },
        addHundred(){
            console.log('hundred');
            return this.h + 100
        },
        addTen(){
            console.log('ten');
            return this.w + 10
        }
    },
    computed: {
        hudredDollars(){
            return this.h / 100
        }
    }
});