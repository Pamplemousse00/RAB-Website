<template>
    <div class="columns" style="margin: 5px;">
        <div class="column">
            <div style="border: 2px solid black; border-radius: 5px;">
                <div style="display: block; font-size: 25px">CART</div>
                <object data="./CART.pdf" type="application/pdf" style="height:80vh; width: 95%">
                    <embed src="./CART.pdf" type="application/pdf" />
                </object>
            </div>
        </div>
        <div class="column">
            <div style="border: 2px solid black; border-radius: 5px;">
                <div style="display: block; font-size: 25px;">STAR</div>
                <object data="./STAR.pdf" type="application/pdf" style="height:80vh; width: 95%">
                    <embed src="./STAR.pdf" type="application/pdf" />
                </object>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  name: 'Referrals',
  props: {
  },
  components: {
  },
  mounted() {
  },
  methods: {
  }
}
</script>