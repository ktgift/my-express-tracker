const { v4: uuidV4 } = require('uuid');
const { readTransaction } = require('../dbs/fileService');
const { validateTransaction } = require('../utils/validatior');

exports.getAllTransaction = async (req, res, next) => {
  try{

  } catch(err) {
    next(err);
  }
}

exports.getTransactionById = async (req, res, next) => {
  try{

  } catch(err) {
    next(err);
  }
}

exports.createTransaction = async (req, res, next) => {
  try{
    const { payee, amount, date, categoryId } = req.body;
    
    validateTransaction(payee, amount, date, categoryId);

    const transaction = { payee, amount, date, categoryId, id: uuidV4() };

    const data = await readTransaction();
    data.unshift(transaction);

    res.json({ transaction });
    
  } catch(err) {
    next(err);
  }
}

exports.updateTransaction = async (req, res, next) => {
  try{

  } catch(err) {
    next(err);
  }
}

exports.deleteTransaction = async (req, res, next) => {
  try{

  } catch(err) {
    next(err);
  }
}