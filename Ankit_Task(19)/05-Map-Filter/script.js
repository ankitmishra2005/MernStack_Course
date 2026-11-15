const students = [
  { name: "Salmaan Ahmed", marks: 38, className: "3rd", address: "India" },
  { name: "Riya Sharma", marks: 85, className: "10th", address: "123, ABC Colony, Delhi" },
  { name: "Rohan Patel", marks: 70, className: "12th", address: "456, XYZ Street, Mumbai" },
  { name: "Priya Singh", marks: 95, className: "8th", address: "789, PQR Nagar, Bangalore" },
  { name: "Ankit Gupta", marks: 60, className: "9th", address: "101, LMN Road, Kolkata" },
  { name: "Neha Verma", marks: 80, className: "11th", address: "222, DEF Avenue, Chennai" },
  { name: "Manoj Kumar", marks: 75, className: "10th", address: "333, GHI Lane, Hyderabad" },
  { name: "Pooja Mishra", marks: 88, className: "12th", address: "444, STU Colony, Pune" },
  { name: "Rajesh Singhania", marks: 92, className: "9th", address: "555, VWX Street, Jaipur" }
];

const cardsContainer = document.getElementById("studentCards");
const searchInput = document.getElementById("searchInput");
const countText = document.getElementById("count");

// map() creates a card for every student in the filtered array.
function renderStudents(studentList) {
  if (studentList.length === 0) {
    cardsContainer.innerHTML = '<p class="empty">No students found.</p>';
  } else {
    cardsContainer.innerHTML = studentList.map((student) => `
      <article class="student-card">
        <h3>${student.name}</h3>
        <p><strong>Marks:</strong> ${student.marks}%</p>
        <p><strong>Class:</strong> ${student.className}</p>
        <p><strong>Address:</strong> ${student.address}</p>
      </article>
    `).join("");
  }
  countText.textContent = `Showing ${studentList.length} of ${students.length} students`;
}

// filter() finds matching names whenever the user types.
searchInput.addEventListener("input", (event) => {
  const searchText = event.target.value.trim().toLowerCase();
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchText)
  );
  renderStudents(filteredStudents);
});

renderStudents(students);
