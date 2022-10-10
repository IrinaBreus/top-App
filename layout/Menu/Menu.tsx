import { useContext } from "react";
import { AppContext } from "../../context/app.context";

export const Menu = ():JSX.Element => {
    const {menu, firstCategory} = useContext(AppContext);
    return (
        <>
            <ul>
                {menu.map(elem => (<li key={elem._id.secondCategory}>{elem._id.secondCategory}</li>))}
            </ul>
        </>
    );
};