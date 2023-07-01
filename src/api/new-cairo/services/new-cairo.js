'use strict';

/**
 * new-cairo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::new-cairo.new-cairo');
