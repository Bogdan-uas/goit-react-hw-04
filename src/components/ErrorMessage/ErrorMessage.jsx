import style from './ErrorMessage.module.css'

export default function ErrorMessage() {
    return (
        <p className={style.error_message}>Whoops, something went wrong. Try again!</p>
    )
}