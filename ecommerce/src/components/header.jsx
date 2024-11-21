// // // import { useState } from 'react';
// // import { Navbar, Dropdown, Button } from 'flowbite-react';

// // const Header = () => {
// //     return (
// //         <Navbar fluid={true} rounded={true} classNameName="bg-red-700 text-white">
// //             <Navbar.Brand href="/">
// //                 <span classNameName="text-2xl font-bold">LOGO</span>
// //             </Navbar.Brand>
// //             <div classNameName='flex items-center md:order-2 space-x-4 '>
// //                 <button type="button" classNameName="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
// //                     <svg classNameName="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
// //                         <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
// //                     </svg>
// //                     Buy now
// //                 </button>
// //             </div>
// //             <div classNameName="flex md:order-3">
// //                 <Button classNameName="bg-blue-500 hover:bg-blue-600 text-white font-semibold">
// //                     Logout
// //                 </Button>
// //                 <Navbar.Toggle />
// //             </div>
// //             <Navbar.Collapse>
// //                 <Navbar.Link href="/" classNameName="text-white hover:text-gray-200">
// //                     Home
// //                 </Navbar.Link>
// //                 <Navbar.Link href="/products" classNameName="text-white hover:text-gray-200">
// //                     Products
// //                 </Navbar.Link>
// //                 <Navbar.Link href="/new-arrivals" classNameName="text-white hover:text-gray-200">
// //                     New Arrivals
// //                 </Navbar.Link>
// //                 <Navbar.Link href="/more-info" classNameName="text-white hover:text-gray-200">
// //                     More Information
// //                 </Navbar.Link>
// //                 <Navbar.Link href="/postcode" classNameName="text-white hover:text-gray-200">
// //                     Check Your Postcode
// //                 </Navbar.Link>
// //             </Navbar.Collapse>
// //         </Navbar>
// //     );
// // };

// // export default Header;






// import { Button } from "flowbite-react";

// const Header = () => {
//     return (
//         <>
//             {/* Main Navigation Bar */}
//             <nav className="w-full bg-red-700 border-gray-200 dark:bg-gray-900">
//                 <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
//                     <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
//                         <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
//                         <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//                             Flowbite
//                         </span>
//                     </a>
//                     <div className="flex items-center space-x-6 rtl:space-x-reverse">
//                         <Button
//                             type="button"
//                             className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                         >
//                             <svg
//                                 className="w-3.5 h-3.5 me-2"
//                                 aria-hidden="true"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="currentColor"
//                                 viewBox="0 0 18 21"
//                             >
//                                 <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
//                             </svg>
//                             Cart
//                         </Button>
//                         <Button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold">
//                             Logout
//                         </Button>
//                     </div>
//                 </div>
//             </nav>

//             {/* Secondary Navigation Bar */}
//             <nav className="bg-red-200 dark:bg-gray-700">
//                 <div className="max-w-screen-xl px-4 py-3 mx-auto">
//                     <div className="flex items-center">
//                         <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
//                             <li>
//                                 <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">
//                                     Home
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#" className="text-gray-900 dark:text-white hover:underline">
//                                     Company
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#" className="text-gray-900 dark:text-white hover:underline">
//                                     Team
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#" className="text-gray-900 dark:text-white hover:underline">
//                                     Features
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// };

// export default Header;


import { Navbar, Button } from 'flowbite-react';

const Header = () => {
    return (
        <Navbar fluid={true}  className="bg-red-700 text-white ">
            <Navbar.Brand href="/">
                <span className="text-2xl font-bold">LOGO</span>
            </Navbar.Brand>

            <div className='flex items-center md:order-2 space-x-4'>
                {/* Cart Button */}
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                        <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                    </svg>
                    Cart
                </button>

                {/* Logout Button */}
                <Button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold ">
                    Logout
                </Button>
            </div>

            <Navbar.Collapse>
                <Navbar.Link href="/" className="text-white hover:text-gray-200">
                    Home
                </Navbar.Link>
                <Navbar.Link href="/products" className="text-white hover:text-gray-200">
                    Products
                </Navbar.Link>
                <Navbar.Link href="/new-arrivals" className="text-white hover:text-gray-200">
                    New Arrivals
                </Navbar.Link>
                <Navbar.Link href="/more-info" className="text-white hover:text-gray-200">
                    More Information
                </Navbar.Link>
                <Navbar.Link href="/postcode" className="text-white hover:text-gray-200">
                    Check Your Postcode
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;