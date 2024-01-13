import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Image({ src, ...rest }) {
  return (
    <LazyLoadImage
      {...rest}
      effect='blur'
      wrapperProps={{
        // If you need to, you can tweak the effect transition using the wrapper style.
        style: { transitionDelay: '1s' },
      }}
      src={src}
    />
  );
}

export default Image;
