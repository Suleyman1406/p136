// Write your code here.
const addBtn = document.getElementById("add-button");
const toastsContainer = document.getElementById("toasts");
const successRadioBtn = document.getElementById("success");
const messageTxtarea = document.getElementById("message-content");
const durationInput = document.getElementById("duration");
const cancelableCheckbox = document.getElementById("cancelable");
const clearBtn = document.getElementById("clear-button");

addBtn.addEventListener("click",()=>{
  const toastDiv = document.createElement("div");
  toastDiv.classList.add("toast");
  let textContent = "Success!";
  if(successRadioBtn.checked){
    toastDiv.classList.add("success-toast");
  }else{
    toastDiv.classList.add("error-toast");
    textContent = "Error."
  }
   // toastDiv.classList.add(successRadioBtn.checked ? "success-toast" : "error-toast");
  if(messageTxtarea.value){
    textContent = messageTxtarea.value;
  }
  const newMessage = document.createElement("p");
  newMessage.classList.add("message");
  newMessage.textContent = textContent;
  toastDiv.append(newMessage);
  
  let duration = +durationInput.value;

  if(!duration || isNaN(duration) || duration <500){
    duration = 500;
  }

  if(cancelableCheckbox.checked){
    const cancelBtn = document.createElement("button");
    button.className = "cancel-button";
    cancelBtn.textContent = "X";
    toastDiv.append(cancelBtn);
    cancelBtn.addEventListener("click",()=>{
      toastDiv.remove();
    });
  }
  toastsContainer.prepend(toastDiv);
  setTimeout(()=>{
    toastDiv.remove();
  },duration);
});


clearBtn.addEventListener("click",()=>{
  toastsContainer.innerHTML = "";
});
