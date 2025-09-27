import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api.js";



import {
  Container,
  Title,
  Form,
  ContainerInput,
  Input,
  InputLabel,
} from "./styles.js";


import Button from "../../components/Button";
import  TopBackground  from "../../components/TopBackground";

function Home() {
  const navigate = useNavigate()
  const InputName = useRef();
  const InputAge = useRef();
  const InputEmail = useRef();

  async function registerNewUser(){
     await api.post('/usuario', {
      email: InputEmail.current.value,
      age: parseInt(InputAge.current.value),
      name: InputName.current.value
    })
    
  }
  return (
    <Container>
      <TopBackground> </TopBackground>

      <Form>
        <Title>Cadastro de Usuario</Title>
        <ContainerInput>
          <div>
            <InputLabel>
              Nome <span>*</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do Usuario" ref={InputName} />
          </div>
          <div>
            <InputLabel>
              Idade <span>*</span>
            </InputLabel>
            <Input
              type="number"
              placeholder="Idade do Usuario"
              ref={InputAge}
            />
          </div>
        </ContainerInput>
        <div style={{ width: "100%" }}>
          <InputLabel>
            Email <span>*</span>
          </InputLabel>
          <Input type="email" placeholder="Email do usuario" ref={InputEmail} />
        </div>

        <Button type="button" onClick={registerNewUser} theme="primary">Cadastrar Usuarios</Button>
      </Form>
       <Button type="button" onClick={() => navigate('/listagem')}>Ver Usuarios</Button>
    </Container>
  );
}

export default Home;
