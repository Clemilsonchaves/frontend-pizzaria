import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{}

export function Input({...rest}: InputProps){
    return (
        <input className={styles.input} {...rest}/>
    )
}

// eslint-disable-next-line no-empty-pattern
export function TextArea({}: TextAreaProps){
    return (
        <textarea className={styles.input}></textarea>
    )
}