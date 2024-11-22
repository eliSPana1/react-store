import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const OrdersCard = props =>{
    const {totalPrice, totalProducts  } = props
    
    return (
        <div className="flex justify-between items-center  border border-black p-4 w-80 rounded-lg mb-4">
            <div className="flex justify-between w-full">
                
                <p className=" flex flex-col ">
                    <span className="font-light">01.02.23</span>
                    <span  className="font-light"> {totalProducts} artículos </span>
                </p>
                <p className='flex justify-center items-center gap-2'>
                    <span className="font-medium text-2xl"> S/. {totalPrice} </span>
                    <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer"/>

                </p>
            </div>
        </div>
    )
}
// Validación de PropTypes
/* OrdersCard.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    
}; */
export default OrdersCard