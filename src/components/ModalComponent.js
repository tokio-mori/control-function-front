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
          モーダルを開く
        </button>

        <Modal isOpen={this.state.showModal} className="modal">
          <div class="modal-title">タイトル</div>
          <div class="modal-contents">ほげほげほげおほげおほげおへ</div>

          <button onClick={this.handleCloseModal} class="modal-bn">
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

export default ModalComponent;
