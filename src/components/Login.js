import React from 'react';
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";


function Login() {
    const signIn = e => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };
    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
                    alt=""
                />
                <h2>Sign-in to the Slack-Clone</h2>
                <p>Zein Kassem</p>
                <Button onClick={signIn}>Sign-in with Google </Button>
            </LoginInnerContainer>
        </LoginContainer>
    )


}

export default Login;

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height:100vh;
    display:grid;
    place-items:center;

`


const LoginInnerContainer = styled.div`
    padding:100px;
    text-align:center;
    background-color:white;
    border-radius:10px;
    box-shadow:5px 10px 5px #aaaaaa;

> img {
    object-fit: contain;
    height: 100px;
    margin-bottom:40px;
}
    >button {
        margin-top:50px;
        text-transform:inherit !important;
        background-color: #0a8d48 !important;
        color:white;
    }

`