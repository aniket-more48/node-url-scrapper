import mongoose from 'mongoose';

/**
 * Url Scraper Schema
 */
const urlScraperSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    url: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    images : [{
        url: {
            type: String,
            default: ''
          },
        width: {
            type: String,
            default: ''
          },
        height: {
            type: String,
            default: ''
          },
        type: {
            type: String,
            default: ''
          }
    }]
  },
  {
    timestamps: true
  }
);

export default mongoose.model('UrlScraperData', urlScraperSchema);
