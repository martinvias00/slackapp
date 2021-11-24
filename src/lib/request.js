
export default class CCManager {

  static axios = require("axios").default;
  static URL = process.env.React_App_URL;

  static init() {
    return CometChat.init(CCManager.appId);
  }

  static getTextMessage(uid, text, msgType) {
    if (msgType === "user") {
      return new CometChat.TextMessage(
        uid,
        text,
        CometChat.MESSAGE_TYPE.TEXT,
        CometChat.RECEIVER_TYPE.USER
      );
    } else {
      return new CometChat.TextMessage(
        uid,
        text,
        CometChat.MESSAGE_TYPE.TEXT,
        CometChat.RECEIVER_TYPE.GROUP
      );
    }
  }

  static getLoggedinUser() {
    return CometChat.getLoggedinUser();
  }

  static login(options) {
    console.log(this.apiKey);
    return CometChat.login(UID, this.apiKey);
  }

  static getGroupMessages(GUID, callback, limit = 30) {
    const messagesRequest = new CometChat.MessagesRequestBuilder()
      .setGUID(GUID)
      .setLimit(limit)
      .build();
    callback();
    return messagesRequest.fetchPrevious();
  }

  static sendGroupMessage(UID, message) {
    const textMessage = this.getTextMessage(UID, message, "group");
    return CometChat.sendMessage(textMessage);
  }

  static joinGroup(GUID) {
    return CometChat.joinGroup(GUID, CometChat.GROUP_TYPE.PUBLIC, "");
  }

  static addMessageListener(callback) {
    CometChat.addMessageListener(
      this.LISTENER_KEY_MESSAGE,
      new CometChat.MessageListener({
        onTextMessageReceived: (textMessage) => {
          callback(textMessage);
        },
      })
    );
  }
}
