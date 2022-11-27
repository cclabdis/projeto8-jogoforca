# Instruções Gerais

- [X]  Você deve criar o projeto com o `create-react-app` padrão, SEM usar nenhum template, e delete os arquivos que não serão utilizados
- [ ]  Ao terminar o projeto, você obrigatoriamente deverá realizar o **deploy utilizando a Vercel**

# Requisitos

- Geral
    - [X]  Manipule o HTML usando somente React (sem usar o document nem bibliotecas como jQuery)
    - [X]  Seu projeto deverá ser desenvolvido utilizando Git e GitHub
    - [X]  **A cada requisito implementado** faça um commit com uma mensagem descritiva do que você evoluiu. Caso queira dividir um requisito em vários commits, não há problema. Mas evite colocar mais de um requisito no mesmo commit
- Layout
    
    [https://www.figma.com/file/TaftyzjEd5T77Y83suNGGB/Jogo-da-Forca?node-id=0%3A1&t=jDKNJpA8ujo7bNRi-1](https://www.figma.com/file/TaftyzjEd5T77Y83suNGGB/Jogo-da-Forca?node-id=0%3A1&t=jDKNJpA8ujo7bNRi-1)
    
    As imagens da forca estão disponíveis nesse notion, a parte de “Arquivos do Projeto”. São 7 imagens que devem ser alternadas de acordo com a quantidade de erros do usuário.
    
- Componentização
    - [X]  O seu jogo deverá ter 4 componentes:
        - [X]  App (chamará os demais componentes)
        - [X]  Jogo (imagem da forca, botão de iniciar, palavra do jogo)
        - [X]  Letras (conjunto de botões com as letras)
        - [X]  Chute (input e botão de chute)
    - 💡 Dica
        
        Mantenha todos os estados da aplicação no `App` e passe seus valores como `props` para os componentes que precisarem
        
        ![b.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9f37e14c-387f-4b62-aba1-15d329f4872b/b.png)
        
- Pré-jogo
    - [ ]  Crie um arquivo chamado `palavras.js` e coloque ele dentro da pasta `src` (o nome e o local precisam ser esses!)
    - [ ]  Dentro do arquivo, insira o array de palavras disponibilizado abaixo:
        - Arquivo de palavras
            
            ```jsx
            const palavras = [
                "abacate", "abacaxi", "abelha", "abanador", "antologia", "amor", "aba", "abrigo", "abrir",
                "banana", "boi", "batata", "bacalhau", "bexiga", "bowl", "batedeira", "bisturi", "barreira", "banco",
                "caixa", "chantilly", "cachorro", "cuidado", "caneta", "carinho", "cabra", "cesto",
                "dados", "dizer", "danone", "dente", "diamante", "diafragma", "detonar", "dia",
                "elefante", "esmeralda", "esfinge", "esfera", "encontro", "ema", "escola", "economia",
                "formiga", "fama", "festa", "fiador", "ferver", "flauta", "figo", "fiapo", "fotografia",
                "goiaba", "gelo", "grito", "guria", "goleiro", "golfinho", "golfe", "girar",
                "harmonia", "haste", "hectare", "hepatite", "hiena", "hidrante",
                "igreja", "importante", "idoso", "irado", "identidade", "idioma", "idade", "idiota",
                "jantar", "jumento", "jararaca", "janela", "jerimum", "jaula", "jabuti", "jaleco",
                "laranja", "lua", "luz", "lindo", "lacraia", "lactose", "lacrar",
                "manga", "morango", "mico", "matar", "mingau", "moqueca", "mocassin",
                "nectarina", "nada", "navio", "namorado", "ninja", "natal", "narciso", "narina", "nabo",
                "ovo", "ostra", "obstetra", "orangotango", "olhar", "ortodoxo", "ouro", "ornamento",
                "pato", "polvo", "povoar", "pano", "princesa", "pizza", "patroa",
                "queijo", "quitanda", "quinta", "quantia", "quarentena", "quadrilha", "quaresma", "quartzo", "quebrar",
                "risada", "rio", "remar", "rato", "racional", "rainha", "radioatividade", "raiz", "raiva", "rachadura",
                "salada", "salamandra", "sacola", "siri", "sabre", "sucarose", "sabedoria", "sacerdote",
                "tatu", "tabacaria", "taberneiro", "torrada", "tamanho", "tatuagem", "trem",
                "uva", "universo", "unanimidade", "ubuntu", "universidade", "urso", "uivar", "unir",
                "vela", "valeta", "vacilo", "valor", "vagem", "vadiagem", "vaca", "valentia", "vidro", "valsa",
                "xadrez", "xilofone", "xarope", "xenofobia", "xereta", "xerife", "xaveco", "xixi", "xale",
                "zebra", "zagueiro", "zero", "zoeira", "zepelim", "zinco", "zumbido"
            ]
            
            export default palavras
            ```
            
        - Esse array possui strings que serão as palavras que o jogador deverá adivinhar. Você deverá importar esse array no componente `App` para utilizá-lo.
        - Você não deve mudar o nome do array! Mas se quiser mudar o conteúdo para adicionar palavras, fique à vontade 😄
    - [ ]  Os botões de letras devem ser mapeados através de um array do alfabeto
        - Array do alfabeto
            
            ```jsx
            const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
            ```
            
    - [ ]  Antes de o jogo iniciar, o input e os botões de letras devem estar desabilitados
- Ao apertar “escolher palavra”
    - [ ]  Input e letras passam a ficar habilitadas
    - [ ]  A contagem de erros nesse momento é 0, a imagem da forca vazia é mostrada
    - [ ]  Você deve sortear uma das palavras do array que está no arquivo `palavras.js` para o usuário tentar adivinhar
    - [ ]  Aparece a palavra a ser adivinhada na tela, com um underline ( `_` ) para cada letra que a palavra possui
    - 💡Dica
        
        Se você transformar a palavra em um array, será muito mais fácil de fazer as operações e comparações que irão acontecer no jogo 😉
        
- Ao pressionar uma letra
    - [ ]  O botão de uma letra já clicada deve ficar desabilitado
    - [ ]  Se a palavra escolhida no jogo tiver a letra que o usuário apertou:
        - [ ]  O underline da posição correspondente à letra deve ser substituído pela letra em si
        - [ ]  As palavras disponibilizadas não possuem caracteres especiais, então não precisa se preocupar com isso!
    - [ ]  Se a palavra escolhida no jogo NÃO tiver a letra que o usuário apertou:
        - [ ]  Sua contagem de erros deve aumentar
            - [ ]  A imagem na forca deve mudar (forca0 > forca1 > forca2… e assim sucessivamente)
- Input de chute
    - [ ]  Caso o usuário deseje, ele pode chutar a palavra inteira no input
    - [ ]  Ao fazer isso, se acertar a palavra, ele ganha imediatamente
    - [ ]  Mas, se errar, ele perde imediatamente, independente da contagem anterior de erros. A imagem que deve aparecer nesse momento é a do bonequinho enforcado (forca6)
- Fim de jogo
    - [ ]  Botões de letras e input de chute devem ser desabilitados
    - [ ]  Caso o usuário ganhe:
        - [ ]  Quando o usuário ganha, a palavra completa fica em **verde** e os botões e input voltam a ficar desabilitados
        - [ ]  Para continuar a jogar, o usuário deve apertar o botão “Escolher Palavra”, e o jogo será reiniciado do zero
    - [ ]  Caso o usuário perca:
        - [ ]  A imagem final que deve aparecer é a do boneco enforcado (forca6)
        - [ ]  A palavra deve ser revelada, mas em **vermelho**
- **Para correção automática ⚠️**
    
    [Jogo da Forca - Seletores](https://www.figma.com/file/jMOhjKXPNlCF5nsXlEdezl/Jogo-da-Forca---Seletores?node-id=0%3A1&t=44iltPZdoQGdcl8r-0)
    
    ⚠️ **Atenção:** Caso você tenha componentizado os elementos, **NÃO** coloque o data-identifier nas tags dos componentes React e sim nas tags HTML. Exemplo:
    
    ```jsx
    ERRADO: <MeuLindoBotaoComponentizado data-identifier="blabla" />
    CERTO: <button data-identifier="blabla" />
    ```
    
    🤔 **Por quê?** Porque atributos colocados nas tags dos componentes não são inseridos no HTML final gerado pelo React, somente atributos explicitamente colocados nas tags HTML.
    
    - 💡 Para saber se realmente o seletor está inserido, você pode inspecionar o elemento na tela
        
        ![indefier.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bdcf05dd-c3ca-4a2f-94d5-4be335ea9275/indefier.gif)
        
    - **E se eu estiver usando Styled Components? (bônus)**
        
        Nesse caso, você pode sim colocar o data-identifier na tag do componente! Isso porque o styled components automaticamente repassa todos os atributos pra tag HTML final:
        
        ```jsx
        const MeuLindoBotao = styled.button`...`;
        
        <MeuLindoBotao data-identifier="blabla" /> (CORRETO!)
        ```
        
    - **E se eu quiser componentizar um botão pra ser usado em vários lugares com data-identifiers diferentes?**
        
        Nesse caso, você pode repassar todas as props pra tag HTML final de uma forma bem prática:
        
        ```jsx
        // No componente do botão:
        function BotaoCustomizado({ props }) {
        	return <button {...props}>...</button>
        }
        
        // Onde for usar o componente:
        <BotaoCustomizado data-identifier="blabla" />
        <BotaoCustomizado data-identifier="blublu" />
        ```
        
    

# Bônus

- Reiniciar o jogo
    - A qualquer momento, o usuário pode reiniciar o jogo pressionando o botão “escolher palavra”
    - Uma nova palavra é sorteada
    - O jogo deve voltar ao estado inicial (0 erros, imagem inicial da forca, palavra apenas com risquinhos, input limpo, todos os botões de letras habilitados)
- Faça a estilização do projeto utilizando `styled-components`
    - Não esqueça de instalar a biblioteca com o comando `npm install styled-components`
- Considerar caracteres especiais
    - [ ]  Quando o usuário pressionar uma letra sem acento (ex: a) e, na palavra, houver a mesma letra mas com acento (ex: à, á, â, ã), ela deve ser considerada como certo
    - [ ]  Além dos acentos, cosidere também que c e ç são equivalentes
    - Caso faça esse desafio, substitua o array de palavras por este novo

    const palavras = [
    "abacate", "abacaxi", "abelha", "abanador", "antologia", "amor", "aba", "abraço", "ábaco", "abrigo", "abrir", 
    "banana", "boi", "batata", "bacalhau", "bexiga", "bowl", "batedeira", "bisturi", "barreira", "banco", 
    "caixa", "chantilly", "comércio", "cachorro", "cuidado", "caneta", "carinho", "cupuaçu", "cabra", "cesto", 
    "dados", "dizer", "danone", "dente", "diário", "diamante", "diafragma", "detonar", "dia", "dromedário", 
    "elefante", "esmeralda", "espátula", "estômago", "esfinge", "esfera", "encontro", "ema", "escola", "economia", 
    "formiga", "fama", "festa", "fiador", "ferver", "flauta", "fichário", "figo", "fiapo", "fotografia", 
    "goiaba", "gelo", "grito", "gamão", "guria", "goleiro", "golfinho", "golfe", "girar", "glúten", 
    "helicóptero", "harmonia", "haste", "hectare", "hábito", "hepatite", "hiena", "hemisfério", "hidrante",
    "igreja", "ícone", "importante", "ímpar", "idoso", "irado", "identidade", "idioma", "idade", "idiota", 
    "jantar", "jumento", "jambú", "jibóia", "jararaca", "janela", "jerimum", "jaula", "jabuti", "jaleco", 
    "laranja", "lua", "leão", "limão", "larápio", "luz", "lindo", "lacraia", "lactose", "laço", "lacrar", 
    "mamão", "manga", "morango", "mico", "matar", "mingau", "moqueca", "macacão", "mocassin", "maçaneta", 
    "nectarina", "nada", "navio", "namorado", "ninja", "natal", "narciso", "narina", "nádega", "nabo", 
    "ovo", "ostra", "obstetra", "oblíquo", "orangotango", "olhar", "óculos", "ortodoxo", "ouro", "ornamento", 
    "pato", "polvo", "povoar", "pólvora", "palhaço", "paróquia", "pano", "princesa", "pizza", "patroa", 
    "queijo", "quitanda", "quinta", "quantia", "quarentena", "quadrilha", "quaresma", "quartzo", "quebrar", "quarteirão", 
    "risada", "rio", "remar", "rato", "racional", "rainha", "radioatividade", "raiz", "raiva", "rachadura", 
    "salada", "salamandra", "sacola", "siri", "sábado", "safanão", "sabre", "sucarose", "sabedoria", "sacerdote", 
    "tatu", "tabacaria", "taberneiro", "tábua", "torrada", "três", "terço", "tamanho", "tatuagem", "trem", 
    "uva", "uísque", "união", "universo", "unanimidade", "ubuntu", "universidade", "urso", "uivar", "unir", 
    "vela", "valeta", "vacilo", "valor", "vagem", "vadiagem", "vaca", "valentia", "vidro", "valsa", 
    "xícara", "xadrez", "xilofone", "xarope", "xenofobia", "xereta", "xerife", "xaveco", "xixi", "xale", 
    "zebra", "zagueiro", "zero", "zoeira", "zodíaco", "zangão", "zepelim", "zinco", "zoológico", "zumbido"
]

export default palavras