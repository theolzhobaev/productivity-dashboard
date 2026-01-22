document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggleTheme");
    if (!toggleBtn) return;

    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
        document.body.classList.add("dark");
    }

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const mode = document.body.classList.contains("dark") ? "dark" : "light";
        localStorage.setItem("theme", mode);
    });
});
