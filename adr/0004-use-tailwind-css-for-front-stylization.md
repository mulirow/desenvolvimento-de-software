# ADR 05: Utilização do Tailwind CSS para Estilização da Interface do Usuário

**Status:** Aceito

**Contexto:**
O projeto necessita de uma solução para estilizar a interface do usuário de forma eficiente e consistente.

**Decisão:**
Utilizaremos o Tailwind CSS para estilização da interface do usuário.

**Justificativas:**
*   **Utilitários CSS:** O Tailwind CSS fornece um conjunto abrangente de classes utilitárias que podem ser combinadas para criar estilos complexos sem a necessidade de escrever CSS personalizado.
*   **Consistência:** O Tailwind CSS ajuda a manter a consistência visual em toda a aplicação, pois as classes utilitárias são pré-definidas e seguem um sistema de design consistente.
*   **Otimização:** O Tailwind CSS pode ser configurado para remover classes utilitárias não utilizadas, reduzindo o tamanho do CSS final.
*   **Responsividade:** O Tailwind CSS oferece classes utilitárias para criar layouts responsivos que se adaptam a diferentes tamanhos de tela.

**Consequências:**
*   **Vantagens:**
    *   Estilização mais rápida e eficiente.
    *   Consistência visual em toda a aplicação.
    *   Otimização do tamanho do CSS.
    *   Facilidade de criação de layouts responsivos.
*   **Desvantagens:**
    *   Curva de aprendizado para desenvolvedores não familiarizados com o Tailwind CSS.
    *   Pode levar a arquivos HTML mais verbosos (devido ao uso de muitas classes utilitárias).

**Alternativas Consideradas:**
*   **CSS puro:** Descartado devido à dificuldade de manter a consistência visual e à necessidade de escrever muito CSS personalizado.