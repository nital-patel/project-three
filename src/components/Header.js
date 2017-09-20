import React from 'react';

import {Link} from 'react-router-dom';

class Header extends Component {
  render(){
  return(
    <header>
      <div className="logo">
        WAVE
      </div>
      <nav>
        <ul>
          <li><Link to ='/'>Home</Link></li>
          <li><Link to ='/auth'>Login</Link></li>
          <li><Link to ='/auth'>Register</Link></li>
        </ul>
      </nav>
    </header>
    )
}
}



export default Header;
