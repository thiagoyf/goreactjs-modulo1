import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import Button from "./Button";

class App extends Component {
  state = {
    counter: 0
  };

  // metodo que é executado na criação do componente
  componentDidMount() {
    // perfeito para:
    // chamada a api
    // para carregar informações iniciais do componente (listagem)
    // para cadastrar event listeners (click, change, etc...)
  }

  // toda vez o componente sofrer uma alteração em uma propriedade ou num estado
  // esse metodo é chamado, ela permite chamar o render ou não
  // executado antes de 'render'
  // usado para controlar a performance do componente
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.counter <= 10;
  }

  // executado após 'render'
  // executado depois das atualizações terem ocorrido
  // recebe as informações antes delas atualizarem
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.counter >= 9) {
      this.setState({ counter: 0 });
    }
  };

  // metodo que o componente chama quando vai deixar de existir na nossa aplicação
  componentWillUnmount() {
    // usado para:
    // limpar todo os events listener que tenhamos feito dentro de componentDidMount
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <Fragment>
        <h1>Hello Rocketseat</h1>
        <h2 style={{ color: "#f00" }}>>{this.state.counter}</h2>
        <Button onClick={this.handleClick}>Somar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
