import { createRouter, createWebHistory } from 'vue-router'
import Menu from '../views/menu/Menu.vue'
import Entrees from '../views/Entrees.vue'
import Sides from '../views/Sides.vue'
import AlcoholicDrinks from '../views/AlcoholicDrinks.vue'
import NonAlcoholicDrinks from '../views/NonAlcoholicDrinks.vue'
import Appetizers from '../views/Appetizers.vue'
import Desserts from '../views/Desserts.vue'
import Games from '../views/Games.vue'
import Music from '../views/Music.vue'
import Checkout from '../views/Checkout.vue'
import Help from '../views/Help.vue'
import Refill from '../views/Refill.vue'
import NotFound from '../views/NotFound.vue'
import Payment from '../views/Payment.vue'
import PaymentComplete from '../views/paymentComplete.vue'
import orderComplete from '../views/orderComplete.vue'
import Login from '../views/Login.vue'
import TicTacToe from '../views/TicTacToe.vue'
import Snake from '../views/SnakeGame/Snake.vue'
import ButtonClicker from '../views/ButtonClicker.vue'
import Pay from '../views/Pay.vue'
import Rock from '../views/musicPlaylists/Rock.vue'
import Pop from '../views/musicPlaylists/Pop.vue'
import EDM from '../views/musicPlaylists/EDM.vue'
import Jazz from '../views/musicPlaylists/Jazz.vue'
import Classical from '../views/musicPlaylists/Classical.vue'
import CashPayment from '../views/cashPayment.vue'
import AlcoholCode from '../views/AlcoholCode.vue'
import ChildModeCode from '../views/ChildModeCode.vue'
import CheckChildModePassWord from '../views/CheckChildCodePassword'
import Custom from '../views/musicPlaylists/Custom.vue'
import Coin from '../views/Coin.vue'


const routes = [
  {
    path: '/',
    redirect: '/menu'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/pay',
    name: 'Pay',
    component: Pay
  },
  {
    path: '/menu/Entrees',
    name: 'Entrees',
    component: Entrees,
    props: true
  },
  {
    path: '/menu/Kids Menu',
    name: 'Sides',
    component: Sides,
    props: true
  },
  {
    path: '/menu/Alcoholic-Drinks',
    name: 'AlcoholicDrinks',
    component: AlcoholicDrinks,
    props: true
  },
  {
    path: '/menu/Non-Alcoholic-Drinks',
    name: 'NonAlcoholicDrinks',
    component: NonAlcoholicDrinks,
    props: true
  },
  {
    path: '/menu/Desserts',
    name: 'Desserts',
    component: Desserts,
    props: true
  },
  {
    path: '/menu/Appetizers',
    name: 'Appetizers',
    component: Appetizers,
    props: true
  },
  {
    path: '/games',
    name: 'Games',
    component: Games
  },
  {
    path: '/music',
    name: 'Music',
    component: Music
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/help',
    name: 'Help',
    component: Help
  },
  {
    path: '/refill',
    name: 'Refill',
    component: Refill
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path:'/payment',
    name: 'Payment',
    component: Payment
  },
  {
    path:'/paymentComplete',
    name: 'PaymentComplete',
    component: PaymentComplete
  },
  {
    path:'/orderComplete',
    name: 'OrderComplete',
    component: orderComplete
  },
  {
    path: '/games/TicTacToe',
    name: 'TicTacToe',
    component: TicTacToe
  },
  {
    path: '/games/Snake',
    name: 'Snake',
    component: Snake
  },
  {
    path: '/games/ButtonClicker',
    name: 'ButtonClicker',
    component: ButtonClicker
  },
  {
    path: '/games/Coin',
    name: 'Coin',
    component: Coin
  },
  {
    path: '/music/Rock',
    name: 'Rock',
    component: Rock
  },
  {    
    path: '/music/Fancy-Restaurant-Music',
    name: 'Jazz',
    component: Jazz,
  },
  {    
    path: '/music/Pop',
    name: 'Pop',
    component: Pop,
  },
  {    
    path: '/music/Classical',
    name: 'Classical',
    component: Classical,
  },
  {    
    path: '/music/EDM',
    name: 'EDM',
    component: EDM,
  },
  {    
    path: '/music/Manager\'s-choice',
    name: 'Manager\'s-choice',
    component: Custom
  },
  {
    path: '/cashPayment',
    name: 'CashPayment',
    component: CashPayment,
  }
  ,
  {
    path: '/alcoholCode',
    name: 'AlcoholCode',
    component: AlcoholCode,
  },
  {
    path: '/childModeCode',
    name: 'ChildModeCode',
    component: ChildModeCode,
  },
  {
    path: '/checkChildModePassWord',
    name: "CheckChildModePassWord",
    component: CheckChildModePassWord
  }
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
