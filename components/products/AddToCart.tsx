"use client"

import useCartService from "@/lib/models/hooks/useCartStore"
import { OrderItem } from "@/lib/models/OrderModel"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { type } from '../../lib/models/productModels';

export default function AddToCart({item}:{item:OrderItem}){
    // const router = useRouter()
    const {items , increase} = useCartService()

    const [existItem, setExistItem] = useState<OrderItem|undefined>()

    useEffect(()=>{
        setExistItem(items.find(x=>x.slug===item.slug))
    },[item, items])

    const addToCartHandler = ()=>{
        increase(item)
    }
    return existItem ? (<div>
        <button className=" btn" type="button">-</button>
        <span className=" px-2">{existItem.qty}</span>
        <button className=" btn" onClick={()=>increase(existItem)}>+</button>

    </div>):(<button className={`btn btn-primary w-full`} type="button" onClick={addToCartHandler}>
        Add To Cart

    </button>)
}
