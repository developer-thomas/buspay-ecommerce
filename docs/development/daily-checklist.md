# Daily Checklist

## Dia 1: Arquitetura e Estrutura Base
### **Análise dos requisitos do desafio e estratégia de abordagem**

1. **Arquitetura escalável**: Foco na arquitetura para crescimento futuro
2. **Facades**: Abstração para facilitar mudanças futuras (ex: NgRx)
3. **Git Flow**: Organização de commits e branches
4. **Tailwind CSS**: Estilo mobile-first
5. **Filtros client-side**: Backend sem queries de filtragem
6. **Módulos core/shared**: Organização do projeto
7. **Design atrativo**: Interface moderna e responsiva
8. **Documentação**: Apresentação completa do projeto

### Estratégias Adotadas

#### Arquitetura por Camadas
- **Camada de núcleo**: Lógica de negócio isolada
- **Camada de abstração**: Facades e services
- **Camada de apresentação**: Smart/Dumb Components

#### Padrões de Design
- **Facade Pattern**: Abstração entre componentes e serviços
- **Store Pattern**: Gerenciamento de estado reativo
- **Smart/Dumb Components**: Separação de responsabilidades

#### Performance
- **Lazy Loading**: Carregamento sob demanda
- **OnPush**: Otimização de renderização
- **Signals**: Estado reativo moderno

### Decisões Técnicas

#### Por que Facade + Store ao invés de NgRx?
- **Escalabilidade**: Facade permite migração futura para NgRx
- **Simplicidade**: Para o escopo atual, evita over-engineering
- **Manutenibilidade**: Código mais limpo e direto

#### Por que Signals ao invés de Observables?
- **Performance**: Melhor para estado local
- **Simplicidade**: Código mais legível
- **Modernidade**: Alinhado com as últimas features do Angular

#### Por que Lazy Loading?
- **Performance**: Bundle inicial menor
- **Escalabilidade**: Módulos independentes
- **Manutenibilidade**: Separação clara de responsabilidades


#### Foco Principal
Na entrevista foi destacado que o foco seria ver mais sobre **arquitetura**, então foquei em:
1. **Padrões de Design**: Facade, Store, Smart/Dumb Components
2. **Clean Architecture**: Separação de camadas
3. **Escalabilidade**: Estrutura modular
4. **Performance**: Lazy loading, OnPush
5. **Manutenibilidade**: Código limpo e organizado

#### Início do projeto
**Análise e definição da arquitetura**
  - Estudei arquiteturas escaláveis para Angular e Clean Architecture
  - Decidi pelo padrão Facade para abstrair acoplamento
  - Defini estrutura por camadas para cada responsabilidade (Clean Architecture) 
  - Implementei separação entre Smart/Dumb Components
  - A ideia é não gerar acoplamento entre as camadas

**Configuração do projeto**
  - Criação de Estrutura de pastas modulares
  - Configuração do TailwindCSS
  - Setup do projeto Angular

### Dia 2: Módulos e Componentes Base
**Organização modular**
  - Criação dos módulos (admin, home, shared) - Home apenas reseprentando possiblidade de escalar
  - Implementação de lazy loading 
  - Estrutura de pastas por responsabilidade

**Sistema de estilos**
  - Organização SCSS por camadas
  - Classes customizadas no Tailwind
  - Componente de ícones com abstração utilizando pipe e ENUM para mapeamento, caso queria mudar a lib, só mexe em um lugar

**Componentes base**
  - Cards de produtos consumindo a API
  - Criação dos componentes de filtros
  - Header compartilhado

### Dia 3: Filtros e Paginação
**Sistema de filtros**
  - Implementação com Signals no estado local
  - Filtros combinados (nome, categoria, preço) utilizando signals
  - Service especializado para filtragem abstraindo lógica do facade

**Paginação**
  - Criação de componente customizado para paginação
  - Listagem de 6 produtos por página (Poucos itens da API para mostrar muito)
  - Navegação entre páginas

**UX/UI**
  - Estados de loading com skeletons na listagem de produtos
  - Página de "não encontrado" para produto não encontrado
  - Feedback visual

### Dia 4: CRUD e Integração
**Operações CRUD**
  - Create: Formulário com validações
  - Read: Listagem com filtros
  - Update: Edição com resolver para que a página carregue já com os dados resolvidos
  - Delete: Exclusão com confirmação utilizando sweetAlert2

**Integração com API**
  - ProductsApiService extendendo BaseService genérico para consumo da api
  - Tratamento de erros globais com interceptors e exception filter service
  - Retorno para o usuário nos processos de criação, edição e delete com Toastr

**Resolvers e roteamento**
  - Criação de Resolver para edição de produtos
  - Pre-carregamento de dados no component de edição
  - Navegação entre rotas para edição [list => edit]
  - Criação de Skeleton na edição de produtos

**Painel administrativo**
  - Sidenav responsiva
  - Estrutura de navegação
  - Simulação de outros módulos

**Tratamento de erros**
  - Error Handler Interceptor
  - Exception Filter Service
  - Feedback visual para usuário

### Dia 5: Refinamentos e Documentação

**Refatorações e ajustes**
  - Checklist de daily dos processos realizados durante cada dia
  - Refatorações no código com ajustes observados durante o desenvolvimento
  - Comentários adicionados aos métodos importantes, principalmente nos facades
  - Fonte mais agradável adicionada ao projeto
  - Ajustes no sidenav referente ao botão de toggle
  - Correção da paginação que não redirecionava ao topo da página (problema do overflow do sidenav)
  - Solução implementada acessando o elemento HTML diretamente pelo DOM

**Roteamento e navegação**
  - Criação de rota coringa para redirecionar usuário para tela amigável
  - Utilização do mesmo componente de produtos não encontrados
  - Adição de botão que aparece somente pela rota coringa (data boolean pela rota)

**Documentação completa**
  - Foco na criação da documentação da aplicação
  - Explicação detalhada do fluxo da aplicação e arquitetura utilizada
  - Detalhamento dos caminhos escolhidos desde os pensamentos iniciais
  - Tomadas de decisões e razões pelas quais escolhi determinados caminhos
  - Criação de fluxos visuais no app.diagrams.net para demonstrar o processo
  - Documentação completa do processo de desenvolvimento



### - [VOLTAR AO ARQUIVO PRINCIPAL](../../README.md)