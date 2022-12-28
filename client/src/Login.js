import React from 'react'
import {Container} from 'react-bootstrap'


const AUTH_URL ="https://accounts.spotify.com/authorize?client_id=10b45552d7634b85be61c721a2396f2d&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"	




export default function Login(){
	return (
		<Container style={{minHeight:"100vh"}} className="d-flex justify-content-center align-items-center">
			<a href={AUTH_URL} className="btn btn-success btn-lg">Login to spotify</a>
		</Container>
	)
}

