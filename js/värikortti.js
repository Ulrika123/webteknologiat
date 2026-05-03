function changeColor() {
  const box = document.getElementById("box");

  if (box.style.backgroundColor === "red") {
    box.style.backgroundColor = "blue";
  } else {
    box.style.backgroundColor = "red";
  }
}