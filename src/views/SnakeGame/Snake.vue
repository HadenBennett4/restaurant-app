<template>
  <br>
  <div id="game"></div>
  <div id="game-board"></div>
</template>

<script>

export default {
    created() {
        let game = document.createElement('script');
        game.setAttribute('src', "game.js");
        document.head.appendChild(game);
    }
}
</script>


<style>
#game-board {
    background-color: #BBB;
    margin: auto;
    width: 85vmin;
    height: 85vmin;
    display: grid;
    grid-template-rows: repeat(21, 1fr);
    grid-template-columns: repeat(21, 1fr);
}

.snake {
    background-color: hsl(200, 100%, 50%);
    border: .25vmin solid black;
}

.food {
    background-color: hsl(50, 100%, 50%);
    border: .25vmin solid black;
}
</style>