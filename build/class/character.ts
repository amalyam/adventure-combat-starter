import { Room } from "./room.js";
import { Item } from "./item.js";

class Character {
  public health = 100;
  public strength = 10;
  public items: Item[] = [];
  constructor(
    public name: string,
    public description: string,
    public currentRoom: Room | null
  ) {}

  applyDamage(amount: number) {
    this.health -= amount;
  }

  die() {
    //drop all held items
    if (this.items.length > 0 && this.currentRoom) {
      this.currentRoom.items = this.items;
      this.items = []; //make sure this is actually ok
    }
    this.currentRoom = null;
  }
}

export { Character };