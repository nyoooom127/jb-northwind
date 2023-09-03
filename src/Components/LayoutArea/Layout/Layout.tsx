import Header from "../Header/Header";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <header><Header /></header>
            <aside>2</aside>
            <main>3</main>
            <footer>4</footer>
        </div>
    );
}

export default Layout;
