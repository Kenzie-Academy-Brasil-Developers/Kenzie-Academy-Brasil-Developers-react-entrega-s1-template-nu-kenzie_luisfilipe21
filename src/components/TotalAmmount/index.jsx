import style from "./style.module.scss";

export const TotalAmmount = ({ financialList }) => {
    const totalAmmount = financialList.reduce((acc, total) => {
        const sum = acc + total.money 
        console.log(sum)
        
        if(total.typeOfOption === "Entrada"){
            
            return Number(acc.toFixed(2)) + Number(total.money)
        }else if(total.typeOfOption === "Saida"){
            return acc - total.money
        }
    }, 0)

    return (
        <>
            {financialList.length > 0 && (
                <section className={style.container}>
                    <div className={style.ammountBox} >
                        <h2 className="title3">Valor total: </h2>
                        <p className="text3">O valor se refere ao saldo</p>
                    </div>
                    <span>R$ {totalAmmount}</span>
                </section>

            )}
        </>
    )
}