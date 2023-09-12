"use client"
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const PathnameComponent = () => {
  const [pathname, setPathname] = useState('');
  const currentPath = usePathname();
  useEffect(() => {
   

    // Récupérer le chemin sans le domaine et le port
    
    const relativePath = decodeURIComponent(currentPath).replaceAll('/', ' / ');

    setPathname(relativePath);
  }, []);

  return (
    <div className='pathname'>
     <span className=' text-stone-500'> Home </span> {pathname}
    </div>
  );
};

export default PathnameComponent;
