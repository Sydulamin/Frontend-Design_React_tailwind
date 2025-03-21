const List = () => {
    return (
        <div >
            <div className=" bg-white">
                <div className="max-w-[1100px] m-auto">
                    <ul className="flex justify-between p-5 ">
                        <div>
                            <li className="list-none font-bold justify-items-start text-black text-3xl">
                                <img className="w-10 ml-3" src="./Group_1.png" alt="" />
                            </li>
                            <li className="text-black font-bold font-inter">Creative</li>
                        </div>
                        <div className="flex pt-2 justify-center w-full">
                            <li className="list-none mx-3 font-inter text-[#5956E8]">Home</li>
                            <li className="list-none mx-3 font-inter text-black">About</li>
                            <li className="list-none mx-3 font-inter text-black">Service</li>
                            <li className="list-none mx-3 font-inter text-black">Blog</li>
                            <li className="list-none mx-3 font-inter text-black">Contacts</li>
                        </div>
                        <div>
                            <button className="bg-[#5956E8] mt-1 text-white  p-2 font-inter rounded-md whitespace-nowrap">Contact Us</button>
                        </div>

                    </ul>
                </div>
            </div>
            <div className="bg-[#5956E8] py-[120px]">
                <div className="max-w-[1100px] m-auto">
                    <div className="flex justify-between">
                        <div className="w-1/2">
                            <div className="w-[542px]">
                                <h1 className="text-2xl text-white text-[65px] font-inter font-bold  leading-[65px]">
                                    We Are Digital
                                    Product Design
                                    Agency
                                </h1>
                                <h3 className="pt-[70px] pb-[30px] font-inter text-white">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                </h3>
                                <button className=" bg-white mt-1 text-[#5956E8] font-inter text-sm p-2 rounded-md whitespace-nowrap">Get Started</button>
                            </div>
                        </div>
                        <div className="w-[400px] mr-6">
                            <img src="./Banner.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            c

            {/* ============= Work Protfolio section ========== */}

            <div className="max-w-[1100px] m-auto flex flex-wrap  justify-center items-center mt-[40px]">
                <div className="w-[542px] text-center">
                    <p className="font-inter font-bold text-gray-800 text-3xl">Our Work Protfolio</p>
                    <p className="font-inter text-gray-500 text-sm mt-4">
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form.
                    </p>
                </div>
            </div>

            <div className="max-w-[1100px] m-auto  flex justify-between flex-wrap mt-[20px] ">
                <div className="w-[23%] min-w-[150px] m-2 rounded-md overflow-hidden bg-white hover:shadow-lg transition ">
                    <img className="w-full h-auto object-cover" src="./src/assets/images/image1.png" alt="" />
                </div>
                <div className="w-[23%] min-w-[250px] m-2 rounded-md overflow-hidden bg-white hover:shadow-lg transition ">
                    <img className="w-full h-auto object-cover" src="./src/assets/images/image1.png" alt="" />
                </div>
                <div className="w-[23%] min-w-[250px] m-2 rounded-md overflow-hidden bg-white hover:shadow-lg transition ">
                    <img className="w-full h-auto object-cover" src="./src/assets/images/image1.png" alt="" />
                </div>
                <div className="w-[23%] min-w-[250px] m-2 rounded-md overflow-hidden bg-white hover:shadow-lg transition ">
                    <img className="w-full h-auto object-cover" src="./src/assets/images/image1.png" alt="" />
                </div>
                <div className="w-[23%] min-w-[250px] m-2 rounded-md overflow-hidden bg-white hover:shadow-lg transition ">
                    <img className="w-full h-auto object-cover" src="./src/assets/images/image1.png" alt="" />
                </div>
                <div className="w-[23%] min-w-[250px] m-2 rounded-md overflow-hidden bg-white hover:shadow-lg transition ">
                    <img className="w-full h-auto object-cover" src="./src/assets/images/image1.png" alt="" />
                </div>
                <div className="w-[23%] min-w-[250px] m-2 rounded-md overflow-hidden bg-white hover:shadow-lg transition ">
                    <img className="w-full h-auto object-cover" src="./src/assets/images/image1.png" alt="" />
                </div>
                <div className="w-[23%] min-w-[250px] m-2 rounded-md overflow-hidden bg-white hover:shadow-lg transition ">
                    <img className="w-full h-auto object-cover" src="./src/assets/images/image1.png" alt="" />
                </div>

            </div>

            {/* ================= Expart team ================ */}
            <div className="max-w-[1100px] m-auto flex flex-wrap  justify-center items-center mt-[30px]">
                <div className="w-[542px] text-center">
                    <p className="font-inter font-bold text-gray-800 text-3xl">Our Expert Team Member</p>
                    <p className="font-inter text-gray-500 text-sm mt-4">
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form.
                    </p>
                </div>
            </div>
            <div className="max-w-[1100px] m-auto flex justify-between flex-wrap mt-[20px]">
                <div className="w-[28%] min-w-[150px] h-[350px] relative rounded-md overflow-hidden bg-white hover:shadow-lg transition">
                    <img className="w-full h-full object-cover" src="./src/assets/images/image1.png" alt="" />
                    <img className="absolute bottom-0" src="./src/assets/images/1.png" alt="" />
                    <p className="absolute bottom-5 left-1/2 transform -translate-x-1/2 font-inter text-white text-lg font-bold">
                        Md Sydul Amin
                    </p>
                    <p className="absolute bottom-3 left-1/2 transform -translate-x-1/2 font-inter text-white text-sm leading-[10px]">
                        UI/UX Designer
                    </p>
                </div>
                <div className="w-[28%] min-w-[150px] h-[350px] relative rounded-md overflow-hidden bg-white hover:shadow-lg transition">
                    <img className="w-full h-full object-cover" src="./src/assets/images/image1.png" alt="" />
                    <img className="absolute bottom-0" src="./src/assets/images/1.png" alt="" />
                    <p className="absolute bottom-5 left-1/2 transform -translate-x-1/2 font-inter text-white text-lg font-bold">
                        Md Sydul Amin
                    </p>
                    <p className="absolute bottom-3 left-1/2 transform -translate-x-1/2 font-inter text-white text-sm leading-[10px]">
                        UI/UX Designer
                    </p>
                </div>
                <div className="w-[28%] min-w-[150px] h-[350px] relative rounded-md overflow-hidden bg-white hover:shadow-lg transition">
                    <img className="w-full h-full object-cover" src="./src/assets/images/image1.png" alt="" />
                    <img className="absolute bottom-0" src="./src/assets/images/1.png" alt="" />
                    <p className="absolute bottom-5 left-1/2 transform -translate-x-1/2 font-inter text-white text-lg font-bold">
                        Md Sydul Amin
                    </p>
                    <p className="absolute bottom-3 left-1/2 transform -translate-x-1/2 font-inter text-white text-sm leading-[10px]">
                        UI/UX Designer
                    </p>
                </div>
            </div>



        </div>


    )
}

export default List;