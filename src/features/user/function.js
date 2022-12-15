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
            if (success) {
                dispatch(setUserInfos({
                    name: data.name,
                    avatar: data.avatar.url,
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
    updateAvatar: async(formData) => {
        const res = dispatch(
            userApiSlice.endpoints.updateAvatar.initiate(
                formData
            )
        )
        res
            .then(result => {
                if (result.data.success) {
                    dispatch(setUserInfos({
                        avatar: result.data.avatar.url
                    }))
                }
            })
        return res
    },
    deleteAddressById: async({
        addressId
    }) => await dispatch(
        userApiSlice.endpoints.deleteAddressById.initiate({
            addressId
        })
    ),
    getAddressById: async({
        addressId
    }) => {
        return await dispatch(
            userApiSlice.endpoints.getAddressById.initiate({
                addressId
            })
        )
    },



};
export default userController;