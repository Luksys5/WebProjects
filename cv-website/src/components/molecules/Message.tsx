import React, { useState } from 'react';
import { toast } from 'react-toastify';

type ChatMessage = {
    placeholder?: string;
    buttonText: string;
    onClick: (ev: React.MouseEvent) => void;
}

export const Message: React.FC<ChatMessage> = ({ placeholder, buttonText, onClick }) => {
    const [msg, setMsg] = useState('');

    const handleClick = (ev: React.MouseEvent) => {
        toast.info('Your message is beeing sent');
        onClick(ev);
    }

    const handleMsgChange = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMsg(ev.target.value);
    }

    return (
        <div className="m-message">
            <div className="m-message__text-field">
                <textarea value={msg} cols={25} rows={5} onChange={handleMsgChange} placeholder={placeholder} />
            </div>

            <button className="a-button" onClick={handleClick}>
                { buttonText }
            </button>
        </div>
    );
}