const user = {name: 'Luiz', age: 19, street: 'Rua Minha Casa'}

// console.log(user.name)
// console.log(user['name'])

for (const key in user) {
    console.log(`${key} : ${user[key]}`)
}