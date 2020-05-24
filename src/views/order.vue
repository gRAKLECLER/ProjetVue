<template>
  <div class="order">
    <list />
    <div class="order__container">
      <div class="img">
        <img class="image" :src="image" alt="shoes">
      </div>
      <div class="order__content">
        <div class="order__sizes">
          <h2>Taille</h2>
          <hr>
          <div>
            <p v-for="(size, i) in sizes" :key="i">{{ size }}</p>
          </div>
        </div>
        <div class="order__colors">
          <h2>Couleur</h2>
          <hr>
          <div class="color"
            v-for="(variant, index) in variants"
            :key="index"
            :style="{backgroundColor: variant.variantColor }"
            @mouseover="updateImage(index)">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import list from '@/components/header.vue';

export default {
  name : "order",
  data(){
    return {
      selectedVariant: 0,
      sizes: [41,42,43,44,45],
      variants:[
        {
          variantImage: require('../assets/air-max-orange.jpg'),
          variantColor: 'orange',
        },
        {
          variantImage: require('../assets/air-max-Fonce.jpg'),
          variantColor: 'orangered',
        }
      ]
    }
  },
  components: {
    list,
  },
  methods: {
    updateImage: function(index) {
      this.selectedVariant = index;
    }
  },
  computed:{
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
  }
}
</script>

<style>
  .order__container{
    display: flex;
    align-items: center;
  }

  .img{
    width: 50%;
    height: 50%;
  }

  .image{
    width: 40%;
    height: 40%;
  }

  .color{
    height: 50px;
    width: 50px;
  }
</style>