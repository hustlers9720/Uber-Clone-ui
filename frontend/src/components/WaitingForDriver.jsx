import React from 'react'

const WaitingForDriver = (props) => {
    return (
        <div>
            <h5 className="p-1 mb-2 text-center w-[93%] absolute top-0 right-0"

                onClick={() =>
                    props.setWaitingForDriver(false)
                }
            >
                <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
            </h5>

            <div className='flex items-center justify-between '>
                <img
                    className="h-25"
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA0QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwIDBAUGAQj/xAA3EAACAQMCBAMGBAQHAAAAAAAAAQIDBAUGERIhMUEHE1FSYXGBkbEiIzKhFCRCYhUWM1OCkpP/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACidWEItyktkajVWet9P4mreV3zXKEE+cpdkiHq3ijqN1pTpO0hBvlB0d+Xx3AmS61DYWr/NnU/8ANr7mFLWeMX+59CObDxauXJQzGMoV6b5N0Xs/o90b2NpgtZ4+tcaZrK3yFGO8reX4evTij2T580B061pjH7S+Jk0NVYqrtvX4fkQRcTuqFadC4dSlVpycZwa2cWvUs/xFynvCrJr07gfSVre213Hitq0Ki/tZkHzjjc/fWVeNahcVKdSD5Pf7ruTLovV1DUNv5VRxp31OO9Sn7Xvj7gOpB5v6jcD0AAAAAAAAAAAAAAAAAAAAALdZtQbi9mXC1c8qMnvskubA1GXsbHJWs4ZO2hXoxTk1KLk1y6rbnv8AAjrK+GVnfUnd6bveGMt+GlVfFHf0Uuq+D3OpxOvNO5fNVMRZX6d5CTjFSTiqjXXhffozpk2u4HzhmtP5XCVHHI2VWnHtUS4oP/kuRZwOZu8Dk6WQsJ7VKfWD5RqR7xfu+x9H3sak7eUaNKjVl7FbdRku6ZDPi7p68tbiwq6fwMowrU5O5naUpVOGe/6XtyXLvtzA6LWWPtdVYClqvBR3qxj/ADNJdWl13S/qj9iN4VPRnQ+Ed1qbDZudpfYm+ljLuKdfzKDXldlPZ/NNehu834bZGecr/wCEKkrGo+OEqs9uDfrH1e322KjhpxVX3S7MvY2/usdeU69tUlTr0pbxkjvLLwru207vJU4LuqVNyf77G9svDLCUnGV3K6upR9ufCvpFIitPl/EnUDx+Nr6exdrcyqVFSu4SjOc4TfTaMWtk9nz59NiVqLk6cHNbScU2vRmpxmFx2LW+OtaVu9tm4R2bXvZs41Wv1IC+CmM1LoVAAAAAAAAAAAAAAAAAAAAZqtSub09lPK/1P4OtwfHge37m0fQwMmq8qE40YqScWpLu0+wEdZHR+M/yBbzxNrToZCwtY3lrc047TdWEePr332OywGTjmMLY5GO38zQhU2Xq1z/cjnJ6ur6VwN5gr2yru7hSnRsqyX5dSDW0XL3xXX12I/0frXUGnYQt6FZVrCG/5FWO6XuT6oD6WPPgR1g/FjE3ajDK0qlhV6OUnxU/+y6fM7uyv7W9oxrWdenWpy6ShJNAZCpxUuLh577mRGotuZZTXZ8zjtYeJGF0pfQsrqnXubppSnTt9n5afTdtr6Ad4uFrkORodM6lxupscr7E11Up78M4NbTpy9JLsbqM4bfj4vkEXNuZTJ7dWU+ZT9mT+LPfOS/TCKCvYqTf4V8zJhJNdd9uphSqyl1fL3F61fKWwGSDxHoAAAAAAAAAAAAAAAAAolFMrAGtyGNtb+m6d3b06sX2nFM4zL+H1hV4pWtKFP8At2JEaTLU6a9EBAua0PO2b/LcTnIWOSwlw6+NuK9rP1oycd/iuj+Z9J3FtCpFxnCMl6NbnL5jTdrXT8qhNSfspbAR5hvFHKWHDTzFmrumtt6lH8E/p0f7G38MrPG5671BqO9taV1XuchOnT/iKam6dJbNLZ8k9mvoY2Z0XVjBz8nZesTXaKzENG5m4x2UkqFjkJKpTrS/TTqrk0/RNfYDdXtjb6E8QsZkMZFUMVm5O2ubeL2hCpyaaXbns16cyUeJEIeNGqLG6pYuxx1zTr17e4/iZypyTUNlsluu5v7LxjwVahGVzbZCjU25pUlNN+5pgShxI8cl6kbVPF7AxW9K0yVX3RoxX3kjBreLSqpqwwtbi7O4qJfstwJUlUSL9rP8LfZkLrU+oszWhxVVbUt9/LoJr6skjS9ze16cVctzUVzk+4HXQe5UW6XPryLgAAAAAAAAAAAAAAAAAAAAABS47lqVIvnmwGDUtVP+k0Gd0jjM3QdK/tIVE++2zXzOtcSlwQEJX3gvawm5WNapKPaE3vsYcfC+5g+GNOWy9xO7pIp8lAQpQ8M7jvS+vI3Nj4cqDTqKC+e5KXkoKkkByeO0laWu28eJrttsdJbWsKMYqEVFLokjLUF6FSigPIIrAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//2Q=="
                    alt="Vehicle"
                />
                <div className='text-right px-10'>
                    <h2 className='text-lg font-medium'>Sarthak</h2>
                    <h4 className='text-xl font-semibold'>MP04AB2563 </h4>
                    <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                </div>
            </div>

            <div className="flex justify-center">

            </div>

            {/* Ride details */}
            <div className="w-full mt-4 space-y-3">
                <div className="flex items-center gap-3   p-3 border-b-2">
                    <i className="ri-map-pin-fill text-lg"></i>
                    <div>
                        <h3 className="text-lg font-medium">562/11-A</h3>
                        <p className="text-sm text-gray-600">Karkadoma, Delhi</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 p-3 border-b-2">
                    <i className="ri-map-pin-user-line"></i>
                    <div>
                        <h3 className="text-lg font-medium">562/11-A</h3>
                        <p className="text-sm text-gray-600">Karkadoma, Delhi</p>
                    </div>
                </div>

                <div className="flex items-center gap-3  p-3 ">
                    <i className="ri-money-rupee-circle-fill"></i>
                    <div>
                        <h3 className="text-lg font-medium">$193</h3>
                        <p className="text-sm text-gray-600">Cash on Delivery</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default WaitingForDriver
