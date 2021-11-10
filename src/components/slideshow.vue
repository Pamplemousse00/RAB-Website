<template>
    <div>
        <b-button icon-right="arrow-left" style="display: inline; margin-top: 25%; margin-right: 10px;" v-on:click="decrementIndex"/>
        <img v-bind:src="getImageSrc" style="display: inline; width: 80%; height: 400px">
        <b-button icon-right="arrow-right" style="display: inline; margin-top: 25%; margin-left: 10px;" v-on:click="incrementIndex"/>
        <div style="margin-top: 20px;"> 
            <div :style="currentIndex == element - 1 ? 'background-color: #FF0000' : 'background-color: #000000'" style="width: 10px; height: 10px; margin: 5px; display: inline-block;" v-for="element in totalImageCount + 1" v-bind:key="element" v-on:click="setIndex(element - 1)"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 0,
            totalImageCount: 4,
            imageInterval: null,
            delay: 8000
        }
    },
    mounted() {
        this.setupInterval();
    },
    computed: {
        getImageSrc() {
            return require('@/assets/images/' + this.currentIndex + '.jpg');
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
