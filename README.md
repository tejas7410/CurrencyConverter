Sure! Here's the complete `README.md` code for your **React Currency Converter** project:

```markdown
# 💱 React Currency Converter

A simple, modern currency converter built using **React**, **custom hooks**, and **Tailwind CSS**. It fetches real-time exchange rates and allows bidirectional conversion between any two currencies.

---

## 🔥 Features

- Live exchange rate fetching via custom hook (`useCurrencyInfo`)
- Controlled form inputs for better UX
- Currency swap functionality
- Reusable `InputBox` component
- Styled using Tailwind CSS
- Responsive design

---

## 📂 Project Structure
```

currency-converter/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ └── InputBox.jsx
│ ├── hooks/
│ │ └── useCurrencyInfo.js
│ ├── pages/
│ │ └── Container.jsx
│ ├── App.jsx
│ ├── index.css
│ └── index.jsx
├── .env
├── package.json
└── README.md

````

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/currency-converter.git
cd currency-converter
````

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Add Your API Key

Create a `.env` file in the root directory:

```env
REACT_APP_EXCHANGE_API_KEY=your_api_key_here
```

> You can get a free API key from [ExchangeRate API](https://www.exchangerate-api.com/) or a similar service.

### 4. Run the App

```bash
npm start
# or
yarn start
```

App will be available at `http://localhost:3000`.

---

## 🧠 How It Works

- `useCurrencyInfo(baseCurrency)`: Fetches exchange rates based on the selected `from` currency.
- `Container.jsx`: Manages core state (`amount`, `from`, `to`, `convertedAmount`) and conversion logic.
- `InputBox.jsx`: Reusable input component that accepts currency options, input change handlers, and props to enable/disable fields.

---

## 🖼️ UI Preview

![App Screenshot](./screenshot.png)

---

## 🧩 Technologies Used

- React
- Tailwind CSS
- JavaScript (ES6+)
- Environment variables for API security

---

## ✅ To-Do

- Add loading and error states for API fetch
- Add number formatting (commas, currency symbols)
- Unit tests for components and hooks
- Add dark mode support

---

## 🧑‍💻 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙋‍♂️ Author

**Tejas Kangule**
Integrated B.Tech + MBA, ABV-IIITM Gwalior
[GitHub](https://github.com/your-username)

---

> Made with ❤️ using React & Tailwind CSS

```

Let me know if you'd like to include your `InputBox.jsx` or `useCurrencyInfo.js` code inside the README too for better documentation.
```
