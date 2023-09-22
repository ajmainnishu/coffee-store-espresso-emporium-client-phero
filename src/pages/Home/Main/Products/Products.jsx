import { Link } from "react-router-dom";
import { FaCoffee } from 'react-icons/fa';
import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
    const [coffees, setCoffees] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/coffees')
        .then(res => res.json())
        .then(data => setCoffees(data))
    }, [coffees])
    
    return (
        <div className="mt-32 bg-[url('./src/assets/images/products/products-bg.png')] bg-contain bg-no-repeat bg-top">
            <p className='text-center text-xl text-[#1B1A1A]'>--- Sip & Savor ---</p>
            <h2 className='text-[#331A15] font-rancho text-center text-6xl mt-2'>Our Popular Products</h2>
            <Link to='/add-coffees' className="flex justify-center mt-4 mb-12"><button className="btn capitalize font-rancho text-2xl rounded-md py-2 px-5 bg-[#E3B577] border-2 border-[#331A15] hover:bg-[#F5F4F1] hover:border-[#331A15] text-white"><span className="drop-shadow-md">Add Coffee</span><FaCoffee className="text-xl text-[#331A15]" /></button></Link>
            <div className="w-4/6 mx-auto grid grid-cols-2 gap-6">
                {
                    coffees.map(coffee => <Product key={coffee._id} coffee={coffee}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;