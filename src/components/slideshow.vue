<template>
  <div>
    <div>
        
          <div class="slideshowContainer">
            <div class="slideshowButton" v-on:click="decrementIndex" style="margin-right: -100px;">
              <b-icon icon="arrow-left" class="slideshowIcon"/>
            </div>
            <img v-bind:src="getImageSrc" style="width: 100%; min-width: 50px; height: auto;">
            <div class="slideshowButton" v-on:click="incrementIndex" style="margin-left: -100px;">
              <b-icon icon="arrow-right" class="slideshowIcon"/>
            </div>
          </div>
        
    </div>
    <div style="margin-top: 20px;"> 
        <div :style="currentIndex == element - 1 ? 'background-color: #caa064' : 'background-color: #000000'" style="width: 10px; height: 10px; margin: 5px; display: inline-block;" v-for="element in totalImageCount + 1" v-bind:key="element" v-on:click="setIndex(element - 1)"></div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 0,
            totalImageCount: 5,
            imageInterval: null,
            delay: 8000
        }
    },
    mounted() {
        this.setupInterval();
    },
    computed: {
        getImageSrc() {
            return require('@/assets/images/' + this.currentIndex + '.jpeg');
        }
    },
    methods: {
        decrementIndex() {
            this.destroyInterval();
            this.setupInterval();
            if(this.currentIndex > 0) {
                this.currentIndex--;
            } else {
                this.currentIndex = this.totalImageCount;
            }
        },
        incrementIndex() {
            this.destroyInterval();
            this.setupInterval();
            if(this.currentIndex < this.totalImageCount) {
                this.currentIndex++;
            } else {
                this.currentIndex = 0;
            }
        },
        setIndex(index) {
            this.destroyInterval();
            this.setupInterval();
            this.currentIndex = index;
        },
        timerIncrementIndex() {
            if(this.currentIndex < this.totalImageCount) {
                this.currentIndex++;
            } else {
                this.currentIndex = 0;
            }
        },
        setupInterval() {
            this.imageInterval = setInterval(this.timerIncrementIndex, this.delay);
        },
        destroyInterval() {
            clearInterval(this.imageInterval);
        }
    }
}
</script>
