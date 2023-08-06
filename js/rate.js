let selectChose = document.querySelectorAll("ul li");

selectChose.forEach((e) => {
  e.addEventListener("click", () => {
    // remove style and class from previos chose
    let activeSelect = document.getElementsByClassName("active")[0];
    if (activeSelect != undefined) {
      activeSelect.classList.remove("active");
      activeSelect.style.color = "";
      activeSelect.style.backgroundColor = "";
    }
    // add style and class to target cliced
    e.style.backgroundColor = "hsl(216, 12%, 54%)";
    e.style.color = "#fff";
    e.classList.add("active");
    sessionStorage.setItem("select", e.textContent); // add chose to local storage to get the value in thank you page
  });
});

let submit = document.getElementsByTagName("button")[0];
submit.addEventListener("click", () => {
  if (sessionStorage.getItem("select") != null)
    window.open("../endRate.html", "_self");
  else alert("you must chose ");
});
