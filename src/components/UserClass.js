import React from 'react';

class UserClass extends React.Component {
   constructor(props){
    super(props);

    // this.state ={
    //     count : 0,
    // }
   }

   async componentDidMount() {
    //API call

    const data = await fetch("https://api.github.com/users/iNitishSheoran");
    const json = await data.json();
    console.log(json);
   }

   render() {
    const{ name, location } = this.props;
    // const { count } = this.state;

    return (
        <div className="user-card">
            {/* <h1>Count : {count}</h1>
            <button className="btn1" onClick={() => {
                this.setState({
                    count: this.state.count + 1,
                })
            }}>Count Increase</button> */}
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: @nitish_sheoran</h3>
        </div>
    );
   }

}

export default UserClass;