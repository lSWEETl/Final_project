import Photo1 from "./../images/Photo1.jpg"

export default function Home() {
    return (
    <header>
    <div className="exemplo1">
    <h1>Little Lemon</h1>
    <h2>Chicago</h2>
    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a moder twist.</p>
    </div>
    <img src={Photo1} alt="waiter" style={{width: 300, height: 400, borderRadius: '1px'}}/>
    </header>
    )
}

