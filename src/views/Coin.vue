<template>
    <h1> Heads or Tails?  </h1>
    <button @click="flipCoin">Flip Coin</button>
    <p v-if="coin==='Heads'">    
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/2006_Quarter_Proof.png/780px-2006_Quarter_Proof.png"/> 
    </p>
    <p v-else-if="coin==='Tails'">
        <img src="https://coinappraiser.com/wp-content/uploads/2016/11/Texas.png" >
    </p>
    <p v-else>
        <iframe src='https://gfycat.com/ifr/ArcticMerryJackrabbit' frameborder='0' scrolling='no' allowfullscreen width='640' height='675'></iframe><p> <a href="https://gfycat.com/arcticmerryjackrabbit"></a></p>
    </p>
</template>


<script>

export default{
    data(){
        return{
            coin: "",
        }
       
    },
    methods: {
        flipCoin() {
            if(Math.random() < 0.5) {
                this.coin = "Heads";
            }
            else {
                this.coin = "Tails";
            }
        }

    }
};
</script>
