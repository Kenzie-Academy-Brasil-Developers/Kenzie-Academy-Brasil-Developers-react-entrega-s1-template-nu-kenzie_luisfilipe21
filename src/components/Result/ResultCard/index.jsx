import style from "./style.module.scss";

export const ResultCard = ({ description, id, money, typeOfOption, removeFinancialStatement }) => {
    
    return (
        <li className={style.cardBox}>
            <div className={style.divAll}>
                <div className={`${style.cardColor} ${typeOfOption === "Entrada" ? style.painted : style.noPaint}`} >
                    <div className={style.cardInfo}>
                        <h2 className="title3">{description}</h2>
                        <p className="text1">{typeOfOption}</p>

                    </div>
                    <div className={style.cardMoney}>
                        <p className="text2">R$ {money}</p>
                        <button className="btnRemove" onClick={() => removeFinancialStatement(id)}>Excluir</button>
                    </div>
                </div>
            </div>
        </li>
    )
}