import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import Robot from "../assets/robot.gif";

export default function Welcome({currentUser}){
    const [currentUserName, setCurrentUserName] = useState(undefined);
    useEffect(()=>{
        if (currentUser) {
            setCurrentUserName (currentUser.username)
        }
    },[currentUser])
    return(
        <Container>
            <img src={Robot} alt="Robot" />
            <h1>
                Welcome, <span> {currentUserName} !</span>
            </h1>
            <h3>
                Please select a chat to start messaging
            </h3>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    flex-direction: column;
    img {
    height: 20rem;
    }
    span {
    color: #4e0eff;
}`