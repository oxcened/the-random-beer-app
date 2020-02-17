import React, {useState} from 'react';
import {PlaceHolder} from '../../../assets/images/Images';

interface ImageProps {
    src: string;
    alt?: string;
    className?: string;
}

const Image = (props: ImageProps) => {
    const [src, setSrc] = useState(props.src);
    return <img src={src} alt={props.alt} onError={() => setSrc(PlaceHolder)} className={props.className}/>;
};

export default Image;
