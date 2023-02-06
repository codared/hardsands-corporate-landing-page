import { Order } from "modules/checkout/types";

export interface TrackOrderDetails extends Order {
  trackingId: string | number;
  orderedAt: string | null;
  delaysAt: string | null;
  delaysText: string | null;
  deliveredAt: string | null;
  dispatchedAt: string | null;
}
