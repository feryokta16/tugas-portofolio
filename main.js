// Hamburger Menu
const navLinks = document.getElementById("nav-link");

hamburger.addEventListener("click", () => {
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
  }
});

document
  .getElementById("postform")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = {
      to: document.querySelector('input[name="to"]').value,
      name: document.querySelector('input[name="name"]').value,
      subject: document.querySelector('input[name="subject"]').value,
      text: document.querySelector('textarea[name="text"]').value,
    };
    fetch("https://lumoshive-academy-email-api.vercel.app/send-email", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "x-api-key": "RJS1-202409",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("postform").reset();
        alert(data.message);
      })
      .catch((error) => {
        alert("error", error);
      });
  });
