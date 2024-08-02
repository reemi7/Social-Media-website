let Name = document.getElementById("name");
// if(localStorage.getItem('name') == ''){
//   Name.innerText = 'User';
// }
// else{
Name.innerText = localStorage.getItem("name") || "User";

// }
let email = document.querySelector("#email");

let Password = localStorage.getItem("password")
  ? localStorage.getItem("password")
  : "";
if ((Password = "")) {
  alert("u need login first");
  window.location.href = "./index.html";
}

let logout = document.querySelector("#logout");
logout.addEventListener("click", () => {
  window.location.href = "./index.html";
});

let notification = document.querySelector("#notifications");
notification.addEventListener("click", notification_popup);
let notification_card = document.querySelector(".notification-popup");

let notification_pop = 0;

function notification_popup() {
  if (notification_pop == 1) {
    notification_card.style.display = "none";

    notification_pop = 0;
  } else {
    notification_card.style.display = "block";

    notification_pop = 1;
  }
}

// COMMENT_ __________________________ MERA TODO LIST

let inputtype = document.querySelector(".typeinp");
let subbtn = document.querySelector("#submit");
let list = document.querySelector(".list");
let local = localStorage.getItem("key1");
let taskList = JSON.parse(localStorage.getItem("item")) || [];
// let taskList = JSON.parse(localStorage.getItem("item"))
// let taskList = []
// let check = document.querySelector('#checkb')

// let commentDisplay

function button() {
  console.log("hello");

  if (list.innerContent == " ") {
    list.style.display = "none";
    alert("Enter Your Comment");
  } else if (inputtype.value === "") {
    list.style.display = "none";
    alert("Enter Your Comment");
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

displayData();

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
let like_heart = document.querySelector("#heart-button");
// like_heart.addEventListener('click',dillclick())

var a = 0;

function dillclick() {
  // console.log('like')

  if (a == 1) {
    like_heart.innerHTML = `<i class="fa-regular fa-heart"></i>`;
    a = 0;
  } else {
    like_heart.innerHTML = `<i class="fa-solid fa-heart red"></i> `;
    a = 1;
  }
}

// Comment Button Funtion

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

// bio edit

async function main() {
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

    // search - input - working
    // search input function  Start -----------------------------------------------------------------------------------

    let search_icon = document.getElementById("search-icon");
    let search_input = document.getElementById("search-input");
    search_icon.addEventListener("click", () => {
      search();
    });

    let array = data;
    let search_box = document.getElementById("search-box");

    function search() {
      if (!search_input.value == "") {
        array.forEach((element) => {
          let client_name = element.owner.firstName;
          let client_pic = element.owner.picture;
          let client_title = element.owner.title;
          //  let client_lastname = element.owner.lastName

          search_box.style.display = "block";

          if (client_name.includes(search_input.value)) {
            // console.log(client_name);
            // localStorage.setItem('taskList',);
            // localStorage.setItem('clientname',JSON.stringify(client_name))
            localStorage.setItem("clientname", client_name);
            localStorage.setItem("clientimage", client_pic);
            localStorage.setItem("clienttilte", client_title);
            search_box.innerHTML += `<div class="user">
                        <div class="profile-photo" onClick =userpage()>
                        <img src="${element.owner.picture}" alt="">
                    </div>
                    <div class="ingo">
                        <h3 >${element.owner.firstName} ${element.owner.lastName}
                        </h3>
                        <small>${element.owner.title}</small>
                    </div>
                    
                </div>`;

            // client_name.addEventListener('click',()=>{
            // })
            // element.owner.picture.setAttribute("onclick","alert('blah');");

            //  `<div class="search-box-data">
            // //   <img src="${element.owner.picture}" alt="">
            // //   <p></p>
            // // </div>`
          }
        });
      } else {
        // console.log('enter name');
        alert("enater name");
      }
    }

    // search - input - working Ending
    const middle = document.querySelector(".middle");

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
      });

      CommentIcon.innerHTML = `<i class="fa-regular fa-comment"></i>`;

      //comment button
      let commentShow_variable = 0;

      CommentIcon.addEventListener("click", (event) => {
        // alert("comment-icon chall");
        let parentelement = event.target.closest(".feed");
        let commentMain = parentelement.querySelector(".comment-main-section");
        // console.log(commentMain);
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

        if (comment_submit) {
          submitButton.addEventListener("click", (event) => {
            // Prevent the default form submission behavior
            event.preventDefault();

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
                <span id="comment-text">${comment_value}</span>
                <div class="comment-buttons">
                    <button class="btn btn-danger delet-button-of-comment" data-index="${comment_list.length}">delete</button>
                    <button class="btn btn-gray edit-button-of-comment" data-index="${comment_list.length}">edit</button>
                </div>
            `;

            // Append the new comment to the list

            // Push the new comment to the comment_list array
            if (!inputtype.value == " ") {
              list.appendChild(listdata);

              comment_list.push(comment_value);
            }

            // Save the comment_list array to local storage
            localStorage.setItem("comment", JSON.stringify(comment_list));

            // Clear the input field
            inputtype.value = "";

            // Event listener for delete button
            listdata
              .querySelector(".btn-danger")
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
            listdata
              .querySelector(".btn-gray")
              .addEventListener("click", (event) => {
                // Find the index of the comment to edit
                let index = parseInt(event.target.dataset.index);
                // Call the edit function passing the index
                // console.log("EDIT button");
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
          let comment_list = JSON.parse(localStorage.getItem("comment")) || [];

          function commentdisplay() {
            // Get the list element
            // Clear the list
            // list.innerHTML = "";
            // Iterate over the comment_list array and render each comment
            comment_list.forEach((elm, i) => {
              list.innerHTML = `
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
          // let comment_list =  [];
        }
        commentdisplay();
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
    });

    // );
  } catch (err) {
    console.log("error", err);
  }
}

main();

// page scroll function  Start -----------------------------------------------------------------------------------

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 10) {
    main();
  }
});

// page scroll function  end -----------------------------------------------------------------------------------

function userpage() {
  window.location.href = "./user-page.html";
}

// bio edit  Start -----------------------------------------------------------------------------------

let bio_icon = document.querySelector(".bio-edit-icon");
let bio_type_input = document.querySelector("#bio-edit-input");
// let bio_type_input_value = bio_type_input.value

let bio = document.querySelector(".bio-text");

bio_icon.addEventListener("click", () => {
  console.log("bio add");
  bioboxshow();
});

let bio_icon_veriable = false;
function bioboxshow() {
  if (bio_icon_veriable == true) {
    document.querySelector(".bio-edit-box").style.display = "block";
    bio_icon_veriable = false;
  } else {
    document.querySelector(".bio-edit-box").style.display = "none";
    bio_icon_veriable = true;
  }
}

let bio_save_btn = document.querySelector(".bio-save-button");
bio_save_btn.addEventListener("click", () => {
  console.log("bio save");
  // bioboxshow()
  bioSave();
});

let bio_delete_btn = document.querySelector(".bio-delete-button");
bio_delete_btn.addEventListener("click", () => {
  console.log("dlet");
  deleteBio();
});

function bioSave() {
  if (!bio_type_input.value == " ") {
    let biodata = bio_type_input.value;
    localStorage.setItem("bio", `${biodata}`);
    bio_type_input.value = "";
  } else {
    alert("enter bio");
  }
  document.querySelector(".bio-edit-box").style.display = "none";
  window.location.reload();
}
let get_bio = localStorage.getItem("bio") || "BIO";
bio.innerText = get_bio;

function deleteBio() {
  // bio.innerText = " ";
  // bio_type_input.value = " ";
  localStorage.setItem("bio", "");
  window.location.reload();
  // document.querySelector('.bio-edit-box').style.display = 'none'
}

// bio edit  end -----------------------------------------------------------------------------------

// sidebar javascript=================//

////========sidebar=========//
const menuItems = document.querySelectorAll(".menu-item");
const notificationcount = document.querySelector(".notification-count");
//=============messages=======//
const messagenotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

//========theme=====//
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");
const colorPalette = document.querySelectorAll(".choose-color span");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");
//remove active class from all menu-items//
const changActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changActiveItem();
    item.classList.add("active");
    if (item.id != "notifications") {
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      notificationcount.style.display = "none";
      document.querySelector(".notifications-popup").style.display = "block";
    }
  });
});

//==================MESSAGES===========//
//========searches chat=======//
// const searchMessage = () => {
//   const val = messageSearch.value.toLowerCase();
//   message.forEach(chat => {
//     let name = chat.querySelectorAll("h5").textContent.toLowerCase();
//     if (!name.indexOf(val) == -1) {
//       chat.style.display = "flex";
//     } else {
//       chat.style.display = "none";
//     }
//   });
// };
let message_search_icon = document.querySelector("#meesage-search");
message_search_icon.addEventListener("click", searchMessage);

function searchMessage() {
  const val = messageSearch.value.toLowerCase();
  message.forEach((chat) => {
    let name = chat.querySelectorAll("h5").textContent.toLowerCase();
    if (!name.indexOf(val) == -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
}
messageSearch.addEventListener("keyup", searchMessage);
//===highlight messages card when message menu-item is clicked///
messagenotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messagenotification.querySelector(".notification-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

//  theme display customization
const openthememodal = () => {
  themeModal.style.display = "grid";
};
//===close modals
const closethememodal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};

themeModal.addEventListener("click", closethememodal);
theme.addEventListener("click", openthememodal);

// ===============fonts===============
//remove active class from span or font sizes selector
const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle("active");
    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("----sticky-top-left", "-2rem");
      root.style.setProperty("----sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "10px";
      root.style.setProperty("----sticky-top-left", "-5rem");
      root.style.setProperty("----sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "10px";
      root.style.setProperty("----sticky-top-left", "-12rem");
      root.style.setProperty("----sticky-top-right", "-35rem");
    }
    //change font size of root html element
    document.querySelector("html").style.fontSize = fontSize;
  });
});
//remove active class from colors/////
const changeActivColorClass = () => {
  colorPalette.forEach((colorpicker) => {
    colorpicker.classList.remove("active");
  });
};
//======change primary colors======//
colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    let primaryHue;
    changeActivColorClass();
    if (color.classList.contains("color-1")) {
      primaryHue = 252;
      console.log(primaryHue);
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }
    color.classList.add("active");
    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

//=========theme background values========//
let lightColorLightness;
let wihteColorLightness;
let darkColorLightness;
//changes background color
const changeBg = () => {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty(
    "--white-color-lightness",
    wihteColorLightnessColorLightness
  );
  root.style.setProperty(
    "--dark-color-lightness",
    darkColorLightnessColorLightness
  );
};
//=====change background colors
Bg1.addEventListener("click", () => {
  //add active class
  Bg1.classList.add("active");
  //remove classList from others
  Bg2.classList.remove("active");
  Bg3.classList.remove("remove");
  window.location.reload();
});

Bg2.addEventListener("click", () => {
  darkColorLightness = "95%";
  wihteColorLightness = "20%";
  lightColorLightness = "15%";
  //add active class
  Bg2.classList.add("active");
  //remove classList from others
  Bg1.classList.remove("active");
  Bg3.classList.remove("remove");
  changeBg();
});

Bg3.addEventListener("click", () => {
  darkColorLightness = "95%";
  wihteColorLightness = "10%";
  lightColorLightness = "0%";
  //add active class
  Bg3.classList.add("active");
  //remove classList from others
  Bg1.classList.remove("active");
  Bg2.classList.remove("active");
  changeBg();
});
