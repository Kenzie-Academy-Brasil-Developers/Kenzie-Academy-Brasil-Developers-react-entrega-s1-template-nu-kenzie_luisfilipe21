import { useState } from "react";
import { Input } from "../Input";
import { Select } from "../Select";

import style from "./style.module.scss";

export const FormList = ({ addFinancialStatement }) => {

    const [description, setDescription] = useState('');
    const [money, setMoney] = useState('');
    const [typeOfOption, setTypeOfOption] = useState('Entrada');


    const submit = (event) => {
        event.preventDefault();

        if (description !== "" && money !== "") {
            addFinancialStatement(description, money, typeOfOption);

            setDescription("");
            setMoney("");
        }
    }

    return (
        <section className={style.containerFrom}>
            <form onSubmit={submit}>
                <Input
                    id="description"
                    label="Descrição"
                    type="text"
                    placeholder="Digite aqui a sua descrição"
                    value={description}
                    handleChange={setDescription}
                >
                    Ex: Compra de roupas

                </Input>

                <Input
                    id="money"
                    label="Valor (R$)"
                    type="number"
                    placeholder="0,00"
                    value={money}
                    handleChange={setMoney}
                />

                <Select
                    id="typeOfOption"
                    value={typeOfOption}
                    label="Tipo do valor"
                    handleChange={setTypeOfOption}
                >
                    <option value="Entrada">Entrada</option>
                    <option value="Saida">Saída</option>
                </Select>

                <button type="submit" className="btn">Inserir valor</button>

            </form>
        </section>
    )
} 