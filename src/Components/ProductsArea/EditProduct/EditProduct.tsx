import "./EditProduct.css";
import { useForm } from "react-hook-form";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsService";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import notification from "../../../Utils/Notification";

function EditProduct(): JSX.Element {
    const { register, handleSubmit, formState, setValue } = useForm<ProductModel>();
    const navigate = useNavigate();
    const params = useParams<{ id: string }>();
    const [values, setValues] = useState<ProductModel>();

    useEffect(() => {
        const id = +params.id;
        productsService.getProduct(id)
            .then(product => {
                // setValue("name", product.name);
                setValue("price", product.price);
                setValue("stock", product.stock);
                setValue("id", product.id);
                setValues(product);
            })
            .catch(err => notification.error(err));
    }, [])

    async function send(product: ProductModel) {
        try {
            product.image = (product.image as unknown as FileList)[0];
            await productsService.updateProduct(product);
            notification.success('Product has been updated');
            navigate('/products');
        } catch (err: any) {
            notification.error(err);
        }
    }

    return (
        <div className="EditProduct">
            <form onSubmit={handleSubmit(send)}>
                <input type="hidden" {...register("id")} />

                <h2>Edit Product</h2>

                <label>Name: </label>
                <input type="text" {...register("name", ProductModel.nameValidation)} placeholder={values?.name} />
                <span className="err">{formState.errors?.name?.message}</span>

                <label>Price: </label>
                <input type="number" step="0.01" {...register("price", ProductModel.priceValidation)} />
                <span className="err">{formState.errors?.price?.message}</span>

                <label>Stock: </label>
                <input type="number" {...register("stock", ProductModel.stockValidation)} />
                <span className="err">{formState.errors?.stock?.message}</span>

                <img src={values?.imageUrl} />
                <input type="file" accept="image/*" {...register("image")} />
                <span className="err">{formState.errors?.image?.message}</span>

                <button>Update</button>
            </form>
        </div>
    );
}

export default EditProduct;
