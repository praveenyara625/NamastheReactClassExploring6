import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    console.log(this.props.name + " Constructor");
  }
  /*
   *As we Doing by SPA here,
   *if a interval is set by some x component it stays,it doubles if we render componet again
   *even if we go to other components(so called illusion pages)
   *so we need to clean the interval
   */

  async componentDidMount() {
    console.log(this.props.name + " component-Did-Mount");
    this.timer = setInterval(() => {
      console.log("Namasthe React OP ");
    }, 1000);
    /* let data = await fetch("https://jsonplaceholder.typicode.com/posts");
    let json = await data.json();
    console.log(json);
    this.setState({ data: json }); */
  }

  /*
   * Suppose for [count] as dependency in UseEffect
   *DidUpdate does this>>
   *
   */
  componentDidUpdate(prevProps, prevState) {
    /* if (this.state.count !== prevState.count) {
       code 
    } */
    console.log("componentDidUpdate -called");
  }
  /*
   *DidMount - After Mounting
   *DidUpdate - After U
   *WillUnMount -About to Unmount
   *cleanup - Ops
   */
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Profile Component Unmount -Done");
  }

  render() {
    let { data } = this.state;
    console.log(this.props.name + " render");
    return (
      <div>
        Profile Component Welcomes You.!!
        <div>
          {data?.map((person, index) => {
            return (
              <p key={person.id}>
                {person.id} title ={person.title}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Profile;
