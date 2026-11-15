// Task 16: JavaScript - Map and Filter Exercise

// Array of student objects
const students = [
  { name: "Salmaan Ahmed", marks: 38, class: "3rd", address: "India" },
  { name: "Riya Sharma", marks: 85, class: "10th", address: "123, ABC Colony, Delhi" },
  { name: "Rohan Patel", marks: 70, class: "12th", address: "456, XYZ Street, Mumbai" },
  { name: "Priya Singh", marks: 95, class: "8th", address: "789, PQR Nagar, Bangalore" },
  { name: "Ankit Gupta", marks: 60, class: "9th", address: "101, LMN Road, Kolkata" },
  { name: "Neha Verma", marks: 80, class: "11th", address: "222, DEF Avenue, Chennai" },
  { name: "Manoj Kumar", marks: 75, class: "10th", address: "333, GHI Lane, Hyderabad" },
  { name: "Pooja Mishra", marks: 88, class: "12th", address: "444, STU Colony, Pune" },
  { name: "Rajesh Singhania", marks: 92, class: "9th", address: "555, VWX Street, Jaipur" }
];

const studentGrid = document.getElementById("studentGrid");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");

// map() creates the HTML card for every student in the supplied array.
function displayStudents(studentList) {
  const studentCards = studentList.map((student) => `
    <article class="student-card">
      <h3>Student Name: ${student.name}</h3>
      <p><strong>Marks:</strong> ${student.marks}%</p>
      <p><strong>Class:</strong> ${student.class}</p>
      <p><strong>Address:</strong> ${student.address}</p>
    </article>
  `);

  studentGrid.innerHTML = studentCards.join("");
  resultCount.textContent = `${studentList.length} ${studentList.length === 1 ? "student" : "students"}`;
  emptyState.hidden = studentList.length !== 0;
}

// filter() returns only students whose names match the search text.
function searchStudents() {
  const searchText = searchInput.value.trim().toLowerCase();
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchText)
  );
  displayStudents(filteredStudents);
}

// Update cards in real time while the user types.
searchInput.addEventListener("input", searchStudents);
searchButton.addEventListener("click", searchStudents);

// Display all records when the page loads.
displayStudents(students);

console.log("All student records:", students);
console.log("Student cards are rendered using map().");
console.log("Student search is implemented using filter().");
