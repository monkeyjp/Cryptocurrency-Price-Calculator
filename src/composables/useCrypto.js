import { ref, onMounted, computed } from "vue";

export default function useCrypto() {

    const cryptoCurrencies = ref([]);

    const currencies = ref([
        { code: "USD", text: "United States Dollar" },
        { code: "MXN", text: "Mexican Peso" },
        { code: "EUR", text: "Euro" },
        { code: "GBP", text: "Pound" },
    ]);

    const quotation = ref({});

    const loading = ref(false);

    onMounted(() => {
        fetch(
            "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
        )
            .then((response) => response.json())
            .then(({ Data }) => {
                cryptoCurrencies.value = Data;
            });
    });

    const getQuote = async (quote) => {
        loading.value = true;
        quotation.value = {};
        const { currency, cryptocurrency } = quote;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            const data = await response.json();
            quotation.value = data.DISPLAY[cryptocurrency][currency];
            loading.value = false;
        } catch (error) {
            console.error("There was an error fetching the quote:", error.message);
        }
    };

    const showResults = computed(() => {
        return Object.values(quotation.value).length > 0;
    });

    return {
        currencies,
        cryptoCurrencies,
        loading,
        quotation,
        getQuote,
        showResults
    }
}