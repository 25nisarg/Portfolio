import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'motion/react'

const Speech = () => {
    return (
        <motion.div animate={{opacity:[0,1]}} transition={{duration:2}} className='bubbleContainer'>
            <div className="bubble">
                <TypeAnimation
                    sequence={[
                        1000,
                        // Same substring at the start will only be typed out once, initially
                        'Crafting MERN applications.',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Python for backend & data.',
                        1000
                    ]}
                    wrapper="span"
                    speed={30}
                    deletionSpeed={70}
                    repeat={Infinity}
                />
            </div>
            <img src="./man.png" alt="" />
        </motion.div>
    )
}

export default Speech
