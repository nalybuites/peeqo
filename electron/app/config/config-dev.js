module.exports = {
	giphy:{
		key:'pPBlUN97FHL4vxiWk3zJzYkFI7FbPkvs', // public giphy key - you can get your own from https://developers.giphy.com/docs/
		max_gif_size: 800000, // max gif size it should try to download
        max_mp4_size: 700000  // max video size it should try to download
	},
	speech: {
        projectId: 'peeqo-5d4d0', // your dialogflow project name
        dialogflowKey: 'dialogflow.json', // *.json - name of your dialogflow key file - should be stored in app/config/
        wakeword: "peeqo", // you can change this wakeword if you record a differnt one on snowboy.kitt.ai
        language: "en-US", // find supported language codes - https://cloud.google.com/dialogflow-enterprise/docs/reference/language
        model: "Peeqo.pmdl", // The name of your model - name model downloaded from snowboy.kitt.ai - should be stored in app/config
        sensitivity: 0.35, // Keyword getting too many false positives or not detecting? Change this.
        continuous: false // After a keyword is detected keep listening until speech is not heard
    },
    fileExtensions: [".gif", ".mp4", ".webp"], // list of supported file types
    server: "", //"http://localhost:3000"
    volume: 0.1, //system volume, [0, 1]
    openweather: {
        key: "f3007f6eb3573e7731e0b417ebc54430", // please get api key from https://openweathermap.org/api
        city: 'Wappingers Falls' // default city to search - change it to your city of choice
    },
    spotify:{
        clientId:"0016b39d843f463680a286ac8891a21f", // get from https://developer.spotify.com/dashboard/applications
        clientSecret:"bca6470f69de4396861419c2b0f3bf36"
    },
    vlipsy:{
        key:"vl_1D45aWdz9I0HVSpa" // request for api key by emailing api@vlipsy.com
    },
    google_play_music: {
        username: '',
        password: '' // for security reasons, you should create an app-specific password
    }
}
