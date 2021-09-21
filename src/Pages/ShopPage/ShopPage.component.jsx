import React from "react";
import { Route, useRouteMatch } from "react-router";
import CategoryOverview from "../../Components/CategoryOverview/CategoryOverview.component";
import Category from "../Category/Category.component";
import { MOCKED_DATA } from "./MockData";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      storeData: MOCKED_DATA,
    };
  }

  render() {
    return (
      <div>
        <Route
          exact
          path={`${this.props.match.path}`}
          component={() => (
            <CategoryOverview storeData={this.state.storeData} />
          )}
        />
        <Route
          path={`${this.props.match.path}/:categoryId`}
          component={Category}
        />
      </div>
    );
  }
}

export default ShopPage;
