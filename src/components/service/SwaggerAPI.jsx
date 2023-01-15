import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
// axios.defaults.headers.common['Authorization'] = token;
let token;

export async function register(user) {
  try {
    const response = await axios.post('/users/signup', user);
    token = response.data.token;
    // console.log(response.data);
    return response.data;
  } catch (error) {
    alert('Registration failed');
  }
}

export async function login(user) {
  try {
    const response = await axios.post('/users/login', user);
    token = response.data.token;
    // console.log(response);
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
