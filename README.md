# 💳 Amazon.de Monthly Payment Highlighter

This userscript highlights product listings on [Amazon.de](https://www.amazon.de/) that offer monthly payment options.

## 🧩 Features

- Detects listings that include **monthly installment options** (e.g. `/ Mon. für 5 Mon.`)
- Visually highlights eligible items with:
  - 🟧 Orange border
  - 🟡 Light yellow background

## 🚀 Installation
Install a userscript manager:

Tampermonkey (Chrome/Firefox)

Violentmonkey (Chrome/Firefox)

## ⚙️ How It Works
The script looks for elements with data-cy="price-recipe" and checks for rows that contain the phrase / Mon. für, indicating a monthly installment plan. If found, the entire price block is visually highlighted.

## 🛠️ Customization
You can adjust the highlight style by editing these lines:

<pre>item.style.border = "2px solid orange";
item.style.backgroundColor = "#fff8e1";</pre>
