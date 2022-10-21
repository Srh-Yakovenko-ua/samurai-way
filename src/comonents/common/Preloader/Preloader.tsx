import React from 'react';
import preloader from '../../../assets/images/preloader.svg';

const Preloader: React.FC<any> = (props) => {
    const stylePreloader = {backgroundColor: 'white'};

    return (
        <div style={stylePreloader}>
            <img src={preloader} alt=""/>
        </div>
    );
};

export {Preloader};