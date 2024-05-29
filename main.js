let dataDefault = {
  a2: "",
  a2class: "",
  b2: "",
  b2class: "",
  a3: "",
  a3class: "",
  b3: "", 
  b3class: "",
  a4: "701 GD1",
  a4class: "17-07",
  b4: "701 GD1",
  b4class: "17-08", 
  a5: "",
  a5class: "",
  b5: "", 
  b5class: "",
  a6: "801 GD1",
  a6class: "17-03",
  b6: "309 GD2",
  b6class: "17-06", 
  a7: "801 GD1",
  a7class: "17-05",
  b7: "801 GD1",
  b7class: "17-04", 
}

let data = {...dataDefault}

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
  $("#class_value").val(data[`${id}class`])
}

const saveValue = () => {
  console.log("temp = ", temp)
  $("#popup").hide();
  data[temp] = $("#input_value").val();
  data[`${temp}class`] = $("#class_value").val();
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
  data[`${id}class`] = "";
  updateUI();
  saveData();
}

const resetData = () => {
  data = {...dataDefault};
  saveData();
  updateUI();
}

$(document).ready(function () {
  loadData();
  updateUI();
});
