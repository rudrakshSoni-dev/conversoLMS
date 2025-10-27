import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
}

function CompanionCard({id, name, topic, subject, duration, color}:CompanionCardProps ) {
  return (
    <article className='companion-card mb-8' style={{backgroundColor: color}}>
        <div className="flex justify-between items-center">
            <div className='subject-badge'>{subject}</div>
            <button className='companion-bookmark'>
                <Image src="/icons/bookmark.svg" alt="Bookmark Icon" width={20} height={20} />
            </button>
        </div>
        <h2 className='text-2xl font-bold'>{name}</h2>
        <p className='text-sm'>{topic}</p>
        <div className='flex items-center'>
            <Image src="/icons/clock.svg" alt="Clock Icon" width={16} height={16} />
            <p className='text-sm ml-2'>{duration} mins</p>
            </div>

        <Link href={`/companions/${id}`} className='w-full'>
            <button className='btn-primary w-full justify-center'>Start Session</button>
        </Link>    
    </article>
  )
}

export default CompanionCard

