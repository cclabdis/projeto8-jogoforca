import React from "react";
import styled from "styled-components";

export default function Jogo(props) {
  return (
    <Main>
      <section>
        <img data-test="game-image" src={props.image} alt="imagem-forca"></img>
      </section>
      <section>
        <button data-test="choose-palavra" onClick={props.onClickFunction}>
          Escolher Palavra
        </button>
        <div>
          <span
            data-test="palavra"
            data-response={!props.palavra ? "" : props.palavra}
            className={
              props.response === 1
                ? "palavra-right"
                : props.response === -1 || props.pontos === 6
                ? "palavra-wrong"
                : ""
            }
          >
            {props.response === 1
              ? props.palavraList
              : props.response === -1 || props.pontos === 6
              ? props.palavraList
              : props.showpalavra}
          </span>
        </div>
      </section>
    </Main>
  );
}

