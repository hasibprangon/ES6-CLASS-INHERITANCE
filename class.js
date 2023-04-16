class Instructor {
name;
designation = 'web course instructor'
item = 'web team'
location;
constructor(name,location){
    this.name = name;
    this.location = location;
}
startSupportSession (time){
    console.log(`Start support session at ${time}`)
}
creatQuiz(module){
    console.log(`Creat quiz for module ${module}`)
}
}

const hasib = new Instructor('Hasib', 'Kushtia');
console.log(hasib);
hasib.startSupportSession('9.00')
hasib.creatQuiz(32);
const prangon = new Instructor('Prangon', 'Pabna');
console.log(prangon); 