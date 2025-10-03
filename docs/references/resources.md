# Referências e Estudos

## Foco Principal

1. **Padrões de Design**: Facade, Store, Smart/Dumb Components
2. **Clean Architecture**: Separação de camadas
3. **Escalabilidade**: Estrutura modular
4. **Performance**: Lazy loading, OnPush
5. **Modernidade**: Signals, Angular 17+

## Referências Utilizadas

### Arquitetura / Delimitação por pastas
- **Fonte**: [YouTube - Estruturas Escaláveis](https://www.youtube.com/watch?v=bm5i7dZPPxg)
- **Aprendizado**: Como organizar projetos Angular de forma escalável
- **Aplicação**: Estrutura modular com separação por responsabilidades

### Facade Pattern
- **Fonte**: [YouTube - Facade Pattern](https://www.youtube.com/watch?v=hRNBSNtZ-JU)
- **Fonte**: [Medium - Facade Pattern Guide](https://medium.com/@andreaspoyias/design-patterns-a-quick-guide-to-facade-pattern-16e3d2f1bfb6)
- **Aprendizado**: Como abstrair complexidade entre camadas
- **Aplicação**: ProductsFacade para orquestrar API + Store

### Estruturas Escaláveis
- **Fonte**: [Victor F. Jansen - Estruturas Escaláveis](https://victorfjansen.com/estruturas-escal%C3%A1veis-para-aplica%C3%A7%C3%B5es-angular-e-estrat%C3%A9gias-de-sincroniza%C3%A7%C3%A3o-4185f4049416)
- **Aprendizado**: Padrões para crescimento de aplicações Angular
- **Aplicação**: Arquitetura modular com lazy loading

### Desenvolvimento em Camadas
- **Fonte**: [Dev Academy - Angular Architecture](https://dev-academy.com/angular-architecture-best-practices/)
- **Aprendizado**: Clean Architecture aplicada ao Angular
- **Aplicação**: Separação entre Core, Abstração e Apresentação

### Signals
- **Fonte**: [Angular University - Signal Components](https://blog.angular-university.io/angular-signal-components/)
- **Fonte**: [Code Dimension - Signal Inputs](https://blog.codedimension.com.br/post/signal-inputs/)
- **Fonte**: [YouTube - Angular Signals](https://www.youtube.com/watch?v=Ugfm1YiQYX8)
- **Fonte**: [Medium - toSignal Nuances](https://medium.com/netanelbasal/navigating-the-nuances-of-tosignal-in-angular-what-to-know-e4d6a4b5dfaf)
- **Aprendizado**: Como usar Signals modernos do Angular
- **Aplicação**: Estado local com signals, inputs/outputs

### Paginação
- **Fonte**: [YouTube - Paginação Angular](https://www.youtube.com/watch?v=BBxi3muJ-Cc)
- **Aprendizado**: Implementação de paginação customizada
- **Aplicação**: Componente de paginação sem bibliotecas externas

### Gerenciamento de Estados
- **Fonte**: [YouTube - RxJS com Signals](https://www.youtube.com/watch?v=GKfTktLJQnY)
- **Fonte**: [YouTube - State Management](https://www.youtube.com/watch?v=f5sJHoyBOq0&t=14s)
- **Fonte**: [Dev.to - RxJS + Signals](https://dev.to/ikauedev/usando-rxjs-com-signals-no-angular-uma-abordagem-moderna-para-gerenciamento-de-estado-reativo-21o9)
- **Aprendizado**: Como combinar RxJS com Signals
- **Aplicação**: Store Pattern com BehaviorSubjects

### Resolvers
- **Fonte**: [YouTube - Angular Resolvers](https://www.youtube.com/watch?v=i4IQHKV2Y7c)
- **Fonte**: [Medium - Resolvers Antipattern](https://andrewrosario.medium.com/angular-resolver-%C3%A9-um-antipadr%C3%A3o-e02a876a885f)
- **Aprendizado**: Quando usar e não usar resolvers
- **Aplicação**: Resolver para edição de produtos

## Pensamentos Durante o Desenvolvimento
- [Decisões Técnicas](../development/decisions.md)
