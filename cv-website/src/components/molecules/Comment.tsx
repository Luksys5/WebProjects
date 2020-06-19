import React, { useState } from 'react';
import { Message } from './Message';

type CommentProps = {
    userName: string;
    photo: string;
    comment: string;
    replies?: CommentProps[];
}

export const Comment: React.FC<CommentProps> = ({ userName, photo, comment, replies }) => {
    const [replying, setReplying] = useState(false);

    return (
        <div className='m-comment'>
            <div className="m-comment__photo">
                <img src={photo ? photo: `images/default-photo-v3.png`} alt="none" />
            </div>
            <div className="m-comment__content">
                <div className='m-comment__details'>
                    <span className='m-comment__details__name'>{userName}</span>
                    <span className='m-comment__details__time'>{ "Today at 5:42PM" } </span>
                </div>
                <div className="m-comment__text">
                    { comment }
                </div>
                <div className="m-comment__actions">
                    <div className="m-comment__actions--reply" onClick={() => setReplying(!replying)}>
                        Reply
                    </div>
                    <div className="m-comment__actions--hide" onClick={() => setReplying(false)}>
                        Hide
                    </div>
                </div>
            </div>

            { replying &&
                <Message placeholder="Write your reply here" buttonText="Send Reply" onClick={() => {}}  />
            }

            {
                replies && !!replies.length &&
                <div className="m-comment__replies">
                    {
                        replies.map((reply, index) => <Comment key={index} {...reply} />)
                    }
                </div>
            }

        </div>
    );
}