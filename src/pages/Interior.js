import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
const Interior = () => {
  return (
    <div className='contentmain'>
      <Navbar opt="Interior" />
      <div className="contentall">
        <Link to={"/furniture"}>
          <div className="content">
            <img src="data:image/jpeg;base64,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" alt="" />

            <div className="content_footer">
              <p>Furniture</p>
            </div>
          </div>
        </Link>
        <Link to={"/electronics"}>
          <div className="content">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScaN552ceVEiJSSCfIKEYyvm9tEAijDXZJVw&usqp=CAU" alt="" />
            <div className="content_footer">
              <p>Electronics</p>
            </div>
          </div>
        </Link>
        <Link to={"/rooms"}>
          <div className="content">
            <img src="data:image/jpeg;base64,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" alt="" />
            <div className="content_footer">
              <p>Rooms</p>
            </div>
          </div>
        </Link>
         <Link to={"/decor"}>
          <div className="content">
            <img src="data:image/jpeg;base64,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" alt="" />
            <div className="content_footer">
              <p>Home Decoration</p>
            </div>
          </div>
        </Link>
        
        <Link to={"/wallart"}>
          <div className="content">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdW4pywvFK85immpYj2KgyxqFFeFtA3nCL-g&usqp=CAU" alt="" />
            <div className="content_footer">
              <p>Wall arts</p>
            </div>
          </div>
        </Link>

        <Link to={"/furniture"}>
          <div className="content">
            <img src="" alt="" />
            <div className="content_footer">
              <p></p>
            </div>
          </div>
        </Link> 
        
      </div>
    </div>
  )
}

export default Interior