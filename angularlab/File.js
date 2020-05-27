var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, phoneNum, state, zipCode, occupation, hourly) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNum = phoneNum;
        this.state = state;
        this.zipCode = zipCode;
        this.occupation = occupation;
        this.hourly = hourly;
    }
    //setters and getters
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    Person.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.getPhoneNum = function () {
        return this.phoneNum;
    };
    Person.prototype.setPhoneNum = function (phoneNum) {
        this.phoneNum = phoneNum;
    };
    Person.prototype.getState = function () {
        return this.state;
    };
    Person.prototype.setState = function (state) {
        this.state = state;
    };
    Person.prototype.getZipCode = function () {
        return this.zipCode;
    };
    Person.prototype.setZipCode = function (zipCode) {
        this.zipCode = zipCode;
    };
    Person.prototype.getOccupation = function () {
        return this.occupation;
    };
    Person.prototype.setOccupation = function (occupation) {
        this.occupation = occupation;
    };
    Person.prototype.getCerts = function () {
        return this.certs;
    };
    
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.getLocation = function () {
        return this.state + " " + this.zipCode;
    };
    //get weekly wage and take the number of hours as parameters
    Person.prototype.getWeeklyRate = function (hours) {
        if (hours) {
            return this.hourly * hours;
        }
        else {
            return this.hourly * 40;
        }
    };
    //get name and wage
    Person.prototype.getHourlyWage = function (wage) {
        if (wage) {
            return this.getFullName() + " " + this.getWeeklyRate(wage).toString();
        }
        else {
            return this.getFullName() + " weekly wage: $" + this.getHourlyWage().toString();
        }
    };
    //creating an array property of a person's certifications
    
    Person.prototype.addCerts = function (certs) {
        for (var cert in certs) {
            certs.push(cert);
        }
        this.certs = certs;
    };
    //interface method
    Person.createPerson = function (person) {
        var newPerson = new Person(person.firstName, person.lastName);
        if (person.firstName) {
            newPerson.firstName;
        }
        if (person.lastName) {
            newPerson.lastName;
        }
        return newPerson;
    };
    return Person;
}()); 


//outputs
var Caleb = new Person("Caleb", "Bridges", "22", "7041234555", "NC", "28262", "Developer", 22);
var Josh = new Person("Josh", "Bridges", "30", "7045552222", "NC", "28202", "Businessman", 26);
var Diamond = new Person("Dwyane", "Wade", "37", "7042928222", "CA", "90210", "Trainer", 20);
document.getElementById("id2").textContent = Caleb.getFullName();
document.getElementById("id3").textContent = Josh.getOccupation();
document.getElementById("id4").textContent = Diamond.getAge();
document.getElementById("id5").textContent = Person.createPerson({firstName: "John", lastName: "Doe"}).getFullName();