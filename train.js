const backgroundColor = async () => {
  let color = document.getElementById("mySelect").value;
  if (color == "black") {
    document.body.style.backgroundColor =
      document.getElementById("mySelect").value;
    document.body.style.transition = "background-color 0.5s ease-in-out";
    document.getElementsByTagName("h1")[0].style.color = "white";
    document.getElementsByTagName("p")[0].style.color = "white";
    document.getElementsByTagName("label")[0].style.color = "white";
  } else if (color == "white" || color == "yellow") {
    document.body.style.backgroundColor =
      document.getElementById("mySelect").value;
    document.getElementsByTagName("h1")[0].style.color = "black";
    document.getElementsByTagName("p")[0].style.color = "black";
    document.getElementsByTagName("label")[0].style.color = "black";
  }
};
