const app = Vue.createApp({
    data() {
        return {
            isOpen: false
        }
    }, 
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
        }
    }
})