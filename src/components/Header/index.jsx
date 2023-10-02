import style from './style.module.scss';


export const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.container}>
                <h1 className='title1'><span>Nu</span> Kenzie</h1>
            </div>
        </header>
    )
}