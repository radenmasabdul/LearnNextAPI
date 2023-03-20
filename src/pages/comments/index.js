import { useState } from "react"

const CommentPage = () => {
    const [comments, setComments] = useState([])

    const fetchComments = async () => {
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComments(data)
    }

    return (
        <>
            <button onClick={fetchComments}>Load Comments</button>
            {
                comments.map(comment => {
                    return (
                        <div key={comment.id}>
                            <p>{comment.text}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default CommentPage