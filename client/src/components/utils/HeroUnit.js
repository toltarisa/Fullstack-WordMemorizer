import React from 'react';
import Typography from '@material-ui/core/Typography';

const HeroUnit = (props) => {
    return(
        <div className={props.classes.heroUnit}>
          <div className={props.classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
             Kelimelerim
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Sisteme eklediğin kelimeleri düzenleyebilir veya silebilirsin :)
            </Typography>
          </div>
        </div>
    )
}


export default HeroUnit;