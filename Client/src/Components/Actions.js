export const Actions = {
    getPrdt:(data)=>{
        return{
            type:'LOAD',
            data:data
        }
    },
    dec:()=>{
        return{
            type:'DECREMENT'
        }
    }
}
