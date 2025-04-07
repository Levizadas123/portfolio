# Portfólio Moderno e Interativo

Um portfólio web profissional e moderno, desenvolvido com React, TypeScript, e Express. O projeto apresenta animações fluidas, efeitos visuais modernos e uma interface atraente.

## Características

- **Design Moderno**: Layout atual e elegante com elementos visuais impressionantes
- **Animações Suaves**: Transições e movimentos fluidos para uma experiência de usuário envolvente
- **Totalmente Responsivo**: Adaptado para dispositivos móveis, tablets e desktops
- **Seções Completas**: Apresentação, Projetos, Experiência, Habilidades e Contato
- **Efeitos Especiais**: Cursor personalizado, efeitos de partículas e paralaxe
- **Formulário de Contato**: Sistema de contato funcional com validação

## Tecnologias Utilizadas

- **Frontend**: React, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui, Radix UI
- **Animações**: Framer Motion
- **Backend**: Express
- **Validação**: Zod, React Hook Form
- **Gerenciamento de Estado**: TanStack Query

## Como Executar

1. Clone o repositório
2. Instale as dependências:
   ```
   npm install
   ```
3. Execute o servidor de desenvolvimento:
   ```
   npm run dev
   ```
4. Abra o navegador em `http://localhost:3000`

## Estrutura do Projeto

- `/client`: Código frontend React
  - `/src/components`: Componentes da UI 
  - `/src/pages`: Páginas da aplicação
  - `/src/hooks`: Custom hooks
  - `/src/lib`: Utilitários e configurações
- `/server`: Código backend Express
- `/shared`: Esquemas e tipos compartilhados

## Personalização

Você pode personalizar facilmente:
- Cores e tema no arquivo `theme.json`
- Conteúdo das seções nos respectivos componentes
- Projetos e experiências editando os arrays de dados

## Licença

[MIT](LICENSE)