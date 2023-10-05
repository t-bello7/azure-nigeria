
const Sponsors = () => {
    return (
        <div className="container mx-auto max-w-[80%] my-5 grid justify-items-center">
            <h3 className="text-center font-clashDisplay font-bold text-xl md:text-[32px]"> Partners and Sponsors </h3>
            <p className="text-center text-sm font-montserrat mt-3">
            Getlinked Hackathon 1.0 is honored to have the following major <br />
    companies as its partners and sponsors
            </p>
            <div className="w-[80%] my-24 border-[1px] border-lightPurple aspect-[2/1] rounded grid grid-cols-3 gap-4 p-5 ">
                {/* {
                    PartnerData.map((item, index)=> (
                        <div className="relative" key={item.key}> 
                                <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                                    <img src={item.partnerLogoPath} />
                                </div>{
                                    index > 2 ?
                                    <div className='py-[0.1px] mx-auto font-bold border border-lightPurple w-1/2 bg-lightPurple md:py-[2px]'>
                                    </div>: ''
                                }
                                    
                        </div>
                    ))
                } */}
            </div>
        </div>
        )
    
}