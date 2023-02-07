// actions
// import { logOut, setUserInfos } from "./authSlice";
// api
import {
    ErrorResponse
} from "../../utils/ErrorResponse";
import {
    cartApiSlice
} from "./cartApiSlice";
import {
    store
} from "../../redux/stores";
import {
    apiSlice
} from "../../apis/apiSlice";
import {
    toast
} from "react-toastify";
import {
    addToCart,
    decreaseQuantity,
    increaseQuantity,
    request,
    success,
    failure,
    setCurrentCart,
    setRender,
    finish
} from "./cartSlice";

const {
    dispatch
} = store;
//
const cartHandler = {
    // get Current Cart
    getCurrentCart: () => {
        dispatch(request())
        dispatch(cartApiSlice.endpoints.getCurrentCart.initiate({ cartGetId: "cartGet1552001" })).then(res => {
            if (res.error) {
                dispatch(failure({
                    message: res.error.data.message
                }))
                return false;
            }
            dispatch(success({
                message: res.data.message
            }))
            dispatch(setCurrentCart([...res.data.cart]))
            dispatch(setRender())
            return true
        }).catch(e => {
            return new ErrorResponse(e.message, 500)
        }).finally(() => dispatch(finish()))
        return false;
    },

    // Add item to cart
    addCart: async(inputData) => {
        let item = {
            product: inputData.product,
            option: inputData.option,
            color: inputData.color,
        };
        let quantity = inputData.quantity;

        return await dispatch(
            cartApiSlice.endpoints.addToCart.initiate({
                item,
                quantity,
            })
        );
    },

    // Update quantity
    updateQuantity: async({
            itemId,
            quantity
        }) =>
        await dispatch(
            cartApiSlice.endpoints.updateCart.initiate({
                itemId,
                quantity,
            }, {
                fixedCacheKey: "update-cart-quantity-key"
            })
        ),
    // OLD VERSION - DON'T REMOVE IT WITHOUT PERMISSION
    // // Remove item from cart
    // removeCart: async ({ productColorId }) => {
    //   let result = {
    //     status: false,
    //     message: "",
    //     data: [],
    //   };
    //   let response = await dispatch(
    //     cartApiSlice.endpoints.removeCart.initiate({
    //       productColorId,
    //     })
    //   );
    //   try {
    //     let { status, data, message } = response.data;
    //     if (status) {
    //       result.status = status;
    //       result.data = data;
    //       result.message = message;
    //     } else {
    //       console.log("Cant remove item");
    //     }
    //   } catch (e) {
    //     if (!e?.response) {
    //       console.log("No Server Response");
    //     } else if (e.response?.status === 400) {
    //       console.log("Missing Input");
    //     } else if (e.response?.status === 401) {
    //       console.log("Unauthorized");
    //     } else {
    //       console.log("Remove item from cart failed");
    //     }
    //   }
    //   return result;
    // },

    // increaseQuantity: async ({ productColorId }) => {
    //   let set = false;
    //   try {
    //     const res = await dispatch(
    //       cartApiSlice.endpoints.increaseQuantity.initiate({ productColorId })
    //     );
    //     const { status } = res.data;
    //     if (status) {
    //       set = true;
    //       dispatch(increaseQuantity({ id: productColorId }));
    //     } else {
    //       throw new Error();
    //     }
    //   } catch (e) {
    //     toast.error(`Lỗi hệ thống không thể tăng số lượng sản phấm lên`, {
    //       position: "top-right",
    //       autoClose: 5000,
    //       closeOnClick: true,
    //     });
    //     console.log(e);
    //   }
    //   return set;
    // },
    // decreaseQuantity: async ({ productColorId }) => {
    //   let set = false;
    //   try {
    //     const res = await dispatch(
    //       cartApiSlice.endpoints.decreaseQuantity.initiate({ productColorId })
    //     );
    //     const { status } = res.data;
    //     if (status) {
    //       set = true;
    //       dispatch(decreaseQuantity({ id: productColorId }));
    //     } else {
    //       throw new Error();
    //     }
    //   } catch (e) {
    //     toast.error(`Lỗi hệ thống không thể giảm số lượng sản phấm xuống`, {
    //       position: "top-right",
    //       autoClose: 5000,
    //       closeOnClick: true,
    //     });
    //     console.log(e);
    //   }
    //   return set;
    // },
    // handlerRemoveCartAll: async () => {
    //   let set = false;
    //   try {
    //     const res = await dispatch(
    //       cartApiSlice.endpoints.removeCartAll.initiate()
    //     );
    //     console.log(res);
    //     const { status } = res;
    //     set = status;
    //   } catch (e) {
    //     console.log(e);
    //   }
    //   return set;
    // },
};
export default cartHandler;