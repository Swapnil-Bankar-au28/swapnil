import React from 'react';
import {useCart} from "react-use-cart"

const Cart = () => {
    const {
        isEmpty,
        totalUniqueeItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        emptyCart,
        removeItem,
    } = useCart();
    if (isEmpty) return <h1 className="text-center">Your cart is Empty</h1>
    return (
        
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className='col-12'>
                    <h5> Cart ({ totalUniqueeItems}) total Items:({totalItems})</h5>
                <table className='table table-light table-hover m-0'>
                    <tbody>
                        {items.map((item,index)=>{
                            return(
                                <tr key ={index}>
                                    <td>
                                        <img src ={item.img} style ={{height:'6rem'}} alt=''/>
                                    </td>
                                    <td >{item.title}</td>
                                    <td >{item.price}</td>
                                    <td >Quanitity({item.quantity})</td>
                                    <td>
                                       <button 
                                       className="btn btn-info ms-2"
                                       onClick={()=>updateItemQuantity(item.id,item.quantity -1)}
                                       >-</button>
                                       <button  className="btn btn-info ms-2"
                                        onClick={()=>updateItemQuantity(item.id,item.quantity +1)}
                                       >+</button>
                                       <button  className="btn btn-denger ms-2"
                                       onClick={()=>removeItem(item.id)}
                                       >Remove Item</button>
                                       
                                    </td>
                                </tr>

                            )

                            

                        })}
                        </tbody>
                </table>


                    
                </div>
                <div className="col-auto ms-aoto">
                <h2> Total Price : ${cartTotal}</h2>

                </div>
                <div className='col-auto'>
                <button 
                    className='btn btn-danger m-2'
                    onclick={()=>emptyCart()}
                >clear Cart</button>
                <button className='btn btn-primary m-2'>Buy Now</button>

                </div>
            </div>
        </section>
    );
};

export default Cart;