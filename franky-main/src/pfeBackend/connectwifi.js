
const connectWifi = ( ()=>{

  var thessid = 'TOPNET_2090'
  var thepass = 'sfqof9f8b9'

  const wifi = require('node-wifi');


  wifi.init({
    iface: null
  });


  wifi.scan((error, networks) => {
    if (error) {
      console.log(error);
    } else {

      for (i in networks) {
        console.log(networks[i]["ssid"] );
      }
      
    }
  });

  wifi.connect({ ssid: thessid, password: thepass }, () => {
    console.log('Connected'); 
  });



})


module.exports = connectWifi ;

