import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { fetchModal, selectModal as modalSelector } from "../Store/modalSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #cdcdcd",
  boxShadow: 24,
  p: 4,
};

export default function ContentModal() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const modal = useSelector(modalSelector);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchModal());
  }, [dispatch]);

  console.log(modal);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {modal.map((elm) => (
              <React.Fragment key={elm.id}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                  className="p-2"
                >
                  {elm.title}
                </Typography>
                <img
                  className="w-[400px] md:w-[400px] lg:w-[400px] xl:w-[400px] h-[480px] object-cover"
                  src={elm.url}
                  alt={elm.title}
                />
              </React.Fragment>
            ))}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
