import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
// import Profile from "./Profile";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    console.log("Parent -Constructor");
  }

  async componentDidMount() {
    console.log("Parent -Component-DidMount"); /* 
    let data = await fetch("https://jsonplaceholder.typicode.com/posts");
    let json = await data.json();
    console.log("Parent -Component DidMount -After json");
    this.setState({ data: json });
    console.log("Parent -Component DidMount -After Stateset"); */
  }

  render() {
    console.log("Parent -Render");
    /* let { data } = this.state;
    console.log(data); */
    return (
      <>
        <div>This is Class Component, From About---</div>;
        {/*  <div>
          {data?.map((person, index) => {
            return (
              <p key={person.id}>
                {person.id} title ={person.title}
              </p>
            );
          })}
        </div> */}
        <Profile name={"First Child -S"} />
        {/* <Profile name={"Second Child -P"} /> */}
      </>
    );
  }
}

export default About;
