class User {
    constructor(n, e, DOB, c, p, N, D, ac, sk, ph) {
        this.name = n;
        this.email = e;
        this.careers = c;
        this.professions = p;
        this.personalDocuments = D;
        this.phoneNumber = N;
        this.dob = DOB;
        this.projectsCompleted = p;
        this.achievements = ac;
        this.skills = sk;
        this.photo = ph;
        this.id = function generateUniqueCombination() {
            const timestamp = Date.now();
            const randomNum = Math.floor(Math.random() * 1000000);
            const uniqueStr = `${timestamp}-${randomNum}`;
            const hash = btoa(uniqueStr);  // Base64 encoding for uniqueness
            return hash;
        }
    }
    getId() {
        return this.id();
    }
    getPhoneNumber() {
        return this.phoneNumber;
    }
    getProfessions() {
        return this.professions;
    }
    getPersonalDocs() {
        return this.personalDocuments;
    }
    getNationalId() {
        return this.personalDocuments.nID;
    }
    getCV() {
        return this.personalDocuments.cv;
    }
    getCerts() {
        return this.personalDocuments.certs;
    }
    getCareers() {
        return this.careers;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getAge() {
        const birthDate = new Date(dob);
        const currentDate = new Date();
      
        this.age = currentDate.getFullYear() - birthDate.getFullYear();
      
        const monthDifference = currentDate.getMonth() - birthDate.getMonth();
        
        if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
          this.age--;
        }
      
        return this.age;
    }
    getProjects() {
        return this.projectsCompleted;
    }
    getAchievements() {
        return this.achievements;
    }
    getSkills() {
        return this.skills;
    }
    getUserInfo() {
        return [this.name , this.email , this.age, this.skills];
    }
    updateEmail(newEmail) {
        if (!validateEmail(newEmail)) {
            alert("Wrong Email Format");
        }
        this.email = newEmail;
    }
    updatePhoneNumber(newPhoneNumber) {
        if(!validatePhoneNumber(newPhoneNumber)) {
            alert("Wrong Email Format");
        }
        for(let r = 0; r >= this.phoneNumber.length(); r++) {
            if(newPhoneNumber == this.phoneNumber[r]) {
                this.phoneNumber = newPhoneNumber;
            }
        }
        
    }
    static validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }
    static validatePhoneNumber(phone) {
        // Regular expression to match the formats
        const phoneRegex = /^(?:\+254|254|0)\d{9}$/;
      
        // Test the phone number against the regex
        return phoneRegex.test(phone);
    }

    addCareer(career) {
        this.careers.push(career);
    }
    addProfessions(profession) {
        this.professions.push(profession);
    }
    addPhoneNumber(phoneNumber) {
        this.phoneNumber.push(phoneNumber);
    }
    updateProjectsCompleted(i) {
        this.projectsCompleted = i;
    }
    addSkills(skill) {
        this.skills.push(skill);
    }
    addAchievement(ach) {
        this.achievements.push(ach);
    }
}

export default User;