
# Strapi CMS API configuration for a simple website

Defines Sections, Topics and Articles.

Articles constitute the core content. Articles can be assigned to 0-n Topics.
Topics can be assigned to 0-n Sections.

Additional data types: Categories and Snippets.

Stapi targeted version: 
- 2020 *v3.0.0-beta.17.8*
- 2024 *v3.6.8*


### Slug support (v3.0.0-beta.17.8 only)

Article and Topic require node-crc.

This package calculates a short code out of a string (article/topic id)
which then can be prefixed to a generated slug, so to make the slugs unique
when they are based on the same title.

[https://github.com/alexgorbatchev/node-crc](https://github.com/alexgorbatchev/node-crc)

#### Example:

> #### Article 1
title: Our team  
id: 1A2B3C4D5E6F7A8B  
slug: 12345-our-team

> #### Article 2
title: Our team  
id: B9A8F7E6D5C4B3A2  
slug: 67890-our-team


#### Usage:

- extract node-crc in /app/node_modules/
- include as `var crclib = require('node-crc');`


## Useful Links

- Strapi CMS:  
[https://strapi.io/](https://strapi.io/)
- Strapi Git:  
[https://github.com/strapi/strapi/](https://github.com/strapi/strapi/)
- Java client for a GraphQL Headless CMS based on the above configuration  
[https://github.com/trilobiet/graphqlweb](https://github.com/trilobiet/graphqlweb)