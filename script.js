const modal = document.querySelector(".modal1");
const overlay = document.querySelector(".overlay");
const pay = document.querySelector(".payments");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  pay.classList.add("hidden");
  overlay.classList.add("hidden");
};
overlay.addEventListener("click", closeModal);

const paymentsO = function () {
  pay.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const addUSR = function () {
  acUSR = {
    id: uid.value,
    name: uname.value,
    acno: acno.value,
    pswd: pword.value,
  };
  if (acUSR.id in localStorage) {
    alert(`Account already exist, please login.`);
  } else {
    localStorage.setItem(acUSR.id, JSON.stringify(acUSR));
    alert("Account creation successfully.");
    closeModal();
  }
};

const login = function () {
  if (usrID.value in localStorage) {
    if (
      usrPSWD.value == JSON.parse(localStorage.getItem(usrID.value))["pswd"]
    ) {
      window.location = "home.html";
      localStorage.setItem("username", usrID.value);
    } else {
      alert("Incorrect password;");
    }
  } else {
    alert("User not found. Please register");
  }
};

const logout = function () {
  // localStorage.removeItem(user);
  window.location = "index.html";
};

document.getElementById("welc").innerHTML = `Welcome, ${localStorage.getItem(
  "username"
)}`;
