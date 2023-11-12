import { Poppup } from 'components/Poppup';
import { Icon16CancelCircle } from '@vkontakte/icons';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/store';
import { resetPriceFilter } from 'redux/slice/Filter';

export function NavbarFilter({ countItems }: any) {
  const dispatch = useDispatch<AppDispatch>();

  const values = useSelector((state: RootState) => state.filter);

  const handleResetParams = () => {
    dispatch(resetPriceFilter());
  };

  return (
    <div className="navbar">
      <div className="navbar__poppup">
        <h3>{`${countItems} results`}</h3>
        <Poppup />
      </div>
      {values.isFrozen === true
        ? (
          <div className="navbar__filter">
            <h5>{`$${values.minPrice}-$${values.maxPrice}`}</h5>
            <span role="button" tabIndex={0} onClick={handleResetParams}>
              <Icon16CancelCircle color="#767676" />
            </span>
          </div>
        )
        : null}
    </div>
  );
}
