const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'a749ae54533d4373a5cd180d822cf1e6',
        clientSecret: '22346e79e4514180b51fcc6abb6adcce',
        refreshToken
    })

    spotifyApi.refreshAccessToken().then(
        (data) => {
            console.log(data.body)
    }).catch(() => {
        res.send(400);
    })
})




app.post('/login', (req, res) => {
    const code = req.body.code

    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'a749ae54533d4373a5cd180d822cf1e6',
        clientSecret: '22346e79e4514180b51fcc6abb6adcce'
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
      res.json({
        accsessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in
      })
    }).catch(err => {
        console.log(err)
        res.status(400)
        })
    })

    app.listen(3001)
