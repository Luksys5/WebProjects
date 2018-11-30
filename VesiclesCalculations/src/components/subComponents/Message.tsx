import * as React from 'react';

export const Message = (containerClassName: string, msgText: any, messageIcon?: string, closeIcon?: string, onClose?: () => void) => {
    return (
    <div className={containerClassName}>
        <div className='message__icon'>
            <i className={ messageIcon } />
        </div>
        <div className='message__text'>
            { msgText }
        </div>
        { onClose &&
            <div className='message__close' onClick={ onClose }>
                <i className={ closeIcon } />
            </div>
        }
    </div>
    );
}