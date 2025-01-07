export default function rsvp() {
  const rsvp = document.getElementById("rsvp");
  const formCtn = document.getElementById("rsvp-form-container");
  const para = document.getElementById("address");

  rsvp.addEventListener(
    "click",
    () => {
      para.remove();

      const form = document.createElement("form");
      form.id = "rsvp-form";

      // Create Name field
      const nameLabel = document.createElement("label");
      nameLabel.setAttribute("for", "name");
      nameLabel.textContent = "first and last Name";
      const nameInput = document.createElement("input");
      nameInput.type = "text";
      nameInput.id = "name";
      nameInput.name = "name";
      nameInput.required = true;

      // Create Attending field (radio buttons)
      const attendingLabel = document.createElement("label");
      attendingLabel.setAttribute("for", "attending");
      attendingLabel.textContent = "bringing plus 1?";
      const yesLabel = document.createElement("label");
      yesLabel.setAttribute("for", "yes");
      yesLabel.textContent = "yes";
      const yesRadio = document.createElement("input");
      yesRadio.type = "radio";
      yesRadio.id = "yes";
      yesRadio.name = "plusOne";
      yesRadio.value = "yes";
      yesRadio.required = true;
      yesLabel.appendChild(yesRadio);

      const noLabel = document.createElement("label");
      noLabel.setAttribute("for", "no");
      noLabel.textContent = "no";
      const noRadio = document.createElement("input");
      noRadio.type = "radio";
      noRadio.id = "no";
      noRadio.name = "plusOne";
      noRadio.value = "no";
      noLabel.appendChild(noRadio);

      // Create Dietary Preference field (dropdown)
      const mealLabel = document.createElement("label");
      mealLabel.setAttribute("for", "diet");
      mealLabel.textContent = "dietary preference";
      const mealSelect = document.createElement("select");
      mealSelect.id = "diet";
      mealSelect.name = "diet";

      const anyOption = document.createElement("option");
      anyOption.value = "anything";
      anyOption.textContent = "anything";
      const vegetarianOption = document.createElement("option");
      vegetarianOption.value = "vegetarian";
      vegetarianOption.textContent = "vegetarian";
      const veganOption = document.createElement("option");
      veganOption.value = "vegan";
      veganOption.textContent = "vegan";

      // Append options to select element
      mealSelect.appendChild(anyOption);
      mealSelect.appendChild(vegetarianOption);
      mealSelect.appendChild(veganOption);

      // Create Phone Number field
      const phoneLabel = document.createElement("label");
      phoneLabel.setAttribute("for", "phone");
      phoneLabel.textContent = "phone number";
      const phoneInput = document.createElement("input");
      phoneInput.type = "text";
      phoneInput.id = "phone";
      phoneInput.name = "phone";
      phoneInput.required = true;

      // Create Submit button
      const submitButton = document.createElement("button");
      submitButton.type = "submit";
      submitButton.textContent = "submit";

      // Append all elements to the form
      form.appendChild(nameLabel);
      form.appendChild(nameInput);
      form.appendChild(attendingLabel);
      form.appendChild(yesLabel);
      form.appendChild(noLabel);
      form.appendChild(mealLabel);
      form.appendChild(mealSelect);
      form.appendChild(phoneLabel);
      form.appendChild(phoneInput);
      form.appendChild(submitButton);

      // Append the form to the body or a specific container
      formCtn.appendChild(form);

      // Scroll to the form
      form.scrollIntoView({ behavior: "smooth", block: "start" });

      // Handle form submission
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Collect form data
        const formData = new FormData(form);
        const data = {
          name: formData.get("name"),
          attending: formData.get("attending"),
          meal: formData.get("diet"),
          phone: formData.get("phone"),
        };

        console.log(data); // Log data for testing (you can send this to Google Sheets or Twilio)

        // Send form data to your server (Google Sheets, SMS, etc.)
        fetch("YOUR_WEB_APP_URL", {
          method: "POST",
          body: formData,
        })
          .then((response) => response.text())
          .then((data) => {
            alert("RSVP submitted successfully!");
          })
          .catch((error) => {
            console.error(error);
            alert("There was an error submitting your RSVP.");
          });
      });
    },
    { once: true }
  );
}
