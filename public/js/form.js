document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById("content");
    const counter = document.getElementById("charCount");
  
    if (textarea && counter) {
      textarea.addEventListener("input", () => {
        counter.textContent = textarea.value.length;
      });
    }
  });
  