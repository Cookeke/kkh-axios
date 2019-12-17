class User {
    fullName: string
    firstName: string
    lastName: string

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.fullName = firstName + ' ' + lastName
    }
}

interface Person {
    firstName: string,
    lastName: string
}

function great(person: Person): string {
    return 'hello ' + person.firstName + person.lastName
}

let user = new User('kkk', 'hhh')

console.log(great(user))
