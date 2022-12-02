"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enemy = void 0;
const character_1 = require("./character");
class Enemy extends character_1.Character {
    constructor(name, description, currentRoom) {
        super(name, description, currentRoom); //health and strength should autmatically be inherited?
        this.cooldown = 3000;
    }
    setPlayer(player) {
        this.player = player;
    }
    randomMove() {
        // Fill this in
    }
    takeSandwich() {
        // Fill this in
    }
    // Print the alert only if player is standing in the same room
    alert(message) {
        if (this.player && this.player.currentRoom === this.currentRoom) {
            console.log(message);
        }
    }
    rest() {
        // Wait until cooldown expires, then act
        const resetCooldown = () => {
            this.cooldown = 0;
            this.act();
        };
        setTimeout(resetCooldown, this.cooldown);
    }
    attack() {
        // Fill this in
    }
    applyDamage(amount) {
        // Fill this in
    }
    act() {
        if (this.health <= 0) {
            // Dead, do nothing;
        }
        else if (this.cooldown > 0) {
            this.rest();
        }
        else {
            this.scratchNose();
            this.rest();
        }
        // Fill this in
    }
    scratchNose() {
        this.cooldown += 1000;
        this.alert(`${this.name} scratches its nose`);
    }
}
exports.Enemy = Enemy;
//# sourceMappingURL=enemy.js.map