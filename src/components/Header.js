import React, { useEffect } from 'react';
import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Badge from '@mui/material/Badge';
import Nav from 'react-bootstrap/Nav';
import Menu from '@mui/material/Menu';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/esm/Table';
import { DLT } from '../redux/actions/action';



export default function Header() {

  const [price,setPrice] = useState(0);

      const getdata = useSelector((state)=>state.cartreducer.carts);
      console.log(getdata);

      const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt =(id)=>{
    dispatch(DLT(id))
  }
  
  // functionalities to add the price in cart
  const total = ()=>{
    let price = 0;
    getdata.map((ele,k)=>{
        price = ele.price * ele.qnty + price
    });
    setPrice(price);
  };

  useEffect(()=>{
    total();
  },[total])

  return (
    <>
     <Navbar bg="dark" variant="dark" fixed="top" style={{height:"60px"}}>
        <Container>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light mx-3">Home</NavLink>
            <NavLink to="/ourstore" className="text-decoration-none text-light mx-3">Our Stores</NavLink>
            <NavLink to="/about" className="text-decoration-none text-light mx-3">About Us</NavLink>
            <NavLink to="/login" className="text-decoration-none text-light">Login</NavLink>
            <NavLink to="/signup" className="text-decoration-none text-light"></NavLink>
          </Nav>
          <Badge badgeContent={getdata.length} color="error"
           id="basic-button"
           aria-controls={open ? 'basic-menu' : undefined}
           aria-haspopup="true"
           aria-expanded={open ? 'true' : undefined}
           onClick={handleClick}
          >
            <i className="fa-solid fa-cart-shopping text-light" style={{fontSize:25,cursor:"pointer"}}></i>
          </Badge>
         
        </Container>

        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
          getdata.length ?
          <div className='card_details' style={{width:"24rem",padding:10}}>
             <Table>
                 <thead>
                     <tr>
                        <th>Photo</th>
                        <th>Sweet Name</th>
                     </tr>
                 </thead>
                 <tbody>
                  {
                    getdata.map((e)=>{
                      return (
                        <React.Fragment key={e.id}>
                          <tr>
                            <td>  
                            {/* For closing of cart items */}
                            <NavLink to={`/cart/${e.id}`}  onClick={handleClose}> 
                            <img src={e.imgdata} style={{width:"5rem",height:"5rem"}} alt="" />
                            </NavLink> 
                            </td>
                            <td>
                              <p>{e.rname}</p>
                              <p>Price  : ₹{e.price}</p>
                              <p>Quantity  : {e.qnty}</p>
                              <p style={{color:"red",fontSize:20,cursor:"pointer"}} >
                                {/* Mobile */}
                                <i className='fas fa-trash smalltrash'></i> 
                              </p>
                            </td>
                            <td className='mt-5' style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                                <i className='fas fa-trash largetrash'></i>
                            </td>
                          </tr>
                        </React.Fragment>
                      )
                    })
                  }
                  <p className='text-center'>Total : ₹{price}</p>
                 </tbody>
             </Table>
          </div>:
          <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem",padding:10,position:"relative"}}>
          <i className='fas fa-close smallclose' 
          onClick={handleClose}
          style={{position:"absolute",top:1,right:2,fontSize:20,cursor:"pointer"}}></i> 
          <p>Your cart is empty</p>
         </div>
          
        }

        
      </Menu>
      </Navbar>
    </> 
  )
}