import axios from 'axios';
getData => {
  const x = 'test';
    console.log(x);
}
export function loadData (){
  return (dispatch)=>{
    return axios.get('users').then((response)=>{
      dispatch(changeData(response.data))
    })
  }
}

export function changeData(newdata){
//  console.log(newdata);
  return{
    type:"CHANGE_DATA",
    newdata:newdata
  }
}
