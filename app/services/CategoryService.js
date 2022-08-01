import axios from "axios";

class CategoryService {
  constructor(dbName, accessToken) {
    this.dbName = dbName;
    this.accessToken = accessToken;
    this.collectionName = "category.json";
  }
  insertCategory = async (entity) => {
    const response = await axios.post(
      this.dbName + this.collectionName,
      entity
    );
    const insertId = await response.data.name;
    return insertId;
  };
}

export default CategoryService;
