# Argenis Chacón - Java Backend Developer Portfolio

A modern, minimalist, and responsive single-page personal portfolio designed to highlight expertise in the Java ecosystem (Spring Boot, Jakarta EE).

## 🚀 Features

*   **Dark & Light Mode:** Seamlessly toggle between a deep, rich dark terminal aesthetic and a clean, cool light theme. Uses system preferences by default.
*   **Bilingual Support (EN/ES):** Full English and Spanish localization for all content, accessible via a single click.
*   **Modern Aesthetic:** Clean typography (Inter), rigorous grid layout, generous spacing, and striking electric green accents (`#10b77f`).
*   **Email Obfuscation:** Contact form protects the primary email address from simple scraping bots.
*   **Responsive:** Mobile-first design that scales perfectly across devices.

## 🛠️ Tech Stack

*   **Framework:** React 18
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS v4
*   **Icons:** Lucide React
*   **Type Checking:** TypeScript

## 📦 Getting Started

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/argenischacon/portfolio.git
    cd portfolio
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:5173`.

## 🌐 Deployment

This project generates a standard static site, making it easy to deploy on platforms like Vercel, Netlify, or GitHub Pages.

1.  Build the production bundle:
    ```bash
    npm run build
    ```
2.  The generated static files will be located in the `dist` folder. You can serve this folder using any static file server or drag-and-drop it into your hosting provider's interface.

## 🎨 Design System (`DESIGN.md`)

This project strictly adheres to a semantic design system. If you plan to extend the portfolio, please reference `DESIGN.md` for rules regarding color roles, typography scales, spacing strategies, and component stylings.

## 📄 License

This project is open-source and available under the MIT License.
