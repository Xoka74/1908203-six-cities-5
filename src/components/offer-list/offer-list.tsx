import { FavoriteAction } from '../../types/favorite-action';
import { Offer } from '../../types/offer';
import { MemoizedOfferItem } from './offer-item';

export type OfferListProps = {
  offers: Offer[];
  className: string;
  onFavoriteStatusChanged: (action: FavoriteAction) => void;
  onMouseEnter?: (id: string) => void;
  onMouseLeave?: (id: string) => void;
}

export function OfferList({ offers, className, onFavoriteStatusChanged, onMouseEnter, onMouseLeave }: OfferListProps) {
  return (
    <div className={className}>
      {
        offers
          .map((offer) => (
            <MemoizedOfferItem
              key={offer.id}
              offer={offer}
              onFavoriteStatusChanged={onFavoriteStatusChanged}
              onMouseEnter={(id) => onMouseEnter?.(id)}
              onMouseLeave={(id) => onMouseLeave?.(id)}
            />)
          )
      }
    </div>
  );
}
