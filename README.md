# BusPay E-commerce - Teste Técnico Frontend Pleno

## Resumo Executivo
- **Posição**: Frontend Pleno Angular
- **Foco**: Arquitetura escalável e padrões modernos
- **Tecnologias**: Angular 19, TypeScript, Tailwind CSS, RxJS

## Objetivos do Teste Técnico
- CRUD completo de produtos
- Sistema de filtros
- Paginação
- Arquitetura escalável
- Interface responsiva
- Tratamento de erros
- Configuração adequada do projeto

## Como Executar

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
npm run start ou ng serve
```

### Build
```bash
npm run build ou ng build
```

### Build em prod 
```bash
ng build --prod
```


## Documentação
- [Arquitetura Detalhada](./docs/development/architecture.md)
- [Processo de Desenvolvimento](./docs/development/daily-checklist.md)
- [Decisões Técnicas](./docs/development/decisions.md)
- [Rascunho Inicial para documentação](./docs/development/rascunhos-documentacao.md)
- [Referências e Estudos](./docs/references/resources.md)


## Funcionalidades Implementadas

### CRUD de Produtos
- **Create**: Formulário com validações
- **Read**: Listagem com filtros e paginação
- **Update**: Edição com pre-carregamento de dados
- **Delete**: Exclusão com confirmação

### Sistema de Filtros
- Busca por nome
- Filtro por categoria
- Filtro por faixa de preço
- Filtros client-side (instantâneos)

### UX/UI
- Design responsivo (mobile-first)
- Loading states com skeletons
- Stylesheet com Tailwind CSS
- Feedback visual de ações com toasts
- Confirmações com sweeetAlert2 para ações destrutivas

### Arquitetura
- Facade Pattern para abstração
- Store Pattern para gerenciamento de estado
- Smart(Containers)/Dumb Components
- Lazy Loading para performance
- Signals para estado reativo nos containers
- RxJs para lógicas complexas no facade

## O que pode ser implementado no futuro

### Funcionalidades
- Implementação de novos módulos com escalonamento 
- Possibilidade de crescimento da plataforma interna do administrador
- Pode-se optar por adicionar Angular Material

### Arquitetura
- Migração para NgRx se aplicação crescer muito
- Implementação de testes unitários 
- Ambos acima se tornam viáveis com a arquitetura baseada em abstrações deste projeto

## Destaques Técnicos
- **Implementação de clean code com abstração de responsabilidades e centralizando o core da aplicação**
- **Principios DRY segregando componentes e utilitários reutilizáveis**
- **Arquitetura de rotas escalonável, podendo acrescentar vários módulos pais**
- **Alguns princípios SOLID aplicados**
- **KISS: Diminuindo o máximo possível a complexidade para que haja compreensão e ainda sim funcione bem**
- **YARN: Apesar do suporte a uma estrutura escalável foi implementado apenas o que realmente precisa**
- **Padrões modernos do Angular (Signals, OnPush, Lazy Loading)**
- **Código limpo com TypeScript forte e interfaces bem definidas** 
- **UX/UI responsiva com loading states e feedback visual e mobile first**
- **Documentação completa  do processo de desenvolvimento**
