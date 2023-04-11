import {motion} from "framer-motion"

export default function FadeIn(props){
    return(
        <motion.div initial="hidden" animate="visible" variants={{
            hidden:{
                scale:.8,
                opacity:0
            },
            visible:{
                scale:1,
                opacity:1,
                
            },
            transition:{
                delay:.4
            }
        }}>
            {props.children}
        </motion.div>
    )
}