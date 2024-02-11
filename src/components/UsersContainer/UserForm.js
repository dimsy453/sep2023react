import {useForm} from "react-hook-form";
import {userServices} from "../../services/userServices";

const UserForm = ({setUsers}) => {
    const { register, handleSubmit} = useForm()

    const save= (user) => {
        userServices.create(user).then( ({data}) => setUsers(prev => [...prev,data]))
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={`name`} {...register(`name`)}/>
            <input type="text" placeholder={`username`} {...register(`username`)}/>
            <input type="text" placeholder={`email`} {...register(`email`)}/>
            <input type="text" placeholder={`street`} {...register(`address.street.`)}/>
            <input type="text" placeholder={`suite`} {...register(`address.suite`)}/>
            <input type="text" placeholder={`city`} {...register(`address.city`)}/>
            <input type="text" placeholder={`zipcode`} {...register(`address.zipcode`)}/>
            <input type="text" placeholder={`lat`} {...register(`address.geo.lat`)}/>
            <input type="text" placeholder={`lng`} {...register(`address.geo.lng`)}/>
            <input type="text" placeholder={`phone`} {...register(`phone`)}/>
            <input type="text" placeholder={`website`} {...register(`website`)}/>
            <input type="text" placeholder={`company_name`} {...register(`company_name`)}/>
            <input type="text" placeholder={`catchPhrase`} {...register(`catchPhrase`)}/>
            <input type="text" placeholder={`bs`} {...register(`bs`)}/>
            <button>Save</button>
        </form>
    );
};

export {UserForm}