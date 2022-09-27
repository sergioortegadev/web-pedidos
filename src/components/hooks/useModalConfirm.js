import { useState } from "react";

export const useModalConfirm = (initialValue = false) => {
  const [isOpenConfirm, setIsOpenConfirm] = useState(initialValue);

  const openModalConfirm = () => setIsOpenConfirm(true);
  const closeModalConfirm = () => setIsOpenConfirm(false);

  return [isOpenConfirm, openModalConfirm, closeModalConfirm];
};
