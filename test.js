let form,
  output,
  submitForm,
  listItems,
  input,
  arr = [],
  clearBtn;
const getElement = (document, id) => {
  return document.getElementById(id);
};
form = getElement(document, "form");
output = getElement(document, "output");
listItems = getElement(document, "listItems");

output.addEventListener("change", (e) => {
  input = e.target.value;
});

const setClearBtn = () => {
  clearBtn = document.querySelectorAll(".clear");
};
const submit = (e) => {
  e.preventDefault();
  if (arr.indexOf(input) === -1) {
    const li = document.createElement("li");
    li.className = "lists";

    const span = document.createElement("span");
    const button = document.createElement("button");
    button.className = "clear";
    button.textContent = "clear";
    button.id = input;
    button.addEventListener("click", removeItem);
    span.textContent = input;
    li.append(span);
    li.append(button);
    li.id = input;
    listItems.append(li);
    output.value = "";
    setClearBtn();
    arr.push(input);
  }
};
form.addEventListener("submit", submit);

const removeItem = (e) => {
  let li = document.getElementById(e.target.id);
  listItems.removeChild(li);
};
