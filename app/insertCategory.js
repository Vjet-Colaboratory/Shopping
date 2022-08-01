import "regenerator-runtime/runtime.js";
import { FireBaseServices } from "./constants/envFirebase";
import Category from "./models/Category";
import CategoryService from "./services/CategoryService";

$(document).ready(function () {
  $("#save").on("click", () => {
    const categoryIdCtr = $("#categoryId");
    const name = $("#name").val();
    const cate = new Category(null, name);

    const categoryService = new CategoryService(
      FireBaseServices.RealtimeDB,
      "Token"
    );
    try {
      categoryService.insertCategory(cate).then((data) => {
        categoryIdCtr.val(data);
      });
    } catch (error) {
      console.log(error);
    }

    console.log("click");
    console.log(cate);
  });
});
