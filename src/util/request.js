const axios = require("axios").default;
const API_URL = process.env.REACT_APP_URL;
const client = "client";
export default class request {
  static API_REQUEST = (opts) => {
    const { path, action, data, header } = opts;
    const URL = API_URL + path;
    let options = {};
    if (action === "GET") {
      options = {
        method: action,
        url: URL,
        headers: header,
      };
      console.log(header);
    } else {
      options = {
        method: action,
        url: URL,
        headers: header,
        data: data,
      };
    }

    return axios.request(options);
  };

  static login(params) {
    params = {
      ...params,
      action: "POST",
      header: {
        "Content-Type": "application/json",
      },
    };
    return request.API_REQUEST(params).then((response) => {
      const userId = response.data.data.id;
      const accessToken = response.headers["access-token"];
      const { client, expiry, uid } = response.headers;

      alert("Login Success!");
      const userData = {
        id: userId,
        token: accessToken,
        client: client,
        expiry: expiry,
        uid: uid,
      };
      localStorage.setItem("newUser", JSON.stringify(userData));
      console.log(userId, accessToken, client, expiry, uid);
      return response;
    });
  }
  static register(params) {
    params = {
      ...params,
      action: "POST",
      header: {
        "Content-Type": "application/json",
      },
    };
    return request.API_REQUEST(params);
  }
  static channels(params) {
    console.log(params, "test");
    params = {
      ...params,
      action: "GET",
    };
    return request.API_REQUEST(params);
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
