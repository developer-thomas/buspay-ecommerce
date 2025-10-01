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


### Checklist / Estimativas

##### Dia 1 
Estudei e analisei determinadas arquiteturas que podem adequar-se melhor à escalabidade. A escalabilidade está diretamente relacionada a abstração de responsabilidades, evitando/tirando acompanhamentos podemos escalar com facilidade. Portanto, decidi seguir o pattern facade para abstrair o acoplamento do component com o service. Além disso, irei seguir um modelo de padrão de desenvolvimento por camadas onde temos a aplicabilidade dos seguinte recursos dispostos abaixo:
- abstrações adequadas entre camadas de aplicação,
- fluxo de dados unidirecional,
- gerenciamento de estado reativo,
- design modular,
- padrão de componentes "smarts" e "dumbs".

A primeira maneira de decompor nosso sistema é por meio das camadas de abstração. O diagrama que vou deixar neste documento descreve o conceito geral dessa decomposição. A ideia é atribuir a responsabilidade adequada à camada apropriada do sistema: camada de núcleo, camada de abstração ou camada de apresentação. Essa divisão do sistema também dita as regras de comunicação. Por exemplo, a camada de apresentação pode se comunicar com a camada de núcleo apenas por meio da camada de abstração. 
Assim conseguimos seguir Clean Arch. trabalhando com o isolamento do core, acessando recursos externos através de camadas de abstração (Inversão de dependência) e na camada mais externa fazemos a divisão entre smart e dumb components. 
Além disso, trabalhando com abstrações, conseguirei fazer o gerenciamento de estado. Como nossa aplicação para esse teste é pequena, não irei implementar libs como NgRx para fazer gerenciamento de estado, seria matar uma formiga com uma bazuca (rsrs). Mas, como estará na camada de abstração, e as camadas mais externas desconhecem os cores, se houver a necessidade de no futuro aplicar o NgRx, basta trabalhar a abstração sem quebrar o resto da aplicação. 



##### Dia 2
Dividi a aplicação por módulos, parti do pressuposto de que, talvez no futuro, podemos ter diversos módulos (administrativo, cliente, franquia, home, esquecimento de senha, etc...). Se quisermos implementar qualquer tipo de painel posterior a nossa aplicação, basta criar um novo módulo do mesmo, e atribuir a respectiva rota ao app.routes e aninhar suas filhas através de lazy-loading. 
Além disso, trabalhei na organização das folhas de estilo da aplicação, visando evitar repetição de código para components que deverão ter a UI igual (inputs por ex.) evitando divergência na UI. Segreguei por pastas visando sua responsabilidade: 
- Na pasta Base estarão os estilos referente à cores, tipografias, resets de estilo default, tudo que se referir à base, que inclusive, poderá ser utilizado por outros components scss.
- Na pasta components ficará o estilos padrão de determinado elemento (botões, inputs, cards, etc...), se pensarmos em atomic design, os components podem ser considerado como templates, no contexto do scss, é considerado layer.
- Além disso, existe um arquivo main que concentrará todos os arquivos referntes à configuração para evitar importar muitos arquivos desorganizados dentro de main.scss. 
- No arquivo tailwind.config na atribuição e criação de classes customizadas, criei classes referentes aos níveis de cores da aplicação (secundária, primária, sucess...). Para evitar acoplamento de folhas de estilo, caso seja necessário alterar alguma cor, basta irmos à pasta styles/base/_colors, alterar a variável respectiva à classe scss customizada que todos os components que utilizam serão atualizados.
- Ainda em estilo, criei um component compartilhado específico que lidará com os ícones da aplicação. Afim de evitar acoplamento, criei uma camada de abstração para ícones, caso queiramos modificar a biblioteca de ícones, não precisaremos alterar em cada component, basta alterar o nome do ícone respectivo no mapeamento criado para esse component que toda a aplicação que consumir desse mapeamento será atualizada, além do mais, o typescript, através do enum criado, irá ajudar àquele que for atualizar a saber quais os ícones em uso atualmente. Esse mapeamento do ícone que será aplicado é feito através de um pipe chamado icon-mapper. É um pipe extremamente simples, que acessa o index do mapeamento direamente na chave inserida. 

No módulo de produtos foram criados os cards para visualização dos dados da api, foram criados os dumb components de filtros que estão emitindo eventos para que possa ser utilizado nos smarts components e consequentemente nos facades. Por enquant o layer de produtos está acoplado com o service apenas para organização da UI.

### Referências:

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

#### Signals
https://blog.angular-university.io/angular-signal-components/
https://blog.codedimension.com.br/post/signal-inputs/#:~:text=Como%20usar%20a%20fun%C3%A7%C3%A3o%20input()?,das%20funcionalidades%20dessa%20nova%20abordagem.
https://www.youtube.com/watch?v=Ugfm1YiQYX8