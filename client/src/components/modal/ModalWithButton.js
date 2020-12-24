import React, { useState } from "react";
import { Modal, Button } from "antd";

/**
 * Helper component for rendering a centered modal with a button
 * @param {String} buttonText text to display on button
 * @param {Boolean} parentVisible pass visibility from parent
 * @param {Function} setParentVisible pass visibility callback from parent
 * @param {Array} children to render in modal
 * @param {Boolean} danger whether or not to make button red
 */
const ModalWithButton = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        danger={props.danger}
        block
        onClick={() => props.setParentVisible(true) || setVisible(true)}
      >
        {props.buttonText}
      </Button>
      <Modal
        visible={
          props.parentVisible !== undefined ? props.parentVisible : visible
        }
        onCancel={() => props.setParentVisible(false) || setVisible(false)}
        centered={true}
        footer={null}
        closable={false}
        width={300}
        height="auto"
      >
        {props.children}
      </Modal>
    </>
  );
};
export default ModalWithButton;
