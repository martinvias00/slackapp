const client = "client";

export const method = {
  setLocalClient: function (data) {
    localStorage.setItem(client, JSON.stringify(data));
  },
  getLocalClient: function () {
    return JSON.parse(localStorage.getItem(client));
  },
  rmLocalClient: function () {
    localStorage.removeItem(client);
  },
};
