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


export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
max-width: 500px;
`

export const Title = styled.h2`
color: #ffff;
text-align: center;
font-size: 40px;
font-weight: 600;
`

export const ContainerInput = styled.div`
display: flex;
flex-direction: row;
gap: 20px;

`
export const Input = styled.input`
 width: 100%;

  padding: 10px 14px;
  font-size: 16px;
  color: #333;
  background: #f9f9f9;
  border: 2px solid #ccc;
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease;
  
`

export const InputLabel = styled.label`
color: #ffff;
font-size: 12px;
font-weight: 400;
margin-left: 4px;
span{
  color: red;
  font-weight: bold;
}
`


























export const ButtonCadastrar = styled.button``;
