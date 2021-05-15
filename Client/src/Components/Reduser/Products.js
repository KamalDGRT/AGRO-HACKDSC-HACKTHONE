// import instance from '../assets/instances'

const Products = (state=[],action)=>{
    switch (action.type) {
        case 'LOAD':
                state = action.data.data
                return state
             
        
    
        default:
            return state;
    }
}

export default Products 