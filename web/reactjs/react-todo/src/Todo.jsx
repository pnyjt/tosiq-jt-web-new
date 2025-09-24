import React, { useState } from 'react'
import { FaRegTrashCan } from "react-icons/fa6";

const Todo = () => {

    const [ inputVal, setInputVal ] = useState("")
    const [ items, setItems ] = useState([])
    const addNewItem = () => {
        // console.log(inputVal);
        const myArr = [...items, inputVal]

        setItems(myArr)
        setInputVal("")

    }

    const removeItem = (key) => {
        // console.log(key)
        const oldarray = [...items];
        oldarray.splice(key, 1);

        setItems(oldarray);
    }

    return (
        <>
        <div className="grid place-items-center">
            <div className="mt-2 p-2 rounded bg-white">
                <div>
                    
                    <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)}
                     className='p-[2px] border border-gray-300 rounded'
                     placeholder='Enter new item' />
                    <button onClick={addNewItem}
                    className='ml-1 bg-amber-100 p-1 text-sm rounded'>Add Item</button>
                    
                    <hr className='mt-4'/>

                    <div>
                        {items.length > 0 ?
                        <ul>
                            {
                                items.map((item, i)=>{
                                    return (
                                        <li key={i}>
                                            <div className='flex justify-between p-1 my-1 rounded bg-amber-300'>
                                                <span>{item}</span>
                                                <button 
                                                onClick={() => removeItem(i)}
                                                className='cursor-pointer'>
                                                    <FaRegTrashCan />
                                                </button>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul> : "No items"
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Todo