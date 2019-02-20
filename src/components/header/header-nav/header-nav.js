import React, {Fragment} from 'react';
import Logo from '../../icon/Logo/logo.js';
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
    this.setState({classList: "mf-wrp mb-52 fade-up"});
  }

  render () {
    return (
      <Fragment>
        <div className={this.state.classList}>
          <nav className="mf-nav">
          <Logo/>
            <ul className="mf-nav_cnt">
              <li className="mf-nav_item">
                <a href="#features" className="mf-nav_lnk col-wht">About</a>
              </li>
              <li className="mf-nav_item">
                <a href="#howto" className="mf-nav_lnk col-wht">Portfolio</a>
              </li>
              <li className="mf-nav_item">
                <a href="#features" className="mf-nav_lnk col-wht">Blog</a>
              </li>
              <li className="mf-nav_item">
                <a href="#howto" className="mf-nav_lnk col-wht">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </Fragment>
    )
  }
}

export default HeaderNav;