

async function  getSms() {
	axios = require("axios")
	var url = "https://mystudents.tunisiesms.tn/api/sms" ; 
	var bodyParameters =  {
	'type': '55',
	'sender': "TunSMS Test",
	'sms':[{'mobile':'56212075','sms':'testSend2'}]}

	var token = "12e!JhHfn8UKIKCmZb2qVcSFpI=vCL6jomk8V2pICKeVgsIGUM70!bHqvIl9futUheeDiTXwpCSW5moc9xeAax1WGohxjbSRG6g!cE55"
	var config = {
		headers: { Authorization: `Bearer ${token}` }
	} ;	
		
	
	const result = await  axios.post( 
	url ,
	bodyParameters,
	config
	)

	console.log(result.data)
	return result ; 

}

getSms()