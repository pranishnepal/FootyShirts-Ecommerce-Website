import CategoryPreview from "../Category-Preview/CategoryPreview.component";

const CategoryOverview = ({ storeData }) => {
  return storeData.map((item) => {
    return (
      <div className="category-overview">
        <CategoryPreview key={item.id} title={item.title} items={item.items} />
      </div>
    );
  });
};

export default CategoryOverview;
