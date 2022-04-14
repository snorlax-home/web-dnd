// Form Handler

function submitEnquiry() {
  let userMail = document.getElementById("mail").value;
  let description = document.getElementById("description").value;

  alert(
    "Your enquiry has been submitted successfully. We will get back to you soon."
  );

  console.log(userMail + description);
}
