import React from 'react';
import { useRouter } from 'next/router';
import AppBar from '@/components/AppBar';
import SearchAdvice from '@/components/SearchAdvice';
import SearchResultList from '@/components/SearchResultList';
import BoxLayout from '@/components/BoxLayout';
import MovieItem from '@/components/MovieItem';
import MovieDetailBox from '@/components/MovieDetailBox';
import './search.less';

const SearchPage = ()=>{

    const router = useRouter();
    console.log(router.query.key);

    return (
        <div className="search-page">
            <div style={{position:"sticky",top:0}}>
                <AppBar/>
            </div>
            <div className="search-content">
                <div className="search-content-main">
                    <SearchAdvice/>
                    <SearchResultList/>
                </div>
                <div className="search-content-sidebar">
                    <MovieDetailBox/>
                    <BoxLayout style={{position:"sticky",top:130}}  title={"新片速递"}>
                        <MovieItem/>
                        <MovieItem/>
                        <MovieItem/>
                        <MovieItem/>
                    </BoxLayout>
                </div>
            </div>
        </div>
    );

};

export default SearchPage;