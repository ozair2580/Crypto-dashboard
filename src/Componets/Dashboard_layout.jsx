import { Outlet } from 'react-router-dom';
import SideNav from './SideNav';
import TopNav from './TopNav';
const Dashboard_layout = ({children}) => {
    return (
        <div className="flex h-[900px] w-[1440px]">
            <SideNav />
            <div className='flex flex-col'>
            <TopNav />
             <div className='bg-[#EEEEF4] h-[836px] p-6'>
               <Outlet/>
            
             </div>
            </div>
           

        </div>
    );
};

export default Dashboard_layout;