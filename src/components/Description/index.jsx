import { useState } from "react";
import { FormList } from "../FormList";
import { Result } from "../Result";
import { TotalAmmount } from "../TotalAmmount";

import style from './style.module.scss';

export const Description = () => {
    const [financialList, setFinancialList] = useState([]);

    const addFinancialStatement = (description, money, typeOfOption) => {

        const id = crypto.randomUUID();
        const newFinancialStatement = { description, money, typeOfOption, id };

        setFinancialList([...financialList, newFinancialStatement]);
    }

    const removeFinancialStatement = (id) => {
        const filteredList = financialList.filter(financial => {
            if (financial.id !== id) {
                return financial
            }
        });
        setFinancialList(filteredList);
    }

    return (
        <section className={style.containerBox}>
            <div className={style.divDescription}>
                <div className={style.descriptionBox}>
                    <FormList
                        addFinancialStatement={addFinancialStatement}
                    />
                </div>
                <TotalAmmount financialList={financialList}/>
            </div>
                <Result

                    financialList={financialList}
                    removeFinancialStatement={removeFinancialStatement}
                />
        </section>
    )
}