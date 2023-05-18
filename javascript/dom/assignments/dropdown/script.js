const select =  document.querySelector(".select");
const arrowIcon =  document.querySelector(".select span");
const options =  document.querySelector(".options");

select.addEventListener("click",()=>{
  toggleDropdown()
})

Array.from(options.children).forEach(element=>{
  element.addEventListener("click",(e)=>{
    select.firstElementChild.textContent=e.target.textContent
    toggleDropdown()
  })
})

function toggleDropdown(){
  options.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate180")
}