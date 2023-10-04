function createClassRoom(numberOfStudents) {
    function studentSeat(seat) {
      return function() {
        return seat;
      };
    }
  
    var students = [];
  
    for (var i = 0; i < numberOfStudents; i++) {
      students.push(studentSeat(i + 1));
    }
  
    return students;
  }
  
  var classRoom = createClassRoom(10);
  