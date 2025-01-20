
const Heading = ({ one, two }) => {

    return (
        <div className="w-full py-12">
            <div className="w-11/12 mx-auto">
                <h1 className="text-3xl md:text-5xl font-logoFont font-extrabold text-transparent bg-gradient-to-tr from-orange-500 to-fuchsia-500 text-center bg-clip-text w-fit mx-auto py-2">{one}</h1>
                <p className="text-gray-400 text-center md:w-2/3 lg:w-1/2 mx-auto">
                    {two}
                </p>
            </div>
        </div>
    );
};

export default Heading;