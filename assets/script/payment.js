// Payment method selection
const paymentMethods = document.querySelectorAll(".payment-method");
let selectedMethod = null;

paymentMethods.forEach((method) => {
  method.addEventListener("click", () => {
    // Remove selection from all methods
    paymentMethods.forEach((m) => {
      m.classList.remove("border-primary", "bg-blue-50");
      m.classList.add("border-gray-200");
    });

    // Add selection to clicked method
    method.classList.remove("border-gray-200");
    method.classList.add("border-primary", "bg-blue-50");
    selectedMethod = method;
  });
});

// Modal functionality
const payButton = document.getElementById("payButton");
const modal = document.getElementById("paymentModal");
const closeModal = document.getElementById("closeModal");
const payLater = document.getElementById("payLater");

// Show modal when pay button is clicked
payButton.addEventListener("click", (e) => {
  e.preventDefault();

  // Basic form validation
  const form = document.getElementById("paymentForm");
  const inputs = form.querySelectorAll("input");
  let isValid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.classList.add("border-red-500", "ring-red-500");
      input.classList.remove("border-gray-300");
      isValid = false;
    } else {
      input.classList.remove("border-red-500", "ring-red-500");
      input.classList.add("border-gray-300");
    }
  });

  // Check if payment method is selected
  if (!selectedMethod) {
    alert("Please select a payment method");
    return;
  }

  if (!isValid) {
    alert("Please fill in all required fields");
    return;
  }

  // Show modal
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
});

// Close modal
function hideModal() {
  modal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

closeModal.addEventListener("click", hideModal);
payLater.addEventListener("click", hideModal);

// Close modal when clicking outside
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    hideModal();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    hideModal();
  }
});


const copyButton = modal.querySelector('button:has-text("Copy")');
if (copyButton) {
  copyButton.addEventListener("click", () => {
    const accountNumber = "12321328913829724";
    navigator.clipboard.writeText(accountNumber).then(() => {
      copyButton.textContent = "Copied!";
      copyButton.classList.add("bg-green-500", "text-white");
      setTimeout(() => {
        copyButton.textContent = "Copy";
        copyButton.classList.remove("bg-green-500", "text-white");
      }, 2000);
    });
  });
}
