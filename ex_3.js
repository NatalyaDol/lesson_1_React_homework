// 3. Необходимо написать иерархию классов вида:
// Human -> Employee -> Developer
// Human -> Employee -> Manager

// Каждый Менеджер (Manager) должен иметь внутренний массив своих сотрудников (разработчиков),
// а также методы по удалению/добавлению разработчиков.

// Каждый Разработчик (Developer) должны иметь ссылку на Менеджера 
//и методы для изменения менеджера (имеется ввиду возможность назначить другого менеджера).
//  + У класса Human должны быть следующие параметры: name (строка), age (число), dateOfBirth (строка или дата)
//  + У класса Employee должны присутствовать параметры: salary (число), department (строка)
// В классе Human должен присутствовать метод displayInfo, который возвращает строку 
//со всеми параметрами экземпляра Human.
// В классе Employee должен быть реализовать такой же метод (displayInfo), 
//который вызывает базовый метод и дополняет его параметрами из экземпляра Employee
// Чтобы вызвать метод базового класса, необходимо внутри вызова метода displayInfo 
//класса Employee написать: super.displayInfo(), это вызовет метод disaplyInfo класс Human и вернет строку с параметрами Human'a.

'use strict';
//version by teacher

// Human
class Human {
    constructor(data) {
        this.name = data.name;
        this.age = data.age;
        this.dateOfBirth = data.dateOfBirth;
    }

    displayInfo () {
        return JSON.stringify(this);
        //JSON.stringify возвращает текст в ковычках
    }
};

// Employee
class Employee extends Human {
    constructor(data) {
        super(data);// обращение к родительскому классу 
        this.salary = data.salary;
        this.department = data.department;
    }

    displayInfo () {
        return super.displayInfo; //возврат метода родительского класса
    }
};


//Developer
class Developer extends Employee {
    constructor(data) {
        super(data);
        this.myManager = null;
    }

    changeManager (manager) {
        this.manager = manager;
        if(manager && !manager.developers.includes(this)) {
            manager.addDeveloper(this);
        }
       
    }
};

//Manager
class Manager extends Employee {
    constructor(data) {
        super(data);
        this.developers = [];
    }

    addDeveloper(developer) {
        this.developers = this.developers.concat(developer);
        //concat возьмет первоначальный массив и добавит в него developer
        developer.changeManager(this);//Нужно чтобю к этому dev прикрепился его менеджер, ссылаемся на метод в Manager
    }

    removeDeveloper(developer) {
        this.developers = this.developers.filter(n => n !== developer);
        developer.changeManager(null);// убираем у developer этого менеджера соответствующим методом
    }
};

const data = {
    name: 'Oleg',
    age: 27,
    dateOfBirth: 1991,
    salary: 50000,
    department: 'any'
}
const developer = new Developer(data);
const developer2 = new Developer(data);
const manager = new Manager(data);
const manager2 = new Manager(data);
manager.addDeveloper(developer);
console.log(manager);

manager.addDeveloper(developer2);

// manager.removeDeveloper(developer)
console.log(manager);
console.log(developer);




//MY version
// console.log("Exercise #3");
// class Human {
//     constructor(name, age, dateOfBirth) {
//         this.name = name;
//         this.age = age;
//         this.dateOfBirth = dateOfBirth;
//     }

//     displayInfo () {
//         return (this.name + ", " + this.age + ", " + this.dateOfBirth);
//     }
// };

// //Employee start
// class Employee extends Human {
//     constructor(name, age, dateOfBirth, salary, department) {
//         super(name, age, dateOfBirth);
//         this.salary = salary;
//         this.department = department;
//     }

//     displayInfo () {
//         return (super.displayInfo() + ", " + this.salary + ", " + this.department);
//     }
// };
// //Employee end

// //Manager start
// class Manager extends Employee {
//     constructor(name, age, dateOfBirth, salary, department) {
//         super(name, age, dateOfBirth, salary, department);
//         this.developers = [];
//     }

//     addDeveloper(developer) {
//         this.developers.push(developer)
//     }

//     deleteDeveloper(developer) {
//        this.developers = this.developers.filter(n => n !== developer)
//     }
// };
// //Manager end

// //Developer start
// class Developer extends Employee {
//     constructor(myManager) {
//         super();
//         this.myManager = myManager;
//     }

//     changeManager (nameManager) {
//         this.myManager = nameManager;
//     }
    
// };
// //Developer end



// let humanPetrovPetr = new Manager('Петров Петр', 21, '02.02.1997', 10000, 'IT');
// console.log(humanPetrovPetr);

// console.log(humanPetrovPetr.displayInfo());

// let vasya = new Developer('Vasya', 22, '02.02.1999', 5000, 'IT');
// humanPetrovPetr.addDeveloper(vasya)

// console.log(humanPetrovPetr.developers);