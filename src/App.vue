<script setup>
import { ref } from "vue";

const currencies = ref([
  { code: "USD", text: "United States Dollar" },
  { code: "MXN", text: "Mexican Peso" },
  { code: "EUR", text: "Euro" },
  { code: "GBP", text: "Pound" },
]);
</script>

<template>
  <div class="contenedor">
    <h1 class="titulo">Cryptocurrency <span>Price Calculator</span></h1>
    <div class="contenido">
      <form class="formulario">
        <div class="campo">
          <label for="currency">Currency:</label>
          <select id="currency">
            <option value="">-- Select --</option>
            <option v-for="currency in currencies" :value="currency.code">
              {{ currency.text }}
            </option>
          </select>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
