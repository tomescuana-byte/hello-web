const form = document.getElementById("form");
const table = document.getElementById("contactsTable");

form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;

  const row = table.insertRow();
  row.insertCell(0).innerText = name;
  row.insertCell(1).innerText = phone;

  form.reset();
});
