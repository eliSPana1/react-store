import PropTypes from 'prop-types';
import { XMarkIcon } from "@heroicons/react/24/solid"

const OrderCard = props =>{
    const { id, title, imageUrl, price, handleDelete} = props
    return (
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20 shrink-0">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                </figure>
                <p className="text-sm font-light ">{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">{price}</p>
                <XMarkIcon
                    onClick={() => handleDelete(id) }
                    className="h-6 w-6 text-black cursor-pointer">
                </XMarkIcon>
            </div>
        </div>
    )
}
// Validación de PropTypes
OrderCard.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    handleDelete: PropTypes.func.isRequired, 
};
export default OrderCard