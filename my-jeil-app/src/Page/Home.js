import React from 'react'
import Background from '../image/Background.svg'
import Navbar from '../Components/Navbar';

import ArticleForm from './ArticleForm';
import AuthorsForm from './AuthorsForm';
import FormTem from '../Components/FormTem';


function Home() {

    const BackgroundImage = {
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    return (



        <div className="bg-fixed min-w-screen min-h-screen" style={BackgroundImage}>
            {/* <div className='fixed'>
                <Navbar />
            </div> */}

            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-24">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <img className="h-25 w-25 mt-4" src="JEIL_logo.svg" alt="Logo" />
                            </div>
                            <nav className="ml-10 flex items-center space-x-4">
                                <a href="#" className="text-gray-900">Current</a>
                                <a href="#" className="text-gray-900">Archives</a>
                                <a href="#" className="text-gray-900">Announcements</a>
                                <a href="#" className="text-gray-900">Author Guidelines</a>
                                <a href="#" className="text-gray-900">About</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-12 auto-rows-auto gap-3 justify-center p-5">

                {/* main */}
                <div className='bg-white col-span-8 col-start-3 p-20 border-2 rounded-2xl shadow-10'>
                    <FormTem />
                </div>

                <div className='bg-white col-span-8 col-start-3 p-12 border-2 rounded-2xl shadow-10'>
                    <AuthorsForm />
                </div>

                <div className='bg-white col-span-8 col-start-3 p-12 border-2 rounded-2xl shadow-10'>

                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                        <div className="grid grid-cols-4 gap-4">

                            <div className="col-span-4">
                                <img src="JEIL_logo.svg" alt="Banner" className="rounded-xl shadow-xl" />
                            </div>

                            <div className="col-span-4 mt-52">
                                <div className="grid grid-cols-4 gap-4">
                                    <div className="bg-blue-900 p-4 rounded-xl shadow-xl text-center">
                                        <p className='text-white font-bold text-2xl'>บทความ</p>
                                    </div>
                                    <div className="bg-blue-900 p-4 rounded-xl shadow-xl text-center">
                                        <p className='text-white font-bold text-2xl'>การชำระเงิน</p>
                                    </div>
                                    <div className="bg-blue-900 p-4 rounded-xl shadow-xl text-center"></div>
                                    <div className="bg-blue-900 p-4 rounded-xl shadow-xl text-center"></div>

                                    <div className="bg-blue-900 p-4 rounded-xl shadow-xl text-center">
                                        <p className='text-white font-bold text-2xl'>บทความ</p>
                                    </div>
                                    <div className="bg-blue-900 p-4 rounded-xl shadow-xl text-center"></div>
                                    <div className="bg-blue-900 p-4 rounded-xl shadow-xl text-center"></div>
                                    <div className="bg-blue-900 p-4 rounded-xl shadow-xl text-center"></div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>




    )
}

export default Home