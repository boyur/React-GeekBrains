class Human {
  constructor(name, age, dateOfBirth) {
    this.name = name;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
  }

  displayInfo() {
    console.log(this);
  }

}

class Employee extends Human {
  constructor(salary, department) {
    super();
    this.salary = salary;
    this.department = department;
  }

  displayInfo() {
    console.log(this);
  }
}

//new Employee('1', 'строка').displayInfo();

let boyur = new Employee('Артем','Боюр','09.05.1990');
console.log(boyur);