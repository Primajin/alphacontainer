import React, { useContext } from 'react';
import withStyles from 'react-jss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { getHomepageItems } from '../../actions/homepageAction';
import { Store } from '../../store';
import { backendUrl } from '../../constants';

const style = ({
  colors: { primary: primaryColor, secondary: secondaryColor }
}) => ({
  slide: {
    color: secondaryColor
  },
  video: {
    width: '100%'
  },
  wrapper: {
    padding: '0 50px',
    '& .slick-prev:before, .slick-next:before': {
      color: primaryColor
    }
  }
});

const HomepageComponent = ({ classes }) => {
  const [state, dispatch] = useContext(Store).homepage;

  const handleFetch = () => {
    getHomepageItems(dispatch);
  };

  const { loading, data, error } = state;
  const hasData = !!Object.keys(data).length;

  const settings = {
    autoplay: true,
    autoplaySpeed: 15000,
    dots: true,
    pauseOnHover: false
  };

  return (
    <>
      <h2>Loading: {loading ? 'yes...' : 'done'}</h2>
      <button onClick={handleFetch}>Fetch</button>
      {(hasData || error) && (
        <code>
          <pre>{JSON.stringify(state, null, 2)}</pre>
        </code>
      )}
      {hasData && parseInt(data.count) && (
        <div className={classes.wrapper}>
          <Slider {...settings}>
            {Object.keys(data.results).map(key => {
              const {
                fieldFallback,
                fieldLoop,
                fieldSubheadline,
                title
              } = data.results[key];
              return (
                <section className={classes.slide} key={key}>
                  <div
                    style={{
                      backgroundImage: `url(${backendUrl + fieldFallback})`
                    }}
                  >
                    <h1>{title}</h1>
                    <h2>{fieldSubheadline}</h2>
                    <video
                      autoPlay="autoplay"
                      className={classes.video}
                      loop
                      muted
                      preload="auto"
                      src={backendUrl + fieldLoop}
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </section>
              );
            })}
          </Slider>
        </div>
      )}
    </>
  );
};

export default withStyles(style)(HomepageComponent);
