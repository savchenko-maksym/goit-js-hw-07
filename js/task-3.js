const textInput = document.querySelector("#name-input");
console.log(textInput);

const nameOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (e) => {
  if (e.currentTarget.value.trim() === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = e.currentTarget.value;
  }
});
