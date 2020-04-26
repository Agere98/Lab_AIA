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
        <div className="collection">
          <CollectionForm key="form" add={this.addItem} />
          {items}
        </div>
      </div>
    );
  }
}

export default Collection;
