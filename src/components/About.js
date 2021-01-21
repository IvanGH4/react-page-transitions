import { motion } from 'framer-motion';

const About = ({vars}) => {
    return (
        <motion.div className='container'
        initial={vars.initial}
        animate={vars.in}
        exit={vars.out}
        variants={vars}>
            <h2>About</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates numquao luptatem, ad ex tempora pariatur nostrum quod facere ratione maxime iusto harum blanditiis accusantium est nesciunt ullam? Cupiditate similique natus corrupti, quibusdam rem perferendis modi, molestiae, magnam deleniti minima impedit obcaecati minus doloribus. Iure dicta possimus maxime!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates numquao luptatem, ad ex tempora pariatur nostrum quod facere ratione maxime iusto harum blanditiis accusantium est nesciunt ullam? Cupiditate similique natus corrupti, quibusdam rem perferendis modi, molestiae, magnam deleniti minima impedit obcaecati minus doloribus. Iure dicta possimus maxime!</p>
            <img className="about-pic" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" alt="#" />
        </motion.div>
    )
}

export default About
