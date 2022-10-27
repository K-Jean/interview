export class User {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    email: string;

    constructor(id: number, firstName: string, lastName: string, age: number, email: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
}