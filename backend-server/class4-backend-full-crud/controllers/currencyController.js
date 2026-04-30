import currency from "../models/currencyModel.js";


// for create currency
export const createCurrency = async (req, res) => {
  try {
    const clientData = req.body;

    // CHECK IF ALREADY EXIST
    const existCurrency = await currency.findOne({
      where: { code: clientData.code },
    });
    if (existCurrency) {
      return res.status(400).json({
        success: false,
        message: `This ${clientData.code} currency code already exist!`,
      });
    }

    // CREATE IF NOT EXIST
    const currencyData = await currency.create(clientData);
    return res.status(201).json({
      success: true,
      message: "currency successfully created",
      clientData: currencyData,
    });

    // CHECK IF ERROR FOUND
  } catch (error) {
    res.json({
      message: "internal server error",
      error: error.message,
    });
  }
};

// for get currency
export const getCurrency = async (req, res) => {
  try {
    const allCurrency = await currency.findAll();
    res.status(200).json({
      success: true,
      message: "Retrieve all currency successfully",
      data: allCurrency,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "network error",
      error: error.message,
    });
  }
};

// for delete currency
export const deleteCurrency = async (req, res) => {
  try {
    const currencyID = req.params.id;
    // currency is table name
    const existCurrency = await currency.findOne({ where: { id: currencyID } });
    console.log("exist currency", existCurrency);

    // IF currency ID NOT FOUND
    if (!existCurrency) {
      res.status(404).json({
        success: false,
        message: `user not found with this id ${existCurrency}`,
      });
    }
    // DELETE currency WITH MATCHING ID
    await existCurrency.destroy();

    // IF DELETE THAN SHOW A MESSAGE AND DELETED currency
    res.json({
      success: true,
      message: `currency deleted successfully with this ${currencyID} id `,
      data: existCurrency,
    });

    // IF ERROR THAN SHOW THE ERROR
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "network error",
      error: error.message,
    });
  }
};

// GET SINGLE currency
export const getSingleCurrency = async (req, res) => {
  try {
    const currencyID = req.params.id;
    // currency is table name
    const existCurrency = await currency.findByPk(currencyID);

    // IF currency ID NOT FOUND
    if (!existCurrency) {
      res.status(404).json({
        success: false,
        message: `user not found with this id ${existCurrency}`,
      });
    }

    // IF DELETE THAN SHOW A MESSAGE AND DELETED currency
    res.json({
      success: true,
      message: `get single currency successfully with this ${currencyID} id `,
      data: existCurrency,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "network error",
      error: error.message,
    });
  }
};

// UPDATE currency
export const updateCurrency = async (req, res) => {
  try {
    const currencyID = req.params.id;
    const updatedCurrency = req.body;

    // currency is table name
    const existCurrency = await currency.findByPk(currencyID);

    // IF currency ID NOT FOUND
    if (!existCurrency) {
      res.status(404).json({
        success: false,
        message: `user not found with this id ${existCurrency}`,
      });
    }
    const currencyData = await existCurrency.update(updatedCurrency);

    // IF DELETE THAN SHOW A MESSAGE AND DELETED currency
    res.json({
      success: true,
      message: `currency updated successfully `,
      data: currencyData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "network error",
      error: error.message,
    });
  }
};
