import React from 'react';
import {Spinner} from 'reactstrap';
import './loader.css';

interface LoaderProps {
    isVisible: boolean;
}

const Loader = (props: LoaderProps) => {
    return (props.isVisible ?
        <div className='loaderContainer'>
            <Spinner className='loader' color='warning'/>
        </div> : null);
};

export default Loader;
