# 11ty-1587-pagination

This repo shows how you can use 11ty's [`pagination`](https://www.11ty.dev/docs/pagination/) feature in the front-matter to loop over a collection and dynamically create some archives.

The main /index.html archive page is generated from the ./src/pages/index.liquid file, which loops over the custom `blogRecentByTags` collection and displays 3 blog posts per page. The initial loop iteration over the `blogRecentByTags` collection will generate the /index.html page, while subsequent pages use the `permalink` key in the frontmatter to dynamically set the output file name to /1/index.html, /2/index.html; where /1/ and /2/ are the current value of `pagination.pageNumber`.

The paginated archive page blog posts are displayed using `{% for post in posts %}...{% endfor %}` loop, where `posts` is the current pagination `alias` value.
