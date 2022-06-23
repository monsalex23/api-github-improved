import React from "react";
import * as S from "./styled"
const Layaout = ({children}) => {
    return (
        <S.WrapperLayout>
            <header>
                Hola
            </header>
            {children}
        </S.WrapperLayout>
    );
}

export default Layaout