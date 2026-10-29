import Image from 'next/image'
import React from 'react'

const HeroTrustCard = ({blog}) => {
  const {category, title, excerpt, author, publishedAt, readTime, image, imageAlt, href, trustSignal} = blog;
  return (
    <div> 
      <div>
        <Image
          src={image}
          alt={imageAlt}
          width={300}
          height={200}
          className='object-cover w-full h-auto rounded-t-4xl'
        />

        <div className='flex flex-col gap-2 pb-6 px-6 bg-sky-100 rounded-b-4xl'>
          <h3 className='text-2xl font-medium text-gray-600'>{title}</h3>
          <p className=' my-4'>{excerpt}</p>

          <div className=''>
            <p className=' text-sm mt-2'>
              By {author} | {publishedAt} | {readTime}min read
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HeroTrustCard;