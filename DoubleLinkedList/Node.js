module.exports = class Node {
    constructor(data) {
        this.data = data;
        this.previousElement = null;
        this.nextElement = null;
    }
}