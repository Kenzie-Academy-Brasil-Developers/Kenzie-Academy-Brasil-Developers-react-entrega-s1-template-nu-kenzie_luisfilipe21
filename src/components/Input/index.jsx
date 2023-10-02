import style from './style.module.scss';

export const Input = ({ id, value, label, type, placeholder, children, handleChange }) => {
    return (
        <div className={style.inputBox}>

            <label htmlFor={id} className='text3'>{label}</label>

            <input
                id={id}
                name={id}
                type={type}
                placeholder={placeholder}
                value={value}
                className='text4'
                onChange={(e) => handleChange(e.target.value)}
            />
            <p className='text1'>{children}</p>
        </div>
    )
}