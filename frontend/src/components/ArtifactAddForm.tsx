import React, { useState } from "react";
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";
import { saveAs } from "file-saver";

interface ArtifactImage {
    file: FileList | null;
}

interface ArtifactFormValues {
    artifactName: string;
    description: string;
    images: ArtifactImage[];
}

const ArtifactAddForm: React.FC = () => {
    const { register, handleSubmit, control, reset } = useForm<ArtifactFormValues>({
        defaultValues: {
            artifactName: "",
            description: "",
            images: [{ file: null }],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "images",
    });

    const [message, setMessage] = useState<string>("");

    const onSubmit: SubmitHandler<ArtifactFormValues> = async (data) => {
        try {
            // Prepare JSON data for artifacts
            const artifactData = {
                artifactName: data.artifactName,
                description: data.description,
                images: [],
            };

            // Prepare images to save (in Base64 format)
            const imagePromises = data.images.map((image, index) => {
                return new Promise<string>((resolve, reject) => {
                    if (image.file && image.file[0]) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                            resolve(reader.result as string); // Save as base64
                        };
                        reader.onerror = reject;
                        reader.readAsDataURL(image.file[0]);
                    } else {
                        resolve(""); // No image selected
                    }
                });
            });

            // Get Base64 data for all images
            const imageResults = await Promise.all(imagePromises);

            // Add images to artifact data
            artifactData.images = imageResults;

            // Save the JSON data (simulate file save by downloading it)
            const jsonBlob = new Blob([JSON.stringify(artifactData)], { type: "application/json" });
            saveAs(jsonBlob, "artifact_data.json");

            // Simulate saving images (trigger download)
            data.images.forEach((image, index) => {
                if (image.file && image.file[0]) {
                    const imageBlob = image.file[0];
                    saveAs(imageBlob, `artifact_image_${index + 1}.jpg`);
                }
            });

            setMessage("Artifact saved successfully!");
            reset(); // Reset form after submission
        } catch (error) {
            console.error("Error saving artifact:", error);
            setMessage("Failed to save artifact.");
        }
    };

    return (
        <div className="p-8 max-w-lg mx-auto bg-gray-100 shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Add Museum Artifact</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Artifact Name</label>
                    <input
                        type="text"
                        {...register("artifactName", { required: true })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        placeholder="Enter artifact name"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Description</label>
                    <textarea
                        {...register("description", { required: true })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        placeholder="Enter artifact description"
                    ></textarea>
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Images</label>
                    {fields.map((field, index) => (
                        <div key={field.id} className="flex items-center space-x-2 mb-2">
                            <input
                                type="file"
                                {...register(`images.${index}.file`, { required: true })}
                                className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
                            />
                            <button
                                type="button"
                                onClick={() => remove(index)}
                                className="text-red-500 hover:underline"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={() => append({ file: null })}
                        className="text-blue-500 hover:underline"
                    >
                        Add Image
                    </button>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                    Submit
                </button>
            </form>
            {message && <p className="mt-4 text-center text-lg">{message}</p>}
        </div>
    );
};

export default ArtifactAddForm;
