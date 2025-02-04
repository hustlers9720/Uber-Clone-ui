import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-cover bg-bottom bg-[url('https://images.unsplash.com/photo-1587027106538-e3ff6bc1ada7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fHRyYWZmaWMlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D')] relative">

            <img className="w-20 md:w-24 lg:w-28 absolute top-5 left-5" src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png" alt="Uber Logo" />

            <div className="bg-white p-3 md:p-8 rounded-lg shadow-lg w-11/12 max-w-sm text-center absolute bottom-5 left-1/2 transform -translate-x-1/2">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Get Started with Uber</h2>
                <Link to={'/login'} className="flex items-center justify-center  w-full bg-black text-white py-3 rounded mt-4 hover:bg-gray-900 transition">Continue</Link>
            </div>
        </div>
    );
};

export default Home;
