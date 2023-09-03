import css from "./WhoAreWe.module.css";

function WhoAreWe(): JSX.Element {
    return (
        <div className={css.Container}>
            <p className={css.NiceText} >We are Northwind company...</p>
            <p className={css.OpenHours} >We are open sunday-saturday, 9:00 - 18:00</p>
        </div>
    );
}

export default WhoAreWe;
