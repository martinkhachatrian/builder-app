import type {JSX, FC} from 'react'
import {Button} from '@/ui';
import {ButtonProps} from '@material-tailwind/react';

interface Props extends ButtonProps {
    text: string
    placeholder: string
}

export default function _Button(props: Props): JSX.Element {
    return <Button
        variant={props.variant}
        placeholder={props.placeholder}
        title={props.text}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
    >
        {props.text}
    </Button>
}
