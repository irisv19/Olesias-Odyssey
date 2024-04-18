const story = {
  start: {
    text: "To the right of where she is standing there is a paved path leading alongside the forest split into two. ",
    choices: [
      ["example1", "The left path awaited for her a map and compass."],
      ["end", "The right path awaits a satyr."]
    ]
  },
  example1: {
    text: "your story text here part 1",
    choices: [
      ["example2", "Go to example 2"],
      ["end", "go to the end"]
    ]
  },
  example2: {
    text: "your story text here part 2",
    choices: [
      ["example1", "go to example1"],
      ["end", "go to the end"]
    ]
  },
  end: {
    text: ["This is the end"]
  }
  // Above code is the body of the code, they are the containers that hold the text, and the corresponding choices
};
let storyContainer = document.getElementById("story");

let buttonContainer = document.createElement("buttons");
for (let i = 0; i < 3; i++) {
  buttonContainer.innerHTML = story.start.text;
  document.body.appendChild(buttonContainer);
}
let storage = ["start"];
//above code creates the button and story entities, and tells the computer how many should be made

function makeButton(btnText, choice) {
  let button = document.createElement("button");

  button.innerHTML = btnText;

  buttonContainer.appendChild(button);

  button.addEventListener("click", function () {
    storage.push(choice);
    printStory();
  });
}
//above code links the Choice IDs with the button entities

function printStory(text) {
  let pageNow = storage[storage.length - 1];
  storyContainer.innerHTML = "";
  buttonContainer.innerHTML = "";
  for (let page of storage) {
    createStory(story[page].text);
  }
  for (let choice of story[pageNow].choices) {
    makeButton(choice[1], choice[0])
  }
}
//above code prints corresponding text and clears the button and story containers so they can be used repeatedly
function createStory(text) {
  let storyItem = document.createElement("p");

  storyItem.innerText = text;

  storyContainer.appendChild(storyItem);
}
//above code links text IDs to the story containers

printStory(story.start.text);
//above code prints an executes the story