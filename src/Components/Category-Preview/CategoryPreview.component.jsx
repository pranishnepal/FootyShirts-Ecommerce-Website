import CategoryPreviewItem from "../Category-Preview-Item/CategoryPreviewItem.component";
import "./CollectionPreview.styles.scss";

const CategoryPreview = ({ title, items }) => {
  return (
    <div className="category-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => {
            return index < 4;
          })
          .map((item) => {
            return <CategoryPreviewItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default CategoryPreview;
