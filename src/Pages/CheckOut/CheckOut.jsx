import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const CheckOut = () => {
    const service = useLoaderData();
    const { _id, title, price, img } = service

    const { user } = useContext(AuthContext)


    const handleCheckOut = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const email = user?.email
        const date = form.date.value
        const phone = form.phone.value
        const message = form.message.value

        const booking = {
            customerName: name,
            email,
            date,
            phone,
            price,
            message,
            service: title,
            ServiceId: _id,
            img
        }

        fetch('https://car-doctor-server-three-beta.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    alert('Services book SuccessFully')
                }
            })

        console.log(booking)

        // console.log(name, email,date, phone)
    }

    return (
        <div className="">
            <h1 className="text-center text-3xl my-10">Book Services: {title}</h1>
            <div className="card-body bg-base-300 rounded-lg px-[100px] py-[100px] mb-[130px]">
                <form onSubmit={handleCheckOut} className="fieldset grid grid-cols-1 md:grid-cols-2 gap-6">

                    <input name="name" defaultValue={user?.name} type="name" className="input h-[50px] w-full border-none" placeholder="Name" />

                    <input name="date" type="date" className="input h-[50px] w-full border-none" />

                    <input name="phone" type="phone" className="input h-[50px] w-full border-none" placeholder="Your phone" />

                    <input name="email" defaultValue={user?.email} type="email" className="input h-[50px] w-full border-none" placeholder="your email" />

                    <div className="col-span-2">
                        <label className="textarea-md font-semibold">Due Amount</label>
                        <input name="dueAmount" type="text" className="input h-[50px] w-full border-none mt-2" defaultValue={price} />
                    </div>

                    <textarea name="message" id="input" className=" col-span-2 px-3 py-3 textarea-md border-none bg-white" placeholder="Your Message" rows="8"></textarea>

                    <input className="btn btn-neutral mt-4 col-span-2 bg-[#FF3811] border-none text-lg text-white h-[55px]" type="submit" value="Order Confirm" />
                </form>
            </div>
        </div>
    );
};

export default CheckOut;