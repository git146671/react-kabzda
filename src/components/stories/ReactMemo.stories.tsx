import {useMemo, useState} from "react";


export default {
    title: 'UseMemo'
}

export const Example1 = () => {

    const [a, setA] = useState<number>(0);
    const [b, setB] = useState<number>(0);

    let resA = 1;
    let resB = 1;

    // благодаря этому хуку при изменении в инпуте b результат для а не будет пересчитываться т.к. рез-т для а закэширован.
    // еще есть React.memo() - нужен для того чтобы не перерисовывать компоненты которые не менялись
    // можно использ-ть вместе useMemo и React.memo если например мы в компоненте делаем фильтр или map то по сути компонент не меняется но эти функции создают мапример новый массив и поэтому React.memo не поможет
    resA = useMemo(() => {
        let tempResA = 1;
        for (let i = 1; i <= a; i++) {
            tempResA *= i;
        }
        return tempResA;
    }, [a])


    for (let i = 1; i <= b; i++) {
        resB *= i;
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            result for a: {resA}
        </div>
        <div>
            result for b: {resB}
        </div>
    </>
}