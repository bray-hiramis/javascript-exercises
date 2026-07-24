# The Challenge: The Interactive Todo / Task Manager

You are building a mini interactive task manager. You will write JavaScript that listens for user input, dynamically creates HTML elements, updates the screen in real-time, and handles user deletions.

## The HTML Structure

Imagine your HTML looks like this:

```html
<div class="app-container">
  <h1>My Tasks</h1>
  <input type="text" id="taskInput" placeholder="Enter a new task...">
  <button id="addButton">Add Task</button>
  
  <p>Total Tasks: <span id="taskCount">0</span></p>
  
  <ul id="taskList">
    <!-- Dynamic tasks will be appended here -->
  </ul>
</div>
```

## Your Task
Write the JavaScript code using DOM manipulation and events that satisfies these rules:

1. Add a Task: When the user clicks the <code>#addButton</code>:

    - Grab the text from the <code>#taskInput</code> field.

    - If the input is empty (or just whitespace), do nothing.

    - Otherwise, create a new <code>&lt;li&gt;</code> element.

    - Inside the <code>&lt;li&gt;</code>, display the task text and add a "Delete" button (a <code>&lt;button&gt;</code> element with the text "Delete" and a class like "delete-btn").

    - Append this new <code>&lt;li&gt;</code> into the #taskList unordered list.

    - Clear out the text inside #taskInput so it's ready for the next entry.

    - Update the #taskCount text to reflect the current total number of tasks.

2. Delete a Task: When the user clicks the "Delete" button on any specific task:

    - Remove that task's <code>&lt;li&gt;</code> entirely from the DOM.

    - Update the #taskCount text to reflect the new total.

## Starter Template

```js
JavaScript
// Select your DOM elements here
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

let totalTasks = 0;

// Your event listener and DOM manipulation logic goes here
```

## Hints

- Remember <code>addEventListener("click", ...)</code> to listen for button clicks.

- Use <code>document.createElement("li")</code> and <code>document.createElement("button")</code> to build elements from scratch, and <code>element.appendChild()</code> or <code>element.append()</code> to place them on the page.

- To update the text inside an element, use .textContent.

- For the delete button, you can attach a click event listener directly to the delete button before you append it to the list, so that when it is clicked, it removes its parent li (using <code>li.remove()</code>) and decrements your counter!