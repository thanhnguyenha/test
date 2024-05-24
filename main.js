let data = {
  a2: "",
  b2: "",
  a3: "",
  b3: "", 
  a4: "701 GD1",
  b4: "701 GD1", 
  a5: "",
  b5: "", 
  a6: "801 GD1",
  b6: "309 GD2", 
  a7: "801 GD1",
  b7: "801 GD1", 
}

const saveData = () => {
  localStorage.setItem("data", JSON.stringify(data));
}

const loadData =() => {
  const text = localStorage.getItem("data");
  if(text) {
    data = JSON.parse(text)
  }
}

let temp = null;
const showPopup = (id) => {
  temp = id;
  $("#popup").css("display", "flex");
  $("#input_value").val(data[id])
}

const saveValue = () => {
  $("#popup").hide();
  data[temp] = $("#input_value").val();
  saveData();
  updateUI();
}

const updateUI = () => {
  const listKey = Object.keys(data);
  listKey.forEach((item) => {
    $(`#${item}`).text(data[item]);
    if(data[item].length < 1)
      $(`#${item}`).css("background-color", "#fff")
  })
}

const deleteRoom = (id) => {
  data[id] = "";
  updateUI();
  saveData();
}

$(document).ready(function () {
  loadData();
  updateUI();
});