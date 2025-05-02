document.addEventListener("DOMContentLoaded", () => {

    // Blog character counter
    const textarea = document.getElementById("content");
    const counter = document.getElementById("charCount");
  
    if (textarea && counter) {
      counter.textContent = textarea.value.length;
      
      textarea.addEventListener("input", () => {
        counter.textContent = textarea.value.length;
      });
    }

    // Footer year update
    const currentYear = document.getElementById("current-year");
    if (currentYear) {
      currentYear.textContent = new Date().getFullYear();
    }

    // Delete selected blog post
    const deleteButtons = document.querySelectorAll(".delete-btn");

    deleteButtons.forEach(button => {
      button.addEventListener("click", async () => {
        const id = button.getAttribute("data-id");

        try {
          const res = await fetch(`/delete/${id}`, {
            method: "DELETE"
          });

          if (res.ok) {
            location.reload();
          } else {
            console.error("Delete failed");
          }
        } catch (error) {
          console.error("Error:", error);
        }

      });
    });

});
  