import "./Page404.css";

function Page404(): JSX.Element {
    return (
        <div className="Page404">
			<p>The page you are looking for does not exist...</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/t3otBjVZzT0?autoplay=true" allow="autoplay" title="Page not Found"></iframe>
        </div>
    );
}

export default Page404;
