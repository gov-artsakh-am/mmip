import { Grid, makeStyles, Typography } from "@material-ui/core";
import { useFormik } from "formik";
import React from "react";
import PersonInfoField from "../../../components/PersonInfoField/PersonInfoField";
import api from "../../../utils/Api";

const useStyles = makeStyles(() => ({
  fieldsGroupTitle: { fontSize: 20, fontWeight: "bold", margin: "32px 0" },
}));

const divider = <div style={{ marginBottom: 16 }} />;

const PersonalTab = ({ editMode }) => {
  const formik = useFormik({
    initialValues: {
      ssn: "46765062",
      communtiy: "Հադրութ",
      registrationAddress: "Հադրութի համայնք, Գյուղ Ծակուռի",
      idCard: "0365485696",
      birthday: "03.02.1999",
      citizenship: "Լեռնային Ղարաբաղի Հանրապետույուն",
      residenceAddress: "Ք․ Ստեփանակերտ, Ազատամարտիկներ 88",
      passport: "AR1452415",
      lendline: "+374 - 77 - 584 -684",
      secondaryLendline: "+374 - 77 - 584 -684",
      facebook: "https://www.facebook.com/SargisHovhannisyan3/",
      phoneNumber: "+374 - 77 - 584 -684",
      email: "example@example.com",
      linkedin: "https://www.linkedin.com/SargisHovhannisyan3/",
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {},
  });

  const classes = useStyles();

  console.log("Personal tab edit mode is:  ", editMode);
  return (
    <div>
      {divider}
      <Grid container spacing={4}>
        <Grid item md={6} lg={6} xl={6}>
          <PersonInfoField
            label="ՀԾՀ"
            value={formik.values.ssn}
            editMode={editMode}
          />
          {divider}
          <PersonInfoField
            label="Համայնք"
            value={formik.values.communtiy}
            editMode={editMode}
          />
          {divider}
          <PersonInfoField
            label="Գրանցման հասցե"
            value={formik.values.registrationAddress}
            editMode={editMode}
          />
          {divider}
          <PersonInfoField
            label="ID քարտ"
            value={formik.values.idCard}
            editMode={editMode}
          />
        </Grid>
        <Grid item md={6} lg={6} xl={6}>
          <PersonInfoField
            label="Ծննդյան ամսաթիվ"
            value={formik.values.birthday}
            editMode={editMode}
          />
          {divider}
          <PersonInfoField
            label="Քաղաքացիություն"
            value={formik.values.citizenship}
            editMode={editMode}
          />
          {divider}
          <PersonInfoField
            label="Բնակության հասցե"
            value={formik.values.residenceAddress}
            editMode={editMode}
          />
          {divider}
          <PersonInfoField
            label="Անձնագիր"
            value={formik.values.passport}
            editMode={editMode}
          />
        </Grid>
      </Grid>
      <Typography className={classes.fieldsGroupTitle}>Կոնտակտներ</Typography>
      <Grid container spacing={4}>
        <Grid item md={6} lg={6} xl={6}>
          <PersonInfoField
            label="Քաղաքային հեռախոսահամար"
            value={formik.values.lendline}
            editMode={editMode}
          />
          {divider}
          <PersonInfoField
            label="Հավելյալ հեռախոսահամար"
            value={formik.values.secondaryLendline}
            editMode={editMode}
          />
          {divider}
          <PersonInfoField
            label="Facebook"
            value={formik.values.facebook}
            editMode={editMode}
          />
        </Grid>
        <Grid item md={6} lg={6} xl={6}>
          <PersonInfoField
            label="Բջջային հեռախոսահամար"
            value={formik.values.phoneNumber}
            editMode={editMode}
          />
          {divider}
          <PersonInfoField
            label="Էլ․ Հասցե"
            value={formik.values.email}
            editMode={editMode}
          />
          {divider}
          <PersonInfoField
            label="Linkedin"
            value={formik.values.linkedin}
            editMode={editMode}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default PersonalTab;
