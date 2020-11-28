import { UrlScraperQueries } from './urlscraper';
import { UserMutation, UserQueries, UserSubscription } from './user';

const rootResolver = {
  Query: {
    ...UserQueries,
    ...UrlScraperQueries
    // Add other queries here
  },
  Mutation: {
    ...UserMutation
    // Add other mutations here
  },
  Subscription: {
    ...UserSubscription
    // Add other subscriptions here
  }
};

export default rootResolver;
