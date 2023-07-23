import React, { useEffect, useState } from 'react'
import './Cursor.css'
import { motion } from "framer-motion";


const Cursor = ({ scaling }) => {

    const [outterCircle, setoutterCircle] = useState({ x: -45, y: -45 });
    const [innerCircle, setinnerCircle] = useState({ x: -45, y: -45 });

    useEffect(() => {
        const mousemove = (e) => {
            setoutterCircle({ x: e.clientX, y: e.clientY });
            setinnerCircle({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", mousemove);

        return () => {
            window.removeEventListener("mousemove", mousemove);
        };
    }, []);


    return (
        <div className='hidden bg-transparent md:flex absolute items-center justify-center'>
            
            <motion.div
                animate={{
                    x: innerCircle.x,
                    y: innerCircle.y,
                    transition: { type: "spring", stiffness:1000000, mass: 0.01 },

                }} 
                className='outer_circle'
                >
            </motion.div>
            <motion.div
                animate={{
                    x: outterCircle.x,
                    y: outterCircle.y,
                    transition: { type: "spring", stiffness:100, mass: 0.07 },
                }} 
                className='inner_circle absolute '   
                style={{ scale: scaling ? 0.1 : 1 }}>
            </motion.div>
        </div>
    )
}

export default Cursor