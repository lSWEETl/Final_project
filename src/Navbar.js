export default function Navbar (){
    return <nav className="nav">
        <a href="/" className="Logo">Colocar Logo</a>
        <ul>
            <li className="active">
                <a href="/home">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/menu">Menu</a>
            </li>
            <li>
                <a href="/reservations">Reservations</a>
            </li>
            <li>
                <a href="/orderonline">Order Online</a>
            </li>
            <li>
                <a href="/login">Login</a>
            </li>
        </ul>
    </nav>
}