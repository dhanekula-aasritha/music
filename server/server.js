const express =require("express")
const app= express()
const cors =require("cors")
const bodyParser=require("body-parser")
const spotifyWebApi =require("spotify-web-api-node")
app.use(cors())
app.use(bodyParser.json())
app.post('/refresh',(req, res) => {
	const refreshToken =req.body.refreshToken
	const spotifyApi=new spotifyWebApi({
		redirectUri:"http://localhost:3000",
		clientId:"10b45552d7634b85be61c721a2396f2d",
		clientSecret:"afc39ac1ee654d9c8bbdb413b6613bb9",
		refreshToken,
	})
	spotifyApi.refreshAccessToken()
	.then((data)=>{
			console.log(data.body)
			res.json({
				accessToken:data.body.accessToken,
				expiresIn:data.body.expiresIn
			})
		}).catch((err)=>{
			console.log(err)
			res.sendStatus(400)
		})
})


app.post("/login",(req,res)=>{
	const code= req.body.code
	const spotifyApi = new spotifyWebApi({
		redirectUri:"http://localhost:3000",
		clientId:"10b45552d7634b85be61c721a2396f2d",
		clientSecret:"afc39ac1ee654d9c8bbdb413b6613bb9"
	})
	spotifyApi.authorizationCodeGrant(code).then(data=>{
		res.json({
			accessToken:data.body.access_token,
			refreshToken:data.body.refresh_token,
			expiresIn:data.body.expires_in
		})
	}).catch((err)=>{
		res.sendStatus(400)
	})
})
app.listen(3001)