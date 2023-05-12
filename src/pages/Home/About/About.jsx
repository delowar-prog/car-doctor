import AboutImg1 from '../../../assets/images/about_us/person.jpg'
import AboutImg2 from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero my-24">
            <div className="hero-content p-0 flex-col lg:flex-row gap-28">
                <div className='w-[100%] relative'>
                    <img src={AboutImg1} className="rounded-lg shadow-2xl" />
                    <img src={AboutImg2} className='absolute -bottom-1/4 -right-20 w-[50%] h-[250px] border-8 border-white rounded-lg'></img>
                </div>
                <div className='w-full px-8'>
                    <h5 className='text-[#FF3811] font-bold mb-3 text-lg'>About Us</h5>
                    <h1 className="text-3xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                    <button className="btn bg-[#FF3811] border-0 hover:bg-[#FF1111]">Get More Info</button>
                </div>
            </div>
        </div>
    )
}

export default About