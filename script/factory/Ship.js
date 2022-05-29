export default class Ship {
    constructor(name, length) {
        this.name = name;
        this.length = length
        this.isHorizontal = true;
    }

    getPosition() {
        
        //true for horizontal ----- false for vertical;
        return this.isHorizontal ? 'horizontal' : 'vertical';
    }

    switchPosition() {
        this.isHorizontal = !this.isHorizontal;
    }

}
