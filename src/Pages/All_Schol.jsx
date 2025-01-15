import { FaSearch } from "react-icons/fa";
import S_Card from "../Utilities/S_Card";
import { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import errorImg from "../assets/images/rb_2506.png"

const All_Schol = () => {

    const [scholarship, setScholarship] = useState([])
    const [search, setSearch] = useState("")
    const axiosPublic = useAxiosPublic()
    console.log(search)
    useEffect(() => {
        axiosPublic.get(`/all_Scholarship?search=${search}`)
            .then(res => {
                const data = res.data;
                setScholarship(data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [search])

    return (
        <div className="w-full min-h-screen bg-orange-50">
            <div className="w-11/12 mx-auto py-10">
                <h1 className="text-3xl md:text-5xl mb-4 font-logoFont font-extrabold text-transparent bg-gradient-to-tr from-orange-500 to-fuchsia-500 bg-clip-text w-fit mx-auto ">All Scholarship</h1>
                {/* search btn */}
                <div className="w-full md:w-1/2 mx-auto p-1 rounded-full border border-orange-500 mb-10">
                    <div className="w-full flex justify-between items-center gap-1 flex-grow">
                        <div className="px-2"><FaSearch className="text-orange-500 "></FaSearch> </div>
                        <div className="flex-1">
                            <input
                                onChange={(e) => setSearch(e.target.value)}
                                type="text" className="w-full outline-none bg-transparent border-0" placeholder="Search Scholaship by university , country , scolarship name..." />
                        </div>
                        {/* btn */}
                        <div className="h-full flex justify-center items-center bg-orange-500 p-2 px-4 text-white rounded-full">
                            Search
                        </div>
                    </div>
                </div>
                {
                    scholarship.length == 0 ?
                        <div className="w-full h-full flex justify-center items-center">
                            <img className="w-full md:w-1/2 mx-auto" src={errorImg} alt="" />
                        </div> :
                        <div className="w-full md:grid md:grid-cols-2 lg:grid-cols-3   gap-5 space-y-5 md:space-y-0">
                            {
                                scholarship?.map((schol, idx) => <S_Card key={idx} data={schol}></S_Card>)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default All_Schol;