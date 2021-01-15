import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "../axios";

function Addplayer(props) {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");

    useEffect(() => {
        axios
            .get(`/api/${props.match.params.id}`)
            .then(res => [
                setName(res.data.name),
                setPosition(res.data.position)
            ])
            .catch(err => console.log(err));
    }, [`${props.match.params.id}`]);

    const handleSub = e => {
        e.preventDefault();

        axios.put(`/api/update/${props.match.params.id}`, {
            name: name,
            position: position
        });

        setName("");
        setPosition("");
    };

    return (
        <Addcontainer>
            <Title>Edit PLAYER</Title>
            <Form onSubmit={handleSub}>
                <Label>Player name</Label>
                <Input
                    type="text"
                    placeholder="player name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Label>Position</Label>
                <Input
                    type="text"
                    placeholder="position"
                    value={position}
                    onChange={e => setPosition(e.target.value)}
                />

                <Button type="submit">Submit</Button>
            </Form>
        </Addcontainer>
    );
}

export default Addplayer;

const Addcontainer = styled.div`
    width: 30%;
    height: 400px;
    margin-top: 2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #a5cdd2;
`;

const Title = styled.h2`
    text-decoration: underline;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    border-radius: 5px;
`;

const Label = styled.label`
    margin: 10px 0;
`;

const Button = styled.button`
    width: 80px;
    height: 50px;
    background-color: blue;
    color: white;
`;
