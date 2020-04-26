import React from "react";
import CollectionItem from "./CollectionItem";
import data from "../resources/collection.json";
import CollectionForm from "./CollectionForm";

class Collection extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      filter: "",
      orderBy: "name asc",
    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      items: data.items,
    });
  }

  addItem(item) {
    this.setState((prevState) => {
      item.id = Math.max(...prevState.items.map((i) => i.id)) + 1;
      return {
        items: [...prevState.items, item],
      };
    });
  }

  removeItem(id) {
    this.setState((prevState) => {
      return {
        items: prevState.items.filter((item) => item.id !== id),
      };
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const items = this.state.items
      .filter((item) =>
        item.name.toLowerCase().includes(this.state.filter.toLowerCase())
      )
      .sort((a, b) => {
        const aName = a.name.toLowerCase();
        const bName = b.name.toLowerCase();
        switch (this.state.orderBy) {
          case "name desc":
            return aName > bName ? -1 : aName < bName ? 1 : 0;
          case "rating asc":
            return a.rating - b.rating;
          case "rating desc":
            return b.rating - a.rating;
          default:
            return aName > bName ? 1 : aName < bName ? -1 : 0;
        }
      })
      .map((item) => (
        <CollectionItem key={item.id} item={item} remove={this.removeItem} />
      ));

    return (
      <div>
        <input
          name="filter"
          placeholder="Filter list..."
          value={this.state.filter}
          onChange={this.handleChange}
        />
        <label>Order by:</label>
        <select
          value={this.state.orderBy}
          onChange={this.handleChange}
          name="orderBy"
        >
          <option value="name asc">Name (ascending)</option>
          <option value="name desc">Name (descending)</option>
          <option value="rating asc">Rating (ascending)</option>
          <option value="rating desc">Rating (descending)</option>
        </select>
        <div className="collection">
          <CollectionForm key="form" add={this.addItem} />
          {items}
        </div>
      </div>
    );
  }
}

export default Collection;
