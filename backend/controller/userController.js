import User from "../model/userModel.js"

export const create = async(req, res) =>{
    try {
        
        const newUser = new User(req.body);
        const {email} = newUser;

        const userExist = await User.findOne({email})
        if (userExist) {
            return res.status(400).json({message: "User already exists!" });
        }

        const saveData = await newUser.save();
        res.status(200).json(saveData);



    } catch (error) {
        res.status(500).json({errorMessage:error.message})
    }
}

export const getAllUsers = async(req, res) =>{
    try {
        
       const userData = await User.find();
       if (!userData || userData.length === 0) {
            res.status(404).json({message: "User Data Not Found"})
       }
       res.status(200).json(userData);

    } catch (error) {
        res.status(500).json({errorMessage:error.message})
    }
}

export const getByUserID = async(req, res) =>{
    try {
        
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            res.status(404).json({message: "User Not Found"})
        }
        res.status(200).json(userExist);


    } catch (error) {
        res.status(500).json({errorMessage:error.message})
    }
}

export const update = async(req, res) => {
    try {
        
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            res.status(404).json({message: "User Not Found"})
        }

        const updateData = await User.findByIdAndUpdate(id, req.body, {
            new: true,
        })
        res.status(200).json(updateData)

    } catch (error) {
        res.status(500).json({errorMessage: error.message})
    }
}

export const deleteUser = async(req, res) => {
    try {
        
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            res.status(404).json({message: "User Not Found"})
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({message:"User been deleted successfully!"})
        
    } catch (error) {
        res.status(500).json({errorMessage: error.message})
    }
}

