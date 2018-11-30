import * as React from 'react';

const Help = () => {
    return (
        <div>
            <p>In every main calculation page you will find example section with information and button for filling exmple data</p>
            <img src={require('../../../assets/example.png')} alt='smiley' style={{ width: '100%' }} />

            <p>Alternatively almost every field has help icon which when hovered shows what data you must input</p>
            <img src={require('../../../assets/fieldHelp.png')} alt='smiley' style={{ width: '100%' }}/>

            <p>Otherwise feel free to contact us</p>
        </div>
    )
}

export default Help;