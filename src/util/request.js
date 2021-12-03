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
      const userData = {
        data: response.data.data,
        headers: response.headers,
      };
      localStorage.setItem("newUser", JSON.stringify(userData));
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
    const header = {
      "Content-Type": "application/json",
      "access-token": params["access-token"],
      client: params.client,
      expiry: params.expiry,
      uid: params.uid,
    };
    params = {
      header,
      action: "GET",
      path: "/api/v1/channels",
    };
    return request.API_REQUEST(params);
  }
  static alluserData(params) {
    const header = {
      "Content-Type": "application/json",
      "access-token": params["access-token"],
      client: params.client,
      expiry: params.expiry,
      uid: params.uid,
    };
    params = {
      header,
      path: "/api/v1/users",
      action: "GET",
    };
    return request.API_REQUEST(params);
  }
  static createChannel(params) {
    const header = {
      "access-token": params.header["access-token"],
      client: params.header.client,
      expiry: params.header.expiry,
      uid: params.header.uid,
      "Content-Type": "application/json",
    };
    params = {
      data: params.data,
      header,
      path: "/api/v1/channels",
      action: "POST",
    };
    return request.API_REQUEST(params);
  }
  static messageToChannel(params) {
    const options = {
      action: "POST",
      path: "/api/v1/messages",
      header: {
        "Content-Type": "application/json; charset=utf-8",
        "access-token": params["access-token"],
        client: params.client,
        expiry: params.expiry,
        uid: params.uid,
      },
      data: { ...params.data, receiver_class: "Channel" },
    };

    return request.API_REQUEST(options);
  }
  static retriveCMessages(param) {
    const options = {
      action: "GET",
      path: `/api/v1/messages?receiver_id=${param.channelId}&receiver_class=Channel`,
      header: {
        "Content-Type": "application/json; charset=utf-8",
        "access-token": param["access-token"],
        client: param.client,
        expiry: param.expiry,
        uid: param.uid,
      },
    };

    return request.API_REQUEST(options);
  }
  static channelDetails(param) {
    const options = {
      action: "GET",
      path: `/api/v1/channels/${param.channelId}`,
      header: {
        "Content-Type": "application/json; charset=utf-8",
        "access-token": param["access-token"],
        client: param.client,
        expiry: param.expiry,
        uid: param.uid,
      },
    };

    return request.API_REQUEST(options);
  }
  static addMemberToChannel(params) {
    const options = {
      action: "POST",
      path: "/api/v1/channel/add_member",
      header: {
        "Content-Type": "application/json; charset=utf-8",
        "access-token": params["access-token"],
        client: params.client,
        expiry: params.expiry,
        uid: params.uid,
      },
      data: {
        id: params.channelId,
        member_id: params.newMemberId,
      },
    };

    return request.API_REQUEST(options);
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
