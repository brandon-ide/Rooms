class Room {
    constructor(name, length, width, capacity = 15) {
        this.name = name;
        this.length = length;
        this.width = width;
        this.available = true;
        this.capacity = capacity;
    }

    getArea() {
        return this.length * this.width;
    }

    getPerimeter() {
        return 2 * (this.length + this.width);
    }
}



let room1 = new Room("Sun", 30, 20);
let room2 = new Room("Green", 15, 20, 18);

room2.available = false;

const area1 = room1.getArea();
const perimeter1 = room1.getPerimeter();

const area2 = room2.getArea();
const perimeter2 = room2.getPerimeter();

console.log(room1, area1, perimeter1);
console.log(room2, area2, perimeter2);




