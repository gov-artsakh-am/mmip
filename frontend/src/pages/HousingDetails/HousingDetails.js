import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from "react-router";

import './HousingDetails.css'
import api from '../../utils/Api';

const HousingDetails = ({ match: { params: { housingID: id } = {} } = {} }) => {

  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});
  const history = useHistory();

  useEffect(() => {
    api.get('api/main/', {
      table: `Բնակարան/${id}`, agregations: [{
        field: 'Կոորդինատներ', table: 'Կոորդինատներ'
      }, {
        field: 'Ընտանիք', table: 'Ընտանիք'
      }]
    }, (data) => {
      setDetail(data.fields);
      setLoading(false);
    });

  }, [id]);
  const onBackClick = () => {
    history.push("/housing/");
  };
  if (loading) {
    return 'Loading...';
  }
  return <div className="HousingDetails">
    <Card className="DetailsCard">
      <div className="CardHeader">
        <IconButton aria-label="delete" onClick={onBackClick}>
          <ArrowBackIosIcon />
        </IconButton>
        <Typography variant="h4" component="h2">
          Բնակ Ֆոնդ
        </Typography>
      </div>
      <div className="CardContent">
        <div className="CardCol">
          <div className="CardColItem">
            <Typography className="Bold" component="h3">
              Կոորդինատներ
            </Typography>
            <Typography component="span">
              {detail['Կոորդինատներ']?(detail['Կոորդինատներ'][0]['Երկայնություն'] + " - " + detail['Կոորդինատներ'][0]['Լայնություն']):""}
            </Typography>
          </div>
          <div className="CardColItem">
            <Typography className="Bold" component="h3">
              Գույքի տեսակ
            </Typography>
            <Typography component="span">
              {detail['Տիպ']}
            </Typography>
          </div>
          <div className="CardColItem">
            <Typography className="Bold" component="h3">
              Կառույցի տեսակ
            </Typography>
            <Typography component="span">
              {detail['Շինության տեսակ']}
            </Typography>
          </div>
          <div className="CardColItem">
            <Typography className="Bold" component="h3">
              Տարածաշրջան
            </Typography>
            <Typography component="span">
              {detail['Տարածաշրջան']}
            </Typography>
          </div>
          <div className="CardColItem">
            <Typography className="Bold" component="h3">
              Համայնք
            </Typography>
            <Typography component="span">
              {detail['Համայնք']}
            </Typography>
          </div>
          <div className="CardColItem">
            <Typography className="Bold" component="h3">
              Սենյակներ
            </Typography>
            <Typography component="span">
              {detail['Սենյակների քանակ']}
            </Typography>
          </div>
          <div className="CardColItem">
            <Typography className="Bold" component="h3">
              Սանհանգույց
            </Typography>
            <Typography component="span">
              {detail['Սանհանգույց']}
            </Typography>
          </div>
        </div>

        <div className="CardCol">
          <div className="CardColItem">
            <Typography className="Bold" component="h3">
              Ընդհանուր մակերես
            </Typography>
            <Typography component="span">
              {detail['Տարածք']}
            </Typography>
          </div>
          <div className="CardColItem">
            <Typography className="Bold" component="h3">
              Բնակելի մակերես
            </Typography>
            <Typography component="span">
              {detail['Բնակելի տարածք']}
            </Typography>
          </div>
          <div className="CardColItem">
            <Typography className="Bold" component="h3">
              Կառույցի վիճակը
            </Typography>
            <Typography component="span">
              {detail['Վիճակ']}
            </Typography>
          </div>
          <div className="CardColItem">
            <Typography className="Bold" component="h3">
              Կառուցման ամսաթիվ
            </Typography>
            <Typography component="span">
              {detail['Ստեղծման ամսաթիվ']}
            </Typography>
          </div>
          <div className="CardColItem">
            <Typography className="Bold" component="h3">
              Վերանորոգման ամսաթիվ
            </Typography>
            <Typography component="span">
              {detail['Վերանորոգման ամսաթիվ']}
            </Typography>
          </div>
          <div className="CardColItem">
            <Typography className="Bold" component="h3">
              Փողոց
            </Typography>
            <Typography component="span">
              {detail['Փողոց']}
            </Typography>
          </div>
          <div className="CardColItem">
            <Typography className="Bold" component="h3">
              Հարկերի քանակ
            </Typography>
            <Typography component="span">
              {detail['Հարկերի քանակ']}
            </Typography>
          </div>
        </div>

        <div className="CardCol">
          <div className="CardColItem">
            <Typography className="Bold" component="h3">
              Ընտանիք
            </Typography>
            <Typography component="span">
              {detail['']}
            </Typography>
          </div>
          <div className="CardColItem">
            <Typography className="Bold" component="h3">
              Պատշգամբ
            </Typography>
            <Typography component="span">
              {detail['Պատշգամբ']}
            </Typography>
          </div>
          <div className="CardColItem">
            <Typography className="Bold" component="h3">
              Լողավազան
            </Typography>
            <Typography component="span">
              {detail['Լողավազան'] ? 'Առկա է' : 'Առկա չէ'}
            </Typography>
          </div>
          <div className="CardColItem">
            <Typography className="Bold" component="h3">
              Կահույք
            </Typography>
            <Typography component="span">
              {detail['Կահույք']}
            </Typography>
          </div>
          <div className="CardColItem">
            <Typography className="Bold" component="h3">
              Լուսաֆիկացում
            </Typography>
            <Typography component="span">
              {detail['Լուսաֆիկացված'] ? 'Առկա է' : 'Առկա չէ'}
            </Typography>
          </div>
          <div className="CardColItem">
            <Typography className="Bold" component="h3">
              Ջուր
            </Typography>
            <Typography component="span">
              {detail['Ջուր']}
            </Typography>
          </div>
          <div className="CardColItem">
            <Typography className="Bold" component="h3">
              Կենցաղային տեխնիկա
            </Typography>
            <Typography component="span">
              {detail['Կենցաղային տեխնիկա'] ? 'Առկա է' : 'Առկա չէ'}
            </Typography>
          </div>
        </div>
      </div>
      <div className="CardColItem Notes">
        <Typography className="Bold" component="h3">
          Նշումներ
        </Typography>
        <Typography component="span">
          {detail['Նշումներ']}
        </Typography>
      </div>
    </Card>
  </div>;
};

export default HousingDetails;
