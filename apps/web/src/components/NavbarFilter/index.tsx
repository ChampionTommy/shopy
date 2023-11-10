import { Poppup } from 'components/Poppup';
import { Icon16CancelCircle } from '@vkontakte/icons';

export function NavbarFilter() {
  return (
    <div className="navbar">
      <div className="navbar__poppup">
        <h3>12 results</h3>
        <Poppup />
      </div>
      <div className="navbar__filter">
        <h5>$400-$1500</h5>
        <Icon16CancelCircle color="#767676" />
      </div>
    </div>
  );
}
