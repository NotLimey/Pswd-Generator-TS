import React from "react";
import DefaultHelmet from "@/Components/DefaultHelmet";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Generator from "@/Components/Generator";

const Home = () => {
    return (
        <React.Fragment>
            <DefaultHelmet 
                SubTitle="Generator"
            />
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="dark"
            />
            <h1 className="text-center">Password Generator</h1>
            <Generator />
        </React.Fragment>
    );
}

export default Home;