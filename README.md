# Encrypt and Decrypt data
##### the best way to login in an api

#### technology
- CryptoJS,
- Javascript, 
- HTML5, 
- CSS

#### Encrypt

[Try clicking here](https://alessandrolmenezes.github.io/criptografia/index.html "Try Here")

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

1.  put email 
2. put password
3. click on generate


[![Create a credential](http://alessandrodev.com/imagens/credential.jpg "Create a credential")](https://alessandrolmenezes.github.io/criptografia/index.html "Create a credential")


