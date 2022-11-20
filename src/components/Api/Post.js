
import axios from 'axios'

export async function PostProduct(productData) {
    try{
        const response = await axios({
            url: "",
            method: "POST",
            data: productData
        })
        return response
    }
    catch(e){
        console.log(e)
    }
}