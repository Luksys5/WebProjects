import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Message = (containerClassName: string, msgText: any, messageIcon?: any, closeIcon?: any, onClose?: () => void) => {
    return (
    <div className={containerClassName}>
        <div className='message__icon'>
            <FontAwesomeIcon icon={messageIcon} />
        </div>
        <div className='message__text'>
            { msgText }
        </div>
        { onClose &&
            <div className='message__close' onClick={ onClose }>
                <FontAwesomeIcon icon={closeIcon} />
            </div>
        }
    </div>
    );
}