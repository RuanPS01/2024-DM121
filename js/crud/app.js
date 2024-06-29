console.log("JS initiated");
const formName = document.querySelector("#formName");
const nameList = document.querySelector("#nameList");

formName.addEventListener("submit", (event) => {
    event.preventDefault();
    // alert("Form Submitted");
    const name = document.querySelector("#name");
    nameList.innerHTML += `<li>${name.value}</li>`;
    name.value = "";
})