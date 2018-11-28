import * as React from 'react';

export const Loading = (loadingText) => {
    return (
    <div className='overlay-container'>
        <div className="lds-ring">
            <div></div><div></div><div></div><div></div>
            <p className='saving'>{ loadingText }<span>.</span><span>.</span><span>.</span></p>
        </div>
    </div>
    )
}