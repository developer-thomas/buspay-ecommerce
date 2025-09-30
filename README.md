# BuspayEcommerce

### Escalabilidade do projeto
Esse projeto terá um foco maior na arquitetura que será utilizada. 
Partirei do princípio de que a aplicação inicialmente não terá grande complexidade, mas, caso haja o crescimento em grande escala a aplicação terá suporte à isso.
Portanto, separarei a aplicação por módules que por sua vez irão carregar sob demanda, dentro desses módulos pode haver outros e assim sucessivamente.


### Visão geral antes do início do projeto
1. Definir o tipo de arquitetura a ser utilizada para que seja escalável
2. Implementar facades para que conforme a aplicação cresça, se precisarmos mudar a forma de lidar com estados para ngrx por exemplo, não seja necessário mexer no component.
3. Também irei implementar git flow pra manter a organização dos commits/branchs
4. Vou utilizar o tailwind para o estilo da aplicação, utilizando o mobile first.
5. Um ponto importante que notei é que o backend não possui queries para realizar a filtragem, portanto, os filtros serão aplicados no próprio front.
6. Vou definir os módulos de core e shared para melhor organização do projeto.
7. Após a realização da integração completa irei trabalhar mais no quesito design pra deixar mais bonito e atrativo.
8. Se der tempo, tentarei implementar os outros endpoints que não foram solicitados no teste.
9. Por fim, fazer uma breve documentação para apresentação do projeto e leitura posterior pelos avaliadores.


### Referencias que estudei:

#### Arquitetura / Delimitação por pastas
https://www.youtube.com/watch?v=bm5i7dZPPxg

#### Facade pattern
https://www.youtube.com/watch?v=hRNBSNtZ-JU

#### Facade pattern
https://medium.com/@andreaspoyias/design-patterns-a-quick-guide-to-facade-pattern-16e3d2f1bfb6

#### Estruturas escaláveis
https://victorfjansen.com/estruturas-escal%C3%A1veis-para-aplica%C3%A7%C3%B5es-angular-e-estrat%C3%A9gias-de-sincroniza%C3%A7%C3%A3o-4185f4049416

#### Desenvolvimento em camadas
https://dev-academy.com/angular-architecture-best-practices/