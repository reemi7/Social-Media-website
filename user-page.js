let user_box = document.querySelector(".user-box");
let user_image = JSON.stringify(localStorage.getItem("clientimage"));
let user_name = JSON.stringify(localStorage.getItem("clientname"));
let user_title = JSON.stringify(localStorage.getItem("clienttilte"));
// let user_name = localStorage.getItem('clientname')
// user_box.innerHTML = `

// `

user_name= JSON.parse(user_name)

console.log(user_image);
console.log(user_name);
console.log(user_title);
// let Name  = document.querySelector("#name")
// let title  = document.querySelector("#title")
// let image = document.querySelector("#image")

//LOG OUT BUTTON Start
let logout = document.querySelector("#logout");
logout.addEventListener("click", () => {
  window.location.href = "./index.html";
  // localStorage.removeItem('email')
  // localStorage.removeItem('password')
  // localStorage.removeItem('name')
});
//LOG OUT BUTTON ending


async function user_details() {
  try {
    let appId = "661fdcad40ae3650621e5bb1";
    let api = await fetch("https://dummyapi.io/data/v1/post?limit=10", {
      headers: {
        "app-id": appId,
      },
    });
    let api2 = await api.json();
    // console.log(api2);

    let data = api2.data;

    // console.log(data);

    let Name = document.querySelector("#name");
    let title = document.querySelector("#title");
    let image = document.querySelector("#image");
    // data.forEach((element) => {
    //   // console.log(image);

    //   if (element.owner.picture == user_image) {
    //     image.src = element.owner.picture;
    //   }
    // });

    Name.innerHTML = user_name;
    // title.innerHTML = user_title;
    // image.src = user_image;

    //  datat show structure

    const middle = document.querySelector(".middle");

    // Loop through the data array
    data.forEach((element, index) => {
      let feedParent = document.createElement("div");
      feedParent.classList.add("feeds");

      // Create elements for the feed
      const feedDiv = document.createElement("div");
      feedDiv.classList.add("feed");

      // Create elements for the head section
      const headDiv = document.createElement("div");
      headDiv.classList.add("head");

      const userDiv = document.createElement("div");
      userDiv.classList.add("user");

      const profilePhotoDiv = document.createElement("div");
      profilePhotoDiv.classList.add("profile-photo");
      const profilePhotoImg = document.createElement("img");
      profilePhotoImg.src = element.owner.picture;
      profilePhotoDiv.appendChild(profilePhotoImg);

      const infoDiv = document.createElement("div");
      infoDiv.classList.add("info");
      const infoName = document.createElement("h3");
      infoName.textContent = `${element.owner.firstName} ${element.owner.lastName}`;
      const infoTitle = document.createElement("small");
      infoTitle.textContent = element.owner.title;
      infoDiv.appendChild(infoName);
      infoDiv.appendChild(infoTitle);

      userDiv.appendChild(profilePhotoDiv);
      userDiv.appendChild(infoDiv);

      const editSpan = document.createElement("span");
      editSpan.classList.add("edit");
      editSpan.innerHTML = '<i class="fa-solid fa-ellipsis"></i>';

      headDiv.appendChild(userDiv);
      headDiv.appendChild(editSpan);

      // Create elements for the photo section
      const photoDiv = document.createElement("div");
      photoDiv.classList.add("photo");
      const photoImg = document.createElement("img");
      photoImg.src = element.image;
      photoDiv.appendChild(photoImg);

      // Create elements for the action buttons section
      const actionButtonsDiv = document.createElement("div");
      actionButtonsDiv.classList.add("action-buttons");
      // Add interaction buttons...

      // Create elements for the liked-by section
      const likedByDiv = document.createElement("div");
      likedByDiv.classList.add("liked-by");
      // Add liked by content...

      // Create elements for the caption section
      const captionDiv = document.createElement("div");
      captionDiv.classList.add("caption");
      captionDiv.innerHTML = `<p><b>${element.owner.firstName}</b> ${
        element.text
      } <span class="harsh-tag">#lifestyle#${element.tags.join(
        "#"
      )}</span></p>`;

      // Create elements for the comments section
      const commentsDiv = document.createElement("div");

      commentsDiv.classList.add("comments", "text-muted");

      commentsDiv.textContent = "View all 288 comments";

      let actionButton = document.createElement("div");

      actionButton.classList.add("action-buttons");

      let interactionButton = document.createElement("div");

      let likeIcon = document.createElement("span");

      likeIcon.classList.add("dill");

      let CommentIcon = document.createElement("span");
      //  CommentIcon.classList.add('commnet-icon')
      CommentIcon.id = "comment-icon";

      let SendIcon = document.createElement("span");

      //liked button
      let a = 0;
      likeIcon.innerHTML = `<i class="fa-regular fa-heart"></i>`;
      likeIcon.addEventListener("click", () => {
        if (a == 1) {
          likeIcon.innerHTML = `<i class="fa-regular fa-heart"></i>`;
          a = 0;
        } else {
          likeIcon.innerHTML = `<i class="fa-solid fa-heart red"></i> `;
          a = 1;
        }
        console.log("lked");
      });

      CommentIcon.innerHTML = `<i class="fa-regular fa-comment"></i>`;

      //comment button
      let commentShow_variable = 0;

      CommentIcon.addEventListener("click", (event) => {
        // alert("comment-icon chall");
        let parentelement = event.target.closest(".feed");
        let commentMain = parentelement.querySelector(".comment-main-section");
        console.log(commentMain);
        if (commentShow_variable == 1) {
          commentMain.style.display = "block";
          button();
          commentShow_variable = 0;
        } else {
          commentMain.style.display = "none";
          commentShow_variable = 1;
        }
      });

      SendIcon.innerHTML = `<i class="fa-regular fa-paper-plane"></i>`;
      interactionButton.appendChild(likeIcon);
      interactionButton.appendChild(CommentIcon);
      interactionButton.appendChild(SendIcon);
      actionButton.appendChild(interactionButton);

      // let commentMain = document.createElement('div')
      // commentMain.classList.add('comment-main-section')

      // Select the parent element to append the created structure

      const parentElement = document.createElement("div");
      parentElement.classList.add("comment-main-section");

      // Create the div for the comment list section
      const commentListDiv = document.createElement("div");
      commentListDiv.innerHTML = '<ul class="list"></ul>';

      // Create the div for the main card section
      const mainCardDiv = document.createElement("div");
      mainCardDiv.classList.add("main-card");

      // Create the div for the input parent section
      const inputParentDiv = document.createElement("div");
      inputParentDiv.classList.add("input-parent");

      // Create the input element for comment input
      const commentInput = document.createElement("input");
      commentInput.setAttribute("type", "text");
      commentInput.classList.add("comment-search-bar", "typeinp");
      commentInput.setAttribute("placeholder", "Comment on post");

      // Create the button element for submitting comment
      const submitButton = document.createElement("button");
      submitButton.setAttribute("id", "submit-comment");
      submitButton.classList.add("btn-primary", "btn");
      submitButton.innerHTML = '<i class="fa-regular fa-paper-plane"></i>';
      submitButton.addEventListener("click", (event) => {
        // alert("sumbit");
        let submitparent = event.target.closest(".feed");
        let comment_submit = submitparent.querySelector("#submit-comment");
        // event.preventDefault()
        // if (true) {
          comment_submit.addEventListener("click", (event) => {
            // Prevent the default form submission behavior
            // event.preventDefault();
            // Find the closest feed element
            let submitparent = event.target.closest(".feed");
 
            // Find the input element within the feed
            let inputtype = submitparent.querySelector(".typeinp");

            // Get the comment value from the input
            let comment_value = inputtype.value;

            // Get the list element
            let list = submitparent.querySelector(".list");

            // Create a new list item element for the comment
            let listdata = document.createElement("li");
            listdata.innerHTML = `
                <span id="comment-text">${inputtype.value}</span>
                <div class="comment-buttons">
                    <button class="btn btn-danger delet-button-of-comment" data-index="${comment_list.length}">delete</button>
                    <button class="btn btn-gray edit-button-of-comment" data-index="${comment_list.length}">edit</button>
                </div>
            `;

            // Append the new comment to the list

            // Push the new comment to the comment_list array
            // if(!commentInput.value === " "){
            list.appendChild(listdata);

            comment_list.push(comment_value);
            // }

            // Save the comment_list array to local storage
            localStorage.setItem("comment", JSON.stringify(comment_list));

            // Clear the input field
            inputtype.value = "";

            // Event listener for delete button
            listdata.querySelector(".btn-danger")
              .addEventListener("click", (event) => {
                // Find the index of the comment to delete
                // let index = parseInt(event.target.dataset.index);
                const parent = event.target.parentElement.parentElement;
                parent.remove(event);
                // console.log(event);

                // Call the delete function passing the index
                // delet(index);
              });

            // Event listener for edit button
            listdata.querySelector(".btn-gray")
              .addEventListener("click", (event) => {
                // Find the index of the comment to edit
                let index = parseInt(event.target.dataset.index);
                // Call the edit function passing the index
                console.log("EDIT button");
                let inputtype = parentElement.querySelector(".typeinp");
                const parent = event.target.parentElement.parentElement;
                inputtype.value = comment_list[index];
                // comment_list.splice(event,1)
                parent.remove(index);

                // edit(index);
              });
          });
          
          // Function to display comments
          let list = document.querySelector(".list");
          function commentdisplay() {
            // Get the list element
            // Clear the list
            // list.innerHTML = "";
            // Iterate over the comment_list array and render each comment
            comment_list.forEach((elm, i) => {
              list.innerHTML += `
                    <li>
                        <span id="comment-text">${elm}</span>
                        <div class="comment-buttons">
                            <button class="btn btn-danger delet-button-of-comment" data-index="${i}">delete</button>
                            <button class="btn btn-gray edit-button-of-comment" data-index="${i}">edit</button>
                        </div>
                    </li>
                `;
            });
            
          }

          // Initially render comments from local storage
          let comment_list = JSON.parse(localStorage.getItem("comment")) || [];
          // let comment_list =  [];

        // }

        // function delet(index) {
        //   event.splice(index, 1);
        //   commentdisplay();
        // }
        // delet();
        // function edit(event) {
        //   console.log("a");
        //   inputtype.value = comment_list[event];
        //   comment_list.splice(event, 1);
        //   commentdisplay();
        // }
        // edit();
        commentdisplay()

      });

      // Function to delete a comment

      // Append the input and button elements to the input parent div
      inputParentDiv.appendChild(commentInput);
      inputParentDiv.appendChild(submitButton);

      // Append the input parent div to the main card div
      mainCardDiv.appendChild(inputParentDiv);

      // Append the comment list and main card divs to the parent element
      parentElement.appendChild(commentListDiv);
      parentElement.appendChild(mainCardDiv);

      // Append all elements to the feedDiv
      feedDiv.appendChild(headDiv);
      feedDiv.appendChild(photoDiv);
      feedDiv.appendChild(actionButtonsDiv);
      feedDiv.appendChild(actionButton);
      feedDiv.appendChild(likedByDiv);
      feedDiv.appendChild(captionDiv);
      feedDiv.appendChild(commentsDiv);
      feedDiv.appendChild(parentElement);
      // Append feedDiv to middle element
      feedParent.append(feedDiv);

      middle.appendChild(feedParent);
    }
   );
  }
   catch (error) {
    console.log("error", error);
  }
}

user_details();

// COMMENT COMPLETE CODE ------------------------

let inputtype = document.querySelector(".typeinp");
let subbtn = document.querySelector("#submit");
let list = document.querySelector(".list");
let local = localStorage.getItem("key1");
let taskList = JSON.parse(localStorage.getItem("item")) || [];

function button() {
  console.log("hello");

  if (list.innerContent == " ") {
    list.style.display = "none";
    // alert("Enter Your Comment");
  } else if (inputtype.value === "") {
    list.style.display = "none";
    // alert("Enter Your Comment");
  } else {
    taskList.push(inputtype.value);
    list.style.display = "block";
    displayData();
    inputtype.value = "";
  }
}
function displayData() {
  list.innerHTML = "";
  taskList.forEach((elm, i) => {
    list.innerHTML += `

 <li>
 <span id="comment-text">${elm}</span>
 <div class="comment-buttons">
 <button class="btn btn-danger" onClick = del(${i})>delete</button>
 <button class="btn btn-gray" onClick= editing(${i})>edit</button>
 </div>
 </li>
 `;
  });

  localStorage.setItem("item", JSON.stringify(taskList));
}

function del(index) {
  taskList.splice(index, 1);
  displayData();
}

function editing(event) {
  console.log("a");
  inputtype.value = taskList[event];
  taskList.splice(event, 1);
  displayData();
}

var a = 0;

let comment_btn = document.querySelector("#comment-button");
let comment_main_sec = document.querySelector(".comment-main-section");

comment_btn.addEventListener("click", comment_click);

let comment = 0;

function comment_click() {
  console.log("comment");
  if (comment == 1) {
    comment_main_sec.style.display = "none";

    comment = 0;
  } else {
    comment_main_sec.style.display = "block";

    comment = 1;
  }
}

