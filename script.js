document.addEventListener("DOMContentLoaded", function() {
    console.log("Tibetan language learning site loaded");

    const draggables = document.querySelectorAll(".draggable");
    const dropZones = document.querySelectorAll(".drop-zone");

    draggables.forEach(draggable => {
        draggable.addEventListener("dragstart", () => {
            draggable.classList.add("dragging");
        });

        draggable.addEventListener("dragend", () => {
            draggable.classList.remove("dragging");
        });
    });

    dropZones.forEach(zone => {
        zone.addEventListener("dragover", e => {
            e.preventDefault();
        });

        zone.addEventListener("drop", e => {
            const dragged = document.querySelector(".dragging");
            if (dragged && dragged.id === zone.getAttribute("data-match")) {
                zone.textContent = dragged.textContent;
                dragged.remove();
            }
        });
    });
});

function playAudio(src) {
    const audio = new Audio(src);
    audio.play();
}
function playAudio(src) {
    const audio = new Audio(src);
    audio.play();
}
