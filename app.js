let todos = [];
const ul = document.getElementById("todos");
const pages = document.getElementById("pages");
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => (todos = data));

const createElement = (todo) => {
  const li = document.createElement("li");
  li.innerHTML = `
      <div class="flex gap-5 place-items-center w-3/4 mx-auto bg-${
        todo.id % 2 ? "sky" : "blue"
      }-200 p-2">
        <div class="text-xl font-medium ">
          <span>${todo.id}</span>. ${todo.title}
        </div>
        <div><i class="text-3xl text-${
          todo.completed ? "green" : "red"
        }-700 fa-solid fa-clipboard-${
    todo.completed ? "check" : "question"
  }"></i></div>
      </div>`;
  ul.append(li);
};

const loadUser = (s, e) => {
  console.log("data loaded");
  const currentTodos = todos?.slice(s, e);
  currentTodos.map((e) => createElement(e));
};

pages.addEventListener("click", (e) => {
  ul.innerHTML = "";
  switch (e.target.id) {
    case "p1":
      loadUser(0, 10);
      break;
    case "p2":
      loadUser(10, 20);
      break;
    case "p3":
      loadUser(20, 30);
      break;
    case "p4":
      loadUser(30, 40);
      break;
    case "p5":
      loadUser(40, 50);
      break;
    case "p6":
      loadUser(50, 60);
      break;
  }
});
setTimeout(() => {
  document.getElementById("waiter").style.display = "none";
  loadUser(0, 10);
}, 1500);
