<script setup>
import { ref, reactive } from "vue";
import Alert from "./components/Alert.vue";
import Spinner from "./components/Spinner.vue";
import useCrypto from "./composables/useCrypto";
import Quotation from "./components/Quotation.vue";

const {
  currencies,
  cryptoCurrencies,
  loading,
  quotation,
  getQuote,
  showResults,
} = useCrypto();

const error = ref("");

const quote = reactive({
  currency: "",
  cryptocurrency: "",
});

const quoteCrypto = () => {
  if (Object.values(quote).includes("")) {
    error.value = "All Fields Are Required";
    return;
  }
  error.value = "";
  getQuote(quote);
};
</script>

<template>
  <div class="contenedor">
    <h1 class="titulo">Cryptocurrency <span>Price Calculator</span></h1>
    <div class="contenido">
      <Alert v-if="error"> {{ error }} </Alert>
      <form class="formulario" @submit.prevent="quoteCrypto">
        <div class="campo">
          <label for="currency">Currency:</label>
          <select id="currency" v-model="quote.currency">
            <option value="">-- Select --</option>
            <option v-for="currency in currencies" :value="currency.code">
              {{ currency.text }}
            </option>
          </select>
        </div>
        <div class="campo">
          <label for="crypto">Cryptocurrency:</label>
          <select id="crypto" v-model="quote.cryptocurrency">
            <option value="">-- Select --</option>
            <option
              v-for="cryptocurrency in cryptoCurrencies"
              :value="cryptocurrency.CoinInfo.Name"
            >
              {{ cryptocurrency.CoinInfo.FullName }}
            </option>
          </select>
        </div>
        <input type="submit" value="Get Quote" />
      </form>
      <Spinner v-if="loading" />
      <Quotation v-if="showResults" :quotation="quotation" />
    </div>
  </div>
</template>

<style scoped></style>
