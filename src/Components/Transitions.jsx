import { motion } from 'framer-motion'
const Transitions = (OgComponent) => {
    return () => (
        <>
            {/* <motion.div
                className='bg-[#faa820] w-full h-full fixed top-0 left-0 z-50 origin-bottom'
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 4, ease: [0.22, 1, 0.36, 1] }}
            >
            </motion.div> */}
            <motion.div
                className='bg-[#faa820] w-full h-full fixed top-0 left-0 z-50 origin-top'
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 3.5, ease: [0.22, 1, 0.36, 1] }}
            ></motion.div>
            <OgComponent />
        </>
    )
}

export default Transitions