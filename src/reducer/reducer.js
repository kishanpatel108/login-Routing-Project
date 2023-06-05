const initialData = {
    list:[],
    // updatevalue : {}
};

const ReLogReducer = (state = initialData , action) =>{
    switch(action.type){
        case "ADD_REG":
        console.log("action.payload",action.payload);
        console.log("state",state);
        const data =action.payload;// id,name,email,password object banavo tene jagaye data laye to pan chale 
        console.log("data",data);
        // return {
        //     ...state.list,
        //     list:[
        //         ...state.list,data
        //     ]
        // }
        return{
            ...state.list,
                list:[...state.list,data]
            
        }

        // case "COMPAREDATA":
     
        //     // const comdata = action.payload
        //     // console.log("comdata",comdata);
        // const comData = state.list.find((elem)=>elem.email === action.Eamil && elem.password === action.Password)
        // console.log("comData",comData); 
        // return{
        //     ...state,
        //     updatevalue:comData
        //     }
        default:return state
   }

}
export default ReLogReducer