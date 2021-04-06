import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createStore} from 'vuex'

const store = createStore({
    state() {
        return {
            order: [],
            quantity: [],
            count: 0,
            tipPercent: 0,
            specialInstructions: "",
            review: "",
            paymentOrder: [],
            paymentQuantity: [],
            paymentCount: 0,
            userMode: 0,
            is21: false,
            alcoholCode: "1234",
            isFirstTimeChildMode: true,
            childModePassWord: "",
            milk: false,
            eggs: false,
            fish: false,
            Peanuts: false,
            wheat: false,
            soy: false,
            //User Mode
                //0 = reg customer
                //1 = child
    }
},
mutations: {
    increment (state) {
        state.count++;
    },
    make21True (state) {
        state.is21 = true;
    }

}

})



const app = createApp(App).use(router).use(store).mount('#app')

