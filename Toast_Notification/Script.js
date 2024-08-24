// Get elements
const buttons = document.querySelectorAll(".buttons .btn");
const notification = document.querySelector(".notification");

// Toast details
const toastDetails = {
  timer: 5000,
  success: {
    icon: "fa-circle-check",
    text: "Toast message Lorem ipsum dolor sit amet."
  },
  wrong: {
    icon: "fa-circle-check",
    text: "Toast message Lorem ipsum dolor sit amet."
  },
  warn: {
    icon: "fa-circle-check",
    text: "Toast message Lorem ipsum dolor sit amet."
  }
};

// Remove toast function
const removeToast = (toast) => {
  toast.classList.add("hide");
  setTimeout(() => toast.remove(), 500);
};

// Create toast function
const createToast = (id) => {
  const { icon, text } = toastDetails[id];
  const toast = document.createElement("li");
  toast.className = `toast ${id}`;
  toast.innerHTML = `
    <div class="column">
      <i class="fa-regular ${icon}"></i>
      <span>${text}</span>
    </div>
    <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>
  `;
  notification.appendChild(toast);
  setTimeout(() => removeToast(toast), toastDetails.timer);
};

// Add event listeners to buttons
buttons.forEach((btn) => {
  btn.addEventListener("click", () => createToast(btn.id));
});