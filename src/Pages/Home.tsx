import React from "react";
import DefaultHelmet from "@/Components/DefaultHelmet";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Generator from "@/Components/Generator";

const Home = () => {
    return (
        <React.Fragment>
            <DefaultHelmet 
                SubTitle="Generator"
            />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <h1 className="text-center">Password Generator</h1>
            <Generator />
        </React.Fragment>
    );
}

export default Home;