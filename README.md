# 🕷 ArachWrite

**ArachWrite** is a collaborative text editor that integrates AI to assist writers. The AI provides suggestions, analyses, and revisions on texts in development, helping to improve the writing and script structure.

## 📖 Table of Contents

🔹 [🚀 Technologies Used](#technologies-used)

🔹 [📋 Requirements](#requirements)

🔹 [💾 Installation Instructions](#installation-instructions)

🔹 [⚡ Usage Instructions](#usage-instructions)

🔹 [🏛️ Architectural Decision Records (ADR)](#architectural-decision-records-adr)

🔹 [📚 Support Information](#support-information)

🔹 [📌 Project Status](#project-status)

🔹 [🤝 Contribution Guidelines](#contribution-guidelines)

## 🚀 Technologies Used

The project was developed using the following technologies:

| 🛠️ Technology       | Description                                      |
| :------------------ | :----------------------------------------------- |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) | Primary programming language.                   |
| ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)     | React framework for building the user interface.  |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) | Utility-first CSS framework.                      |
| ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)       | Database for storing application data.          |
| ![Google AI Studio](https://img.shields.io/badge/Google%20AI%20Studio-4285F4?style=for-the-badge&logo=google&logoColor=white) | AI Platform providing suggestions, analysis, and revisions.  |
| ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)         | Platform for deployment and hosting.            |



---

## 📋 Requirements

Before you begin, ensure you have the following installed:

*   **Node.js:** (Latest LTS version recommended) - [https://nodejs.org/](https://nodejs.org/)
*   **npm:** (Included with Node.js) -  Check version with `npm -v`
*   **Git:** (For cloning the repository) - [https://git-scm.com/](https://git-scm.com/)

---

## 💾 Installation Instructions

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/mulirow/desenvolvimento-de-software.git
    cd desenvolvimento-de-software
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**

    *   Create a `.env` file in the root directory.
    *   Add the necessary environment variables:

        ```
        MONGODB_URI=your_mongodb_connection_string
        GOOGLEAI_API_KEY==your_google_ai_api_key
        LIVEBLOCKS_SECRET_KEY=your_liveblocks_secret_key
        NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=your_liveblocks_public_key
        ```

## ⚡ Usage Instructions

1.  **Start the development server:**

    ```bash
    npm run dev
    ```

2.  **Access the application:**

    Open your web browser and navigate to `http://localhost:3000` (or the port specified in your terminal).

## 🏛️ Architectural Decision Records (ADR)

* [ADR-0000](https://github.com/mulirow/desenvolvimento-de-software/blob/master/adr/0000-use-markdown-adr.md) - Use Markdown to Document ADRs
* [ADR-0001](https://github.com/mulirow/desenvolvimento-de-software/blob/master/adr/0001-use-nextjs-for-front-framework.md) - Use Next.js as the frontend framework
* [ADR-0002](https://github.com/mulirow/desenvolvimento-de-software/blob/master/adr/0002-use-mongodb-for-database.md) - Adopt MongoDB as the database technology
* [ADR-0003](https://github.com/mulirow/desenvolvimento-de-software/blob/master/adr/0003-use-google-ai-studio-for-ai-api.md) - Integration with Google AI Studio
* [ADR-0004](https://github.com/mulirow/desenvolvimento-de-software/blob/master/adr/0004-use-tailwind-css-for-front-stylization.md) - Use Tailwind CSS for UI stylization

## 📚 Support Information

If you encounter any issues or have questions, feel free to reach out via:

•⁠  ⁠GitHub Issues
•⁠  ⁠Email: [mbn2@cin.ufpe.br]

## 📌 Project Status

#### Current Status: 🚀 In Progress

This project is actively being developed. Stay tuned for new features!

## 🤝 Contribution Guidelines

To contribute, please follow these steps:

1.⁠ ⁠Fork the repository.
2.⁠ ⁠Create a new branch (⁠ git checkout -b feature-branch ⁠).
3.⁠ ⁠Commit your changes (⁠ git commit -m 'Add new feature' ⁠).
4.⁠ ⁠Push to the branch (⁠ git push origin feature-branch ⁠).
5.⁠ ⁠Open a Pull Request.

Please follow our coding guidelines and ensure your changes are well-documented.
