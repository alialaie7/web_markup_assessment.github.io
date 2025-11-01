//create a simple carousel scroll controls for categories

const track = document.getElementById("track");
const left = document.querySelector(".car-arrow.left");
const right = document.querySelector(".car-arrow.right");
function scrollByCard(dir = 1) {
    const card = track.querySelector(".card");
    if (!card) return;
    track.scrollBy({
        left: card.getBoundingClientRect().width * dir + 16,
        behavior: "smooth",
    });
}
left?.addEventListener("click", () => scrollByCard(-1));
right?.addEventListener("click", () => scrollByCard(1));

// put the year in footer

document.getElementById("year").textContent = new Date().getFullYear();
