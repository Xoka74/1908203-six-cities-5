import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { AppRoute } from '../../const';
import { FavoriteAction } from '../../types/favorite-action';
import { memo } from 'react';

export type FavoriteCardProps = {
  offer: Offer;
  onFavoriteStatusChanged: (action: FavoriteAction) => void;
}

export function FavoriteCard({ offer, onFavoriteStatusChanged }: FavoriteCardProps) {
  const bookmarkedClassName = offer.isFavorite && 'place-card__bookmark-button--active';

  const link = AppRoute.Offer.replace(':id', offer.id);

  const offerTypeString = offer.type.charAt(0).toUpperCase() + offer.type.slice(1);

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={link} >
          <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place image" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${bookmarkedClassName} button`}
            onClick={() => onFavoriteStatusChanged({offerId: offer.id, status: !offer.isFavorite})}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">

            <span style={{ width: `${Math.round(offer.rating) * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={link}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offerTypeString}</p>
      </div>
    </article>
  );
}

export const MemoizedFavoriteCard = memo(FavoriteCard);
