import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import ConfirmationModal from "./ConfirmationModal";
import { closeModal } from "./modalsSlice";
 
export default function Modals() {
  //redux dispatch
  const dispatch = useDispatch();

  //name of the modal to open
  const open = useSelector((state) => state.modals.open);
  const modals = {
    confirmationModal: ConfirmationModal,
     
  };

  //if the modal is for editing or creating
  const modalProps = useSelector((state) => state.modals.modalProps);
  const close = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  const ModalComponent = useMemo(() => modals[open], [open]);
  return (
    <>
      {ModalComponent && (
        <ModalComponent
          open={true}
          {...modalProps}
          handleClose={() => {
            close();
          }}
        />
      )}
    </>
  );
}
