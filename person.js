class Person{
    static count = 0
    constructor() {
// if you don't specify a constructor(allows us to have default values) then the thingy will create it for you.
        this.firstName = 'Aakeefah',
        this.lastName = 'Jones',
        this.age = 0
        Person.count += 1
// this.firstName = 'Please enter your first name',
// this.lastName = 'Please enter your last name',
    }
    set FirstName(value) {
        this.firstName = value
    }
    get FirstName() {
        return this.firstName = value
    }
    set LastName(value) {
        this.lastName = value
    }
    get LastName() {
        return this.lastName = value
    }
    set Age(value) {
        this.age = value
    }
    get Age() {
        return this.age = value
    }
    display() {
        console.log(`
        ======== Person ID: ${this.count} ========
            First Name: ${this.firstName}, 
            Last Name: ${this.lastName},
            Age: ${this.age}
        ==========================================
        `);
    }
}

export {
    Person
}