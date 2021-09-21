import React from "react";
import { useParams } from "react-router";
import { specificCollection } from "./CategoryPageUtils";
import CategoryPreviewItem from "../../Components/Category-Preview-Item/CategoryPreviewItem.component";
import "./Category.styles.scss";

const Category = () => {
  const { categoryId } = useParams();
  return (
    <div className="category-page">
      <h2 className="title">{categoryId.toUpperCase()}</h2>
      <div className="items">
        {specificCollection(categoryId).items.map((item) => {
          return <CategoryPreviewItem item={item} />;
        })}
      </div>
    </div>
  );
};

export default Category;
