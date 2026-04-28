import PhotoCard from "./PhotoCard";


const TopGeneration = async () => {

    const res = await fetch('https://pixjen.vercel.app/data.json')
    const photosData = await res.json()
    const photos = photosData.slice(0, 8)
    console.log(photos);

    return (
        <div>
            <h2 className="text-2xl font-bold my-4">Top Generations</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 ">
                {
                    photos.map(photo => <PhotoCard key={photo.id} photo={photo} /> )
                }
            </div>
        </div>
    );
};

export default TopGeneration;