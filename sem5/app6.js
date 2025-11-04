const form = document.getElementById("searchForm");
const result = document.getElementById("result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const id = document.getElementById("resourceId").value;

  const response = await fetch(`http://localhost:3000/resource/${id}`);
  const data = await response.json();

  result.innerText = JSON.stringify(data, null, 2);
});
