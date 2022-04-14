// Form Handler

function submitEnquiry() {
  alert(
    "Your enquiry has been submitted successfully. We will get back to you soon."
  );
  let userMail = document.getElementById("mail").value;
  let description = document.getElementById("description").value;

  console.log(userMail + description);
}
