import Button from '../atoms/Button'
const Jumbotron = () => {
    return (
        <div className="bg-jumbotronImg">        
            <div className="container mx-auto max-w-[80%] h-[100vh] m-6 space rounded-xl flex flex-col justify-around items-center shadow-2xl p-9">
            <h1 className="text-5xl font-[#adadad] text-center mt-[-20px]">
            Innovative Possibilities in Africa with
Artificial Intelligence| <span className='text-3xl '>27-28 October with over 50 sessions </span>
            </h1>
            <div>
                <div>
                    <p className='text-regular text-[22px]'>
                        Lagos, Nigeria | 10am African Time
                    </p>
                </div>
            </div>
            <Button name='Get your tickets' className={`m-2`}/>
        
            </div>
            </div>
        

    )
}

export default Jumbotron;