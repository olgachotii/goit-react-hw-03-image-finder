import { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Searchbar.scss";
import { GoSearch } from "react-icons/go";

class Searchbar extends Component {
  state = {
    value: "",
  };

  hendleTextChange = (e) => {
    this.setState({ value: e.currentTarget.value.toLowerCase() });
  };

  hendleSubmit = (e) => {
    e.preventDefault();

    if (this.state.value.trim() === "") {
      return toast.warning("Please, enter a request");
    }
    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.hendleSubmit}>
          <button type="submit" className="SearchForm-button">
            <GoSearch />
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.hendleTextChange}
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
