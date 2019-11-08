import { Globals } from "../Globals";

export class Character {
    
    constructor(name, health, kinship, sick, hungry, cold) {
        this.name = name;
        this.health = health;
        this.kinship = kinship;
        this.isDead = false;
        this.sick = sick;
        this.hungry = hungry;
        this.cold = cold;
    }

    looseHealth(healthToLoose) {

        if (this.health > 0) {
            this.health -= healthToLoose;

            if (this.health <= 0) {
                this.health = 0;
                Globals.tempLogs.push(this.name + ' died at day ' + Globals.currentDay);
                this.isDead = true;
            } else {
                Globals.tempLogs.push(this.name + ' lost -' + healthToLoose + ' health');
            }
        }
    }
}