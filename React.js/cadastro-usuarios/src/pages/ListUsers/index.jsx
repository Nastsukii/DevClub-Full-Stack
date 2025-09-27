import Button from "../../components/Button"
import TopBackground  from "../../components/TopBackground"
import { useNavigate } from "react-router-dom"

function ListUsers (){
    const navigate = useNavigate()
    return (
        <div>
            <TopBackground></TopBackground>
            <h1>
                Testando
            </h1>
            <Button theme='primary' onClick={()=> navigate('/')}> Voltar </Button>
        </div>
    )
}

export default ListUsers