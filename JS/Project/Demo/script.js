class Teacher{
    name;
    age;
    salary;
    subject;
    constructor(a,b,c,d)
    {
        this.name=a;
        this.age=b;
        this.salary=c;
        this.subject=d
    }
    display()
    {
        console.log(`${this.name}`+" "+`${this.age}`+" "+`${this.salary}`+" "+`${this.subject}`,

        )
    }
}
let obj2=new Teacher("Khushi",45,60000,"maths")