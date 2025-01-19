
const Nodatapage = ({ one }) => {
    return (
        <div className="w-full flex min-h-[50vh] justify-center p-4  flex-col items-center py-14">
            <div className="text-red-600 font-logoFont font-bold text-2xl md:text-4xl text-center py-4">
                {one}
            </div>
            <div className="">
                <img className="w-full md:w-1/3 mx-auto" src="https://i.ibb.co/4MZRmT0/rb-626.png" alt="" />
            </div>
        </div>
    );
};

export default Nodatapage;