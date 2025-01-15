
const Heading = ({ one, two }) => {

    return (
        <div className="w-full py-14">
            <div className="w-11/12 mx-auto">
                <h1 className="text-3xl md:text-5xl font-logoFont font-extrabold text-transparent bg-gradient-to-tr from-orange-500 to-fuchsia-500 bg-clip-text w-fit mx-auto ">{one}</h1>
                <p className="text-gray-400 text-center">
                    "{two}"
                </p>
            </div>
        </div>
    );
};

export default Heading;