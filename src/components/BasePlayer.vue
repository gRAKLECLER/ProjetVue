<template>
  <div class="audio">
    <div>
      <h3>Music Player</h3>
      <span>{{ current.title }}</span> - <span>{{ current.artist }}</span>
    </div>
    <div class="audio__player">
      <img @click="prev" class="audio__img" src="../assets/previous.svg" alt="previous">
      <img v-if="!isPlaying" @click="play" class="audio__img" src="../assets/play.svg" alt="play">
      <img v-else @click="pause" class="audio__img" src="../assets/pause.svg" alt="next">
      <img @click="next" class="audio__img" src="../assets/next.svg" alt="next">
    </div>
    <section class="containerSong">
      <button 
        @click="play(song)" 
        v-for="song in songs" 
        :key="song.src" 
        :class="(song.src == current.src) ? 'song.playing' : 'song'">
          {{ song.title }} - {{ song.artist }}
      </button>
    </section>
  </div>
</template>

<script>
export default {
  data:() => ({
    current: {},
    index:0,
    isPlaying: false,
    songs:[
      { 
        title:"Muddy Waters",
        artist:"LP",
        src: require('/mnt/c/Users/guill/git/ProjetVue/myapp/src/assets/LP - Muddy Waters [Audio] [Mpgun.com].mp3') 
      },
      { 
        title:"Judgement Day",
        artist:"Stealth",
        src: require('/mnt/c/Users/guill/git/ProjetVue/myapp/src/assets/Stealth - Judgement Day _ Suits Music 5x15 [Mpgun.com].mp3') 
      },
      { 
        title:"How you like me now",
        artist:"The Heavy",
        src: require('/mnt/c/Users/guill/git/ProjetVue/myapp/src/assets/The Heavy - How You Like Me Now (Raffertie Remix) _ Suits 3x16 Music [Mpgun.com].mp3') 
      },
    ],
    player: new Audio()
  }),
  methods: {
    play (song) {
      if (typeof song.src != "undefined"){
        this.current = song;
        this.player.src = this.current.src
      }

      this.player.play();
      this.isPlaying = true;
    },
    pause () {
      this.player.pause();
      this.isPlaying = false;
    },
    next () {
      this.index++;
      if(this.index > this.songs.length - 1){
        this.index = 0;
      }
      this.current = this.songs[this.index];
      this.play(this.current)
    },
    prev () {
      this.index--;
      if(this.index < 0){
        this.index = this.song.length - 1;
      }
      this.current = this.songs[this.index];
      this.play(this.current)
    }
  },
  created () {
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
  }
}
</script>

<style>
.audio{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 80vh;
  width: 100vw;
}

.audio__player{
  height: auto;
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
}

.audio__img{
  width: 10%;
}

.containerSong{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 30%;
  width: 40%;
}

button{
  border: none;
  padding: 1rem;
  margin-top: 10px;
  background-color: crimson;
  color: white;
}
</style>