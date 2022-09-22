import { userApiSlice } from "./userApiSlice";
import { store } from "../../redux/stores";
import { setUserInfos } from "../auth/authSlice";

const { dispatch } = store;
const userController = {
    getUser: async() => {
        let result = {
            status: false,
            message: "",
            data: {},
        };
        const res = await dispatch(userApiSlice.endpoints.getUser.initiate());
        try {
            let { status, message, data } = res;
            if (status) {
                result.status = status;
                result.data = data;
                result.message = message;
            } else {
                console.log("Cant get user info");
                result.message("Authorization failed!!");

                throw Error();
            }
        } catch (e) {
            console.log(result.message);
            console.log(e);
        }
        return result;
    },
    updateUser: async(inputData) => {
        let result = {
            status: false,
            data: [],
        };
        const res = await dispatch(
            userApiSlice.endpoints.updateUser.initiate({...inputData })
        );
        try {
            const { status, data } = res.data;
            console.log(data)
            if (status) {
                dispatch(setUserInfos({
                    name: data.name,
                    avatar: data.avatar,
                    gender: data.gender,
                    userId: data.id,
                    phone: data.phone,
                }))
                result.data = data;
                result.status = status;
            } else {
                console.log("Cant update user info");
                throw Error();
            }
        } catch (e) {
            console.log(e);
        }
        return result;
    },
    updateAvatar: async(inputData) => {
        let { formData, urlImg } = inputData;
        let result = {
            status: false,
            data: "",
        };
        const res = await dispatch(
            userApiSlice.endpoints.updateAvatar.initiate({ formData })
        );
        try {
            let { status, data } = res.data;

            if (status) {
                dispatch(setUserInfos({ avatar: data }))
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
    deleteAddressById: async(inputData) => {
        const { addressId } = inputData;
        let result = {
            status: false,
        };
        const res = await dispatch(
            userApiSlice.endpoints.deleteAddressById.initiate({ addressId })
        );
        try {
            const { status } = res.data;
            if (status) {
                result.status = true;
            } else {
                console.log("Cant delete address");
                throw Error();
            }
        } catch (err) {
            console.log(err);
        }
        return result;
    },
};
export default userController;