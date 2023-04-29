
import connectWifi from './connectwifi.js' ;


const getlikes_ofuser = ((target_pageid)=> {
	status = false
	FB.api(
		'/me/likes',
		'GET',
		{},
		function(response) {
			for (page in response.data ) {
				var page_id = page.id
				if (target_pageid == page_id) {
					status = true ;
				}
			}
		}
	);

	return status

})

const connectWifiafterLike = ( (pageid , page_url) => {
	var status = false ;
	var isUserLikes = getlikes_ofuser(pageid)
	if (isUserLikes) {
		connectWifi();
		window.location.replace("192.168.1.13/uploadCV");
		status = true ; 
	}
	else {
		window.location.replace(page_url);
	}

	return status 
})

module.exports = connectWifiafterLike ;
