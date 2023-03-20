import { comments } from "../../../data/comment"

const Comment = ({ comment }) => {
    return (
        <>
            <div key={comment.id}>
                <p>Comment Id: {comment.id}</p>
                <p>Text: {comment.text}</p>
                <hr />
            </div>
        </>
    )
}

export default Comment

export async function getStaticPaths() {
    return {
        paths: [
            { params: { commentId: '1' } },
            { params: { commentId: '2' } },
            { params: { commentId: '3' } },
        ],
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const { params } = context;
    const { commentId } = params;

    const comment = comments.find((comment) => comment.id === parseInt(commentId))
    console.log(comment);

    return {
        props: {
            comment,
        },
    }
}