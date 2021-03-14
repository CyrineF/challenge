import React from 'react'
import { Form, Button, Card } from 'react-bootstrap'
function Comments() {
    return (
        <div>
            <Card className='com'>
                <div className='zouzboutons'>
                    <Form.Control type="text" placeholder="Readonly input here..." readOnly />
                    <Button variant="primary circle-button primary" type="submit">
                        <i class="fas fa-paper-plane "></i>
                    </Button>
                </div>
            </Card>
        <div>
        <Card className='com'body>This is some text within a card body.</Card>
        </div>
        </div>

    )
}

export default Comments