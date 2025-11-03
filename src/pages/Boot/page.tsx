/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from 'react-router-dom';
import './css/styles.css';
import { useEffect } from 'react';
import { LoaderCircle } from 'lucide-react';

export default function Boot() {
    const navigate = useNavigate();

    const loadingTo = ()=>{
        navigate("/sign-in")
    }

    useEffect(()=>{
       setTimeout(loadingTo,2000) 
    },[])

    return (
        <div className="capa">
                <img src="/capa.png" alt="logo" className="w-1/2" />
                <LoaderCircle size={50} className='spin-animate' />
        </div>
    );
}