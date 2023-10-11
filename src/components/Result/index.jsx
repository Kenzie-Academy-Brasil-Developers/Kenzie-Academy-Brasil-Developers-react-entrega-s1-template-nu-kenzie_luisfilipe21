import { ResultCard } from "./ResultCard";
import style from "./style.module.scss";

export const Result = ({ financialList, removeFinancialStatement }) => {

    return (
        <section className={style.cardBox} >
            <h3 className="title3">Resumo financeiro</h3>
            <div className={style.cardColor}>

                {financialList.length > 0 ? (
                    <ul>
                        {financialList.map(financial => {
                            const { description, money, id, typeOfOption } = financial;

                            return (
                                <ResultCard
                                    key={id}
                                    id={id}
                                    description={description}
                                    money={money}
                                    typeOfOption={typeOfOption}
                                    removeFinancialStatement={removeFinancialStatement}
                                />
                            )

                        })}
                    </ul>

                ) : <p className="title2">Você ainda não possui nenhum lançamento</p>
                }

            </div>
        </section>
    )
} 