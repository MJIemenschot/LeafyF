export default function Button({disabled, classNameButton, onClickEvent, buttonTitle, type}) {
    return (
        <button
            type={type}
            disabled={disabled}
            className={classNameButton}
            onClick={onClickEvent}
        >
            {buttonTitle}
        </button>
    )
}