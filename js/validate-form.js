const nameInvalid =
  "It must have more than 6 letters and at least one space in between.";
const emailInvalid = "Email invalid.";
const passwordInvalid =
  "At least 8 characters, consisting of letters and numbers.";
const passwordRepeatInput = "The passwords are not the same.";
const ageInvalid = "Older than 18 years-old and number integer.";
const phoneInvalid =
  "Number of at least 7 digits, do not accept spaces, hyphens or parentheses.";
const addressInvalid =
  "At least 5 characters, with letters, numbers and a space in between.";
const cityInvalid = "At least 3 characters.";
const zipCodeInvalide = "At least 3 characters.";
const idDocumentInvalid = "7 or 8 digit number.";

const lettersRegExp = /[a-z]/i;
const numbersRegExp = /\d/g;
const simbolsRegExp = /\W/g;
const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const nameSuscriptor = document.getElementById("name");
nameSuscriptor.addEventListener("keyup", name_welcome);

function reset_validate(input, div_invalide) {
  document.getElementById(div_invalide).style.display = "none";
  document.getElementById(input).classList.remove("form-input-invalid");
}

function name_welcome() {
  const welcome = document.getElementById("welcome");
  const nameSuscriptor = document.getElementById("name").value;
  if (nameSuscriptor) {
    welcome.innerHTML = "Hi, " + nameSuscriptor;
  } else {
    welcome.innerHTML = "Hi";
  }
}

function validate_name() {
  const name = document.getElementById("name").value;
  const space = name.indexOf(" ");
  const cantLetter = name.length;
  const cantWords = name.split(" ").length;
  const contentNumbers = numbersRegExp.test(name);

  if (space === -1 || cantLetter < 7 || cantWords < 2 || contentNumbers) {
    const nameInputInvalid = document.getElementById("name-invalide");
    nameInputInvalid.innerHTML = nameInvalid;
    nameInputInvalid.style.display = "block";
    document.getElementById("name").classList.add("form-input-invalid");
    return nameInvalid;
  } else {
    reset_validate("name", "name-invalide");
    return true;
  }
}

function validate_email() {
  const email = document.getElementById("email").value;
  /*const a = email.indexOf("@");
  const com = email.indexOf(".com");*/
  const emailInputInvalid = document.getElementById("email-invalide");

  if (emailRegExp.test(email)) {
    reset_validate("email", "email-invalide");
    return true;
  } else {
    emailInputInvalid.innerHTML = emailInvalid;
    emailInputInvalid.style.display = "block";
    document.getElementById("email").classList.add("form-input-invalid");
    return emailInvalid;

  }
}

function validate_password() {
  const password = document.getElementById("password").value;
  const passwordInputInvalid = document.getElementById("password-invalide");
  const cantLetter = password.length;
  const contentLetters = lettersRegExp.test(password);
  const contentNumbers = numbersRegExp.test(password);
  const contentSimbols = simbolsRegExp.test(password);

  if (cantLetter < 8 || !contentLetters || !contentNumbers || contentSimbols) {
    passwordInputInvalid.innerHTML = passwordInvalid;
    passwordInputInvalid.style.display = "block";
    document.getElementById("password").classList.add("form-input-invalid");
    return passwordInvalid;
  } else {
    reset_validate("password", "password-invalide");
    return true;
  }
}

function validate_password_repeat() {
  const password_repeat = document.getElementById("password_repeat").value;
  const password = document.getElementById("password").value;
  const passwordRepeatInputInvalid = document.getElementById(
    "password_repeat-invalide"
  );

  if (password_repeat !== password) {
    passwordRepeatInputInvalid.innerHTML = passwordRepeatInput;
    passwordRepeatInputInvalid.style.display = "block";
    document
      .getElementById("password_repeat")
      .classList.add("form-input-invalid");
    return passwordRepeatInput;
  } else {
    reset_validate("password_repeat", "password_repeat-invalide");
    return true;
  }
}

function validate_age() {
  const age = document.getElementById("age").value;
  const ageInputInvalid = document.getElementById("age-invalide");

  if (age < 18) {
    ageInputInvalid.innerHTML = ageInvalid;
    ageInputInvalid.style.display = "block";
    document.getElementById("age").classList.add("form-input-invalid");
    return ageInvalid;
  } else {
    reset_validate("age", "age-invalide");
    return true;
  }
}

function validate_phone() {
  const phone = document.getElementById("phone").value;
  const phoneInputInvalid = document.getElementById("phone-invalide");
  const cantDigits = phone.length;

  if (
    cantDigits < 7 ||
    phone < 0
  ) {
    phoneInputInvalid.innerHTML = phoneInvalid;
    phoneInputInvalid.style.display = "block";
    document.getElementById("phone").classList.add("form-input-invalid");
    return phoneInvalid;
  } else {
    reset_validate("phone", "phone-invalide");
    return true;
  }
}

function validate_address() {
  const address = document.getElementById("address").value;
  const addressInputInvalid = document.getElementById("address-invalide");
  const space = address.indexOf(" ");
  const cantLetter = address.length;
  const contentLetters = lettersRegExp.test(address);
  const contentNumbers = numbersRegExp.test(address);
  const firstWord = address.substring(0, space);
  const secondWord = address.substring(space+1);

  if (space === -1 || cantLetter < 5 || !contentLetters || !contentNumbers || firstWord.length === 0 || secondWord.length === 0) {
    addressInputInvalid.innerHTML = addressInvalid;
    addressInputInvalid.style.display = "block";
    document.getElementById("address").classList.add("form-input-invalid");
    return addressInvalid;
  } else {
    reset_validate("address", "address-invalide");
    return true;
  }
}

function validate_city() {
  const city = document.getElementById("city").value;
  const cityInputInvalid = document.getElementById("city-invalide");

  if (city.length < 3) {
    cityInputInvalid.innerHTML = cityInvalid;
    cityInputInvalid.style.display = "block";
    document.getElementById("city").classList.add("form-input-invalid");
    return cityInvalid;
  } else {
    reset_validate("city", "city-invalide");
    return true;
  }
}

function validate_zip_code() {
  const zip_code = document.getElementById("zip_code").value;
  const zipCodeInputInvalid = document.getElementById("zip_code-invalide");

  if (zip_code.length < 3) {
    zipCodeInputInvalid.innerHTML = zipCodeInvalide;
    zipCodeInputInvalid.style.display = "block";
    document.getElementById("zip_code").classList.add("form-input-invalid");
    return zipCodeInvalide;
  } else {
    reset_validate("zip_code", "zip_code-invalide");
    return true;
  }
}

function validate_id_document() {
  const idDocument = document.getElementById("id_document").value;
  const idDocumentInputInvalid = document.getElementById(
    "id_document-invalide"
  );

  if (idDocument.length < 7 || idDocument < 0) {
    idDocumentInputInvalid.innerHTML = idDocumentInvalid;
    idDocumentInputInvalid.style.display = "block";
    document.getElementById("id_document").classList.add("form-input-invalid");
    return idDocumentInvalid;
  } else {
    reset_validate("id_document", "id_document-invalide");
    return true;
  }
}

function validate_form() {
  let messageFormInvalid = "";
  let messageFormValid = "";
  const messaggeName = validate_name();
  const messaggeEmail = validate_email();
  const messaggePassword = validate_password();
  const messaggePasswordRepeat = validate_password_repeat();
  const messaggeAge = validate_age();
  const messaggePhone = validate_phone();
  const messageAddress = validate_address();
  const messageCity = validate_city();
  const messageZipCode = validate_zip_code();
  const messageIdDocument = validate_id_document();

  if (messaggeName !== true) {
    messageFormInvalid += "Name: " + messaggeName + "\n";
  } else {
    messageFormValid +=
      "Name: " + document.getElementById("name").value + "\n";
  }

  if (messaggeEmail !== true) {
    messageFormInvalid += "Email: " + messaggeEmail + "\n";
  } else {
    messageFormValid +=
      "Email: " + document.getElementById("email").value + "\n";
  }

  if (messaggePassword !== true) {
    messageFormInvalid += "Password: " + messaggePassword + "\n";
  } else {
    /*messageFormValid +=
      "Password: " + document.getElementById("password").value + "\n";*/
  }

  if (messaggePasswordRepeat !== true) {
    messageFormInvalid += "Password repeat: " + messaggePasswordRepeat + "\n";
  } else {
   /* messageFormValid +=
      "Password repeat: " + document.getElementById("password").value + "\n";*/
  }

  if (messaggeAge !== true) {
    messageFormInvalid += "Age: " + messaggeAge + "\n";
  } else {
    messageFormValid +=
      "Age: " + document.getElementById("age").value + "\n";
  }

  if (messaggePhone !== true) {
    messageFormInvalid += "Phone: " + messaggePhone + "\n";
  } else {
    messageFormValid +=
      "Phone: " + document.getElementById("phone").value + "\n";
  }

  if (messageAddress !== true) {
    messageFormInvalid += "Address: " + messageAddress + "\n";
  } else {
    messageFormValid +=
      "Address: " + document.getElementById("address").value + "\n";
  }

  if (messageCity !== true) {
    messageFormInvalid += "City: " + messageCity + "\n";
  } else {
    messageFormValid +=
      "City: " + document.getElementById("city").value + "\n";
  }

  if (messageZipCode !== true) {
    messageFormInvalid += "Zip code: " + messageZipCode + "\n";
  } else {
    messageFormValid +=
      "Zip code: " + document.getElementById("zip_code").value + "\n";
  }

  if (messageIdDocument !== true) {
    messageFormInvalid += "Id document: " + messageIdDocument + "\n";
  } else {
    messageFormValid +=
      "Id document: " + document.getElementById("id_document").value + "\n";
  }

  if (messageFormInvalid !== "") {
    alert(messageFormInvalid);
  } else {
    alert(messageFormValid);
  }
}
