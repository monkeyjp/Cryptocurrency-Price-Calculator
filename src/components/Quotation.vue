<script setup>
defineProps({
  quotation: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="contenedor-resultado">
    <h2>Quotation</h2>
    <div class="resultado">
      <img
        :src="'https://cryptocompare.com/' + quotation.IMAGEURL"
        alt="image crypto"
      />
      <div>
        <p>
          The Price is: <span>{{ quotation.PRICE }}</span>
        </p>
        <p>
          Daily High: <span>{{ quotation.HIGHDAY }}</span>
        </p>
        <p>
          Daily Low: <span>{{ quotation.LOWDAY }}</span>
        </p>
        <p>
          24-hour Change: <span>{{ quotation.CHANGEPCT24HOUR }}%</span>
        </p>
        <p>
          Last Update: <span>{{ quotation.LASTUPDATE }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
