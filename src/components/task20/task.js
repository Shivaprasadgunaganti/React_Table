import { Component } from "react";

import ButtonComponent1 from "../Table/buttonComponet/buttonComponent";
// import { click } from "@testing-library/user-event/dist/click";

class Employe extends Component {
  state = {
    data: [2000, 4000, 5000, 20000, 50000, 1500],
    updated: [],
  };
  EmployeData = () => {
    let orginal = this.state.data;
    let updateList = orginal.filter((value) => value < 5000);
    this.setState({
      // data: updateList,
      updated: updateList,
    });
    console.log(this.state.updated, "updated");
  };
  EmployeData2 = () => {
    let orginal = this.state.data;
    let updateList = orginal.filter((value) => value > 5000);
    console.log(updateList);
    this.setState({
      // data: updateList,
      updated: updateList,
    });
  };

  render() {
    return (
      <>
        <ol>
          {this.state.updated.map((salary) => {
            return <li key={salary}>{salary}</li>;
          })}
        </ol>
        <ButtonComponent1 text={"<5000"} onPress={this.EmployeData} />
        <ButtonComponent1 text={">5000"} onPress={this.EmployeData2} />
      </>
    );
  }
}
export default Employe;
