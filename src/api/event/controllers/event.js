'use strict';

/**
 * event controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const moment = require('moment');

module.exports = createCoreController('api::event.event', ({ strapi }) => ({
  async find(ctx) {
    const entries = await strapi.entityService.findMany('api::event.event',{
      populate:['event_image_desktop','event_image_mobile','event_photos']
    });
    return entries;
  },

  async findBeforeCurrentDate(ctx) {
    const currentDate = moment().format('YYYY-MM-DD');
    const entries = await strapi.entityService.findMany('api::event.event', {
      populate:['event_image_desktop','event_image_mobile','event_photos'],
      filters: {
        date: {
          $lt: currentDate,
        },
      },
    });
    return entries;
  },

  async findAfterCurrentDate(ctx) {
    const currentDate = moment().format('YYYY-MM-DD');
    const entries = await strapi.entityService.findMany('api::event.event', {
      populate:['event_image_desktop','event_image_mobile','event_photos'],
      filters: {
        date: {
          $gte: currentDate,
        },
      },
    });
    return entries;
  },
}));
