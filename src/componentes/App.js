import React, { useState } from "react";
import GlobalStyle from "./global.Styles";
import Chute from "./Chute";
import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "./palavras";
import caracterEspecial from "./caracterEspecial";

export default function App() {
    const images = [
      { error: 0, image: "assets/forca0.png" },
      { error: 1, image: "assets/forca1.png" },
      { error: 2, image: "assets/forca2.png" },
      { error: 3, image: "assets/forca3.png" },
      { error: 4, image: "assets/forca4.png" },
      { error: 5, image: "assets/forca5.png" },
      { error: 6, image: "assets/forca6.png" },
    ];


    const [pontos, setpontos] = useState({ pontos: 0 });
    const [palavra, setpalavra] = useState("");
    const [palavralista, setpalavralista] = useState("");
    const [response, setresponse] = useState(0);
    const [responselista, setresponselista] = useState([]);
    const [image, setImage] = useState(images[pontos.pontos].image);
    const [chute, setchute] = useState("");
    const [letrasUsed, setletrasUsed] = useState([]);
    const [condSpecialCharacter, setCondSpecialCharacter] = useState(false);
    const [specialCharacter, setSpecialCharacter] = useState("");

        if (condSpecialCharacter) {
        inputletra(specialCharacter);
        setCondSpecialCharacter(false);
        }
        function choosepalavra() {
        const chosenpalavra =
            palavras[Math.round(Math.random() * (palavras.length - 0.5))];
        const novopontos = { pontos: 0 };
        let chosenpalavralista = [];
        let novoresponselista = [];
        const novoletrasUsed = [];
        const novochute = "";
            setpontos(novopontos);
            setpalavra(chosenpalavra);
            setpalavralista(chosenpalavralista);
            setresponse(0);
            setresponselista(novoresponselista);
            setImage(images[novopontos.pontos].image);
            setchute(novochute);
            setletrasUsed(novoletrasUsed);
        for (let i = 0; i < chosenpalavra.length; i++) {
            chosenpalavralista.push(chosenpalavra[i]);
            novoresponselista.push("_");
        }
        setresponselista(novoresponselista);
        setpalavralista(chosenpalavralista);

      return response;
    }
  
    function chooseletra(e) {
      const letra = e.target.value;
      const novoletrasUsed = [...letrasUsed, letra];
      setletrasUsed(novoletrasUsed);
      checkletra(letra);
    }
  
    function increasepontos() {
      const novopontos = pontos;
      novopontos.pontos += 1;
      setpontos(novopontos);
      setImage(images[novopontos.pontos].image);
    }
  
    function checkletra(letra) {
      let condition = false;
      const lista = ["a", "e", "i", "o", "u", "c"];
      let specialletra = "";
      if (lista.includes(letra)) {
        for (let i = 0; i < caracterEspecial[letra].length; i++) {
          condition += palavralista.includes(caracterEspecial[letra][i]);
          if (palavralista.includes(caracterEspecial[letra][i])) {
            specialletra = caracterEspecial[letra][i];
          }
        }
      } else {
        condition += palavralista.includes(letra);
        if (palavralista.includes(letra)) {
          specialletra = letra;
        }
      }
      if (condition === 0) {
        increasepontos();
      } else if (condition === 1) {
        inputletra(specialletra);
      } else {
        inputletra(letra);
        setSpecialCharacter(specialletra);
        setCondSpecialCharacter(true);
      }
    }
  
    function inputletra(letra) {
      let novoresponselista = [];
      let guess = "";
      for (let i = 0; i < responselista.length; i++) {
        if (letra === palavralista[i]) {
          novoresponselista.push(letra);
          guess += letra;
        } else {
          novoresponselista.push(responselista[i]);
          guess += responselista[i];
        }
      }
      guess === palavra ? setresponse(1) : setresponse(0);
      setresponselista(() => novoresponselista);
    }
  
    return (
      <>
        <GlobalStyle />
        <Jogo
          onClickFunction={() => {
            choosepalavra();
          }}
          response={response}
          pontos={pontos.pontos}
          palavra={palavra}
          palavralista={palavralista}
          showpalavra={responselista}
          image={image}
        />
        <Letras
          palavra={palavralista}
          pontos={pontos.pontos}
          response={response}
          lista={letrasUsed}
          onClickFunction={(e) => {
            chooseletra(e);
          }}
        />
        <Chute
          palavra={palavralista}
          valueText={chute}
          response={response}
          pontos={pontos.pontos}
          guess={chute}
          handleChange={(e) => setchute(e.target.value)}
          onClickFunction={() => {
            if (chute === palavra) {
              setresponse(1);
            } else {
              setresponse(-1);
              setImage(images[6].image);
            }
            setchute("");
          }}
        />
      </>
    );
  }

