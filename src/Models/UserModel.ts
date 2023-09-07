import { RegisterOptions } from "react-hook-form";

class UserModel {
    public id: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;
    public role: string // User/Admin

    public static firstNameValidation: RegisterOptions<UserModel, "firstName"> = {
        required: { value: true, message: "Missing first name." },
        minLength: { value: 2, message: "First name too short" },
        maxLength: { value: 30, message: "First name too long" }
    }

    public static lastNameValidation: RegisterOptions<UserModel, "lastName"> = {
        required: { value: true, message: "Missing last name." },
        minLength: { value: 2, message: "Last name too short" },
        maxLength: { value: 30, message: "Last name too long" }
    }

    public static emailValidation: RegisterOptions<UserModel, "email"> = {
        required: { value: true, message: "Missing email." },
        pattern: { value: /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/, message: "Invalid email" }
    }

    public static passwordValidation: RegisterOptions<UserModel, "password"> = {
        required: { value: true, message: "Missing password." },
        minLength: { value: 4, message: "Password too short" },
        maxLength: { value: 30, message: "Password too long" }
    }
}

export default UserModel;
