const boxes = document.querySelectorAll(".box");
const heading = document.querySelector(".heading span");

const colors = ["#7c69ef", "#d6c227", "#2711ee", "#FFA500"];
const techs =["Bootstrap", "JavaScript", "CSS", "HTML"];


let current = 1;

const textStyle = () => {
    heading.style.color = colors [current - 1];
    heading.textContent = techs [current - 1];
};

let interval = setInterval(() => {
    boxes.forEach((box) => {
        if(current > boxes.length) current = 1;
        if(box.classList[1].split("-")[1] * 1 === current) {
            box.classList.add("active");
        } else {
            box.classList.remove("active");
        }
    });
    textStyle();
    current++;
}, 5000);

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        boxes.forEach((cube) => {
            cube.classList.remove("active");
        });
        box.classList.add("active");

        current = box.classList[1].split("-")[1] * 1;

        textStyle();

        clearInterval(interval);
    });
});