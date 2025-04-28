import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
    return (
        <div className='header'>
        <div className='logo-container'>
           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-HJgYuO5ggkAinuuO8aof4vKV1ECmgi7iuQ&s' alt='logo' className='logo'/>
        </div>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    return (
        <div className='res-card'>
            <img alt='res-logo' className='res-logo' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e565c4ad2e3450129c54c8d333557bdc'></img>
            <h2>{props.resName}</h2>
            <h5>{props.cuisines}</h5>
            <h5>4.3 stars</h5>
            <h5>40 minutes</h5>
        </div>
    )
}

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                <RestaurantCard 
                resName="Dhaba UP 15"
                cusines="North Indian, Chinese, Snacks"
                 />
                <RestaurantCard
                resName="Domino's Pizza"
                cusines="Pizza, Italian, Pastas"
                 />
               
            </div>
        </div>
    )
}

const AppLayout = () => {
return (
    <div className='app'>
        <Header />
        <Body />
    </div>
)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);

