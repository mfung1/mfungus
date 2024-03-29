import React, {Fragment} from 'react';
import Logo from '../../svgs/Logo/logo.js';
class HeaderNav extends React.Component {
  constructor () {
    super();
    this.state = {
      classList: "mf-wrp mb-52",
    }
  }

  componentDidMount () {
    this.addFade();
  }

  addFade () {
    this.setState({classList: "mf-wrp mb-104 fade-up"});
  }

  render () {
    return (
      <Fragment>
        <div className={this.state.classList}>
          <nav className="mf-nav">
          <Logo/>
            <ul className="mf-nav_cnt">
              <li className="mf-nav_item">
                <a href="#features" className="mf-nav_lnk col-blk">About</a>
              </li>
              <li className="mf-nav_item">
                <a href="#howto" className="mf-nav_lnk col-blk">Portfolio</a>
              </li>
              <li className="mf-nav_item">
                <a href="#features" className="mf-nav_lnk col-blk">Blog</a>
              </li>
              <li className="mf-nav_item">
                <a href="#howto" className="mf-nav_lnk col-blk">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </Fragment>
    )
  }
}

export default HeaderNav;