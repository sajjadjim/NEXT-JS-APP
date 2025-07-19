import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'

export default function page({ params }) {
    const { id } = params;

    if (id === '5') {
        notFound()
    }

    return (
        <div>
            <p className='text-center text-2xl mt-10'>The params Value is : {id}</p>
            <Link className='px-2 py-1 rounded-2xl border-2 text-center' href={`/blogs`}>Back To Page</Link>
        </div>
    )
}
