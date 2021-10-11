<template>
    <b-notification :type="colour" aria-close-label="Close notification">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
    </b-notification>
</template>

<script>
export default {
  props: ['colour'],
  data() {
    return {

    }
  }
}
</script>