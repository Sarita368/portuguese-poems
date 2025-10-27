function displayPoem(response) {
  console.log("poem generated");

  new Typewriter(".poem", {
    strings: [response.data.answer],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();

  let userInputElement = document.querySelector("#user-input");

  let apiKey = "3dfefaofbc33edd4c68fae7t3005c4aa";
  let prompt = `User instructions are: Generate a Portuguese poem about "${userInputElement.value}"`;
  let context =
    "You are a romantic poem expert who writes beautiful Portuguese poems. " +
    "Generate a short poem of exactly four lines in Portuguese. Each line should contain only one sentence. " +
    "Do not include a title or extra text. " +
    "Format the poem in HTML so that each line ends with a <br> tag. " +
    'At the bottom of the poem, add a new line that says "<br>— SheCodes AI". ' +
    "Return only the poem with the <br> tags.";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem...");
  console.log(`Prompt: ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
