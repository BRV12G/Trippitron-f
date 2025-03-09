# Google OAuth Authentication
###### 1. Go to React GoogleOAuth -- [React Google OAuth](https://www.npmjs.com/package/@react-oauth/google)
###### 2. In the Terminal -- 
```bash
npm i @react-oauth/google
```
###### 3. Generate google client Id , go to Google Cloud Console --->API and Services ---> OAuth Concent Screen --->[Oauth Concent Screen](https://console.cloud.google.com/auth/overview?authuser=1&project=trippitron)
###### 4. Go to Api & Services --> Credentials --> Create Credentials --> OAuth Client ID --> Select as Web Application ---> Under the Authorised JavaScript origins and Authorised redirect URIs add your localhost UrL's orthe deployed URL's <br>
```bash
https://localhost
```
```bash
https://localhost:<Port_number>
```
###### 5. Click on create and Copy your Client ID and paste it in .env.local as: <br>
```bash
VITE_GOOGLE_AUTH_CLIENT_ID=YOUR_CLIENT_ID
```
###### 6. Go to main.jsx and Paste <br> make sure you wrap the contents within the Tags and Update your Client ID.
```bash
import { GoogleOAuthProvider } from '@react-oauth/google';

<GoogleOAuthProvider clientId="<your_client_id>">...</GoogleOAuthProvider>;
```
