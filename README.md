# Encrypt and Decrypt data
##### the best way to login in an api

#### technology
- CryptoJS,
- Javascript, 
- HTML5, 
- CSS

#### Encrypt

[Try clicking here](https://alessandrolmenezes.github.io/criptografia/index.html "Try Here")

#### Install CryptoJS on nodeJS

`npm install crypto-js`

#### Use CryptoJS on client

`<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js"></script>`

`<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/aes.min.js"></script>`

```javascript
function generateCredential() {
  let user = { email: userName.value, password: password.value };
  let credential = CryptoJS.AES.encrypt(JSON.stringify(user), 'credential').toString();
  inputCredential.value = credential;
  code.innerText = `headers:{credential:'${credential}'}`;
}
```

#### Decrypt

```javascript
function decodeCredential() {
  let decode = CryptoJS.AES.decrypt(inputCredentialDecode.value, "credential");
  let credential = JSON.parse(decode.toString(CryptoJS.enc.Utf8));
  decoded.innerText = `${JSON.stringify(credential)}`;
}
```


------------

1. type your email 
2. type your password
3. click on generate
4. get your credential and use in your api


[![Create a credential](http://alessandrodev.com/imagens/credential.jpg "Create a credential")](https://alessandrolmenezes.github.io/criptografia/index.html "Create a credential")

------------

[![Decode a credential](http://alessandrodev.com/imagens/credential2.jpg "Decode a credential")](https://alessandrolmenezes.github.io/criptografia/index.html "Decode a credential")


