'use strict';

/**
 * doll service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::doll.doll');
