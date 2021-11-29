import axios from "axios";

const URL = process.env.REACT_APP_URL;

function SendMessages(){

    const getheaders = JSON.parse(localStorage.getItem("client"))
    const id = Window.id

    if(getheaders){
        var {accessToken, client, expiry, uid} = getheaders;
    }
    const message = document.querySelector(".enterMessage").value
    const options = {
        method: 'POST',
        url: `${URL}/api/v1/messages`,
        headers: {
          'access-token': `${accessToken}`,
            client: `${client}`,
            expiry: `${expiry}`,
            uid: `${uid}`
        },
        data: {receiver_id: id, receiver_class: 'User', body: `${message}`}
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
}

export default SendMessages
