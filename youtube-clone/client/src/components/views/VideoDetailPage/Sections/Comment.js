import React, {useState} from 'react'
import Axios from 'axios'
import {useSelector} from 'react-redux'

function Comment(props) {
    const videoId = props.postId
    const user = useSelector(state => state.user)
    const [CommentValue, setCommentValue] = useState("")
    
    const handleClick = (event) => {
        setCommentValue(event.currentTarget.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        const variables = {
            content: CommentValue,
            writer: user.userData._id,
            postId: videoId
        }

        Axios.post('/api/comment/saveComment', variables)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data)
                } else {
                    alert("Failed to save comment")
                }
            })
    }
    return (
        <div>
            <br/>
            <p>Replies</p>
            <hr/>

            <form style={{display:'flex'}} onSubmint={onSubmit}>
                <textarea
                    style={{width: '100%', borderRadius: '5px'}}
                    onChange={handleClick}
                    value={CommentValue}
                    placeholder="Write Comment"
                />
                <br/>
                <button style={{width:'20%', height: '52px'}} onClick={onSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Comment
