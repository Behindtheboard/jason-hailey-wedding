export default function rsvp() {
  const rsvp = document.getElementById("rsvp");
  const formCtn = document.getElementById("rsvp-form-container");
  const para = document.getElementById("address");

  rsvp.addEventListener(
    "click",
    () => {
      para.remove();

      // Check if the form already exists to prevent duplication
      if (document.getElementById("rsvp-form")) return;

      const form = document.createElement("form");
      form.id = "rsvp-form";

      // Create Name field
      const nameLabel = document.createElement("label");
      nameLabel.setAttribute("for", "name");
      nameLabel.textContent = "first and last name";
      const nameInput = document.createElement("input");
      nameInput.type = "text";
      nameInput.id = "name";
      nameInput.name = "name";
      nameInput.required = true;

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

      // Create Phone Number input
      const phoneLabel = document.createElement("label");
      phoneLabel.setAttribute("for", "phone");
      phoneLabel.textContent = "phone number";
      const phoneInput = document.createElement("input");
      phoneInput.type = "text";
      phoneInput.id = "phone";
      phoneInput.name = "phone";

      // Create Email field
      const emailLabel = document.createElement("label");
      emailLabel.setAttribute("for", "email");
      emailLabel.textContent = "email address";
      const emailInput = document.createElement("input");
      emailInput.type = "email";
      emailInput.id = "email";
      emailInput.name = "email";
      emailInput.required = true;

      // Create Submit button
      const submitButton = document.createElement("button");
      submitButton.type = "submit";
      submitButton.textContent = "submit";

      // Append all elements to the form
      form.appendChild(nameLabel);
      form.appendChild(nameInput);
      // form.appendChild(attendingLabel);
      // form.appendChild(yesLabel);
      // form.appendChild(noLabel);
      form.appendChild(mealLabel);
      form.appendChild(mealSelect);
      form.appendChild(phoneLabel);
      form.appendChild(phoneInput);
      form.appendChild(emailLabel);
      form.appendChild(emailInput);
      form.appendChild(submitButton);

      // Append the form to the body or a specific container
      formCtn.appendChild(form);

      // Scroll to the form
      form.scrollIntoView({ behavior: "smooth", block: "start" });

      // Create loader container
      const loader = document.createElement("div");
      loader.classList.add("loader");

      // Create bouncing heart
      const bouncingHeart = document.createElement("div");
      bouncingHeart.classList.add("bouncing-heart");

      // Create loader text
      const loaderText = document.createElement("div");
      loaderText.classList.add("loader-text");
      loaderText.textContent = "Submitting form";

      // Append heart and text to loader
      loader.appendChild(bouncingHeart);
      loader.appendChild(loaderText);


      // Handle form submission
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        document.body.appendChild(loader);

        // Collect form data
        const formData = new FormData(form);
        // Validate email address
        const email = formData.get("email");

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert("Please enter a valid email address.");
          return;
        }

        // Collect form data
        const data = {
          name: formData.get("name"),
          attending: formData.get("attending"),
          diet: formData.get("diet"),
          phone: formData.get("phone"),
          email,
        };

        console.log(data); // Log data for testing (you can send this to Google Sheets or Twilio)

        // Send form data to your server (Google Sheets, SMS, etc.)
        const serverUrl =
          "https://nameless-sea-30482-cb8f6e5a10a5.herokuapp.com/submit-rsvp";
        fetch(serverUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            if (data.success) {
              form.remove();
              document.getElementById("rsvp").remove();
              const submitted = document.createElement("h2");
              submitted.textContent = "success! see you soon!";
              formCtn.appendChild(submitted);
            }
          })
          .catch((error) => {
            console.error(error);
            alert(
              "There was an error submitting your rsvp. Call me if this happens! 404-232-9562"
            );
          })
          .finally(() => {
            // Remove the loader
            if (document.body.contains(loader)) {
              document.body.removeChild(loader);
            }
          });
      });
    },
    { once: true }
  );
}
