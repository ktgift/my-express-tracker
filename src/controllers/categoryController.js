const { v4: uuidV4 } = require("uuid");
const { readCategory, writeCategory } = require("../dbs/fileService");
const { validateCategory } = require("../utils/validatior");

exports.getAllCategory = async (req, res, next) => {
  try {
    const categoryData = await readCategory();
    res.status(200).json({ category: categoryData });
  } catch (err) {
    next(err);
  }
};

exports.getCategoryById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const categoryData = await readCategory();
    const result = categoryData.find((item) => item.id === id);

    res.status(200).json({ category: result });
  } catch (err) {
    next(err);
  }
};

exports.createCategory = async (req, res, next) => {
  try {
    const { title, type = "expense" } = req.body;

    validateCategory(title, type);

    const category = { title, type: type.toUpperCase(), id: uuidV4() }; //type ควรจะเก็บให้เป็น style เดียวกัน เลย convert เป็นพิมพ์ใหญ่
    const categoryDatas = await readCategory();
    categoryDatas.unshift(category);
    await writeCategory(categoryDatas);

    res.status(200).json({ category });
  } catch (err) {
    next(err);
  }
};

exports.updateCategory = async (req, res, next) => {
  try {
    const { title, type } = req.body;
    const { id } = req.params;

    validateCategory(title, type);

    const data = await readCategory();
    const category = { title, type: type.toUpperCase(), id };
    const categories = data.map((item) => (item.id === id ? category : item));

    await writeCategory(categories);
    res.status(200).json({category: category});

  } catch (err) {
    next(err);
  }
};

exports.deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await readCategory();

    const category = data.filter(item => item.id !== id);
    await writeCategory(category);

    res.status(200).json({ message: 'delete success'})
  } catch (err) {
    next(err);
  }
};
