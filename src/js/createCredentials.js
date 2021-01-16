const btn = document.getElementById('btn-generate');
const btnDecode = document.getElementById('btn-decode');
const inputCredential = document.getElementById('credential');
const inputCredentialDecode = document.getElementById('credential2');
const userName = document.getElementById('name');
const password = document.getElementById('password');
const code = document.getElementById('code');
const decoded = document.getElementById('decoded');
var secret = "credential"

function generateCredential() {
  
  let user = { email: userName.value, password: password.value };
  let credential = CryptoJS.AES.encrypt(JSON.stringify(user), secret).toString();
  inputCredential.value = credential;
  code.innerText = `headers:{credential:'${credential}'}`;
}

function decodeCredential() {
  let decode = CryptoJS.AES.decrypt(inputCredentialDecode.value, secret);
  let credential = JSON.parse(decode.toString(CryptoJS.enc.Utf8));
  decoded.innerText = `${JSON.stringify(credential)}`;
}

btnDecode.addEventListener('click', decodeCredential);
btn.addEventListener('click', generateCredential);
