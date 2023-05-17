export const setRegister = async (data) => {

  const { username,
    lastName,
    email,
    password } = data;
  const user = {
    username,
    lastName,
    email,
    password,
    typeuser: 'vendedor'
  }

  const options = {
    method: 'POST',
    body: JSON.stringify(user)
  };

  fetch('http://localhost:5000/register/submit', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

} 