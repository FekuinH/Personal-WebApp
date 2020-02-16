import jwtDecode from 'jwt-decode';



export function getAccesToken(){

    const accesToken = localStorage.getItem('accesToken');
    return (!accesToken || isExpired(accesToken) ) ? null : accesToken;
    
}


export function getRefreshToken(){
   
    const refreshToken = localStorage.getItem('refreshToken');
    return (!refreshToken || isExpired(refreshToken) ) ? null : refreshToken;
}


//return if a token is expired
function isExpired(token){
    const seconds = 60;
    const metaToken =jwtDecode(token);
    const {exp} = metaToken;
    const now = (Date.now() + seconds) / 1000;

    return now > (exp);
}

export function logOut(){
    localStorage.removeItem('accesToken');
    localStorage.removeItem('refreshToken');
}