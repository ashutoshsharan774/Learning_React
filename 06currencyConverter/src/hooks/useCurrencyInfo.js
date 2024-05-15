import { useEffect,useState } from "react";


function useCurrencyInfo(currency){
    const [data,setData]=useState({})//empty object daal dete h , if data fetch ni ho pa rha then atleast ek empty value toh rhegi such that loop lagao toh crash na kare

    //jab ye hook load hoga tab mai us api ko call krwao
    //useEffects can be used for mounting and unmounting effects
    // the code inside the useEffect hook will execute once immediately after the component is mounted. This is the mounting effect in action.

    useEffect(()=>{
        //can use variable to store api
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((response)=> response.json())
        .then((response) => setData(response[currency]))
        console.log(data);//to check ki data ke andar value ky aa rhi ha
    },[currency])//currency is our dependency array because useeffect se fetch data hm tb call krenge jab currency change ho , for eg: pahle usd phir inr
    console.log(data);
    return data
}
//since data return kr rhe iska matlab setdata ni kr pyenge lekin aisa ni ha isiliye ye ek custom hook ha 
//humne ky kara ek puri ki puri functionality design kri aur method ko hi return kr diya

export default useCurrencyInfo;

/*Declaring Effects: You define effects inside function components using the useEffect hook. You pass a function as the first argument, which represents the effect you want to perform.

Triggering Effects: By default, the effect runs after every render, including the initial render. However, you can control when the effect runs by providing a second argument—an array of dependencies. If any of the dependencies change between renders, the effect will re-run. If you provide an empty dependency array, the effect runs only once after the initial render, similar to componentDidMount in class components.

Cleaning Up Effects: If your effect involves any cleanup (like unsubscribing from a subscription or clearing a timer), you can return a function from the effect. This function will be called when the component unmounts or before the effect runs again due to a dependency change.

*/