import userModel from "../model/user.model.js";

export const getUser = async (req, res) => {
  try {
    const users = await userModel.find();
    return res.render("users", { users });

    // res.status(200).json({
    //   success: true,
    //   message: "user data fatched",
    //   userdata,
    // });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const saveUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userdata = new userModel({
      name,
      email,
      password,
    });

    await userdata.save();

    res.redirect("/get-user");
    // res
    //   .status(200)
    //   .json({ success: true, message: "data insert successfully", userdata });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
     await userModel.findByIdAndUpdate(
      id,
      {
        name,
        email,
        password,
      },
      { new: true }
    );

    res.redirect("/get-user");
    // res
    //   .status(200)
    //   .json({ success: true, message: "data update successfully", userdata });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await userModel.findByIdAndDelete(id);
    res.redirect("/get-user");
    // res
    //   .status(200)
    //   .json({ success: true, message: "data delete successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    res.render("create-user");
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userdata = await userModel.findById(id);
    res.render("edit-user", { userdata });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
