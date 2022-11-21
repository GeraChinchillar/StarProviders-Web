
import axios from 'axios'

export async function postProduct(productData) {
    try{
        console.log("post Product")
        console.log(productData)
        // const response = await axios({
        //     url: "",
        //     method: "POST",
        //     data: productData
        // })
        // return response
    }
    catch(e){
        console.log(e)
    }
}