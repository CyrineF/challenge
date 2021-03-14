import axios from 'axios'
import React from 'react'
import { Form, Button, Card } from 'react-bootstrap'



function CreatePost() {



const [commentaire,setCommentaire]=React.useState("")
const [file,setFile]=React.useState()


function HandleChange(){
        let NewPost ={
            commentaire:commentaire,
            file:file
        }
        axios.post("http://localhost:3001/api/publication/post",NewPost)
}
function HandleChangePost(e){
setCommentaire(e.target.value)
}
function HandleChangeFile(e){
    setFile(e.target.value)
    }
    



    return (
        <div>
            <Card className='Cardib'>
                <Form>
                    <div>
                        <h1 className="title">Your Post</h1>
                    </div>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <input type="text" value={commentaire} onChange={HandleChangePost} />
                        
                    </Form.Group>
                    <Form.Group>
                        <div className="zouzboutons">
                            <input id="exampleFormControlFile1"  type='file' className='file-input' onChange={HandleChangeFile} value={file} />
                            <label for='exampleFormControlFile1' className='circle-button primary'>
                            <i class="fas fa-paperclip"></i>
                            </label>
                            <div className='round-button primary' onClick={HandleChange} >
                                Submit
                            </div>
                        </div>
                    </Form.Group>
                    
                </Form>
            </Card>
        </div>
        
    )
}

export default CreatePost