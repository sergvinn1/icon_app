import React from 'react';
import { Modal, Box, Typography, Button, IconButton, TextField } from '@mui/material'; // Імпортуємо TextField
import CloseIcon from '@mui/icons-material/Close';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { editIcon } from '../../redux/actions/iconActions';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #800000',
  boxShadow: 24,
  p: 4,
};

const EditIconModal = ({ open, handleClose, icon }) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    iconNumber: Yup.string().required('Required'),
    cabinetNumber: Yup.string().required('Required'),
    additionalInfo: Yup.string(),
  });

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" component="h2">
            Редагувати ікону
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Formik
          initialValues={icon}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            dispatch(editIcon(values));
            resetForm();
            handleClose();
          }}
        >
          {() => (
            <Form>
              <Box sx={{ mb: 2 }}>
                <Field
                  name="name"
                  as={TextField}
                  fullWidth
                  variant="outlined"
                  label="Назва ікони"
                  helperText={<ErrorMessage name="name" />}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Field
                  name="iconNumber"
                  as={TextField}
                  fullWidth
                  variant="outlined"
                  label="Номер ікони"
                  helperText={<ErrorMessage name="iconNumber" />}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Field
                  name="cabinetNumber"
                  as={TextField}
                  fullWidth
                  variant="outlined"
                  label="Номер шафи"
                  helperText={<ErrorMessage name="cabinetNumber" />}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Field
                  name="additionalInfo"
                  as={TextField}
                  fullWidth
                  variant="outlined"
                  label="Додаткова інформація"
                  multiline
                  rows={4}
                  helperText={<ErrorMessage name="additionalInfo" />}
                />
              </Box>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Зберегти зміни
              </Button>
            </Form>
          )}
        </Formik>
        <Button onClick={handleClose} variant="contained" color="primary" sx={{ mt: 2 }}>
          Закрити
        </Button>
      </Box>
    </Modal>
  );
};

export default EditIconModal;
