# The Challenge: The Dynamic Employee Directory

You are building a company directory dashboard. You have a pre-defined array of employee objects, and your job is to render them dynamically onto the webpage using JavaScript.

## The HTML Structure

Imagine your HTML looks like this:

```html
<div class="directory-container">
  <h1>Employee Directory</h1>
  
  <!-- Search / Filter input -->
  <input type="text" id="searchInput" placeholder="Search by name or department...">
  
  <!-- Container where employee cards will be injected -->
  <div id="employeeGrid" class="employee-grid">
    <!-- Dynamic employee cards will appear here -->
  </div>
</div>
```

## Your Task

Write the JavaScript code that fulfills these requirements:

1. Initial Render: When the page loads, loop through the <code>employees</code> array and create a visual "card" (<code>div</code> with a class like <code>"employee-card"</code>) for every single employee. Each card should display their name, role, department, and email.

2. Interactive Search/Filter: Listen for <code>input</code> events on your #searchInput. As the user types:

      - Filter the employee list dynamically so that only employees whose name or department matches what the user is typing remain visible.

      - Clear out the current grid on the screen and re-render only the matching employees.

      - (Bonus/Edge case): Make your search case-insensitive so typing "engineering" or "Engineering" both work!

## Starter Data & Code
```js
const employees = [
   { id: 1, name: "Sarah Jenkins", role: "Frontend Developer", department: "Engineering", email: "sarah.j@company.com" },
   { id: 2, name: "Marcus Chen", role: "Product Manager", department: "Product", email: "marcus.c@company.com" },
   { id: 3, name: "Aisha Patel", role: "UI/UX Designer", department: "Design", email: "aisha.p@company.com" },
   { id: 4, name: "David Kim", role: "Backend Engineer", department: "Engineering", email: "david.k@company.com" },
   { id: 5, name: "Elena Rostova", role: "HR Specialist", department: "Human Resources", email: "elena.r@company.com" }
];

// Select your DOM elements here
const employeeGrid = document.getElementById("employeeGrid");
const searchInput = document.getElementById("searchInput");

// Write a function to render employees to the DOM
function renderEmployees(arr) {
   // Your rendering logic here
}

// Write an event listener for the search input to filter and re-render
```

## Hints
- Clearing the Grid: Before rendering a new list (especially when searching), make sure to clear the container's inner HTML (<code>employeeGrid.innerHTML = ""</code>) so you don't duplicate cards on top of each other!

- Combining Skills: This challenge bridges your previous module (Higher-Order Functions like <code>.filter()</code>) with your current module (DOM manipulation and events). You can use .<code>.filter()</code> to find the matching objects, and then a loop or <code>.forEach()</code> to create and append the elements.