import React from 'react';
import { useHistory } from 'react-router';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Api from '../../utils/Api';
import './Auth.css';

const validationSchema = yup.object({
  ssn: yup
    .string('Մուտքագրեք Ձեր ՀԾՀն')
    .min(10, 'ՀԾՀն պետք է պարունակի 10 թվանշան')
    .max(10, 'ՀԾՀն պետք է պարունակի 10 թվանշան')
    .required('ՀԾՀն պարտադիր է'),
  password: yup
    .string('Մուտքագրեք Ձեր գաղտնաբառը')
    .required('Գաղտնաբառը պարտադիր է'),
});

const Auth = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      ssn: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      Api.post('api/auth/signin/', values,
        (data) => {
          localStorage.setItem('token', data.accessToken);
          history.replace('/population');
        }, (error) => {
          alert('error :', error);
        });
    },
  });
  return (
    <div className="Auth">
      <Card className="FormCard">
        <Typography variant="h5" component="h2">
          Մուտք գործեք Ձեր հաշիվ
        </Typography>
        <form onSubmit={formik.handleSubmit} className="signInForm">
          <TextField
            fullWidth
            id="ssn"
            name="ssn"
            label="ՀԾՀ"
            value={formik.values.ssn}
            onChange={formik.handleChange}
            error={formik.touched.ssn && Boolean(formik.errors.ssn)}
            helperText={formik.touched.ssn && formik.errors.ssn}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Գաղտնաբառ"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            ՄՈՒՏՔ ԳՈՐԾԵԼ
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Auth;
