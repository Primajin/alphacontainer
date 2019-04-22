import React, { useEffect, useContext } from 'react';
import withStyles from 'react-jss';
import MediaQuery from 'react-responsive';
import Slider from 'react-slick'; // 'react-slick/lib'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { backendUrl } from 'invariables';
import { getHomepageItems } from 'actions';
import { Store } from 'store';
import { breakpoints } from 'theme';
import HeaderComponent from 'components/molecules/header';

const style = ({ colors: { primary: primaryColor, background }, mediaQueries: { lg } }) => ({
  slideBackground: {
    alignItems: 'center',
    background: 'center center / cover no-repeat',
    display: 'flex',
    justifyContent: 'center',
    minHeight: 800, // TODO: temp / WIP
    position: 'relative',
    [lg]: {
      background: 'none!important'
    }
  },
  titleWrapper: {
    color: background,
    position: 'absolute',
    textAlign: 'center',
    textShadow: '-1px 1px 2px rgba(0,0,0,0.8)'
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

  // componentDidMount
  useEffect(() => {
    getHomepageItems(dispatch);
  }, []);

  const handleFetch = async () => {
    await getHomepageItems(dispatch);
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
      <HeaderComponent />
      <h2>Loading: {loading ? 'yes...' : 'done'}</h2>
      {(hasData || error) && (
        <code>
          <pre>{JSON.stringify(state, null, 2)}</pre>
        </code>
      )}
      {error && <button onClick={handleFetch}>Retry</button>}
      {hasData && parseInt(data.count) && (
        <div className={classes.wrapper}>
          <Slider {...settings}>
            {Object.keys(data.results).map(key => {
              const { fieldFallback, fieldLoop, fieldSubheadline, title } = data.results[key];
              return (
                <section key={key}>
                  <div
                    className={classes.slideBackground}
                    style={{
                      backgroundImage: `url(${backendUrl + fieldFallback})`
                    }}
                  >
                    <MediaQuery minWidth={breakpoints.lg}>
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
                    </MediaQuery>
                    <div className={classes.titleWrapper}>
                      <h1>{title}</h1>
                      <h2>{fieldSubheadline}</h2>
                    </div>
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
