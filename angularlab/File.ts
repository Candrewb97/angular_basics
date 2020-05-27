interface PersonOptions{
    firstName: string;
    lastName: string;
    age?: string;
    phoneNum?: string;
    state?: string;
    zipCode?: string;
    occupation?: string;
    hourly?: number;
}

// new Person class
class Person{
   private firstName: string;
   private lastName: string;
   private  age: string;
   private  phoneNum: string;
   private state: string;
   private zipCode: string;
   private occupation: string;
   private hourly: number;
   private certs: string[];

   constructor(firstName: string, lastName: string, age?: string, phoneNum?: string, state?: string, zipCode?: string, occupation?: string, hourly?: number){
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

   getFirstName(): string{
       return this.firstName;
   }
   setFirstName(firstName: string): void{
       this.firstName = firstName;
   }

   getLastName(): string{
       return this.lastName;
   }
   setLastName(lastName: string): void{
       this.lastName = lastName;
   }

   getAge(): string{
       return this.age;
   }
   setAge(age: string): void{
       this.age = age;
   }

     getPhoneNum(): string{
       return this.phoneNum;
   }
   setPhoneNum(phoneNum: string): void{
       this.phoneNum = phoneNum;
   }

   getState(): string{
       return this.state;
   }
   setState(state: string):void{
       this.state = state;
   }

   getZipCode(): string{
       return this.zipCode;
   }
   setZipCode(zipCode: string): void{
       this.zipCode = zipCode;
   }

   getOccupation(): string{
       return this.occupation;
   }
   setOccupation(occupation: string): void{
       this.occupation = occupation;
   }

   getCerts(): string[]{
       return this.certs;
   }

   getFullName(): string{
       return this.firstName + " " + this.lastName;
   }
   
   getLocation(): string{
       return this.state + " " + this.zipCode;
   }



   //get weekly wage and take the number of hours as parameters
    getWeeklyRate(hours?: number): number{
       if(hours){
           return this.hourly * hours;
       }else {
           return this.hourly * 40;
       }
   }
   //get name and wage
   getHourlyWage(wage?: number): string{
       if(wage){
           return this.getFullName() + " " + this.getWeeklyRate(wage).toString();
       }else {
           return this.getFullName() + " weekly wage: $" + this.getHourlyWage().toString(); 
       }
   }

   //creating an array property of a person's certifications
   addCerts(certs: string[]): void{
       for(let cert in certs){
           certs.push(cert);
       }
       this.certs = certs;
   }

        //interface method
        static createPerson(person: PersonOptions): Person{
            let newPerson = new Person(person.firstName, person.lastName);
            if(person.firstName){
                newPerson.firstName;
            }
            if(person.lastName){
                newPerson.lastName;
            }
            return newPerson;
        }


}


//outputs
var Caleb = new Person("Caleb", "Bridges", "22", "7041234555", "NC", "28262", "Developer", 22);
var Josh = new Person("Josh", "Bridges", "30", "7045552222", "NC", "28202", "Businessman", 26);
var Diamond = new Person("Dwyane", "Wade", "37", "7042928222", "CA", "90210", "Trainer", 20);
document.getElementById("id2").textContent = Caleb.getFullName();
document.getElementById("id3").textContent = Josh.getOccupation();
document.getElementById("id4").textContent = Diamond.getAge();
document.getElementById("id5").textContent = Person.createPerson({firstName: "John", lastName: "Doe"}).getFullName();