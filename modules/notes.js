document.addEventListener("DOMContentLoaded", () => {
    const notesArea = document.getElementById("notesArea");
    if (!notesArea) return;

    const saved = localStorage.getItem("notes") || "";
    notesArea.value = saved;

    notesArea.addEventListener("input", () => {
        localStorage.setItem("notes", notesArea.value);
    });
});
