





const reducer=(state, action)=>{
    switch(action.type){
        case 'set_loading':
            return{
                ...state,
                isLoading:true,
            }
   
        case 'get_stories':
            return{
                ...state,
                isLoading: false,
                hits: action.payload.hits,
                nbPages :action.payload.nbPages
                
            }
        case "remove_post":
            return{
               ...state,
               hits: state.hits.filter((currElement)=>(
                currElement.objectID !== action.payload
               ))
            }

        case "search_Post":
            return{
                ...state, 
                query: action.payload
            }
        case "PREV_PAGE":
            let pageNum = state.page -1;
            if(pageNum <= 0){
                pageNum = 0
            } 
            return{
                 ...state,
                 page : pageNum
            }
        case "NEXT_PAGE":
            let pageNumInc = state.page +1 ;
            if(pageNumInc >= state.nbPages){
                pageNumInc = 0
            } 
            return{
                    ...state,
                    page : pageNumInc
                }
    }
    return reducer;
}

export default reducer; 



