import "./App.scss";
import { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

import Modal from "./component/Modal";
import Searchbar from "./component/Searchbar";
import ImageGallery from "./component/ImageGallery";
import Loader from "./component/Loader";
import Button from "./component/Button";

class App extends Component {
  state = {
    value: "",
    pictures: [],
    loading: false,
    showModal: false,
    contentModal: "",
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { value, page } = this.state;

    if (prevState.value !== value || prevState.page !== page) {
      this.setState((prevState) => ({
        page: value === prevState.value ? prevState.page : 1,
        loading: true,
      }));

      fetch(
        `https://pixabay.com/api/?key=24287584-f260c6215a8f38269d114f00b&&image_type=photo&orientation=horizontal&page=${page}&per_page=12&q=${value}`
      )
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            pictures:
              page === 1 ? data.hits : [...this.state.pictures, ...data.hits],
          });
          if (data.total === 0) {
            toast.warning(
              `oops, we didn't find any images on request ${value}`
            );
          }
        })
        .catch((error) => console.log(error))
        .finally(() => this.setState({ loading: false }));
    }
  }

  toggleModal = (largeImage) => {
    this.setState((state) => ({
      showModal: !state.showModal,
      contentModal: largeImage,
    }));
  };

  closeModal = () => {
    this.setState((state) => ({
      showModal: false,
      contentModal: "",
    }));
  };

  hendelFormSubmit = (value) => {
    this.setState({ value });
  };

  pagination = () => {
    this.setState((state) => ({ page: state.page + 1 }));
  };

  render() {
    const { pictures, loading, showModal, contentModal } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.hendelFormSubmit} />
        {pictures.length > 0 && (
          <ImageGallery pictures={pictures} onClick={this.toggleModal} />
        )}

        {loading && <Loader />}

        {pictures.length > 11 && <Button pagination={this.pagination} />}

        <ToastContainer theme="colored" autoClose={3000} />

        {showModal && (
          <Modal contentModal={contentModal} closeModal={this.toggleModal} />
        )}
      </>
    );
  }
}

export default App;
