window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      this.contact_number.value = (Math.random() * 100000) | 0;
      emailjs.sendForm("contact_service", "contact_form", this).then(
        function () {
          console.log("SUCCESS!");
          window.location.replace("submission");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};
