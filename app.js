const inputBtn = document.getElementById("input-btn");
let myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  JSON.stringify(myLeads);
  localStorage.setItem("myLeads", myLeads);
  renderLeads();
  console.log(localStorage.getItem("myLeads"));
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li>
    <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
    </li>`;
  }
  ulEl.innerHTML = listItems;
}
