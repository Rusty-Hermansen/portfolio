import image from "../background.jpg"
const Home = () =>{
    return(
        <main>
            <img src={image} alt="laptop" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-36 px-8 bg-black bg-opacity-75">
                <div>
                <h1 className="text-6xl text-white font-bold leading-none lg:leading-snug home-name">
                    Hi, I'm Rusty!
                </h1>
                <p className="text-yellow-600">I'm a software engineering major at Snow College with an interest in DevOps 
                and a desire to build excellent software. I'm excited to get out in the field and start learning and growing! </p>
               </div>
               
                
            </section>
           
        </main>
    )
}
export default Home;