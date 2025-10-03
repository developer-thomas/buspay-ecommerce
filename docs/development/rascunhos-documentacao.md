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

#### Dia 1 
Estudei e analisei determinadas arquiteturas que podem adequar-se melhor à escalabidade. A escalabilidade está diretamente relacionada a abstração de responsabilidades, evitando/tirando acompanhamentos podemos escalar com facilidade. Portanto, decidi seguir o pattern facade para abstrair o acoplamento do component com o service. Além disso, irei seguir um modelo de padrão de desenvolvimento por camadas onde temos a aplicabilidade dos seguinte recursos dispostos abaixo:
- abstrações adequadas entre camadas de aplicação,
- fluxo de dados unidirecional,
- gerenciamento de estado reativo,
- design modular,
- padrão de componentes "smarts" e "dumbs".

A primeira maneira de decompor nosso sistema é por meio das camadas de abstração. O diagrama que vou deixar neste documento descreve o conceito geral dessa decomposição. A ideia é atribuir a responsabilidade adequada à camada apropriada do sistema: camada de núcleo, camada de abstração ou camada de apresentação. Essa divisão do sistema também dita as regras de comunicação. Por exemplo, a camada de apresentação pode se comunicar com a camada de núcleo apenas por meio da camada de abstração. 
Assim conseguimos seguir Clean Arch. trabalhando com o isolamento do core, acessando recursos externos através de camadas de abstração (Inversão de dependência) e na camada mais externa fazemos a divisão entre smart e dumb components. 
Além disso, trabalhando com abstrações, conseguirei fazer o gerenciamento de estado. Como nossa aplicação para esse teste é pequena, não irei implementar libs como NgRx para fazer gerenciamento de estado, seria matar uma formiga com uma bazuca (rsrs). Mas, como estará na camada de abstração, e as camadas mais externas desconhecem os cores, se houver a necessidade de no futuro aplicar o NgRx, basta trabalhar a abstração sem quebrar o resto da aplicação. 



#### Dia 2
Dividi a aplicação por módulos, parti do pressuposto de que, talvez no futuro, podemos ter diversos módulos (administrativo, cliente, franquia, home, esquecimento de senha, etc...). Se quisermos implementar qualquer tipo de painel posterior a nossa aplicação, basta criar um novo módulo do mesmo, e atribuir a respectiva rota ao app.routes e aninhar suas filhas através de lazy-loading. 
Além disso, trabalhei na organização das folhas de estilo da aplicação, visando evitar repetição de código para components que deverão ter a UI igual (inputs por ex.) evitando divergência na UI. Segreguei por pastas visando sua responsabilidade: 
- Na pasta Base estarão os estilos referente à cores, tipografias, resets de estilo default, tudo que se referir à base, que inclusive, poderá ser utilizado por outros components scss.
- Na pasta components ficará o estilos padrão de determinado elemento (botões, inputs, cards, etc...), se pensarmos em atomic design, os components podem ser considerado como templates, no contexto do scss, é considerado layer.
- Além disso, existe um arquivo main que concentrará todos os arquivos referntes à configuração para evitar importar muitos arquivos desorganizados dentro de main.scss. 
- No arquivo tailwind.config na atribuição e criação de classes customizadas, criei classes referentes aos níveis de cores da aplicação (secundária, primária, sucess...). Para evitar acoplamento de folhas de estilo, caso seja necessário alterar alguma cor, basta irmos à pasta styles/base/_colors, alterar a variável respectiva à classe scss customizada que todos os components que utilizam serão atualizados.
- Ainda em estilo, criei um component compartilhado específico que lidará com os ícones da aplicação. Afim de evitar acoplamento, criei uma camada de abstração para ícones, caso queiramos modificar a biblioteca de ícones, não precisaremos alterar em cada component, basta alterar o nome do ícone respectivo no mapeamento criado para esse component que toda a aplicação que consumir desse mapeamento será atualizada, além do mais, o typescript, através do enum criado, irá ajudar àquele que for atualizar a saber quais os ícones em uso atualmente. Esse mapeamento do ícone que será aplicado é feito através de um pipe chamado icon-mapper. É um pipe extremamente simples, que acessa o index do mapeamento direamente na chave inserida. 

No módulo de produtos foram criados os cards para visualização dos dados da api, foram criados os dumb components de filtros que estão emitindo eventos para que possa ser utilizado nos smarts components e consequentemente nos facades. Por enquant o layer de produtos está acoplado com o service apenas para organização da UI.

#### Dia 3
Criei um component compartilhado de paginação, um componente simples sem utilização de nenhuma biblioteca onde é possível navegar entre as páginas, limitadas a 6 produtos por page. 
Fiz a implementação dos filtros de buscas combinados utilizando signals, evitei a utilização de toSignals e de computed para não aumentar a complexidade do código, uma vez que foi possível resolver o problema de forma simplificada. Basicamente pego todos os signals de filtro no container products-list e unifico eles em um método chamado applyFilters, esse método por sua vez, chama o método applyFilters do facade (deixei o mesmo nome pra facilitar lembrar). Conforme fui criando esse método percebi que o facade estava implementando além do que deveria, aumentar o aninhamento dentro desse método e criando um acoplamento, fugindo da responsabilidade que ele possui de apenas orquestrar. Portanto, criei uma pasta de services, que ficarão armazenados serviços auxiliares que ajudarão o facade no orquestramento. A sua utilização consiste na inscrição do stream de storage global de produtos, usando o untilDestroyed para evitar memory leak e passando para o serviço especializado em filtros os produtos que estão na storage e um objeto de filtros pegos no container(smart component), logo em seguida chamo o setFilteredProducts para caso haja uma atualizaçõ nos filtros, o service de filtragem ficar adepto a ele. 
Dentro do service de product-filters eu faço a filtragem dentro dos produtos que estão na storage. 
Caso futuramente haja a necessidade de implementação de novos filtros, basta adicionar nesse método, uma vez que ele está abstraído, não estou validando trim ou lowercase nele, pq já fiz isso no dumb component. 
Para uma busca não encontrada nos filtros adicionei uma página default de itens não encontrados.

Criei também um header para adicionar um botão de adicionar novo produto.
Achei interessante fazer essa criação de produto através de uma rota mesmo ao invés de abrir modal, pois assim se torna mais escalável, as pastas ficam mais organizadas e as rotas ficam intuitivas na utilização de smart components. Com a mesma mentalidade de escalonamento, criei containers separados para criação e edição de produto, assim evita acoplamento, fica mais organizado e cada container fica com sua respectiva responsabilidade. 

Para a criação/edição de produtos, criei um dumb component para formulário, assim, posso utilizar o mesmo formulário tanto para criar, quanto pra editar, passando apenas o objeto de produtos caso seja edição, caso não seja, inicia com os forms vazios.

Coloquei também skeletons na UI para melhor experiência do usuário ao aguardar pelo carregamento da página e também evita mostrar as imagens carregando caso o usuário esteja com a internet lenta, não fica legal passar essa experiencia pro usuario. 

#### Dia 4
Hoje o foco consistiu em implementar as operações crud com a api, o get já estava sendo realizado, o filtro também. Faltava apenas criar, atualizar e excluir. 
Para iniciar essas operações comecei primeiramente emitindo o evento dos botões do card para o component pai e a partir dele pegar o id pra fazer a integração. 
Começando pela operação de edição, decidi implementar um resolver na rota de edição para que o component de edição só seja renderizado quando os dados forem efetivamente carregados para edição. Implementei uma lógica para que enquanto o formulário de edição não estiver disponível, um skeleton com a mesma estrutura do formulário fosse demonstrado de feedback para o usuário. Enquanto desenvolvia essa funcionalidade, entrei em um dilema entre skeletons e spinners, os skeletons dão um pouco mais de trabalho pra realizar e trabalham com o estado local da feature, no entanto, o aspecto visual é mais atrativo. Se houvesse implementado um spinner, poderia simplesmente criar um component, atribuir no app component e renderizá-lo através da resposta obtida pelo middleware, mas como já havia implementado o skeleton, decidi mantê-lo. 
Esse resolver é bem simples e trabalha na busca dentro do store de produtos que é imitido quando o component de produtos se renderiza, crio um tunelamento de pipeline com o operador pipe, faço um filtro dos produtos maiores que zero, para que não se perca o id quando a página for atualizada pelo usuário. Se de repente o usuário insere um id manualmente, ou dÊ algum problema com esse id (caso não exista), retorno a página para a listagem dos produtos e lanço um erro com toastr, dizendo que o produto não foi encontrado.
Caso dê sucesso, pega os dados inseridos na rota pelo resolver através do component e envio ele pelo signal de input do formulário fazendo um patch nos campos e atribuindo os valores a cada respectivo campo, deixei todos os campos obrigatórios, uma vez que a renderização da imagem na listagem geral, possui todas essas informações, e pra UI, fica mais atrativo quando todas as informações são preenchidas, evitando falta de informação das mesmas. 
Para a crição de produto, foi inserido o component de formulário de produtos dentro do container de criação, todos os campos são obrigatórios, coloquei um prefix no preço pra aparecer um cifrão quando o usuário digite, implementei a lib ngx-mask para o preço.
Na exclusão peguei do card que emite o evento e chamei o endpoint pra deletá-lo. 
Todas as operações de crud tem um método específico no facade. Em todos eles implementei o "caminho pessimista" em relação a store, pois acredito que evita bugs em sistemas que tenham a tendência a escalonamento, gera menos complexidade na atribuição dos estados no store, pois com a implementação do "caminho otimista" temos uma UI melhor, no entanto, para criação de algo é necessário gerar um ID temporário, depois que o servidor responder, substitui esse ID pelo original, e atualiza novamente a store com o valor real do item, caso tenha algum erro na criação do produto, é necessário dar um "rollback" desse item da store para não haver inconsistências.
Para a exclusão de um item, implementei a lib sweet-alert, e como esta lib tem um chamada verbosa, criei um service específico para ela. Além de não comprometer o component, também fazemos um desacoplamento, caso queira mudar algum estilo ou informação de um modal/alert, basta alterar no service e é refletido em toda a aplicação. Bem como, podemos concentrar diversos tipos de modais dentro desse service e só consumir dentro dos components que o utilizarem. 
Também criei dois services core para configuração da aplicação em relação as chamadas da api. Criei uma espécie de ExceptionFilter, onde para cada família de requisição HTTP, crio um feedback visual para o usuário, evitando que ele possa ter em sua visualização informações que o backend retorna, se esse tratamento não for feito, em um global-handler interceptor, será lançado erros de back para o usuário com uma mensagem não amigável. 
Esse service é utilizado dentro do error-handler interceptor, que é um global-error handler. Nele, utilizo o catchError do rxjs para captar a requisição do backend, e jogo ela dentro do filter exception, que verifica a família da requisição e faz a chamada do toastr para a visualização do usuário. 
No enunciado do desafio técnico, está escrito "Gerenciamento de ecommerce", a UI que havia implementado, estava muito simples, somente mostrava os cards dos produtos e os filtros para busca. 
Por conta disso, criei uma espécie de painel administrativo para gerenciamento de um ecommerce. Basicamente é um sidenav que engloba toda a tela da aplicação, o sidenav fica fixo e dentro dessa parte da tela, tem um router-outlet, que é onde fica renderizando as SPA. 
Implementei outros ícones à sidenav para simular outros fluxos que a aplicação poderia ter, mostrando que há a possibilidade de escalabidade para um sistema maior utilizando de lazy loading, roteamento do angular utilizando os recursos de SPA aninhando rotas filhas através dos módulos. Ou seja, cada item da sidenav, carrega uma rota filho do painel administrativo. Assim pode ser implementado para qualquer outra rota irmã desse administativo, podendo escalar para uma aplicação bem robusta. Também, implementei a responsividade desse sidenav, em telas menores que md, escondo o sidenav e mostro um botão flutuante ao lado esquerdo, ao clicar podemos visualizar novamente a sidenav, por cima do conteúdo principal, sem comprometer o index, ou empurrando a página pra direita. 
A partir desse momento, os requisitos do desafio foram satisfeitos. A previsão de checklist para o dia 5 (último dia) é a criação de documentação e refatoração de código.

#### Dia 5
Inclui um checklist de daily dos processos que fui realizando durante cada dia, mostrando detalhadamente do que trabalhei e quais foram as evoluções no decorrer dos dias.
Tambem fiz algumas refatorações no código, ajustando os pontos que fui observando durante o código, adicionei comentários aos métodos importantes principalmente nos facades que são os principais orquestradores das features.
Adicionei uma fonte mais agradável ao projeto. 
Fiz uns ajustes no sidenav referente ao botão de toggle. 
Ajustei a paginação que não estava redirecionando ao topo da página quando clicava por conta do overflow do sidenav. Pra ajustar acessei o elemento html diretamente pelo DOM pra resolver esse problema. 
Criei uma rota coringa para redirecionar o usuário para uma tela amigável quando acessar uma rota não determinada. Utilizei o mesmo componente de produtos não encontrados, apenas adicionei um botão a ele, que deve aparecer somente pela rota coringa passando o data boolean pela rota.
Hoje foquei na criação da documentação da aplicação focando a explicação principalmente no fluxo da aplicação e na arquitetura utilizada. Botei em detalhes os caminhos que decidi seguir até aqui, desde os pensamentos iniciais, tomadas de decisões, as razões pelas quais escolhi determinados caminhos. Criei fluxos visual no app diagrams pra demonstrar o processo. 

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
https://medium.com/netanelbasal/navigating-the-nuances-of-tosignal-in-angular-what-to-know-e4d6a4b5dfaf

#### Paginação
https://www.youtube.com/watch?v=BBxi3muJ-Cc

#### Gerenciamento de estados
https://www.youtube.com/watch?v=GKfTktLJQnY
https://www.youtube.com/watch?v=f5sJHoyBOq0&t=14s
https://dev.to/ikauedev/usando-rxjs-com-signals-no-angular-uma-abordagem-moderna-para-gerenciamento-de-estado-reativo-21o9

#### resolvers
https://www.youtube.com/watch?v=i4IQHKV2Y7c
https://andrewrosario.medium.com/angular-resolver-%C3%A9-um-antipadr%C3%A3o-e02a876a885f


### - [VOLTAR AO ARQUIVO PRINCIPAL](../../README.md)