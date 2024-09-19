<script setup>
import { ref, onMounted, reactive } from "vue";
import Alert from "./components/Alert.vue";

const currencies = ref([
  { code: "USD", text: "United States Dollar" },
  { code: "MXN", text: "Mexican Peso" },
  { code: "EUR", text: "Euro" },
  { code: "GBP", text: "Pound" },
]);

const cryptoCurrencies = ref([]);

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
  getQuote();
};

const getQuote = async () => {
  const { currency, cryptocurrency } = quote;
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {}
};

onMounted(() => {
  fetch(
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
  )
    .then((response) => response.json())
    .then(({ Data }) => {
      cryptoCurrencies.value = Data;
    });
});
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
    </div>
  </div>
</template>

<style scoped></style>
