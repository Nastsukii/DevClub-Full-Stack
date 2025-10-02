import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import {
    Avatar,
  CardUsers,
  Container,
  ContainerUsers,
  Title,
  TrashUsers,
} from "./style";
import Trash from '../../assets/trash.svg'


function ListUsers() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/usuario");
      setUsers(data);
    }
    getUsers();
  }, []);

  async function DeleteUsers(id) {
    await api.delete(`/usuario/${id}`)
    
    const updateUsers = users.filter( user => user.id !== id)
    setUsers(updateUsers)
  }

  return (
    <Container>
      <TopBackground></TopBackground>
      <Title>Lista de Usuarios</Title>
      <ContainerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <Avatar src={`https://avatar.iran.liara.run/public?username=[${user.id}]`}/>
            <div>
              <h3> {user.name}</h3>
              <p> {user.age}</p>
              <p> {user.email}</p>
            </div>
            <TrashUsers src={Trash} onClick={() => DeleteUsers(user.id)} />
          </CardUsers>
        ))}
      </ContainerUsers>

      <Button theme="primary" onClick={() => navigate("/")}>
        Voltar
      </Button>
    </Container>
  );
}

export default ListUsers;
