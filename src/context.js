import { useReducer, useEffect } from "react";
// import App from "./App";
import React from 'react';
import { useContext } from "react";
import reducer from './reducer';

const API = "http://hn.algolia.com/api/v1/search?";
const initialState = {
    isLoading:true,
    query: "css",
    nbPages: 0,
    page: 0,
    hits:[]
}

const AddContext = React.createContext();

const AppProvider =({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState);
   
    const fetchApiData = async (url) => {
        dispatch({
            type:'set_loading'
        })
        try{
            const res = await fetch(url)
            const data = await res.json();
            // console.log(data);
            dispatch({
                type:"get_stories",
                payload:{
                    hits: data.hits,
                    nbPages: data.nbPages
                }
            })
        } catch (error){
            console.log(error);
        }
    }

    // To remove post
    const removePost = (id)=>{
        dispatch({
            type: "remove_post",
            payload: id
        })
    }
    const searchPost = (searchPost)=>{
        dispatch({
            type:"search_Post",
            payload:searchPost, })
    }

    const getPrevPage = ()=>{
        dispatch({
            type:"PREV_PAGE"
        })
    }
    const getNextPage = ()=>{
        dispatch({
            type:"NEXT_PAGE"
        })
    }

    useEffect(() => {
       fetchApiData(`${API}query=${state.query}&page=${state.page}` );
    },[state.query, state.page])

    return(
        <AddContext.Provider value={{...state, removePost, searchPost,getPrevPage,getNextPage}}>
            {children}
        </AddContext.Provider>
    )
}

const useGlobalContext = ()=>{
    return useContext(AddContext)
}

export {AddContext, AppProvider, useGlobalContext}