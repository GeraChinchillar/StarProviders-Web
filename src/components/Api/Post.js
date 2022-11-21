
import axios from 'axios'

export async function postProduct(productData) {
    try{
        
        const url = 'https://startproviders.uc.r.appspot.com/api/product'

        const response = await axios.post(url,{
            name: productData.name,
            price: productData.price,
            description: productData.description,
            urlImage: productData.urlImage,
            categoryName: productData.categoryName,
            providerId: productData.providerId
        })
        return response
    }
    catch(e){
        console.log(e)
    }
}

export async function postManual(manualData) {
    try{
        
        const url = 'https://startproviders.uc.r.appspot.com/api/manual'

        console.log(manualData)

        const response = await axios.post(url,{
            name: manualData.name,
            urlImage: manualData.urlImage,
            description: manualData.description,
            steps: manualData.step,
            materials: manualData.materials,
            userId: manualData.userId,
            categoryName: manualData.categoryName
        })
        return response
    }
    catch(e){
        console.log(e)
    }
}