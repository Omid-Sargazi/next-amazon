export type Product = {
    _id?:string,
    name:string,
    slug:string,
    image:string,
    banner?:string,
    price:number,
    brand:string,
    description:string,
    category:string,
    rating:string,
    numberReviews:number,
    countInStock:number,
    colors?:[],
    sizes?:[], // sizes and colors are list because they are optional
}
 