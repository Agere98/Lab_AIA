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
//   saveButton.onclick = saveEntry;
  field.appendChild(saveButton);
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
//   removeButton.onclick = removeEntry;
  field.appendChild(removeButton);
  entry.appendChild(field);
  table.appendChild(entry);
}
