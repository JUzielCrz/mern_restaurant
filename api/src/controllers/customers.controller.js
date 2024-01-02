import Customer from "../models/customer.model.js";

export const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCustomer = async (req, res) => {
  try {
    const { name, phone, address, firstVisit, observation, facture} = req.body;
    const newCustomer = new Customer({
        name, phone, address, firstVisit, observation, facture
    });
    await newCustomer.save();
    res.json(newCustomer);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCustomer = async (req, res) => {
  try {
    const deletedCustomer = await Customer.findByIdAndDelete(req.params.id);
    if (!deletedCustomer) return res.status(404).json({ message: "Customer no encontrado" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCustomer= async (req, res) => {
  try {
    const { name, phone, address, firstVisit, observation, facture } = req.body;
    const customerUpdated = await Customer.findOneAndUpdate(
      { _id: req.params.id },
      { name, phone, address, firstVisit, observation, facture},
      { new: true }
    );
    return res.json(customerUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message});
  }
};

export const getCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) return res.status(404).json({ message: "customer not found" });
    return res.json(customer);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};