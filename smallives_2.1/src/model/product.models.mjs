import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    fechaSeleccionada: {
        type: Date,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    }
});

export default mongoose.model("Product", productSchema);
