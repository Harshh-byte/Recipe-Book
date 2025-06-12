import { RecipeContext } from "@/context/RecipeContext";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
    const navigate = useNavigate();
    const { data, setdata } = useContext(RecipeContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const SubmitHandler = (recipe) => {
        recipe.id = nanoid();
        const copydata = [...data, recipe];
        setdata(copydata);
        localStorage.setItem("recipes", JSON.stringify(copydata));
        toast.success("New recipe created!")
        reset();
        navigate("/recipes");
    }
    return (
        <div className="flex justify-center">
            <div className="w-full max-w-xl bg-gray-800/80 rounded-xl shadow-2xl p-8 mt-8">
                <h1 className="font-semibold text-3xl mb-8 text-white font-sans text-left">Let's cook something.</h1>
                <form className="font-sans" onSubmit={handleSubmit(SubmitHandler)}>
                    <input
                        className="block border-b outline-0 mt-10 py-8 w-[300px] bg-transparent text-white"
                        {...register("image", { required: "Image URL is required" })}
                        type="url"
                        placeholder="Enter Image URL"
                    />
                    {errors.image && (
                        <div className="flex items-center gap-1 py-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-red-300 w-4 h-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M15 9l-6 6" />
                                <path d="M9 9l6 6" />
                            </svg>
                            <small className="text-red-300">{errors.image.message}</small>
                        </div>
                    )}
                    <textarea maxLength={50} className="block border-b outline-0 mt-10 resize-none w-[300px] bg-transparent text-white" {...register("title", { required: "Recipe title is required" })} placeholder="Recipe Title"></textarea>
                    {errors.title && (
                        <div className="flex items-center gap-1 py-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-red-300 w-4 h-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M15 9l-6 6" />
                                <path d="M9 9l6 6" />
                            </svg>
                            <small className="text-red-300">{errors.title.message}</small>
                        </div>
                    )}
                    <textarea maxLength={200} className="block border-b outline-0 mt-10 w-[300px] rounded bg-transparent text-white" {...register("description", { required: "Recipe description is required" })} placeholder="Recipe Description"></textarea>
                    {errors.description && (
                        <div className="flex items-center gap-1 py-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-red-300 w-4 h-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M15 9l-6 6" />
                                <path d="M9 9l6 6" />
                            </svg>
                            <small className="text-red-300">{errors.description.message}</small>
                        </div>
                    )}
                    <textarea maxLength={300} className="block border-b outline-0 mt-10 w-[300px] bg-transparent text-white" {...register("ingredients", { required: "Ingredients are required" })} placeholder="Ingredients (comma-separated)"></textarea>
                    {errors.ingredients && (
                        <div className="flex items-center gap-1 py-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-red-300 w-4 h-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M15 9l-6 6" />
                                <path d="M9 9l6 6" />
                            </svg>
                            <small className="text-red-300">{errors.ingredients.message}</small>
                        </div>
                    )}
                    <textarea maxLength={50} className="block border-b outline-0 mt-10 resize-none w-[300px] bg-transparent text-white" {...register("chef")} placeholder="Chef's Name (optional)"></textarea>
                    <textarea {...register("preparation", { required: "Preparation steps are required" })} placeholder="Preparations (comma-separated)" className="block border-b outline-0 mt-10 w-[300px] bg-transparent text-white"></textarea>
                    {errors.preparation && (
                        <div className="flex items-center gap-1 py-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-red-300 w-4 h-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M15 9l-6 6" />
                                <path d="M9 9l6 6" />
                            </svg>
                            <small className="text-red-300">{errors.preparation.message}</small>
                        </div>
                    )}
                    <select
                        {...register("cuisine", { required: "Cuisine type is required" })}
                        className="w-full max-w-xs p-2 mt-10 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="">Select Cuisine</option>
                        <option value="italian">Italian</option>
                        <option value="indian">Indian</option>
                        <option value="chinese">Chinese</option>
                        <option value="mexican">Mexican</option>
                        <option value="french">French</option>
                        <option value="dessert">Dessert</option>
                        <option value="japanese">Japanese</option>
                        <option value="american">American</option>
                        <option value="thai">Thai</option>
                    </select>
                    {errors.cuisine && (
                        <div className="flex items-center gap-1 py-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-red-300 w-4 h-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M15 9l-6 6" />
                                <path d="M9 9l6 6" />
                            </svg>
                            <small className="text-red-300">{errors.cuisine.message}</small>
                        </div>
                    )}
                    <button className="block bg-[#3ABAB4] text-gray-900 mt-8 px-4 py-2 rounded font-semibold font-sans hover:bg-[#319e9a] transition">Save Recipe</button>
                </form>
            </div>
        </div>
    )
}

export default Create