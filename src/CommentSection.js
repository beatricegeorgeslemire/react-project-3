const CommentSection = (props) => {

    const {
        messageProps
    } = props;


    return (
        <div>
            <ul aria-label="messages">
                {
                    messageProps.map((message) => {
                        console.log(message);
                        return (
                            <li key={message.key}>
                                <p>{message.name.name}</p>
                                <p>{message.name.title}</p>
                                <p>{message.name.input}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default CommentSection;