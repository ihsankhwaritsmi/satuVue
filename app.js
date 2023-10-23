const app = Vue.createApp({
    data(){
        return{
            input1:'',
            Outp: '',
        }
    },
    methods: {
        PressedB(){
            let hasil = eval(this.input1)
            this.Outp = hasil
        },
    },
})

app.mount('#app')