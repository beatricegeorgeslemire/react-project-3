const CommentSection = (props) => {

    const { messageProps } = props;


    return (
        <div className="commentSection">
            <div className="wrapper">
                <ul className="messages" aria-label="messages">
                    {
                        messageProps.map((message) => {
                            return (
                                <li key={message.key} className="individualComment">
                                    <p className="comment commentTitle">{message.name.title}</p>
                                    <p className="comment">by {message.name.name}</p>

                                    <p className="comment">{message.name.input}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </div>
    )
}

export default CommentSection;