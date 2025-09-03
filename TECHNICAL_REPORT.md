## Relatório Técnico do Projeto: Premium Lead Alchemy

### 1. Visão Geral do Projeto

O projeto, denominado "Premium Lead Alchemy", é uma aplicação web de página única (SPA) desenvolvida para servir como uma landing page para o curso "Tráfego Imobiliário de Alta Performance". O objetivo da aplicação é atrair e capturar leads qualificados para o curso.

A aplicação é construída com uma stack de tecnologias modernas, incluindo:

*   **Framework Principal:** React (v18.3.1)
*   **Linguagem:** TypeScript (v5.8.3)
*   **Build Tool:** Vite (v5.4.19)
*   **Estilização:** Tailwind CSS (v3.4.17)
*   **Componentes de UI:** shadcn-ui

### 2. Estrutura do Projeto

O projeto segue uma estrutura de diretórios organizada, com uma clara separação de responsabilidades:

*   `src/`: Contém todo o código-fonte da aplicação.
    *   `assets/`: Armazena imagens e outros recursos estáticos.
    *   `components/`: Contém componentes React reutilizáveis, incluindo uma subpasta `ui/` para componentes de base do shadcn-ui.
    *   `hooks/`: Contém hooks customizados do React.
    *   `lib/`: Contém funções utilitárias.
    *   `pages/`: Contém os componentes de página da aplicação.
*   `public/`: Contém arquivos estáticos que são servidos diretamente pelo servidor web.
*   `dist/`: Contém os arquivos de produção gerados pelo processo de build.

### 3. Build e Deploy

O projeto utiliza o Vite para o processo de build e desenvolvimento. Os seguintes scripts estão disponíveis no arquivo `package.json`:

*   `npm run dev`: Inicia o servidor de desenvolvimento do Vite em `http://localhost:8080`.
*   `npm run build`: Gera uma build de produção otimizada no diretório `dist/`.
*   `npm run lint`: Executa o ESLint para analisar o código em busca de erros e problemas de estilo.
*   `npm run preview`: Inicia um servidor local para visualizar a build de produção.

### 4. Dependências

O projeto utiliza uma série de dependências para fornecer funcionalidades essenciais:

**Dependências Principais:**

| Dependência | Versão | Descrição |
| :--- | :--- | :--- |
| `react` | ^18.3.1 | Biblioteca principal para a construção da interface de usuário. |
| `react-dom` | ^18.3.1 | Fornece métodos específicos do DOM para o React. |
| `react-router-dom` | ^6.30.1 | Para roteamento e navegação na aplicação. |
| `@tanstack/react-query` | ^5.83.0 | Para gerenciamento de estado do servidor e data fetching. |
| `tailwindcss` | ^3.4.17 | Framework de CSS para estilização. |
| `shadcn-ui` | N/A | Coleção de componentes de UI reutilizáveis. |
| `typescript` | ^5.8.3 | Superset do JavaScript que adiciona tipagem estática. |
| `vite` | ^5.4.19 | Ferramenta de build e desenvolvimento. |

**Dependências de Desenvolvimento:**

| Dependência | Versão | Descrição |
| :--- | :--- | :--- |
| `eslint` | ^9.32.0 | Ferramenta de linting para JavaScript e TypeScript. |
| `@vitejs/plugin-react-swc` | ^3.11.0 | Plugin do Vite para suporte ao React com SWC. |
| `autoprefixer` | ^10.4.21 | Adiciona prefixos de fornecedores ao CSS. |
| `postcss` | ^8.5.6 | Ferramenta para transformar CSS com plugins. |

### 5. Estilização e Tema

A estilização é gerenciada pelo Tailwind CSS. O arquivo de configuração `tailwind.config.ts` define o tema da aplicação, incluindo:

*   **Paleta de Cores:** Uma paleta de cores customizada com cores "de luxo" como `gold` e `navy`.
*   **Breakpoints Responsivos:**
    *   `sm`: 640px
    *   `md`: 768px
    *   `lg`: 1024px
    *   `xl`: 1280px
    *   `2xl`: 1400px
*   **Animações:** Animações customizadas para componentes como acordeões.

### 6. Gerenciamento de Estado e Roteamento

*   **Gerenciamento de Estado:** O estado do servidor é gerenciado pelo `@tanstack/react-query`, que fornece hooks para buscar, armazenar em cache e atualizar dados. O estado local da UI é gerenciado pelos hooks do React (`useState`, `useEffect`, etc.).
*   **Roteamento:** O roteamento é tratado pelo `react-router-dom`. As rotas são definidas no componente `src/App.tsx`, que inclui uma rota principal para a `Index` e uma rota de fallback para `NotFound`.

### 7. Qualidade de Código e Convenções

*   **Linting:** O ESLint é utilizado para garantir a consistência do código e evitar erros comuns. A configuração do ESLint está no arquivo `eslint.config.js`.
*   **Convenções:**
    *   **Componentização:** A aplicação é altamente componentizada, com uma clara separação entre componentes de UI e componentes de página.
    *   **Aliases de Caminho:** O alias `@/` é configurado para o diretório `src/`, simplificando as importações de módulos.
    *   **TypeScript:** O uso do TypeScript garante a segurança de tipos e melhora a manutenibilidade do código.