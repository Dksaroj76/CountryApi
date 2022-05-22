import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Action';
import './Home.css'
import { Loading } from './Loader/Loading'

export const Home = () => {
    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => state.apiData);
    useEffect(() => {
        dispatch(getData());
    }, [dispatch]);

    const [searchTerm, setSearchTerm] = useState('')

    return <>
        {loading ? (<Loading />) : (
            <div className="flag">
                <div className="inputData">
                    <input type="text" placeholder="Search" onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }} />
                </div>
                <div className="displayData">
                    {
                        data && data.filter((item) => {
                            if (searchTerm === "") {
                                return "";
                            } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return item;
                            }
                        }).map(item => (
                            <div className='card'>
                                <img src={item.flag} alt={item.name} />
                                <div className="dataCard">
                                    <p>Country :  {item.name}</p>
                                    <p>Capital :  {item.capital}</p>
                                    <p>Native name : {item.nativeName}</p>
                                    <p>Population : {item.population}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )}
    </>
}
