var alldata;
if (localStorage.getItem("alldataStorage") != null) {
  alldata = JSON.parse(localStorage.getItem("alldataStorage"));
  display();
} else {
  alldata = [];
}
function submit() {
  document.getElementById("field1").innerHTML = "";
  document.getElementById("field2").innerHTML = "";
  var name = document.getElementById("BookmarkName").value;
  var url = document.getElementById("WebsiteURL").value;
  if (name == "" && url == "") {
    document.getElementById("field1").innerHTML = "you must fill the field";
    document.getElementById("field2").innerHTML = "you must fill the field";
  } else if (name == "") {
    document.getElementById("field1").innerHTML = "you must fill the field";
  } else if (url == "") {
    document.getElementById("field2").innerHTML = "you must fill the field";
  } else {
    var onedata = {
      Nname: name,
      Uurl: url
    };

    alldata.push(onedata);
    localStorage.setItem("alldataStorage", JSON.stringify(alldata));
    display();
    document.getElementById("BookmarkName").value = "";
    document.getElementById("WebsiteURL").value = "";
  }
}
function deleteData(number) {
  alldata.splice(number, 1);
  localStorage.setItem("alldataStorage", JSON.stringify(alldata));
  display();
}
function display() {
  var temp = "";
  for (var i = 0; i < alldata.length; i++) {
    temp =
      temp +
      "<div class='output d-flex'>" +
      "<div class='col-md-4'>" +
      "<h2>" +
      alldata[i].Nname +
      "</h2>" +
      "</div>" +
      "<div class='col-md-6'>" +
      "<a class='btn btn-primary mr-3'href=' " +
      alldata[i].Uurl +
      " ' target='_blank'>visit</a>" +
      "<button onclick='deleteData(" +
      i +
      ")'  class='btn btn-danger'>Delete</button>" +
      "</div>" +
      "</div>";
  }
  document.getElementById("data").innerHTML = temp;
}
