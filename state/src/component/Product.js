import React, {useState} from 'react'
import p_data from '../data/p_data.json';
import Item from './Item';

const Product = () => {
    let [title,setTitle] = useState(0);

    let modal = (n)=>{
        const elModal = document.querySelector('.modal');
        elModal.classList.add('active');
        
        setTitle(n.title);
        console.log(title)
        elModal.onclick = ()=>{
            elModal.classList.remove('active');
        }
        
    }
  return (
    <article className='list'>
        <h2>Product</h2>
        <div>
            {
                p_data.data.map((res,idx)=>{
                   return <Item key={res.id} item={res} fn = {modal}/>
                })
            }
            
        </div>
        <p className="modal">{title} </p>
    </article>
  )
}

export default Product