import React from 'react';
import { Comment } from '../molecules/Comment';
import { IconSprite } from '../atoms/IconSprite';
import { Message } from '../molecules/Message';

const replies = [
    {
        userName: 'Game Developer',
        photo: '',
        comment: 'There\'s a download button in the bottom of game details -_-'
    },
    {
        userName: 'Rukas Rutkus',
        photo: '',
        comment: 'FOUND IT!! Tanks'
    }
];

const comments = [
    {
        userName: 'Lukas Lutkus',
        photo: '',
        comment: 'That\'s a nice looking game'
    },
    {
        userName: 'Rukas Rutkus',
        photo: '',
        comment: 'Where can I find it?',
        replies: replies
    }
];

export const Comments: React.FC = () => {
    return (
        <div className='o-comments'>
            <div className="o-comments__header">
                <IconSprite name="chat" />
                <h3 className="h3">Comments</h3>
            </div>

            <div className="o-comments__content">
                {
                    comments.map((comment, index) => <Comment key={index} {...comment} />)
                }
            </div>

            <Message placeholder="Write your message here" buttonText="Send Message" onClick={() => {}}  />

        </div>
    );
}