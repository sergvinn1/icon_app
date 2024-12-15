import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { TextField, Button, Box } from '@mui/material';
import { addIcon } from '../../redux/actions/iconActions';

const AddIcon = ({ handleClose }) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    iconNumber: Yup.string().required('Required'),
    cabinetNumber: Yup.string().required('Required'),
    additionalInfo: Yup.string(),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        iconNumber: '',
        cabinetNumber: '',
        additionalInfo: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(addIcon(values));
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
            Додати ікону
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AddIcon;
