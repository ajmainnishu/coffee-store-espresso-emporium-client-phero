import { FaEye, FaPen, FaArchive } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Product = ({ coffee, handleDelete }) => {
    const { _id, name, chef, price, photo } = coffee;
    return (
        <div className="grid grid-cols-5 items-center py-7 pr-12 pl-7 bg-gray-100 rounded-xl">
            <img className='col-span-2' src={photo ? photo : 'Not Available'} alt="Coffe Image" />
            <div className="flex justify-between items-center col-span-3">
                <div className='flex flex-col gap-y-4'>
                    <p className="text-[#1B1A1A] font-semibold text-xl">Name: <span className="text-[#5C5B5B] font-normal">{name ? name : 'Not Available'}</span></p>
                    <p className="text-[#1B1A1A] font-semibold text-xl">Chef: <span className="text-[#5C5B5B] font-normal">{chef ? chef : 'Not Available'}</span></p>
                    <p className="text-[#1B1A1A] font-semibold text-xl">Price: <span className="text-[#5C5B5B] font-normal">{price ? price : 'Not Available'} Taka</span></p>
                </div>
                <div className='flex flex-col gap-y-4'>
                    <Link to={`/view-coffees/${_id}`} className='bg-[#D2B48C] rounded-md p-2.5'><FaEye className='text-white text-lg' /></Link>
                    <Link className='bg-[#3C393B] rounded-md p-2.5'><FaPen className='text-white text-lg' /></Link>
                    <Link onClick={() => handleDelete(_id)} className='bg-[#EA4744] rounded-md p-2.5'><FaArchive className='text-white text-lg' /></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;