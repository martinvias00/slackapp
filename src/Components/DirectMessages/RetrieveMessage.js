import axios from "axios";

const URL = process.env.REACT_APP_URL;
const retrievedMessage = JSON.parse(localStorage.getItem("retrievedMessages"))
let id = Window.id

function RetrieveMessages(){
    const getheaders = JSON.parse(localStorage.getItem("newUser"))
    
    id = Window.id

    if(getheaders){
        var {token, client, expiry, uid} = getheaders;
    }

    const options = {
    method: 'GET',
    url: `${URL}/api/v1/messages`,
    params: {receiver_id: id, receiver_class: 'User'},
    headers: {
        'access-token': `${token}`,
                client: `${client}`,
                expiry: `${expiry}`,
                uid: `${uid}`
    }
    };

    axios.request(options).then(function (response) {
    const data = JSON.stringify([response.data])
    localStorage.setItem("retrievedMessages", data)
    }).catch(function (error) {
        console.error(error);
        clearInterval(retrieveinterval)
    });

}

if(retrievedMessage && id){
    var retrieveinterval = setInterval(() => {
        RetrieveMessages()
    }, 5000);

    Window.intevalValue = retrieveinterval
}


// window.onload = clearInterval( retrieveinterval )

export default RetrieveMessages;