import { motion } from 'framer-motion';

const Home = ({vars}) => {
    return (
        <motion.div 
        className='container'
        initial={vars.initial}
        animate={vars.in}
        exit={vars.out}>
            <h2>Home Page</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates numquam quisquam voluptatibus aperiam voluptatem, ad ex tempora pariatur nostrum quod facere ratione maxime iusto harum blanditiis accusantium est nesciunt ullam? Cupiditate similique natus corrupti, quibusdam rem perferendis modi, molestiae, magnam deleniti minima impedit obcaecati minus doloribus. Iure dicta possimus maxime!</p>
            <img className="home-pic" src="https://images.unsplash.com/photo-1533745848184-3db07256e163?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" alt="#"/>
        </motion.div>
    )
}

export default Home
