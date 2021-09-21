import React from "react";
import MenuItem from "../Menu-Item/MenuItem.component";
import "./Directory.styles.scss";

class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          title: "Hats",
          imageUrl: "https://i.ibb.co/3CC9LSd/cap1.jpg",
          id: 1,
          linkURL: "products/hats",
        },
        {
          title: "Classic Shirts",
          imageUrl: "https://i.ibb.co/zrrpMhf/classic-Shirt1.jpg",
          id: 2,
          linkURL: "products/shirts",
        },
        {
          title: "Jackets",
          imageUrl: "https://i.ibb.co/CQ4JGRH/track-Jacket1.jpg",
          id: 3,
          linkURL: "products/jackets",
        },
        {
          title: "Women",
          imageUrl: "https://i.ibb.co/dmNqfM2/women1.jpg",
          size: "large",
          id: 4,
          linkURL: "products/womens",
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/DGVB66j/men1.jpg",
          size: "large",
          id: 5,
          linkURL: "products/mens",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.data.map((data) => {
          return (
            <MenuItem
              key={data.id}
              title={data.title}
              imageURL={data.imageUrl}
              linkURL={data.linkURL}
            />
          );
        })}
      </div>
    );
  }
}

export default Directory;
