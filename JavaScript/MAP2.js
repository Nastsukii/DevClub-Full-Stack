    const list = [
        {nome: "Luiz", vip: true},
        {nome: "Gabi", vip: true},
        {nome: "João", vip: false},
        {nome: "Junin", vip: false},
        {nome: "Maria", vip: false},
        {nome: "Matheus", vip: true}
    ]

    const newList = list.map(user => {
        const newUser = {
            nome: user.nome,
            braceletColor: user.vip ? 'green' : 'black' // o ? é o if, e o : é o else
        }
        return newUser
    })

    console.log(newList)


    const studentList = [
        {name: 'Luiz', nota: 8},
        {name: 'Gabi', nota: 10},
        {name: 'Junior', nota: 2},
        {name: 'Matheus', nota: 4},
        {name: 'Maria', nota: 6},
        {name: 'joao', nota: 5 },
    ]

    const listPassed = studentList.map(student => {
        return {
            name: student.name,
            approved: student.nota > 5 ? true : false
        }
    })

    console.log(listPassed)