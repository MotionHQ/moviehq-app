import React, { useEffect, useState } from 'react'

function Banner() {
    const [bannerList, setBannerList] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getBanner = async () => {
            try {
                const response = await fetch("https://api.themoviedb.org/3/trending/all/week?api_key=1b436df3ff164d38c44400425306c9f5");
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setBannerList(data.results);
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
                        <div key={banner.id} className='min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative'>
                            <div className='w-full h-full'>
                                <img key={banner.id} 
                                        src={`https://image.tmdb.org/t/p/original${banner.backdrop_path}`}
                                        alt={`Banner ${banner.id}`}
                                        className='h-full w-full object-cover'
                                        />
                            </div>

                            {/* Button Next and Previous */}

                            <div className='absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent'>
                            </div>

                            <div className='container mx-auto w-full absolute lg:left-10 bottom-10 max-w-3xl px-4'>
                                <h2 className='bannerTitles text-4xl lg:text-8xl drop-shadow-2xl'>{banner.title}</h2>
                                <p className='bannerText text-ellipsis line-clamp-3 my-2 lg:text-2xl'>{banner.overview}</p>
                                <div className='flex items-center gap-4'>
                                    <p>Rating : { Number(banner.vote_average).toFixed(1) }+</p>
                                    <span>|</span>
                                    <p>Views : { Number(banner.popularity).toFixed(0) }+</p>
                                </div>
                                <button className='bannerButton bg-neon-red px-10 py-3 rounded mt-5 hover:text-neon-yellow hover:bg-gradient-to-r from-neon-red to-neon-blue shadow-md transition-all hover:scale-105'>
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