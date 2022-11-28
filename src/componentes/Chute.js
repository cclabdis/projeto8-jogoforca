import React from "react";
import styled from "styled-components";

export default function Chute(props) {
  const condition = !props.palavra || props.response !== 0 || props.pontos === 6;
  return (
    <Section>
      <span>Já sei a palavra!</span>
      <input
        disabled={condition}
        onChange={props.handleChange}
        value={props.guess}
        data-test="guess-input"
      ></input>

      <button
        disabled={condition}
        onClick={props.onClickFunction}
        data-test="guess-button"
      >Chutar</button>
    </Section>
  );
}



