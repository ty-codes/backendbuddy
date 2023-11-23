import { DimmerWrapper } from './Dimmer.style';
import { useSelector } from 'react-redux';
import { PageLoader } from 'components';

const Dimmer = () => {
  const { show } = useSelector(({ dimmer }) => dimmer);

  return (
    <DimmerWrapper
      className="dimmer-wrapper"
      closeOnOuterClick={false}
      show={show}
    >
      <PageLoader />
    </DimmerWrapper>
  );
};

export default Dimmer;
