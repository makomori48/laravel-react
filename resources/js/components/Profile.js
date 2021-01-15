import React, { useState } from "react";
import styled from "styled-components";
import axios from "../axios";
import { Link } from "react-router-dom";

function Profile({ post }) {
    const [player, setPlayer] = useState([]);

    const deletePlayer = id => {
        axios.delete(`/api/delete/${id}`).then(res => alert(res.data));
        setPlayer(player.filter(elem => elem.id !== id));
    };
    return (
        <Div>
            {post.map((posts, index) => (
                <Dat key={index}>
                    <Link to={{ pathname: `/${posts.id}` }}>
                        <P>{posts.name}</P>
                    </Link>

                    <P>{posts.position}</P>
                    <Link to={{ pathname: `/update/${posts.id}` }}>
                        <button>Edit</button>
                    </Link>
                    <button onClick={() => deletePlayer(posts.id)}>
                        Delete
                    </button>
                </Dat>
            ))}
        </Div>
    );
}

export default Profile;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`;
const Dat = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;
`;

const P = styled.p`
    margin: 5px 15px;
`;
