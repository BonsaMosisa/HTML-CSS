function toggleContent() {
  const textElement = document.getElementById("toggleText");

  if (textElement.textContent === "SHOW PHONE") {
    textElement.textContent = "0912345678"; // Change text to the phone number
    textElement.classList.add("clicked"); // Add the 'clicked' class to change background to red
  } else {
    textElement.textContent = "SHOW PHONE"; // Change text back to 'SHOW PHONE'
    textElement.classList.remove("clicked"); // Remove the 'clicked' class to revert background
  }
}
