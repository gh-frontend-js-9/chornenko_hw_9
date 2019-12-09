class Tamagochi {
    constructor(type) {
        this.type = type;
    }

    initTypeGame() {
        if (this.type === 'LazyPug') {
            this.maxPoints = 71;
        } else if (this.type === 'FluffyKitty' || this.type === 'Ninja') {
            this.maxPoints = 101;
        }
    if (this.type === 'Ninja' ) {
     this.getRandomValue = setInterval(() => {
        let randomProperty = this.randomize(1, 7);
        if (randomProperty === 1) {
            this.food += this.randomize(10, 51);
        } else if (randomProperty === 2) {
            this.clean += this.randomize(10, 51);
        } else if (randomProperty === 3) {
            this.happiness += this.randomize(10, 51);
        } else if (randomProperty === 4) {
            this.health += this.randomize(10, 51);
        } else if (randomProperty === 5) {
            this.socialization += this.randomize(10, 51);
        } else if (randomProperty === 6) {
            this.money += this.randomize(10, 51);
        }
        this.checkMaxValueEasy();
        this.checkMaxValueHard();
        this.showResultsGame();
    }, 6000);
}

        this.food = this.randomize(50,this.maxPoints);
        this.clean = this.randomize(50,this.maxPoints);
        this.happiness = this.randomize(50,this.maxPoints);
        this.health = this.randomize(50,this.maxPoints);
        this.socialization = this.randomize(50,this.maxPoints);
        this.money = this.randomize(50,this.maxPoints);
        this.showResultsGame();

        switch (typeGame) {
            case 'LazyPug':
                this.interval = setInterval(() => {
                    this.food -= 5;
                    this.clean -= 5;
                    this.happiness -= 5;
                    this.health -= 5;
                    this.socialization -= 5;
                    this.money -= 5;
                    this.checkPropertyTamagochi();
                    this.showResultsGame();
                }, 5000);
            case 'FluffyKitty':
                this.interval = setInterval(() => {
                    this.food -= 3;
                    this.clean -= 3;
                    this.happiness -= 3;
                    this.health -= 3;
                    this.socialization -= 3;
                    this.money -= 3;
                    this.checkPropertyTamagochi();
                    this.showResultsGame();
                }, 5000);
            case 'Ninja':
                this.interval = setInterval(() => {
                    this.food -= 7;
                    this.clean -= 7;
                    this.happiness -= 7;
                    this.health -= 7;
                    this.socialization -= 7;
                    this.money -= 7;
                    this.checkPropertyTamagochi();
                    this.showResultsGame();
                }, 7000);
        }
        this.timer = 0;
         this.timerInterval = setInterval(() => {
            this.timer += 1;
            document.getElementById('timeLife').innerHTML = this.timer;
        }, 1000);
    }

        randomize(min, max)
        {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        checkPropertyTamagochi(){
            if (this.food <= 0 || this.clean <= 0 || this.happiness <= 0 ||
                this.health <= 0 || this.socialization <= 0 || this.money <= 0) {
                clearInterval(this.interval);
                clearInterval(this.timerInterval);
                clearInterval(this.getRandomValue);
                this.showResultsGame();
                alert('Game over');
                alert('Your pet lived' + this.timer + 's');
                TamagochiGame = undefined;
            }
        }

    checkMaxValueEasy(){
        if (this.type != 'Ninja'){
            if (this.food > this.maxPoints){
                alert('Game over');
                alert(`Your pet lived ${this.timer} s`)
            }
            else if (this.clean > this.maxPoints){
                alert('Game over');
                alert(`Your pet lived ${this.timer} s`)
            }
            else if (this.happiness > this.maxPoints){
                alert('Game over');
                alert(`Your pet lived ${this.timer} s`)
            }
            else if (this.health > this.maxPoints){
                alert('Game over');
                alert(`Your pet lived ${this.timer} s`)
            }
            else if (this.socialization > this.maxPoints){
                alert('Game over');
                alert(`Your pet lived ${this.timer} s`)
            }
            else if (this.money > this.maxPoints){
                alert('Game over');
                alert(`Your pet lived ${this.timer} s`)
            }
        }
    }

    checkMaxValueHard(){
        if (this.type === 'Ninja'){
            if (this.food > this.maxPoints){
                this.food = this.maxPoints - 1;
            }
            else if (this.clean > this.maxPoints){
                this.clean = this.maxPoints - 1;
            }
            else if (this.happiness > this.maxPoints){
                this.happiness = this.maxPoints - 1;
            }
            else if (this.health > this.maxPoints){
                this.health = this.maxPoints - 1;
            }
            else if (this.socialization > this.maxPoints){
                this.socialization = this.maxPoints - 1;
            }
            else if (this.money > this.maxPoints){
                this.money = this.maxPoints - 1;
            }
        }
    }

    toEat() {
        this.food += 30;
        this.clean -= 20;
        this.checkMaxValueHard();
        this.checkMaxValueEasy();
        this.showResultsGame();
        this.checkPropertyTamagochi();
    }

    toWash() {
        this.clean += 40;
        this.happiness -= 20;
        this.checkMaxValueHard();
        this.checkMaxValueEasy();
        this.showResultsGame();
        this.checkPropertyTamagochi();
    }

    toRun() {
        this.food -= 10;
        this.happiness += 15;
        this.checkMaxValueHard();
        this.checkMaxValueEasy();
        this.showResultsGame();
        this.checkPropertyTamagochi();
    }

    toVisitDoctor(){
        this.health += 30;
        this.money -= 20;
        this.checkMaxValueHard();
        this.checkMaxValueEasy();
        this.showResultsGame();
        this.checkPropertyTamagochi();
    }

    goBar() {

        this.food += 10;
        this.health -= 10;
        this.socialization += 40;
        this.money -= 20;
        this.checkMaxValueHard();
        this.checkMaxValueEasy();
        this.showResultsGame();
        this.checkPropertyTamagochi();
    }

    goWork(){

        this.food -= 10;
        this.health -= 10;
        this.socialization -= 20;
        this.money += 50;
        this.checkMaxValueHard();
        this.checkMaxValueEasy();
        this.showResultsGame();
        this.checkPropertyTamagochi();
    }

    toBuyFood() {
        this.food += 20;
        this.money -= 20;
        this.checkMaxValueHard();
        this.checkMaxValueEasy();
        this.showResultsGame();
        this.checkPropertyTamagochi();
    }

    toStartBusiness() {

        this.happiness += 100;
        this.health -= 100;
        this.socialization -= 20;
        this.money += 100;
        this.checkMaxValueHard();
        this.checkMaxValueEasy();
        this.showResultsGame();
        this.checkPropertyTamagochi();
    }
    showResultsGame(){
        document.getElementById('food').innerHTML = this.food;
        document.getElementById('clean').innerHTML = this.clean;
        document.getElementById('happiness').innerHTML = this.happiness;
        document.getElementById('health').innerHTML = this.health;
        document.getElementById('socialization').innerHTML = this.socialization;
        document.getElementById('money').innerHTML = this.money;

        document.getElementById("progressEnergy").value = this.food;
        document.getElementById("progressClean").value = this.clean;
        document.getElementById("progressHappy").value = this.happiness;
        document.getElementById("progressSocialization").value = this.food;
        document.getElementById("progressMoney").value = this.clean;
        document.getElementById("progressHealth").value = this.happiness;
    }
}
let typeGame = document.getElementById("status").value;

let TamagochiGame = new Tamagochi(typeGame);