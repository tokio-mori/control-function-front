import axios from "axios";
import React from "react";
import Modal from "react-modal";

class ModalComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOpenModal} class="bn3">
          {this.props.title}
        </button>

        <Modal isOpen={this.state.showModal} className="modal">
          <div class="modal-title">{this.props.title}</div>
          <div class="modal-contents">{this.props.explanation}</div>

          <button
            onClick={executeFeature.bind(this.props.featureName)}
            class="modal-bn"
          >
            実行
          </button>
          <button onClick={this.handleCloseModal} class="modal-bn">
            取消
          </button>
        </Modal>
      </div>
    );
  }
}

async function executeFeature(featureName) {
  const result = await axios.get(
    "http://localhost:8080/" + JSON.stringify(featureName)
  );
  console.log(result);
}

export default ModalComponent;
