import React from "react";

function Layaout({children}) {
    return (
        <section>
            <header>
                Hola
            </header>
            {children}
        </section>
    );
}

export default Layaout