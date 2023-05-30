import { FAIL, SUCCESS } from "../constants/restConstant";

//reducer function creation
                  //state to store payload,working action 
export const restReducer=(state={restList:[]},action)=>{
       
    switch(action.type){
        case SUCCESS:
            return{
                restList:action.payload
            }
        case FAIL:
            return{
                restList:action.payload
            }
        default:
            return state
    }
}