'use client';

import Image from 'next/image';
import { ShopyLogo } from 'public/images';
import {
  Icon24DoorArrowRightOutline,
  Icon28ShoppingCartOutline,
} from '@vkontakte/icons';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function Header() {
  const router = usePathname();
  return (
    <div className="header__shop">
      <Link href="/" className="header__shop_logo">
        <Image
          src={ShopyLogo}
          className="header__shop_block__logo"
          width={40}
          height={40}
          alt="shopy_logo"
        />
        <h1>Shopy</h1>
      </Link>
      <div className="header__top-bar">
        <Link
          href="/"
          className={`header__top-bar_item ${
            router === '/' ? 'header__top-bar_item__active' : ''
          }`}
        >
          <div className="header__top-bar_text">Marketplace</div>
        </Link>
        <Link
          href="/collections"
          className={`header__top-bar_item ${
            router === '/collections' ? 'header__top-bar_item__active' : ''
          }`}
        >
          <div className="header__top-bar_text">
            Your Products
          </div>
        </Link>
      </div>
      <div className="header__shop_controllers">
        <Link
          href="/cart"
          className={`header__shop_controllers__item  ${
            router === '/cart'
              ? 'header__shop_controllers__item_active'
              : ''
          }`}
        >
          <Icon28ShoppingCartOutline width={34} height={34} />
          <span
            className={`header__shop_controllers__item__cart_notification   ${
              router === '/cart'
                ? 'header__shop_controllers__item__cart_notification_active'
                : ''
            }`}
          >
            3
          </span>
        </Link>
        <div className="header__shop_controllers__item">
          <Icon24DoorArrowRightOutline
            width={34}
            height={34}
          />
        </div>
      </div>
    </div>
  );
}
