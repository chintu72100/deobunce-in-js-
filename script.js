let timer;
let output = document.getElementById("output");
let inputField = document.getElementById("input");
let searchBtn = document.getElementById("searchBtn");

inputField.addEventListener("input", (e) => {
    clearTimeout(timer); // Prevents multiple delayed executions

    timer = setTimeout(() => {
        let inputValue = e.target.value;
        if (inputValue.trim() !== "") {
            let listItem = document.createElement("li");
            listItem.textContent = inputValue;
            listItem.classList.add("p-2", "bg-white", "shadow-sm", "rounded-md", "border", "border-gray-300");
            output.appendChild(listItem);
        }
        e.target.value = ""; 
    }, 2000);
});

searchBtn.addEventListener("click", () => {
    let inputValue = inputField.value;
    if (inputValue.trim() !== "") {
        let listItem = document.createElement("li");
        listItem.textContent = inputValue;
        listItem.classList.add("p-2", "bg-white", "shadow-sm", "rounded-md", "border", "border-gray-300");
        output.appendChild(listItem);
    }
    inputField.value = ""; // Clear input after adding
});
