import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import Img1 from '../../../assets/images/banner/1.jpg'
import Img2 from '../../../assets/images/banner/2.jpg'
import Img3 from '../../../assets/images/banner/3.jpg'
import Img4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={Img1} className="w-full" />
                <div className="absolute flex items-center gap-4 h-full text-white w-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='space-y-7 p-14  w-5/12'>
                        <h1 className='text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-error text-white mr-2">Discover More</button>
                        <button className="btn btn-outline btn-error text-white">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end right-14 bottom-14 gap-4">
                    <a href="#slide4" className="btn btn-circle opacity-60 border-0 hover:bg-red-500 hover:opacity-100"><BsArrowLeft className='text-xl text-white'></BsArrowLeft></a>
                    <a href="#slide2" className="btn btn-circle opacity-60 border-0 hover:bg-red-500 hover:opacity-100"><BsArrowRight className='text-xl text-white'></BsArrowRight></a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={Img2} className="w-full" />
                <div className="absolute flex items-center gap-4 h-full text-white w-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='space-y-7 p-14  w-5/12'>
                        <h1 className='text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-error text-white mr-2">Discover More</button>
                        <button className="btn btn-outline btn-error text-white">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 right-14 bottom-14 gap-4">
                    <a href="#slide1" className="btn btn-circle opacity-60 border-0 hover:bg-red-500 hover:opacity-100"><BsArrowLeft className='text-xl text-white'></BsArrowLeft></a>
                    <a href="#slide3" className="btn btn-circle opacity-60 border-0 hover:bg-red-500 hover:opacity-100"><BsArrowRight className='text-xl text-white'></BsArrowRight></a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={Img3} className="w-full" />
                <div className="absolute flex items-center gap-4 h-full text-white w-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='space-y-7 p-14  w-5/12'>
                        <h1 className='text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-error text-white mr-2">Discover More</button>
                        <button className="btn btn-outline btn-error text-white">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 right-14 bottom-14 gap-4">
                    <a href="#slide2" className="btn btn-circle opacity-60 border-0 hover:bg-red-500 hover:opacity-100"><BsArrowLeft className='text-xl text-white'></BsArrowLeft></a>
                    <a href="#slide4" className="btn btn-circle opacity-60 border-0 hover:bg-red-500 hover:opacity-100"><BsArrowRight className='text-xl text-white'></BsArrowRight></a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={Img4} className="w-full" />
                <div className="absolute flex items-center gap-4 h-full text-white w-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='space-y-7 p-14  w-5/12'>
                        <h1 className='text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-error text-white mr-2">Discover More</button>
                        <button className="btn btn-outline btn-error text-white">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 right-14 bottom-14 gap-4">
                <a href="#slide3" className="btn btn-circle opacity-60 border-0 hover:bg-red-500 hover:opacity-100"><BsArrowLeft className='text-xl text-white'></BsArrowLeft></a>
                <a href="#slide1" className="btn btn-circle opacity-60 border-0 hover:bg-red-500 hover:opacity-100"><BsArrowRight className='text-xl text-white'></BsArrowRight></a>
                </div>
            </div>
        </div>
    )
}

export default Banner