# 🍳 RecipeHub – React Ödevi

Bu proje, **TheMealDB API** kullanılarak geliştirilmiş bir **yemek tarifi listesi uygulamasıdır**.  
Amaç, React’te **useState**, **useEffect** ve **fetch API** kullanımını öğrenirken, **Tailwind CSS** ile responsive bir arayüz tasarlamaktır.

---

## 🎯 Amaç

- React'te `useState`, `useEffect` ve `fetch` API kullanmayı öğrenmek
- TheMealDB API’sinden yemek tariflerini çekmek
- Tailwind CSS ile modern ve responsive bir sayfa oluşturmak

---

## 🧩 Özellikler

- 🍔 TheMealDB API'den tarifleri çeker
- 🖼️ Her tarif kartında:
  - Yemek resmi
  - Yemek adı
  - Kategori
  - Ülke
  - Sabit 30 dk süresi gösterilir
- 📱 **Responsive Tasarım**:
  - Mobilde: 1 sütun
  - Tabletlerde: 2 sütun
  - Masaüstünde: 3–4 sütun

---

## 🚀 Hızlı Başlangıç

Projeyi yerel ortamında çalıştırmak için aşağıdaki adımları takip et:

```bash
npx degit ozcanzaferayan/react recipehub
cd recipehub
npm install
npm run dev

🔗 API Bilgileri

Ana endpoint:
https://www.themealdb.com/api/json/v1/1/search.php?s=

s parametresi yemek ismine göre arama yapar.

Parametre verilmezse tüm tarifleri döndürür.

📁 Klasör Yapısı
recipehub/
├── public/
├── src/
│   ├── components/
│   │   └── RecipeCard.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts

🛠 Kullanılan Teknolojiler

⚛️ React

⚡ Vite

🎨 Tailwind CSS

🟦 TypeScript

🧹 ESLint

🧪 Gereksinimler

Node.js v18+

npm veya yarn

🌐 Kaynaklar

TheMealDB API Dokümantasyonu

Tailwind CSS Dokümantasyonu

Vite Resmi Sitesi


```
