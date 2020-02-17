import React from 'react';
import {Button} from 'reactstrap';

interface FieldProps {
    label: string;
    value: string;
    onClick?: () => void;
    valueTestId?: string;
}

const Field = (props: FieldProps) => {
    const {label, value, valueTestId} = props;
    return <p>
        {label}
        {props.onClick ?
            <Button color='link' className='ml-3 p-0 align-baseline' onClick={props.onClick}>{value}</Button> :
            <span className='ml-3 text-muted' data-testid={valueTestId}>{value}</span>}
    </p>;
};

export default Field;
