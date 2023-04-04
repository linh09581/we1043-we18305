// button add event listener
let btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", () => {
  addTask();
});
function addTask() {

  let task_name = document.getElementById("task-name").value;
  let task_des = document.getElementById("task-description").value;

  if(task_name.length <5 || task_des.length<10){
    alert("Nhap lai");
  }else{
    let disabledInput=true;

  let list = document.getElementById("task-list");
  // create new row
  let row = document.createElement("div");
  row.classList.add("row");
  // create name
  let item_name = document.createElement("input");
  item_name.type = "text";
  item_name.disabled = disabledInput;
  item_name.value=task_name;
  //create description
  let item_des = document.createElement("input");
  item_des.type = "text";
  item_des.disabled = disabledInput;
  item_des.value=task_des;
  // create delete button
  let btn_del = document.createElement("button");
  btn_del.textContent = "del";
  // create edit button
  let btn_edit = document.createElement("button");
  btn_edit.textContent = "edit";

  row.appendChild(item_name);
  row.appendChild(item_des);
  row.appendChild(btn_del);
  row.appendChild(btn_edit);
  list.appendChild(row);
  btn_del.addEventListener("click",()=>{
    list.removeChild(row);
  });
  btn_edit.addEventListener("click",()=>{
        disabledInput=!disabledInput;
        item_name.disabled=disabledInput;
        item_des.disabled=disabledInput;
        btn_edit.textContent=disabledInput?"Edit":"Update";
    });
}}
