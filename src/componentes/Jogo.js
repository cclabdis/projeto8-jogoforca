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
            <span data-test="palavra"
                  data-response={!props.palavra ? "" : props.palavra}
                  className={
                   props.response === 1
                    ? "palavra-right"
                    : props.response === -1 || props.pontos === 6
                    ? "palavra-wrong"
                    : ""
                } >
            {props.response === 1
              ? props.palavralista
              : props.response === -1 || props.pontos === 6
              ? props.palavralista
              : props.showpalavra}
          </span>
        </div>
      </section>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  margin: 40px;
  justify-content: space-between;

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    text-align: end;
  }
  section span {
    font-size: 50px;
    font-weight: 700;
    font-family: "Noto Sans", "Roboto", Arial, Helvetica, sans-serif;
    letter-spacing: 5px;
  }
  button {
    width: 200px;
    height: 60px;
    font-weight: 700;
    font-size: 20px;
    color: #ffffff;
    background-color: #27ae60;
    border-radius: 8px;
    border: none;
  }
  img {
    width: 400px;
  }
  .palavra-right {
    color: #27ae60;
  }
  .palavra-wrong {
    color: #ff0000;
  }
  button:hover {
    cursor: pointer;
  }
  
`;