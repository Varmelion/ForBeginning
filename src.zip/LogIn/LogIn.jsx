import React from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

export default class LoginButton extends React.Component {
  render() {
    const responseGoogle = data => {
      fetch(
        "https://delfinkitrainingapi.azurewebsites.net/.auth/login/google",
        {
          method: "POST",
          body: JSON.stringify({
            id_token: data.tokenId
          })
        }
      ).then(responce => responce.json().then(resp => console.log(resp)));
    };
    const responseFacebook = data => {
      //   console.log(data);
    };
    return (
      <React.Fragment>
        <GoogleLogin
          clientId="576077564511-fd1t0nbqe1av9rr70to25hnuce1j0mg7.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />

        {/* <FacebookLogin
          appId="2442440406042691"
          autoLoad={true}
          fields="name,email,picture"
          //   onClick={componentClicked}
          callback={responseFacebook}
        /> */}
      </React.Fragment>
    );
  }
}
