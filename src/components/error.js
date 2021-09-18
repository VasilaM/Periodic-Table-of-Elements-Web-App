import React from 'react';
import '../errorPage.css';
import '../style.css';
import { Link } from 'react-router-dom';

export default class Error404 extends React.Component {
  componentDidMount() {
    document.body.style.overflow = 'hidden';
  }
  componentWillUnmount() {
    document.body.style.overflow = 'visible';
  }
  render() {
    return (
      <div className="err">
        404. Uh-oh. This page isn't ready yet :'(
        <Link  className="check errHome" to={'/'}>
          <span>Home</span>
        </Link>
      </div>
    );
  }
}
