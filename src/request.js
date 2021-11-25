export default class request {
  static axios = require("axios").default;
  static API_URL = process.env.REACT_APP_URL;
  static client = "client";

  static API_REQUEST = (opts) => {
    const { path, action, header, data } = opts;
    const URL = API_URL + path;
    const options = {
      method: action,
      url: URL,
      headers: header,
      data: data,
    };
    return axios.request(options);
  };

  static login(options) {
    API_REQUEST(options)
      .then((response) => {
        const userId = response.data.data.id;
        const accessToken = response.headers["access-token"];
        const { client, expiry, uid } = response.headers;
        const config = {
          id: userId,
          accessToken: accessToken,
          client: client,
          expiry: expiry,
          uid: uid,
        };
        alert(`Login success`);
        setLocalClient(userHeader);
        return config;
      })
      .catch((error) => {
        alert(error.response.data.errors);
        return false;
      });
  }
  static setLocalClient(data) {
    localStorage.setItem(client, JSON.stringify(data));
  }
  static getLocalClient() {
    return JSON.parse(localStorage.getItem(client));
  }
  static rmLocalClient() {
    localStorage.removeItem(client);
  }
}

// const options = {
//   method: 'POST',
//   url: '/api/v1/auth/',
//   headers: {
//      'Content-Type': 'application/json'
//   },
//   data: {
//     email: 'mv004@example.com',
//     password: '12345678',
//     password_confirmation: '12345678'
//   }
// };

// const options = {
//   method: 'POST',
//   url: '/api/v1/auth/sign_in',
//   headers: {
//       'Content-Type': 'application/json'
//   },
//   data: {email: 'mv00@gmail.com', password: '12345678'}
// };

// const options = {
//   method: 'GET',
//   url: '/api/v1/channels',
//   headers: {
//      'Content-Type': 'application/json',
//     'access-token': 'p66GeQdz9-6ICoiBfzXC1Q',
//     client: 'z3X2TNjfpc8YRt8CjVOcwA',
//     expiry: '1638823037',
//     uid: 'mv00@gmail.com'
//   }
// };
// const options = {
//   method: 'GET',
//   url: '/api/v1/users',
//   headers: {
//         'Content-Type': 'application/json',
//     'access-token': 'p66GeQdz9-6ICoiBfzXC1Q',
//     client: 'z3X2TNjfpc8YRt8CjVOcwA',
//     expiry: '1638823037',
//     uid: 'mv00@gmail.com'
//   }
// };

// const options = {
// method: 'GET',
// url: '/api/v1/channels/1854',
// headers: {
//     'Content-Type': 'application/json',
//   'access-token': 'p66GeQdz9-6ICoiBfzXC1Q',
//   client: 'z3X2TNjfpc8YRt8CjVOcwA',
//   expiry: '1638823037',
//   uid: 'mv00@gmail.com'
// }
// };

// const options = {
// method: 'GET',
// url: '/api/v1/channels',
// headers: {
//     'Content-Type': 'application/json',
//   'access-token': 'p66GeQdz9-6ICoiBfzXC1Q',
//   client: 'z3X2TNjfpc8YRt8CjVOcwA',
//   expiry: '1638823037',
//   uid: 'mv00@gmail.com'
// }
// };

// const options = {
// method: 'GET',
// url: '/api/v1/messages',
// params: {receiver_id: '1281', receiver_class: 'User'},
// headers: {
//    'Content-Type': 'application/json',
//   'access-token': 'LvqCmFp6k9yGSRyUxfNVDw',
//   client: 'VEkJrKuPyX_Rs_efe_JnYg',
//   expiry: '1638880274',
//   uid: 'mv00@gmail.com'
// }
// };

// const options = {
// method: 'POST',
// url: '/api/v1/messages',
// headers: {
//    'Content-Type': 'application/json',
//   'access-token': 'p66GeQdz9-6ICoiBfzXC1Q',
//   client: 'z3X2TNjfpc8YRt8CjVOcwA',
//   expiry: '1638823037',
//   uid: 'mv00@gmail.com'
// },
// data: {receiver_id: 1281, receiver_class: 'User', body: 'hello world!'}
// };

// const options = {
// method: 'POST',
// url: '/api/v1/channels',
// headers: {
//    'Content-Type': 'application/json',
//   'access-token': 'p66GeQdz9-6ICoiBfzXC1Q',
//   client: 'z3X2TNjfpc8YRt8CjVOcwA',
//   expiry: '1638823037',
//   uid: 'mv00@gmail.com'
// },
// data: {name: 'testchanl9', user_ids: [1254, 3, 1297, 1]}
// };

// const options = {
// method: 'POST',
// url: '/api/v1/channel/add_member',
// headers: {
//     'Content-Type': 'application/json',
//   'access-token': 'p66GeQdz9-6ICoiBfzXC1Q',
//   client: 'z3X2TNjfpc8YRt8CjVOcwA',
//   expiry: '1638823037',
//   uid: 'mv00@gmail.com'
// },
// data: {id: 1854, member_id: 1298}
// };
