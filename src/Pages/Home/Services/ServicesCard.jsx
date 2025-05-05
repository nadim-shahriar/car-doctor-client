import { FaArrowRightLong } from "react-icons/fa6";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {

    const { _id, img, title, price } = service

    return (
        <div className="card bg-base-100 w-96 shadow-md">
            <figure className="px-6 pt-6">
                <img
                    src={img}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body px-6 ">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <div className="flex items-center">
                    <p className="text-[#FF3811] font-semibold text-xl">Price : ${price}</p>
                    <Link to={`/checkout/${_id}`} >
                        <button className="btn bg-base-100 border-none hover:bg-base-300 text-[#FF3811]"><FaArrowRightLong></FaArrowRightLong></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

ServicesCard.propTypes = {
    service: PropTypes.object,
}

export default ServicesCard;