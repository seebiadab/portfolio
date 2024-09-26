/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message")

const sendEmail = (e) => {
  e.preventDefault()

  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_y004crx",
      "template_h506bo1",
      "#contact-form",
      "YMkaCySRuzZB4BgwY"
    )
    .then(() => {
      // Show sent message
      contactMessage.textContent = 'Message sent successfully ✅'

      // Remove message after five seconds
      setTimeout(() => {
        contactMessage.textContent = ''
      }, 5000)

      // Clear input fields
      contactForm.reset()

    }, () => {
      // Show error message
      contactForm.textContent = 'Message not sent (service error) ❌'
    })
}

contactForm.addEventListener("submit", sendEmail)
