class Square {
    constructor(size) {
      this.size = size;
    }
  
    charPrint(c) {
      if (c === undefined) {
        c = 'X';
      }
  
      if (this.size <= 0 || !Number.isInteger(this.size)) {
        console.log('Invalid size for square.');
      } else {
        for (let i = 0; i < this.size; i++) {
          let row = '';
          for (let j = 0; j < this.size; j++) {
            row += c;
          }
          console.log(row);
        }
      }
    }
  }
  