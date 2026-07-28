import mongoose from "mongoose";
//const url = "mongodb+srv://marcelosiedler:ifsul@ifsul.fify4.mongodb.net/"
const url = "mongodb+srv://siedler:123@202501.4vrdj.mongodb.net/?appName=202501"
const conexao = await mongoose.connect(url)

export default conexao