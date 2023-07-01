'use strict';

/**
 * inquire-now service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::inquire-now.inquire-now');
