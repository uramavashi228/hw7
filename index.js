class Proger {
    constructor (name, age, stack) {
        // cледим за отступами!
        this.name = name;
        this.age = age;
        this.stack = stack;
    }

    learn (nameTech) {
        this.stack.push(nameTech)
    }
}

class Mentor extends Proger {
    // в таких случаях, когда у класса нет своих атрибутов,
    // конструктор можно убрать - он всё равно унаследуется  
    constructor (name, age, stack) {
        super (name, age, stack)
    }

    learn (nameTech) {
        super.learn(nameTech)
    }
    // назыаем параметры по смыслу - stack или techStack, но никак не param2
    teach (student, param2) {
        student.stack = [...student.stack,...param2]
    }
}

class Student extends Proger{
    constructor (name, age, stack, evalutions) {
        super (name, age, stack)
        this.evalutions = evalutions 
    }
    learn (nameTech) {
        super.learn(nameTech)
    }
}

class Developer extends Proger {
    constructor (name, age, stack, salary){
        super (name, age, stack)
        this.salary = salary
    }
    // а в чём смысл?)
    level(name){
        console.log(name);
    }
}

const student = new Student('Aibek', 20, ['Js'],'5')
console.log(student);

const developer = new Developer('Minkin', 40, ['Java, Python, C++'],'4000$')
developer.level('senior')
console.log(developer);

let stack = ['React', "JS" ]
const Azim = new Mentor ("Azim", 28, stack)
Azim.learn('Java Core')
Azim.teach(Azim, ['Vue Js'])
console.log(Azim)

