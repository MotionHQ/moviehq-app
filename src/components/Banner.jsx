import React, { useEffect, useState, useCallback } from 'react'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

function Banner() {
    const [bannerList, setBannerList] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentImage, setCurrentImage] = useState(0)
    
    // Banner next/previous buttons

    const handleNext = useCallback(() => {
        if(currentImage < bannerList.length -1){
            setCurrentImage(preve => preve +1)
        }
    }, [currentImage, bannerList.length]);

    const handlePrevious = () => {
        if(currentImage > 0){
            setCurrentImage(preve => preve -1)
        }
    }

    // Auto rotate movie banners

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(currentImage < bannerList.length -1){
                handleNext()
            }else{
                setCurrentImage(0)
            }
        },5000)

        return()=>clearInterval(interval)
    },[bannerList, handleNext, currentImage])

    useEffect(() => {
        const getBanner = async () => {
            try {
                const response = await fetch("https://api.themoviedb.org/3/trending/all/week?api_key=1b436df3ff164d38c44400425306c9f5");
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setBannerList(data.results);
                console.log(data.results)
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        getBanner();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section className='w-full h-full'>
            <div className='flex min-h-full max-h-[95vh] overflow-hidden'>
                {bannerList.map((banner)=>{
                    return(
                        <div key={banner.id} className='min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all' style={{ transform : `translateX(-${currentImage * 100}%)` }}>
                            <div className='w-full h-full'>
                                <img key={banner.id} 
                                        src={`https://image.tmdb.org/t/p/original${banner.backdrop_path}`}
                                        alt={`Banner ${banner?.title || banner?.name}`}
                                        className='h-full w-full object-cover'
                                        />
                            </div>

                            {/* Button Next and Previous */}
                            <div className='absolute top-0 w-full h-full hidden items-center justify-between group-hover:lg:flex'>
                                <button onClick={handlePrevious} className='z-10 p-4 py-40 text-white hover:text-black hover:bg-gradient-to-r from-neon-yellow to-transparent'>
                                    <FaAngleLeft/>
                                </button>

                                <button onClick={handleNext} className='z-10 p-4 py-40 text-white hover:text-black hover:bg-gradient-to-l from-neon-yellow to-transparent'>
                                    <FaAngleRight/>
                                </button>
                            </div>

                            <div className='absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent'>
                            </div>

                            <div className='container mx-auto w-full absolute lg:left-10 bottom-10 max-w-3xl px-4'>
                                <h2 className='bannerTitles text-3xl md:text-5xl lg:text-8xl drop-shadow-2xl'>{banner.title || banner.name}</h2>
                                <p className='transducer text-ellipsis line-clamp-3 my-2 text-sm md:text-lg lg:text-2xl drop-shadow-2xl'>{banner.overview}</p>
                                <p className='bannerDate text-neon-blue md:text-xl lg:text-3xl drop-shadow-2xl'>{banner.release_date || banner.first_air_date}</p>
                                <div className='flex items-center gap-2 md:gap-3 md:text-base lg:gap-5 lg:text-xl text-sm drop-shadow-2xl'>
                                    <p>Rating : { Number(banner.vote_average).toFixed(1) }/10</p>
                                    <span>|</span>
                                    <p>Views : { Number(banner.popularity).toFixed(0) }+</p>
                                </div>
                                <button className='bannerButton bg-neon-red lg:px-10 lg:py-3 rounded mt-5 hover:text-neon-yellow hover:bg-gradient-to-r from-neon-red to-neon-blue shadow-md transition-all hover:scale-105
                                    px-4 py-1 md:px-7 md:py-2 drop-shadow-2xl
                                '>
                                    Play Now
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Banner