import style from "./style.module.scss";

export const Select = ({id, label, handleChange, children}) => {
    return (
        <div className={style.selectBox}>
            <label htmlFor={id} className='text3'>{label}</label>
            
            <select 
            onChange={(e) => handleChange(e.target.value)}
            className="text4">
                {children}
            </select>
        </div>
    )
}