\subsubsection{Teste de conceito: \textit{ragic-pokedex}}

O primeiro e mais simples teste foi um teste de conceito. Criamos do zero uma aplicação mínima para confirmar e exemplificar as funcionalidades centrais da biblioteca. Dessa motivação, imaginamos a \textit{ragic-pokedex}.

Inspirados pela tecnologia de mesmo nome da famosa série multimídia \textit{Pokèmon}, criamos uma aplicação para visualizar de forma geral e específica as informações sobre as criaturas titulares da série. Além de familiarização com o conteúdo original, a maior motivação para o conceito foi a \textit{PokeAPI}, uma \textit{API} pública e \textit{open-source} disponível em \href{https://pokeapi.co/}{https://pokeapi.co/}, que possibilita simples e fácil acesso às informações necessarias para a construção da aplicação. Como uma lógica de backend básica era necessária para o funcionamento da aplicação mas a implementação desse backend não auxilia no objetivo de teste da biblioteca, a escolha por uma \textit{API} pública similar à essa foi simples.

\subsubsubsection{Definição da Aplicação}

Para ter a aplicação mais simples possível que envolvesse todas as funcionalidades básicas da biblioteca, primeiro foi imaginada uma página inicial simples, \textit{Home}. O intuito dessa página e rota é de verificar o roteamento padrão da rota, e funcionar como menu principal para acesso às outras rotas.

\begin{figure}[H]
    \centering
    \includegraphics[width=0.5\linewidth]{img/pokedex-home.png}
    \caption{Página \textit{Home} da aplicação teste.}
    \label{fig:pokedex-home}
\end{figure}

É necessário também ter uma página simples para listar os \textit{Pokemons}, com \textit{links} para as páginas de cada \textit{Pokemon}.

\begin{figure}[H]
    \centering
    \includegraphics[width=0.5\linewidth]{img/pokedex-list-all.png}
    \caption{Página de listagem de todos os \textit{Pokemons}.}
    \label{fig:pokedex-list-all}
\end{figure}

Como mencionado antes, deve existir uma rota de índice que captura da URL o identificador do \textit{Pokemon} em questão e busca os dados necessários do \textit{backend} e mostra eles.

\begin{figure}[H]
    \centering
    \includegraphics[width=0.5\linewidth]{img/pokedex-pokemon-details.png}
    \caption{Página para visualização dos detalhes de um único \textit{Pokemon}.}
    \label{fig:pokedex-pokemon-details}
\end{figure}

Com o intúito de testar rotas do tipo vazio, foi pensada uma rota de índice que filtra os \textit{Pokemons} por tipo. Ao manter essa página na rota \code{"/type/:type\_id"}, mas não relacionar nenhuma página com a rota \code{"/type"}, transformamos \code{"/type"} em um segmento vazio que pode ser verificado.

\begin{figure}[H]
    \centering
    \includegraphics[width=0.5\linewidth]{img/pokedex-list-by-type.png}
    \caption{Página para listagem de todos os \textit{Pokemons} de um tipo específico.}
    \label{fig:pokedex-list-by-type}
\end{figure}

\subsubsubsection{Implementação}

Construímos a aplicação de teste como planejado, e o código fonte dela está disponível na \textit{branch} \code{complete} do repositório \textit{git}, disponível em \href{https://github.com/rafael-g-depaulo/ragic-pokedex}{https://github.com/rafael-g-depaulo/ragic-pokedex}.

A árvore de rotas foi definida em \code{src/routes.tsx} como no bloco de código \ref{code:pokedexRoutes}

\codeBlock{codeSnippets/pokedex-routes.tsx}
{\label{code:pokedexRoutes}}
{Definição da arvore de roteamento da aplicação de teste.}

No arquivo \code{src/components/Navbar.tsx} foi usado pela primeira vez o componente \code{Link} gerado por \code{UseRoutes} para fazer o \textit{link} de volta para a página inicial.

\codeBlock{codeSnippets/navbar.tsx}
{\label{code:navLink}}
{Uso de \code{Link} para criação de \textit{link} para a página \textit{Home}.}

Em \code{src/pages/HomePage.tsx} são usados um \textit{link} normal para a página de listagem de todos os \textit{pokemons} e um de índice para as páginas de listagem filtrada por tipo. No \textit{link} das páginas de tipo temos o primeiro uso de \textit{links} com parâmetros, onde é garantido pela tipagem estática que o componente de \code{Link} recebera como propriedade \code{"params"} um objeto com as informações necesárias para todos os índices existentes da rota designada pela propriedade \code{"to"}, e somente os existentes.

\begin{figure}[H]
    \centering
    \includegraphics[width=0.75\linewidth]{img/pokedex-code-homepage.png}
    \caption{Uso de \code{Link} na página inicial.}
    \label{fig:codeHomepage}
\end{figure}

De forma similar com os \textit{links} para as páginas de filtro por tipo, nas páginas que contém listas de pokemons usam \textit{links} do tipo índice para redirecionar o usuário corretamente, como no bloco de código.

\codeBlock{codeSnippets/pokedex-all-pokemon.tsx}
{\label{code:pokedexAllPokemon}}
{Uso de \textit{links} de índice para redirecionar o usuário para a página de detalhes de um \textit{Pokemon}.}

Tanto para a página de detalhes de um único \textit{Pokemon} quanto para a página de listagem de \textit{Pokemon} por tipo é necessário extrair informação da \textit{URL} antes de requisitar do \textit{backend} os dados necessários. Para isso foi feito uso do \textit{hook} \code{useRouteParams}, como exemplificado no bloco de código \label{SADfdsfsdfds}

\codeBlock{codeSnippets/pokedex-show-pokemon.tsx}
{\label{code:pokedexShowPokemon}}
{Uso de \code{useRouteParams} para extrair informação da \textit{URL}.}

TODO: re-escrever a introdução da seção, apontando para a pasta do monorepo em vez do repo do experimento, e comparar com react-router-dom na seção seguinte.

\subsubsubsection{Comparação com \code{react-router-dom}}

\subsubsubsection{Testes \textit{end-to-end} com \textit{Cypress}}


