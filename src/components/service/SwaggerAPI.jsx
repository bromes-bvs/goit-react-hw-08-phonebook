import axios from 'axios';
let token;
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
// axios.defaults.headers.common['Authorization'] = token;

export async function register(user) {
  try {
    const response = await axios.post('/users/signup', user);
    console.log(response.data);
    token = response.data.token;
    return response.data;
  } catch (error) {
    alert('Registration failed');
  }
}

export async function login(user) {
  try {
    const response = await axios.post('/users/login', user);
    token = response.data.token;
    console.log(response);
    return response.data;
  } catch (error) {
    alert('Login failed, please try again');
  }
}

export async function logout() {
  try {
    const response = await axios.post(
      '/users/logout',
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(response);
    token = '';
  } catch (error) {
    alert('Logout failed, please try again');
  }
}

export async function fetchContacts() {
  try {
    const response = await axios.get('/contacts', {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    alert('Fetch your phonebook failed, please try again');
    return error.message;
  }
}

export async function deleteContact(contactId) {
  try {
    const response = await axios.delete(`/contacts/${contactId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    return response.data.id;
  } catch (error) {
    alert('Delete contact failed, please try again');
    return error.message;
  }
}

export async function postContact(contact) {
  try {
    const response = await axios.post(`/contacts`, contact, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    alert('Post contact failed, please try again');
    return error.message;
  }
}
