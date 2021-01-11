import React from "react";
import styled from "styled-components";

function Addplayer() {
    return (
        <Addcontainer>
            <Title>ADD PLAYER</Title>
            <Form>
                <Label>Player name</Label>
                <Input type="text" placeholder="player name" />
                <Label>Position</Label>
                <Input type="text" placeholder="position" />
            </Form>
        </Addcontainer>
    );
}

export default Addplayer;

const Addcontainer = styled.div`
    width: 80%;
    height: 600px;
    margin-top: 2%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color: #A5CDD2;
`;

const Title = styled.h2`
    text-decoration: underline;
    color:white;
`;

const Form = styled.form`
    display:flex;
    flex-direction:column;
`;

const Input = styled.input`
    border-radius: 5px;
`;

const Label = styled.label``;
