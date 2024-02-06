const SibApiV3Sdk = require('@getbrevo/brevo');
require('dotenv').config()

let apiInstance = new SibApiV3Sdk.AccountApi();

// eslint-disable-next-line no-undef
apiInstance.setApiKey(SibApiV3Sdk.AccountApiApiKeys.apiKey, process.env.VITE_BREVO_API_KEY)

apiInstance.getAccount().then(function(data) {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));

}, function(error) {
  console.error(error);
});

// const SibApiV3Sdk = require('@getbrevo/brevo');

apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

let apiKey = apiInstance.authentications['apiKey'];
// eslint-disable-next-line no-undef
apiKey.apiKey = process.env.VITE_BREVO_API_KEY;

let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); 

sendSmtpEmail.subject = "My {{params.subject}}";
sendSmtpEmail.htmlContent = "<html><body><h1>This is my first transactional email {{params.parameter}}</h1></body></html>";
sendSmtpEmail.sender = {"name":"Brandon W","email":"brandon.w@ardoodyduty.com"};
sendSmtpEmail.to = [{"email":"brandonalanwest@gmail.com","name":"Jane Doe"}];
sendSmtpEmail.cc = [{"email":"example2@example2.com","name":"Janice Doe"}];
sendSmtpEmail.bcc = [{"name":"John Doe","email":"example@example.com"}];
sendSmtpEmail.replyTo = {"email":"replyto@domain.com","name":"John Doe"};
sendSmtpEmail.headers = {"Some-Custom-Name":"unique-id-1234"};
sendSmtpEmail.params = {"parameter":"My param value","subject":"New Subject"};

apiInstance.sendTransacEmail(sendSmtpEmail).then(function(data) {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));

}, function(error) {
  console.error(error);
});