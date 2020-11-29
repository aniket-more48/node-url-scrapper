import UrlScraperData from '../../models/urlscraper';
import { redisClient } from './../../../index';
import parseUrl from './../../../utility/opscraper';

/**
 * UrlScraper Queries
 */
const UrlScraperQueries = {
    getOgMetadata: async (parent, { url }, context) => {
        try {
            // If not authenticated throw error
            if (!context.isAuth) {
                throw new Error('Non Authenticated');
            }
            // try getting url data from cache
            const seachCache = await redisClient.getAsync(url);
            if (seachCache) {
                return JSON.parse(seachCache);
            } else { // else call the url scrapper
                const scrapeData = await parseUrl(url);
                const newScrapeData = new UrlScraperData({
                    url: scrapeData.requestUrl,
                    title: scrapeData.ogTitle,
                    description: scrapeData.ogDescription,
                    images: scrapeData.ogImage
                });
                // save parsed data to cache
                redisClient.set(url, JSON.stringify(newScrapeData));
                return newScrapeData;
            }
        } catch (err) {
            throw err;
        }
    }
};

export { UrlScraperQueries };
