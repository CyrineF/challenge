import React, { useState } from 'react'
import {Toast, Card } from 'react-bootstrap'
import Comments from './Comments'
import axios from 'axios'

function Post() {
    const [post,setPost]=React.useState()
    React.useEffect(()=>{
        axios.get("http://localhost:3001/api/publication/post").then(res=>{
            setPost(res.data);
        }).catch(err=>{
            console.log("err")
        })
        })

    const [com , setCom ] = useState(0)
    const [active,setActive]=useState(false)

    function HandleChange(){
        setActive(true)
        setCom(com+1)
    }

  
    
    return (

        <div>
            <Card className="Cardib">
                <Card.Header >
                    Cyrine
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        Post Goes Here
                </Card.Text>
                </Card.Body>
                <div className='boutonet'>
                    <div className='round-button primary' >
                        <i class="fas fa-check-circle"></i>                            
                            
                    </div>
                    <div className='round-button primary' onClick={HandleChange}>
                            Comments
                    </div>
                    {active?afficherCom():console.log("")} 
                </div>
            </Card>

        </div>

    )
}
function afficherCom(){
    return(
        <Comments/>
    )
    }


export default Post
