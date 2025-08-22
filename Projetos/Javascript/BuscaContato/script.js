
const p = document.querySelector('p')
const button = document.querySelector('button')


function buscar() {
    const input = document.querySelector('input').value


    const contacts = [
        { name: 'Luiz', number: '(45) 99924-2122' },
        { name: 'Gabi', number: '(66) 88812-4566' },
        { name: 'Junior', number: '(33) 90453-2243' },
        { name: 'Rodolfo', number: '(56) 76634-7676' },
        { name: 'Pedro', number: '(11) 23564-2235' }
    ]

    for (let i = 0; i < contacts.length; i++) {

        if (input === contacts[i].name) {
            p.innerHTML = `O nome do contato é ${contacts[i].name} e o telefone é ${contacts[i].number}`
            break
        }else{
            p.innerHTML = "Contato não encontrado"
        }
    }

}
