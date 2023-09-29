class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
        // Create an empty object if w or h is not a positive integer or if they are 0
        return {};
      }
  
      this.width = w;
      this.height = h;
    }
  
    print() {
      if (Object.keys(this).length === 0) {
        // If the object is empty, do not print anything
        return;
      }
  
      for (let i = 0; i < this.height; i++) {
        let row = '';
        for (let j = 0; j < this.width; j++) {
          row += 'X';
        }
        console.log(row);
      }
    }
  }
  