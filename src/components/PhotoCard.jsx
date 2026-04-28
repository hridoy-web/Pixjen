import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';

const PhotoCard = ({ photo }) => {

    const { title, imageUrl, likes, downloads, category } = photo;

    return (
        <Card className='border rounded-xl'>
            <div className='relative w-full aspect-square'>
                <Image
                    src={imageUrl}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className='object-cover rounded-xl shadow-lg'
                />
                <Chip size='sm' className='absolute top-2 right-2'>{category}</Chip>
            </div>

            <div className='mt-2'>
                <h2 className='text-xl font-semibold'>{title}</h2>
            </div>

            <div className='flex items-center gap-4 my-2'>
                <span className='flex items-center gap-1'><FcLike size={20} />{likes}</span>
                 <Separator orientation='vertical' />
                <span className='flex items-center gap-1'><FaDownload size={15} />{downloads}</span>
            </div>

            <Button variant="outline" className="w-full">View</Button>

        </Card>
    );
};

export default PhotoCard;