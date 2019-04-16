// Libraries
import React, { Component } from "react";
import { observer } from "mobx-react";

// Store
import { Store } from "../store/Store";
import { Button } from "react-bootstrap";

interface IProps {
  store: Store;
}

@observer
export class Keyboard extends Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);
  }

  private handleClick = (e: any) => {
    console.log(this.props.store.plugboard.getLetter(e.target.name));
  };

  private firstRow() {
    return this.props.store.firstRowLetters.map(el => (
      <Button
        onClick={(e: any) => this.handleClick(e)}
        variant="primary"
        key={el}
        name={el}
      >
        {" "}
        {el}
      </Button>
    ));
  }

  private secondRow() {
    return this.props.store.secondRowLetters.map(el => (
      <Button
        id={el}
        onClick={(e: any) => this.handleClick(e)}
        variant="primary"
        key={el}
        name={el}
      >
        {" "}
        {el}
      </Button>
    ));
  }

  private thirdRow() {
    return this.props.store.thirdRowLetters.map(el => (
      <Button
        id={el}
        onClick={(e: any) => this.handleClick(e)}
        variant="primary"
        key={el}
        name={el}
        className="button"
      >
        {" "}
        {el}
      </Button>
    ));
  }

  render() {
    return (
      <div className="keyboard">
        <div className="first-row-letters">{this.firstRow()}</div>
        <div className="second-row-letters">{this.secondRow()}</div>
        <div className="third-row-letters">{this.thirdRow()}</div>
      </div>
    );
  }
}
