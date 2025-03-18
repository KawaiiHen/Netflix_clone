import React from 'react';
import { useAuthStore } from '../store/authUser';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Profile = () => {
    const { user } = useAuthStore();

    return (
        <div className='bg-black min-h-screen text-white flex flex-col'>
            <Navbar />
            <div className='flex-grow container mx-auto px-4 py-8'>
                <h1 className='text-2xl font-bold mb-4'>Profile</h1>
                <div className='flex flex-col items-center'>
                    <img src={user.image} alt='Avatar' className='h-32 rounded-full mb-4' />
                    <p className='text-lg'><strong>Username:</strong> {user.username}</p>
                    <p className='text-lg'><strong>Email:</strong> {user.email}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;