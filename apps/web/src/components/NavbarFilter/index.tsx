import { Icon16CancelCircle } from '@vkontakte/icons';
import { useAppDispatch, useTypedSelector } from 'redux/store';
import { resetPriceFilter } from 'redux/slice/Filter';

export function NavbarFilter() {
  const dispatch = useAppDispatch();

  const values = useTypedSelector((state) => state.filter);

  const handleResetParams = () => {
    dispatch(resetPriceFilter());
  };

  return (
    <div className="navbar">
      <h3>Marketplace</h3>
      <ul>
        <li>
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
        </li>
      </ul>
    </div>
  );
}
