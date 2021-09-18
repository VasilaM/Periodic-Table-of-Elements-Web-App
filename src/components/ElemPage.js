import React from 'react';
import '../style.css';
import Elements from '../res/Elements';
import { Link } from 'react-router-dom';

class Element extends React.Component {
  render() {
    const { name } = this.props.match.params;
    const matchElem = Elements.find(element => element.name === name);

    return (
      <div className="elemMain">
        <div className="elemName">
          <span className="labelBorder">{matchElem.name}</span>
        </div>
        <br />
        <img align="left" className="elemImg" src={matchElem.image} />
        <p className="elemDesc">
          <span className="labelBorder">
            &#8287;&#8287;&#8287;&#8287;&#8287;&#8287;{matchElem.desc}
          </span>
        </p>
        <br />

        <table className="propTable">
          <tr>
            <th className="label" colspan={4}>
              <span className="labelBorder">
                {' '}
                Properties of {matchElem.name}
              </span>
            </th>
          </tr>
          <tr>
            <td className="label">
              <span className="labelBorder">Atomic Number</span>
            </td>
            <td className="property">
              <span className="propText">{matchElem.num}</span>
            </td>
            <td className="label">
              <span className="labelBorder">Group</span>
            </td>
            <td className="property">
              <span className="propText">{matchElem.properties.group}</span>
            </td>
          </tr>
          <tr>
            <td className="label">
              <span className="labelBorder">Period</span>
            </td>
            <td className="property">
              <span className="propText">{matchElem.properties.period}</span>
            </td>
            <td className="label">
              <span className="labelBorder">Phase (at STP)</span>
            </td>
            <td className="property">
              <span className="propText">{matchElem.properties.phase}</span>
            </td>
          </tr>
          <tr>
            <td className="label">
              <span className="labelBorder">Melting Point</span>
            </td>
            <td className="property">
              <span className="propText">
                {matchElem.properties.meltingPoint}
              </span>
            </td>
            <td className="label">
              <span className="labelBorder">Boiling Point</span>
            </td>
            <td className="property">
              <span className="propText">
                {matchElem.properties.boilingPoint}
              </span>
            </td>
          </tr>
          <tr>
            <td className="label">
              <span className="labelBorder">Density (at STP)</span>
            </td>
            <td className="property">
              <span className="propText">{matchElem.properties.density}</span>
            </td>
            <td className="label">
              <span className="labelBorder">Electronegativity</span>
            </td>
            <td className="property">
              <span className="propText">
                {matchElem.properties.electronegativity}
              </span>
            </td>
          </tr>
        </table>

        <br />
        <br />

        <button className="prevNext prev">
          {matchElem.num !== 1 ? (
            <Link
              className="prevNextLink"
              to={
                '/element/' +
                Elements.find(element => element.num === matchElem.num - 1).name
              }
            >
              Previous
            </Link>
          ) : (
            <span className="disabledPrevNext">Previous</span>
          )}
        </button>
        <button className="prevNext next">
          {matchElem.num < 30 ? (
            <Link
              className="prevNextLink"
              to={
                '/element/' +
                Elements.find(element => element.num === matchElem.num + 1).name
              }
            >
              Next
            </Link>
          ) : (
            <span className="disabledPrevNext">Next</span>
          )}
        </button>
        <br />
        <br />
        <br />
        <br />
        <Link className="home" to={'/'}>
          <span className="prevNext prevNextLink ">Home</span>
        </Link>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Element;
