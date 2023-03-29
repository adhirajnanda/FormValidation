function validate() {
  const fname = document.r_form.firstname;
  const lname = document.r_form.lastname;
  const email = document.r_form.email;
  const password = document.r_form.password;
  const cpassword = document.r_form.cpassword;
  const mobile = document.r_form.mobile;
  const aadhar = document.r_form.aadhar;
  const pan = document.r_form.pan;
  const submit = document.r_form.submitbtn;

  if (fname.value.length <= 0) {
    alert("First Name Can Not Be Blanked");
    focus.fname();
    return false;
  }

  if (lname.value.length <= 0) {
    alert("Last Name Can Not Be Blanked");
    focus.lname();
    return false;
  }

  function validateEmail(email) {
    var mailformat =
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (email.value.match(mailformat)) {
      //document.form1.text1.focus();
      return true;
    } else {
      alert("Invalid email address.");
      //document.form1.text1.focus();
      return false;
    }
  }

  validateEmail(email);
  // if (email.value.length <= 0) {
  //   alert("Please Enter Your Email ID");
  //   focus.email();
  //   return false;
  // }

  if (mobile.value.length <= 0) {
    alert("Please Enter Mobile No");
    focus.mobile();
    return false;
  } else if (mobile.value.length > 10) {
    alert("Maximum 10 Digits Are Allowed");
    focus.mobile();
    return false;
  }

  if (aadhar.value.length <= 0) {
    alert("Please Enter Your Aadhar No");
    focus.aadhar();
    return false;
  } else if (aadhar.value.length > 12) {
    alert("Aadhar No Must Be Less Than 12 Digits");
    focus.aadhar();
    return false;
  }

  function ValidatePAN(pan) {
    var regex = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;

    if (pan.value.length <= 0) {
      alert("Please Enter Your PAN No");
      focus.pan();
      return false;
    } else if (pan.value.match(regex)) {
      return true;
    } else {
      alert("Invalid Pan No  (USE UPPERCASE AND USE FORMAT (EX:-ABCDE1234A) )");
      return false;
    }
  }

  ValidatePAN(pan);

  // if (pan.value.length <= 0) {
  //   alert("Please Enter Your PAN No");
  //   focus.pan();
  //   return false;
  // } else if (pan.value.length > 11) {
  //   alert("PAN No Must Be Less Than 10 Digits");
  //   focus.pan();
  //   return false;
  // }

  if (password.value.length <= 0) {
    alert("Password is required");
    focus.fname();
    return false;
  }

  if (cpassword.value !== password.value) {
    alert("Password did not match !");
    focus.fname();
    return false;
  }

  return true;
}
