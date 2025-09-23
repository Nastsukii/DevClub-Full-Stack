import {
  InputsForm,
  Title,
  Container,
  TopBackground,
  InputLabel,
  Input,
  ButtonCadastrar

} from "./styles.js";

import ImageUsers from "./assets/users.png"

function App() {
  return (
    <Container>
      <TopBackground>
        <img src={ImageUsers}/>
      </TopBackground>

     
        <Title>Cadastrar Usuarios</Title>
         <InputsForm>
          <div>
            <InputLabel>
              Nome <span>*</span>
            </InputLabel>
            <Input type="text" placeholder="Nome de usuario"></Input>
          </div>
          <div>
            <InputLabel>
              Idade <span>*</span>
            </InputLabel>
            <Input type="number" placeholder="Idade do usuario"></Input>
          </div>
        </InputsForm>
        <div >
          <InputLabel>
            Email <span>*</span>
          </InputLabel>
          <Input type="email" placeholder="Email do usuario"></Input>
        </div>
      
      <ButtonCadastrar> Cadastrar Usuario</ButtonCadastrar>
    </Container>
  );
}

export default App;
