import { Link } from "react-router-dom";
import { FaCoffee } from 'react-icons/fa';

const Products = () => {
    return (
        <div className="pt-32">
            <p className='text-center text-xl text-[#1B1A1A]'>--- Sip & Savor ---</p>
            <h2 className='text-[#331A15] font-rancho text-center text-6xl mt-2'>Our Popular Products</h2>
            <Link className="flex justify-center mt-4 mb-12"><button className="btn capitalize font-rancho text-2xl rounded-md py-2 px-5 bg-[#E3B577] border-2 border-[#331A15] hover:bg-[#F5F4F1] hover:border-[#331A15] text-white"><span className="drop-shadow-md">Add Coffee</span><FaCoffee className="text-xl text-[#331A15]" /></button></Link>
        </div>
    );
};

export default Products;