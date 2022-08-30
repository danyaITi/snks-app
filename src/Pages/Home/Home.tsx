import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Brends from "../../Components/Brends/Brends";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Pagination from "../../Components/Pagination/Pagination";
import { MSnkCard } from "../../Components/SnkCard/SnkCard";
import { fetchSneakers } from "../../redux/api/snk.api";
import { setPageNumber, setStateFilters } from "../../redux/Fillter/slice";
import { RootState, useAppDispatch } from "../../redux/store";
import './Home.scss'
import { motion } from "framer-motion";
import Sort, { sortItems } from "../../Components/Sort/Sort";
import { useNavigate } from "react-router-dom";
import qs from "qs";

const Home: React.FC = () => {
    const items = useSelector((state:RootState)=> state.sneakers.items)
    const currentPage = useSelector((state:RootState)=> state.fillter.pageNumber)
    const snkPerPage = useSelector((state: RootState)=> state.fillter.snkPerPage)
    const active = useSelector((state: RootState)=> state.full.active)
    const selected = useSelector((state:RootState)=> state.fillter.item)
    const open = useSelector((state: RootState)=> state.fillter.open)
    const status = useSelector((state:RootState)=> state.sneakers.status)

    const isMounted = useRef(false);
    const searchParams = useRef(false);

    const [changedPage, setChangedPage] = useState(false)

    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const lastSnkIndex = currentPage * snkPerPage
    const firstSnkIndex = lastSnkIndex - snkPerPage 
    const currentSnk = items.slice(firstSnkIndex,lastSnkIndex)

    const changePage = (page:number) => {
        dispatch(setPageNumber(page))
        setChangedPage(true)
    }
    
    async function getSnk() {
        const sort = selected.sortProperty.replace("-", "");
        const order = selected.sortProperty.includes("-") ? "asc" : "desc";

        dispatch(fetchSneakers({currentPage,sort,order}))
        if(active){
            window.scrollTo(0, window.innerHeight*1.8);
        } else{
            window.scrollTo(0,0)
        }
        if(open){
            window.scrollTo(0, window.innerHeight*1.7);
        }
        if(changedPage){
            window.scrollTo(0, window.innerHeight*1.7);
        }
    }
    useEffect(() => {
        if (isMounted.current) {
          const queryString = qs.stringify({
            currentPage,
            selected
          });
          navigate(`?${queryString}`);
        }
        isMounted.current = true;
    }, [currentPage,selected]);
    
    useEffect(() => {
        if (window.location.search) {
          const params = qs.parse(
            window.location.search.substring(1)
          )
          const sort = sortItems.find(
                (obj) => obj.sortProperty === params.sort
            );
    
          dispatch(
            setStateFilters({
              ...params, 
              sort
            })
          );
        }
      }, []);

    useEffect(() => {
        if (!searchParams.current) {
                getSnk();
            }
            searchParams.current = false;
    }, [selected, currentPage]);

    const featureAnimation ={
        hidden: {
            x:-100,
            opacity:0
        },
        visible: (custom:number) =>({
            x:0,
            opacity:1,
            transition: {delay: custom * 0.3},
        }),
    }
    const textAnimation ={
        hidden: {
            x:-50,
            opacity:0
        },
        visible: (custom:number) =>({
            x:0,
            opacity:1,
            transition: {delay: custom * .4}
        }),
    }
 
    return(
        <>
            <Header/>
            <Brends/>
            <section className='body'>
                <div className="body-content">
                    <div className="body-cards-content">
                        <motion.h1 className="body-title" initial="hidden"  whileInView="visible" custom={1} variants={textAnimation} viewport={{once: true}}>Our Collection</motion.h1>
                        <div className="body-sort"><Sort/></div>
                        {status === 'Error' 
                        ? (<h1 style={{color: 'black'}}>Was Error...</h1>) 
                        : <>{status === 'Loading' 
                        ? (<div className="body-loader">Loading</div>) 
                        : <ul>
                            {currentSnk.map((snk,index)=>(
                                <MSnkCard key={snk.id} {...snk} initial="hidden" whileInView="visible" viewport={{amount:0.4, once: true}} whileHover={{ scale: 1.1 }} custom={index+.1} variants={featureAnimation}/>
                            ))}
                        </ul> }</>}
                        <motion.div className="body-paginate-content" initial="hidden"  whileInView="visible" custom={1} variants={textAnimation} viewport={{once: true}}>
                            <Pagination changePage={changePage} currentPage={currentPage} snkPerPage={snkPerPage} totalSnk={items.length} />
                        </motion.div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default Home