import React, { useEffect, useContext} from 'react';
import { Context as AuthContext } from '../../context/AuthContext';


const ResolveScreen = ({navigation})=>{

    const {tryLocalSignin} = useContext(AuthContext);

    useEffect(()=>{
        tryLocalSignin({navigation})
    }, [])

    return null;
}

export default ResolveScreen;