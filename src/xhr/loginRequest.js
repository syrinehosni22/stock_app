import {setLoginState} from "../redux/actions"
export const login = (loginInput) => {
    const LoginUrl="http://127.0.0.1:8080"
  const { username, password } = loginInput;
  return (dispatch) => {  // don't forget to use dispatch here!
    return fetch(LoginUrl, {
      method: 'POST',
      headers: {  // these could be different for your API call
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginInput),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.msg === 'success') { // response success checking logic could differ
          dispatch(setLoginState({ ...json, userId: username })); // our action is called here
        } else {
          console.log('Login Failed', 'Username or Password is incorrect');
        }
      })
      .catch((err) => {
        console.log('Login Failed', 'Some error occured, please retry');
        console.log(err);
      });
  };
};