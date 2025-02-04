import React from 'react'

const CaptainDetailed = () => {
    return (
        <div>
            <div className='flex items-center justify-between border-b pb-4'>
                <div className='flex items-center gap-3'>
                    <img src='https://randomuser.me/api/portraits/men/45.jpg' className='h-14 w-14 rounded-full object-cover' alt='Profile' />
                    <h4 className='text-lg font-medium'>Harsh Patel</h4>
                </div>
                <div className='text-right'>
                    <h4 className='text-xl font-semibold'>$295.5</h4>
                    <p className='text-sm text-gray-600'>Earnings</p>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-4 text-center mb-15'>
                <div>
                    <i className='text-2xl ri-timer-line'></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
                <div>
                    <i className='text-2xl ri-speed-up-line'></i>
                    <h5 className='text-lg font-medium'>50</h5>
                    <p className='text-sm text-gray-600'>Trips Completed</p>
                </div>
                <div>
                    <i className='text-2xl ri-star-line'></i>
                    <h5 className='text-lg font-medium'>4.8</h5>
                    <p className='text-sm text-gray-600'>Rating</p>
                </div>
            </div>
        </div>
    )
}

export default CaptainDetailed
