import React from 'react';
import './style.css';
import Elements from './res/Elements';
import { Link, Switch, Route } from 'react-router-dom';
import Element from './components/ElemPage';
import Error404 from './components/error';
import Quiz from './components/quiz';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Hydrogen',
      abbrev: 'H',
      num: 1,
      mass: 1.00784,
      id: 1,
      factOne:
        'Hydrogen is the only element that can exist without neutrons. Hydrogen’s most abundant isotope has no neutrons.',
      factTwo:
        'Hydrogen is believed to be one of three elements produced in the Big Bang; the others are helium and lithium.',
      factThree:
        'We owe most of the energy on our planet to hydrogen. The Sun’s nuclear fires convert hydrogen to helium releasing a large amount of energy.',
      source: 'https://www.chemicool.com/elements/hydrogen-facts.html'
    };
  }

  render() {
    return (
      <div className="main">
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <div>
                <br />
                <h1>The Periodic Table of Elements</h1>
                <br />
                <ul className="main">
                  <div className="space1">
                    <Link className="home" to="/quiz">
                      <span className="quizLink">Take the quiz!</span>
                    </Link>
                  </div>
                  <div className="space2">
                    <br />
                    <div className="boxNum">{this.state.num}</div>
                    <b className="boxAbbrev">{this.state.abbrev}</b>
                    <br />
                    <br />
                    <Link
                      style={{ color: 'black' }}
                      to={
                        this.state.factOne === ''
                          ? '/err'
                          : '/element/' + this.state.name
                      }
                    >
                      <div className="boxName">{this.state.name}</div>
                    </Link>
                    <br />
                    <br />
                    <div className="boxMass">{this.state.mass}</div>
                    <br />
                  </div>
                  <div className="space3 bottom speech">
                    {this.state.factOne !== '' ? (
                      <ul className="desc">
                        <li>{this.state.factOne}</li>
                        <li>{this.state.factTwo}</li>
                        <li>{this.state.factThree}</li>
                      </ul>
                    ) : null}
                    <br />
                    <i>
                      <a
                        className="source"
                        href={this.state.source}
                        target="_blank"
                      >
                        {this.state.source}
                      </a>
                    </i>
                  </div>
                  <div className="space4" />
                  <div className="space5" />
                  <div className="space6">
                    <br />
                    <br />
                    <br />
                  </div>
                  <div className="lantSpace">Lanthanoids</div>
                  <div className="actSpace">Actinoids</div>
                  {Elements.map(element => (
                    <li
                      onClick={() =>
                        this.setState({
                          name: element.name,
                          abbrev: element.abbrev,
                          num: element.num,
                          mass: element.mass,
                          id: element.id,
                          factOne: element.funfacts.one,
                          factTwo: element.funfacts.two,
                          factThree: element.funfacts.three,
                          source: element.source
                        })
                      }
                      key={element.id}
                      className="item elem"
                    >
                      <div className="container">
                        <div className="num">{element.num}</div>
                        <b className="abbrev">{element.abbrev}</b>
                        <br />
                        <br />
                        <div className="name">{element.name}</div>
                        <br />
                        <br />
                        <div className="mass">{element.mass}</div>
                        <br />
                      </div>
                    </li>
                  ))}
                </ul>
                <br />
              </div>
            )}
          />
          <Route exact path="/element/:name" component={Element} />
          <Route path="/err" component={Error404} />
          <Route path="/quiz" component={Quiz} />
        </Switch>
      </div>
    );
  }
}
