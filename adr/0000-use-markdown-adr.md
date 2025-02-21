# ADR 01: Uso de Markdown para Documentação de ADRs

## Status
Aceito

## Contexto
O projeto precisa de um formato simples e eficiente para documentar **Architectural Decision Records (ADRs)**.  
Os requisitos principais são:  
- **Leveza**: deve ser fácil de escrever e ler, sem necessidade de ferramentas complexas.  
- **Portabilidade**: deve permitir versionamento em repositórios Git.  
- **Legibilidade**: deve ser acessível tanto para desenvolvedores quanto para outros stakeholders técnicos.  

## Decisão
Usaremos **Markdown** como formato padrão para documentar os ADRs devido às seguintes razões:  
- Markdown é um **formato leve e amplamente suportado**.  
- Pode ser armazenado e versionado facilmente em **repositórios Git**.  
- É compatível com **diferentes plataformas de documentação**, incluindo GitHub, GitLab e ferramentas como MkDocs e Docusaurus.  
- Facilita a leitura tanto em editores de texto simples quanto em visualizadores Markdown.  

## Consequências
**Vantagens**:  
- Simplicidade e facilidade de edição.  
- Suporte nativo em ferramentas de controle de versão.  
- Pode ser convertido para outros formatos (HTML, PDF, etc.).  

**Desvantagens**:  
- Não suporta gráficos ou diagramas nativamente (necessário usar plantUML, Mermaid.js ou imagens externas).  
- Pode exigir convenções para manter a padronização entre ADRs.  

## Alternativas Consideradas
- **Confluence**: descartado por dificultar versionamento e exigir uma interface web.  
- **Arquivos Word/PDF**: descartados por não serem facilmente versionáveis em Git.  
- **Asciidoc**: mais poderoso que Markdown, mas menos adotado e com maior curva de aprendizado.  
