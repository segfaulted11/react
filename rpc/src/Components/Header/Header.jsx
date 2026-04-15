import { Link } from "react-router";

const Header = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold">this is header</h2>
            <ul className="flex gap-3">
            <Link to="/" className="underline">Home</Link>
            <Link to="/mobiles" className="underline">Mobiles</Link>
            <Link to="/laptops" className="underline">Laptops</Link>
            </ul>
        </div>
    );
};

export default Header;