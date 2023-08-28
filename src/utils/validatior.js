const { validationError } = require("./error");

exports.validateCategory = (title, type) => {
  if (!title || !title.trim()) {
    throw new validationError("Title is required");
  }

  if (typeof title !== "string") {
    throw new validationError("Title is invalid");
  }

  if (!type) {
    throw new validationError("Type is require");
  }

  if (!["expense", "income"].includes(type.toLowerCase())) {
    throw new validationError("Type must be expense or income");
  }
};

exports.validateTransaction = (payee, amount, date, categoryId) => {
  if(!payee) {
    throw new validationError('payee is required');
  }
  
  if(typeof amount !== 'number') {
    throw new validationError('invalid amount');
  }

  if(amount <= 0) {
    throw new validationError('amount must be greater than 0');
  }

  if(date === undefined) {
    throw new validationError('date is required')
  }

  if(typeof date !== "string" || isNaN(new Date(date).getTime())) {
    throw new validationError('invalid date')
  }

  if(!categoryId) {
    throw new validationError('categoryId is required');
  }

  if(typeof categoryId !== "string") {
    throw new validationError('invalid categoryId');
  }
}