const employees = [
   { id: 1, name: "Sarah Jenkins", role: "Frontend Developer", department: "Engineering", email: "sarah.j@company.com", picture: "./assets/profile-picture.png" },
   { id: 2, name: "Marcus Chen", role: "Product Manager", department: "Product", email: "marcus.c@company.com", picture: "./assets/profile-picture.png" },
   { id: 3, name: "Aisha Patel", role: "UI/UX Designer", department: "Design", email: "aisha.p@company.com", picture: "./assets/profile-picture.png" },
   { id: 4, name: "David Kim", role: "Backend Engineer", department: "Engineering", email: "david.k@company.com", picture: "./assets/profile-picture.png" },
   { id: 5, name: "Elena Rostova", role: "HR Specialist", department: "Human Resources", email: "elena.r@company.com", picture: "./assets/profile-picture.png" }
];

const searchInput = document.getElementById("search-input");
const employeeGrid = document.getElementById("employee-grid");

function getEmployeeCard(employee) {
   return `<div class="employee-card">
               <img src="${employee["picture"]}" alt="Profile Picture" id="employee-picture">
               <div class="employee-details">
                  <h2>Employee Name: <span class="employee-name">${employee.name}</span></h2>
                  <ul class="employee-more-info">
                     <li class="details">Employee ID: ${employee.id}</li>
                     <li class="details">${employee.role}</li>
                     <li class="details">${employee.department}</li>
                     <li class="details">${employee.email}</li>
                  </ul>
               </div>
            </div>`
}

function getEmployee() {

   const query = searchInput.value.toLowerCase().trim()

   if (query === "") {
      const allEmployees = employees.map(employee => {
         return getEmployeeCard(employee);
      }).join("");
      return allEmployees;
   }

   // Where search filtering happen ===============================================
   const filteredEmployee = employees.filter(employee => {
      if (employee.name.toLowerCase().includes(query) || employee.department.toLowerCase().includes(query)) {
         return true;
      }
   });

   if (filteredEmployee.length === 0) {
      return `No employee(s) found for "${searchInput.value}"`;
   }

   const searchEmployee = filteredEmployee.map(employee => {
      return getEmployeeCard(employee);
   }).join("");
   return searchEmployee;
   // ===============================================
}

searchInput.addEventListener("input", function() {
   employeeGrid.innerHTML = getEmployee();
})

document.addEventListener("DOMContentLoaded", function() {
   employeeGrid.innerHTML = getEmployee();
})