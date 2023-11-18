import { HandleStatusType } from '@types';
import Image from 'next/image';
import Link from 'next/link';
import { handleStatus } from 'utils';

export function ErrorInfoCard(status: HandleStatusType) {
  return (
    <div className="info-card">
      <div className="info-card_logo">
        <Image
          src={handleStatus(status)?.data.image || ''}
          alt="info-card__empty"
          width={206}
          height={206}
          className={`${status === 'empty' ? '' : 'info-card_logo__img'}`}
        />
      </div>
      <div className="info-card_title">
        <h1>
          {handleStatus(status)?.data.title}
        </h1>
      </div>
      <span className="info-card_subtitle">
        {handleStatus(status)?.data.subtitle}
      </span>
      {handleStatus(status)?.data && (
        <Link
          href={handleStatus(status)?.data.button.url}
          className="button button__default info-card_button"
        >
          {handleStatus(status)?.data.button.title}
        </Link>
      )}
    </div>
  );
}
