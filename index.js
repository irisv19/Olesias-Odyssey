function toggleText() {
  var text = document.getElementById("demo");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}















// function displayText(a) {
//   console.log("test")
//   document.getElementById(a).classList.toggle('gn');
//   }

// const story = {
//   start: {
//     text: "To Olessia's right there was a paved path that split into two.",
//     choices: [
//       ["section0", "Take the left path which awaits a compass and a map."],
//       ["section1", "Take the right path which awaits a satyr."]
//     ]
//   },
// }

// let storyContainer = document.getElementById("story");
//     storyContainer.innerHTML = "There was a girl named Olessia...";
//     let buttonContainer = document.createElement("buttons");
//     for(let i = 0; i < 2; i++){
//         buttonContainer.innerHTML = story.start.text;
//         document.body.appendChild(buttonContainer);
//     }
//     let storage = ["start"];
//     //above code creates the button and story entities, and tells the computer how many should be made

// function makeButton(btnText, choice){
//     let button = document.createElement("button");

//     button.innerHTML = btnText;

//     buttonContainer.appendChild(button);

//     button.addEventListener("click", function(){
//         storage.push(choice);
//         printStory();
//     });
// }
// //above code links the Choice IDs with the button entities

// function printStory(text) {
//     let pageNow = storage[storage.length - 1];
//     storyContainer.innerHTML = "";
//     buttonContainer.innerHTML = "";
//     for(let page of storage){
//         createStory(story[page].text);
//     }
//     for (let choice of story[pageNow].choices){
//     makeButton(choice[1], choice[0])
//     }
// }
// //above code prints corresponding text and clears the button and story containers so they can be used repeatedly
// function createStory(text){
//     let storyItem = document.createElement("p");

//     storyItem.innerText = text;

//     storyContainer.appendChild(storyItem);
// }
// //above code links text IDs to the story containers

// printStory(story.start.text);



// var btn = document.createElement("input");
// btn.setAttribute('type','button');
// btn.setAttribute('value','&#9660;');
// document.body.appendChild(btn);

// function print(text){
// 	// to print some text we first create a new paragraph tag, like having a <p></p> in HTML
// 	var p = document.createElement('p');
// 	// Then we put our text inside the new p element
// 	p.innerHTML = text;
// 	// We add our p element to the document as the last thing in the html body
// 	document.body.appendChild(p);
// 	// The player may have scrolled the page, so make sure we scroll to make the new text visible
// 	p.scrollIntoView();
// }
