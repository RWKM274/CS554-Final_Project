import React, {useState, useEffect,useContext} from 'react';
import axios from 'axios';
import createPDF from './CreatePDF'
import { AuthContext } from '../firebase/Auth';
import SignOutButton from './SignOut';
import '../App.css';
import ChangePassword from './ChangePassword';

import '../App.css';

function Account() {
  const {currentUser} = useContext(AuthContext);
  const [pastOrders, setPastOrders] = useState([])
  const [ error, setError ] = useState(false);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const {data} = await axios.get('https://final554groupnull.herokuapp.com/order/' + currentUser.email);
        
        setPastOrders(data);
        //console.log(data)
        setLoading(false);
        setError(false);
      } catch (e) {
        setError(true);
        console.log(e);
      }
    }
    fetchData();
  }, [currentUser.email]);


  if (error){
    return (
      <div>
        <h2>404 page not find</h2>
      </div>
    )
  }
  if(loading){
    return(
      <div>
        <h2>Loading . . .</h2>
      </div>
    )
  } else{
   // console.log(pastOrders)
    return (
      <div>
        <h1>Account Page</h1>
        <ChangePassword />
        <SignOutButton />

        <br/>
        <h3>Past Orders</h3>
        {pastOrders&&currentUser&&(<ul id="reviewList">
          {pastOrders.map(e=>
            
            <li key={e._id}>
              <h4>Order #{e._id}</h4>
          
            
              <h5>Purchased Items:</h5>
              <div className='PastPurchase'>
                <div className='ItemList'>
                  {e.order.candy.map(purchase=>
                    <div key={purchase.name} className="OrderItem">
                      <img src={purchase.image} alt='candy'/>
                      <div className="OrderInfo">
                        <div className="TopOrderInfo">
                          <p>{purchase.name} </p>
                          <p><b>${(purchase.numbers * purchase.price).toFixed(2)}</b></p>
                        </div>
                        <p>${purchase.price.toFixed(2)} ea</p>
                        <div className="BottomOrderInfo">
                          <p>Quantity Purchased: {purchase.numbers}</p>
                          <button>Order Again</button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className='TotalOrderInfo'>
                  <p><b>Total Price {parseFloat(e.order.total).toFixed(2)}</b></p>
                  <p><b>Payment Info: </b></p>
                  <p>Billing Address: {e.order.address} </p>
                  <p>Payment Made With Card Ending In: {e.order.payment}</p>
                  <button onClick={() => createPDF(e.order.candy)} >Generate Recipt</button>
                </div>
              </div>
            </li>             
          )}
        </ul>)}
      </div>
    );
  }
}

export default Account;