import styled from "styled-components";

export const Container = styled.div`
  background-color: #181f36;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  height: 100vh;
`;

export const TopBackground = styled.div`
  background: linear-gradient(to right, #fe7e5d, #7f3841);
  height: 30vh;
  width: 90vw;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const InputsForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  max-width: 500px;
`;

export const Title = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 38px;
  font-weight: 600;
`;



export const InputLabel = styled.label`
`;

export const Input = styled.input`
`;

export const ButtonCadastrar = styled.button`
`;
