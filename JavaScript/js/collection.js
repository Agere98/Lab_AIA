function addEntry() {
  const table = document.getElementById("collection");
  const entry = document.createElement("tr");
  const header = table.getElementsByTagName("tr").item(0);
  const numFields = header.getElementsByTagName("th").length - 1;
  for (let i = 0; i < numFields; i++) {
    const field = document.createElement("td");
    const input = document.createElement("input");
    field.appendChild(input);
    entry.appendChild(field);
  }
  const field = document.createElement("td");
  const saveButton = document.createElement("button");
  saveButton.textContent = "Save";
  saveButton.onclick = saveEntry;
  field.appendChild(saveButton);
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.onclick = removeEntry;
  field.appendChild(removeButton);
  entry.appendChild(field);
  table.appendChild(entry);
}

function removeEntry() {
  let entry = this.parentElement;
  while (entry.tagName != "TR") {
    entry = entry.parentElement;
  }
  entry.remove();
}

function saveEntry() {
  let entry = this.parentElement;
  while (entry.tagName != "TR") {
    entry = entry.parentElement;
  }
  [...entry.getElementsByTagName("td")].forEach((element) => {
    const child = element.children[0];
    if (child.tagName == "INPUT") {
      element.textContent = child.value;
      child.remove();
    }
  });
  this.textContent = "Edit";
  this.onclick = editEntry;
}

function editEntry() {
  let entry = this.parentElement;
  while (entry.tagName != "TR") {
    entry = entry.parentElement;
  }
  [...entry.getElementsByTagName("td")].forEach((element) => {
    if (element.children.length == 0) {
      const input = document.createElement("input");
      input.value = element.textContent;
      element.textContent = "";
      element.appendChild(input);
    }
  });
  this.textContent = "Save";
  this.onclick = saveEntry;
}
