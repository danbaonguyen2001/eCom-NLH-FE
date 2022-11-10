import {
    userApiSlice
} from "./userApiSlice";
import {
    store
} from "../../redux/stores";
import {
    setUserInfos
} from "../auth/authSlice";

const {
    dispatch
} = store;
const userController = {
    getUser: async() => await dispatch(userApiSlice.endpoints.getUser.initiate()),
    updateUser: async(inputData) => {
        let result = {
            status: false,
            data: [],
        };
        console.log(inputData)
        const res = await dispatch(
            userApiSlice.endpoints.updateUser.initiate({
                ...inputData
            })
        );
        try {
            const {
                success,
                user: data
            } = res.data;
            console.log(data)
            if (success) {
                dispatch(setUserInfos({
                    name: data.name,
                    avatar: data.avatar,
                    gender: data.gender,
                    userId: data.id,
                    phone: data.phone,
                }))
                result.data = data;
                result.status = success;
            } else {
                throw Error("Cant update user info");
            }
        } catch (e) {
            console.log(e);
        }
        return result;
    },
    updateAvatar: async(inputData) => {
        let {
            formData,
            urlImg
        } = inputData;
        let result = {
            status: false,
            data: "",
        };
        const res = await dispatch(
            userApiSlice.endpoints.updateAvatar.initiate({
                formData
            })
        );
        try {
            let {
                status,
                data
            } = res.data;

            if (status) {
                dispatch(setUserInfos({
                    avatar: data
                }))
                result.data = data;
                result.status = status;
            } else {
                console.log("Cant update avatar");
                throw Error();
            }
        } catch (e) {
            console.log(e);
        }
        return result;
    },
    deleteAddressById: async({
        addressId
    }) => await dispatch(
        userApiSlice.endpoints.deleteAddressById.initiate({
            addressId
        })
    ),


};
export default userController;