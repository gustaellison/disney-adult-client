import { useState } from "react";
import Client from "../assets/services/api";

const NewItem = ({ id }) => {
    const initialFormState = {
        title: '',
        description: '',
        image: '',
        price: 0,
    }

    const [form, setForm] = useState(initialFormState);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let newItem = {
                title: form.title,
                description: form.description,
                image: form.image,
                price: parseInt(form.price),
            }
            await Client.post(`/${id}`, newItem);
            setForm(initialFormState);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <form
            onSubmit={handleSubmit}
            className="newItemForm"
            >
                <div className="titleDiv formDiv">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        name="title"
                        placeholder='Enter Title'
                        onChange={handleChange}
                        value={form.title}
                    />
                </div>

                <div className="descriptionDiv formDiv">
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        name="description"
                        placeholder='Enter Description'
                        onChange={handleChange}
                        value={form.description}
                    />
                </div>

                <div className="imageDiv formDiv">
                    <label htmlFor="image">Image:</label>
                    <input
                        type="text"
                        name="image"
                        placeholder='Enter Image URL'
                        onChange={handleChange}
                        value={form.image}
                    />
                </div>

                <div className="priceDiv formDiv">
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        name="price"
                        placeholder='Enter Price'
                        onChange={handleChange}
                        value={form.price}
                    />
                </div>

                <button type="submit" className="formSubmit">Add</button>
            </form>
        </div>
    )
}

export default NewItem;