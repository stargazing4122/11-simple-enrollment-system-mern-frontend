type ReqMethod =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'DELETE'


export const fetchWithoutToken = (endPoint: string, data?: any, method: ReqMethod = 'GET') => {

  const url: string = `${ process.env.REACT_APP_API}${endPoint}`;

  if( method === 'GET' ) {
    return fetch( url );
  } else {
    return fetch( url, {
      method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify( data ),
    });
  }

}


export const fetchWithToken = ( endPoint: string, data?: any, method: ReqMethod = 'GET') => {

  const url: string = `${ process.env.REACT_APP_API}${endPoint}`;
  const token: string = localStorage.getItem('token-enrollment-mern') || '';

  if( method === 'GET' ) {
    return fetch( url, {
      method,
      headers: {
        'x-token': token,
      },
    })
  } else {
    return fetch( url, {
      method,
      headers: {
        'Content-type': 'application/json',
        'x-token': token,
      },
      body: JSON.stringify( data ),
    })
  }

}