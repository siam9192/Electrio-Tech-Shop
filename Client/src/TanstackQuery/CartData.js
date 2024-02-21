import { useQuery } from "@tanstack/react-query";
import AxiosBase from "../Axios/AxiosBase";
import UserAuth from "../Authentication/UserAuth/UserAuth";

const CartData = () => {
    const {user} = UserAuth();

    const {data:cartItems=[],isLoading,refetch:cartRefetch} = useQuery({
        queryKey:['cart-items'],
        queryFn:async()=>{
            const res = await AxiosBase().get(`/get/product/cart/user?email=${user?.email||''}`)
             return res.data
        }
    })
    const totalItems = cartItems.length

    return {cartItems,totalItems,cartRefetch}
}

export default CartData;
