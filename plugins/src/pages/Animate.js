import { motion } from "framer-motion"
import { useState } from "react"

const ani = {
    init: { opacity: 0, x: 500 },
    play: { opacity: 1, x: 0 }
}

const Animate = () => {
    return (
        <div>
            Animate
            <motion.p initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }}>01</motion.p>
            <motion.p
                initial='init'
                animate='play'
                variants={ani}
            >02</motion.p>

            <p>03</p>
        </div>
    )
}
export default Animate;