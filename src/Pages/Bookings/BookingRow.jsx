import PropTypes from 'prop-types';

const BookingRow = ({ booking, handleDelete,handleConfirm }) => {

    const { _id, img, price, date, service, status } = booking
    

    

    return (

        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle bg-[#444444] text-white">X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask h-28 rounded-md">
                            {
                                img && <img
                                    src={img}
                                    alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>

                </div>

            </td>
            <td>
                <div>
                    <div className="font-bold">{service}</div>

                </div>
            </td>
            <td>
                <span className="text-lg font-semibold">${price}</span>

            </td>
            <td>
                <span className="text-lg font-semibold">{date}</span>
            </td>
            <th>
                {
                    status == 'confirm' ? <button className="btn btn-ghost rounded-lg">Confirmed</button> : <button onClick={()=>handleConfirm(_id)} className="btn btn-ghost bg-[#FF3811] text-white rounded-lg">Pending</button>
                }
            </th>
        </tr>

    );
};

BookingRow.propTypes = {
    booking: PropTypes.object,
    handleDelete: PropTypes.func,
    handleConfirm: PropTypes.func,

}

export default BookingRow;

