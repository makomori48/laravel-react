import React,{ useState } from 'react'
import styled from 'styled-components'
import axios from '../axios'

function Profile({post}) {

    const [player, setPlayer] = useState([])

    const deletePlayer = id => {
        axios.delete(`/api/delete/${id}`)
        .then(res => alert(res.data))
        setPlayer(player.filter(elem => elem.id !== id))
    }
    return (
        <Div>
       
            {post.map((posts) => (
                <Dat>              
                <P>{posts.name}</P>
                <P>{posts.position}</P>
                <button>Edit</button>
                <button onClick={() => deletePlayer(posts.id)} >Delete</button>
                </Dat>
            ))}
        </Div>
    )
}

export default Profile

const Div = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center; 
    height:100%;
`
const Dat = styled.div`
    display:flex;

    justify-content:center;
    align-items:center; 
`

const P = styled.p`
    margin: 5px 15px;
`