class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location
    }
    provideFeedback() {
        console.log(`${this.name} thanks for your feedback`);
    }
}


class Instructor extends TeamMember {
    designation = 'web course instructor'
    item = 'web team'
    constructor(name, location) {
        super(name, location);
    }
    startSupportSession(time) {
        console.log(`Start support session at ${time}`)
    }
    creatQuiz(module) {
        console.log(`Creat quiz for module ${module}`)
    }

}


class Developer extends TeamMember{
    designation = 'web course instructor'
    item = 'web team'
    tech;
    constructor(name, location, tech) {
        super(name, location);
        this.tech = tech;
    }
    developFeature(feature) {
        console.log(`please develop the feature ${feature}`)
    }
    release(version) {
        console.log(`please release the version of ${version}`)
    }
}


class JobPlacement extends TeamMember{
    designation = 'job placement comandos'
    item = 'Job placement'
    constructor(name, location) {
       super(name, location);
    }
    provideResume(resume) {
        console.log(`Start support session at ${resume}`)
    }
    prepareStudents(prepare) {
        console.log(`Creat quiz for module ${prepare}`)
    }
}

const hasib = new JobPlacement('hasib', 'kushtia');
console.log(hasib);
hasib.provideFeedback()

