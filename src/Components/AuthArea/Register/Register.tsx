import { useForm } from "react-hook-form";
import "./Register.css";
import UserModel from "../../../Models/UserModel";
import authService from "../../../Services/AuthService";
import { useNavigate } from "react-router-dom";
import notification from "../../../Utils/Notification";

function Register(): JSX.Element {
const {register, handleSubmit, formState} = useForm<UserModel>();
const navigate = useNavigate();

async function send(user:UserModel) {
    try{
        await authService.register(user);
        notification.success("Welcome!");
        navigate("/home")
    }catch(err: any){
        notification.error(err);
    }
}

    return (
        <div className="Register">
			<form onSubmit={handleSubmit(send)}>
                <h2>Register</h2>

                <label>First name: </label>
                <input type="text" {...register("firstName", UserModel.firstNameValidation)}/>
                <span className="err">{formState.errors?.firstName?.message}</span>

                <label>Last name: </label>
                <input type="text" {...register("lastName", UserModel.lastNameValidation)}/>
                <span className="err">{formState.errors?.lastName?.message}</span>

                <label>Email: </label>
                <input type="text" {...register("email", UserModel.emailValidation)}/>
                <span className="err">{formState.errors?.email?.message}</span>

                <label>Password: </label>
                <input type="text" {...register("password", UserModel.passwordValidation)}/>
                <span className="err">{formState.errors?.password?.message}</span>

                <button>Register</button>
            </form>
        </div>
    );
}

export default Register;
