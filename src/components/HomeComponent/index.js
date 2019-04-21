import React, { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { getHomepageItems } from '../../actions/homepageAction';
import { Store } from '../../store';
import { backendUrl } from '../../constants';

const HomepageComponent = () => {
  const [state, dispatch] = useContext(Store).homepage;

  const handleFetch = () => {
    getHomepageItems(dispatch);
  };

  const { loading, data, error } = state;
  const hasData = !!Object.keys(data).length;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
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
      {hasData && data.count && (
        <Slider {...settings}>
          {Object.keys(data.results).map(key => {
            const {
              fieldFallback,
              fieldLoop,
              fieldSubheadline,
              title
            } = data.results[key];
            return (
              <section key={key}>
                <div
                  style={{
                    backgroundImage: `url(${backendUrl + fieldFallback})`
                  }}
                >
                  <h1>{title}</h1>
                  <h2>{fieldSubheadline}</h2>
                  <video
                    muted
                    loop
                    preload="auto"
                    src={backendUrl + fieldLoop}
                    autoPlay="autoplay"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </section>
            );
          })}
        </Slider>
      )}
    </>
  );
};

export default HomepageComponent;
