import React from 'react';

export const Pagination = ({perPage, total, incrementPage}) => {
    const pageNumber = []

    for (let i = 1; i <= Math.ceil(total / perPage); i++) {
        pageNumber.push(i);
    } 
    return(
        <nav className='mt-8'>
            <ul className='flex space-x-4 justify-center'>
                {pageNumber.map((i) => {
                    return(
                        <li key={i}>
                            <button onClick={() => incrementPage(i)} className='text-[#EA7C69] font-semibold'>{i}</button>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
