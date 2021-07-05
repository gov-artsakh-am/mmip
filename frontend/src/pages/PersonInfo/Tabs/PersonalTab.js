import { Grid, makeStyles, Typography } from '@material-ui/core';
import { useFormik } from 'formik';
import React from 'react';
import PersonInfoField from '../../../components/PersonInfoField/PersonInfoField';
import api from '../../../utils/Api';

const useStyles = makeStyles(() => ({
  fieldsGroupTitle: { fontSize: 20, fontWeight: 'bold', margin: '32px 0' },
}));

const divider = <div style={{ marginBottom: 16 }} />;

const PersonalTab = () => {
  const formik = useFormik({
    initialValues: {
      ssn: '46765062',
      communtiy: 'Հադրութ',
      registrationAddress: 'Հադրութի համայնք, Գյուղ Ծակուռի',
      idCard: '0365485696',
      birthday: '03.02.1999',
      citizenship: 'Լեռնային Ղարաբաղի Հանրապետույուն',
      residenceAddress: 'Ք․ Ստեփանակերտ, Ազատամարտիկներ 88',
      passport: 'AR1452415',
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {},
  });

  const classes = useStyles();

  return (
    <div>
      {divider}
      <Grid container spacing={4}>
        <Grid item md={6} lg={6} xl={6}>
          <PersonInfoField label="ՀԾՀ" value={formik.values.ssn} />
          {divider}
          <PersonInfoField label="Համայնք" value={formik.values.communtiy} />
          {divider}
          <PersonInfoField
            label="Գրանցման հասցե"
            value={formik.values.registrationAddress}
          />
          {divider}
          <PersonInfoField label="ID քարտ" value={formik.values.idCard} />
        </Grid>
        <Grid item md={6} lg={6} xl={6}>
          <PersonInfoField
            label="Ծննդյան ամսաթիվ"
            value={formik.values.birthday}
          />
          {divider}
          <PersonInfoField
            label="Քաղաքացիություն"
            value={formik.values.citizenship}
          />
          {divider}
          <PersonInfoField
            label="Բնակության հասցե"
            value={formik.values.residenceAddress}
          />
          {divider}
          <PersonInfoField label="Անձնագիր" value={formik.values.passport} />
        </Grid>
      </Grid>
      <Typography className={classes.fieldsGroupTitle}>Կոնտակտներ</Typography>
      <Grid container spacing={4}>
        <Grid item md={6} lg={6} xl={6}>
          <PersonInfoField
            label="Քաղաքային հեռախոսահամար"
            value={formik.values.ssn}
          />
          {divider}
          <PersonInfoField
            label="Հավելյալ հեռախոսահամար"
            value={formik.values.communtiy}
          />
          {divider}
          <PersonInfoField
            label="Facebook"
            value={formik.values.registrationAddress}
          />
        </Grid>
        <Grid item md={6} lg={6} xl={6}>
          <PersonInfoField
            label="Բջջային հեռախոսահամար"
            value={formik.values.birthday}
          />
          {divider}
          <PersonInfoField
            label="Էլ․ Հասցե"
            value={formik.values.citizenship}
          />
          {divider}
          <PersonInfoField
            label="Linkedin"
            value={formik.values.residenceAddress}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default PersonalTab;
