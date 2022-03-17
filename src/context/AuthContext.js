import createDataContext from './createDataContext';
import gfrsApi from '../api/gfrsApi';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authReducer = (state, action)=>{
    switch(action.type){
        case 'login': {
            return {...state, user: action.payload}
        }
        case 'sign_out':{
            return {...state, user: {}}
        }
        case 'local_signin':
            return {...state, user: action.payload}
        case 'loading':{
            return { ...state, isLoading: action.payload}
        }
        case 'add_error':
            return {...state, errorMessage: action.payload}
        
        case 'clear_error_message':
            return {...state, errorMessage: ''}
        default:
            return state
    }
}

const signin = dispatch => async({email, password}, callback)=>{
    try {
        dispatch({type: 'loading', payload: true})
        const response = await gfrsApi.post('/users/signin',{email, password})

        const user = response.data.user;
    
        user.token = user.tokens[((user.tokens).length)-1].token;
        delete user.tokens;

        AsyncStorage.setItem('GFRS_USER', JSON.stringify(user))
        dispatch({type: 'login', payload: user})

        dispatch({type: 'loading', payload: false})
        callback ? callback(): null;
    } catch (error) {
        dispatch({type: 'loading', payload: false})
        dispatch({type: 'add_error', payload: error.response.data.errorMessage})
    }
}
const setActivityIndicator = dispatch => (type)=>dispatch({type: 'loading', payload: type})
const throwError = dispatch => (error)=>dispatch({type: 'add_error', payload: error});
const clearErrorMessage = dispatch => ()=>dispatch({type: 'clear_error_message'});

const tryLocalSignin = dispatch => async({navigation})=>{
    
    const user = await AsyncStorage.getItem('GFRS_USER')
  
    if(user){
      dispatch({type: 'local_signin', payload: JSON.parse(user)})
      navigation.navigate("mainFlow")
    }else{
      navigation.navigate("Signin")
    }
  }

const signout = dispatch => async({navigation})=>{

    try {
        await AsyncStorage.removeItem('GFRS_USER')
        dispatch({type: 'sign_out'})
        navigation.navigate('Signin')

    } catch (error) {
        navigation.navigate('Signin')
    }
}
export const {Context, Provider} = createDataContext(
    authReducer,
    {
        signin, 
        tryLocalSignin,
        throwError, 
        clearErrorMessage, 
        setActivityIndicator,
        signout
    },
    {
        user: {},
        errorMessage: '', 
        isLoading: false
    }
)