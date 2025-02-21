# ADR 03: Utilização do MongoDB como Banco de Dados

**Status:** Aceito

**Contexto:**
O projeto necessita de um banco de dados para armazenar documentos de texto, metadados associados e informações de colaboração em tempo real.

**Decisão:**
Utilizaremos o MongoDB como banco de dados.

**Justificativas:**
*   **Flexibilidade do esquema:** O MongoDB é um banco de dados NoSQL que permite armazenar dados com esquemas flexíveis, o que é adequado para documentos de texto que podem ter estruturas variadas.
*   **Escalabilidade:** O MongoDB é projetado para escalabilidade horizontal, facilitando o aumento da capacidade de armazenamento e processamento conforme necessário.
*   **Integração com Node.js:** O MongoDB possui drivers robustos para Node.js, facilitando a interação com o backend da aplicação.

**Consequências:**
*   **Vantagens:**
    *   Flexibilidade para lidar com diferentes tipos de documentos.
    *   Escalabilidade para acomodar o crescimento da aplicação.
    *   Facilidade de uso com Node.js.
*   **Desvantagens:**
    *   Menor suporte a transações ACID em comparação com bancos de dados relacionais.
    *   Pode exigir otimizações de consulta para obter o melhor desempenho.

**Alternativas Consideradas:**
*   **PostgreSQL:** Considerado, mas descartado devido à maior complexidade do esquema relacional e à menor flexibilidade para lidar com documentos de texto não estruturados.
*   **Firebase Firestore:** Considerado, mas o MongoDB oferece maior controle sobre a infraestrutura e a escalabilidade.