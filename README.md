# Cryptocurrency Price Quoter

A Vue.js project for quoting cryptocurrency prices, where users can select a currency (USD, GBP, MXN, or EUR) and a cryptocurrency (from the Toplist by Market Cap). The data for both the Toplist by Market Cap and the cryptocurrency price in the selected currency comes from the CryptoCompare API.

## Features

- Select a **currency**: USD (Dollar), GBP (Pound), MXN (Mexican Peso), or EUR (Euro).
- Select a **cryptocurrency**: Cryptos are fetched dynamically from the **Toplist by Market Cap**.
- The app fetches data from the **CryptoCompare API** to display:
  - **Current price** of the selected cryptocurrency in the selected currency.
  - **Highest price of the day** (daily high).
  - **Lowest price of the day** (daily low).
  - **24-hour percentage variation** in the price.
  - **Last update time** of the data.
- A loading spinner from **SpinKit** is displayed while the data is being fetched.
